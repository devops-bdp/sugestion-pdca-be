import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export class SubmitFormController {
  // Submit a new suggestion
  async createSuggestion(req: Request, res: Response) {
    try {
      const {
        judulIde,
        masalahYangDihadapi,
        uraianIde,
        ideProsesPerbaikan,
        hasilUraianProses,
        evaluasiIde,
        komentarAtasan,
        fotoSebelum,
        fotoSesudah,
        kriteriaSS,
        sifatPerbaikan,
        userId,
        noRegistSS,
        tanggalUsulan,
        hubungan,
        tanggalEfektif,
      } = req.body;

      // Validate required fields
      if (
        !judulIde ||
        !masalahYangDihadapi ||
        !uraianIde ||
        !ideProsesPerbaikan ||
        !hasilUraianProses ||
        !evaluasiIde ||
        !kriteriaSS ||
        !sifatPerbaikan ||
        !userId
      ) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      // Parse tanggalUsulan and tanggalEfektif if provided
      let parsedTanggalUsulan: Date | undefined;
      let parsedTanggalEfektif: Date | undefined;
      
      if (tanggalUsulan) {
        parsedTanggalUsulan = new Date(tanggalUsulan);
        if (isNaN(parsedTanggalUsulan.getTime())) {
          return res.status(400).json({
            success: false,
            message: "Invalid tanggalUsulan format",
          });
        }
      }
      
      if (tanggalEfektif) {
        parsedTanggalEfektif = new Date(tanggalEfektif);
        if (isNaN(parsedTanggalEfektif.getTime())) {
          return res.status(400).json({
            success: false,
            message: "Invalid tanggalEfektif format",
          });
        }
      }

      // Create suggestion
      const suggestion = await prisma.suggestion.create({
        data: {
          judulIde,
          masalahYangDihadapi,
          uraianIde,
          ideProsesPerbaikan,
          hasilUraianProses,
          evaluasiIde,
          komentarAtasan,
          fotoSebelum,
          fotoSesudah,
          kriteriaSS,
          sifatPerbaikan,
          userId,
          statusIde: "DIAJUKAN",
          noRegistSS: noRegistSS || null,
          tanggalUsulan: parsedTanggalUsulan || null,
          hubungan: hubungan || null,
          tanggalEfektif: parsedTanggalEfektif || null,
        },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              nrp: true,
              department: true,
              position: true,
            },
          },
        },
      });

      // Create history record with user who submitted
      await prisma.suggestionHistory.create({
        data: {
          suggestionId: suggestion.id,
          statusIde: "DIAJUKAN",
          changedBy: userId, // User who submitted the suggestion
        },
      });

      return res.status(201).json({
        success: true,
        message: "Suggestion submitted successfully",
        data: suggestion,
      });
    } catch (error) {
      console.error("Error creating suggestion:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to submit suggestion",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get all suggestions with filters
  async getAllSuggestions(req: Request, res: Response) {
    try {
      const { statusIde, department, userId, kriteriaSS } = req.query;
      const userDepartment = req.user?.department;
      const userRole = req.user?.role;
      const userPermissionLevel = req.user?.permissionLevel;

      // Check if user has full access (Super Admin or FULL_ACCESS permission)
      const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";

      // Build where condition with department filtering
      const whereCondition: any = {
        ...(statusIde && { statusIde: statusIde as any }),
        ...(userId && { userId: userId as string }),
        ...(kriteriaSS && { kriteriaSS: kriteriaSS as any }),
      };

      // Department filtering: only show suggestions from same department (unless ALL_DEPT or has full access)
      if (!hasFullAccess && userDepartment && userDepartment !== "ALL_DEPT") {
        // User can only see suggestions from their own department
        whereCondition.user = {
          department: userDepartment as any,
        };
      } else if (department && !hasFullAccess) {
        // If user is ALL_DEPT, they can filter by any department
        whereCondition.user = {
          department: department as any,
        };
      } else if (department && hasFullAccess) {
        // Super Admin or FULL_ACCESS can filter by department if specified
        whereCondition.user = {
          department: department as any,
        };
      }

      const suggestions = await prisma.suggestion.findMany({
        where: whereCondition,
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              nrp: true,
              department: true,
              position: true,
              role: true,
            },
          },
          penilaian: true,
          history: {
            orderBy: {
              changedAt: "desc",
            },
            include: {
              user: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                  nrp: true,
                },
              },
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        count: suggestions.length,
        data: suggestions,
      });
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch suggestions",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get next registration number (global, not per user)
  async getNextRegistNumber(req: Request, res: Response) {
    try {
      const now = new Date();
      const currentMonth = now.getMonth() + 1; // 1-12
      const currentYear = now.getFullYear();
      
      // Convert month to Roman numeral
      const romanNumerals = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
      const monthRoman = romanNumerals[currentMonth] || '';
      
      // Get ALL suggestions from current month and year (GLOBAL, no user/department filter)
      // This ensures sequential numbering across all users
      const currentMonthStart = new Date(currentYear, currentMonth - 1, 1);
      const currentMonthEnd = new Date(currentYear, currentMonth, 0, 23, 59, 59, 999);
      
      // Get all suggestions from current month/year - GLOBAL, no filters
      const allSuggestions = await prisma.suggestion.findMany({
        where: {
          createdAt: {
            gte: currentMonthStart,
            lte: currentMonthEnd,
          },
        },
        select: {
          noRegistSS: true,
          createdAt: true,
        },
      });
      
      // Filter by noRegistSS pattern to ensure we only count suggestions with matching month/year
      const suggestions = allSuggestions.filter((s) => {
        if (s.noRegistSS) {
          // Check if noRegistSS matches current month/year pattern
          return s.noRegistSS.includes(`/${monthRoman}/${currentYear}`);
        }
        // If no noRegistSS, use createdAt as fallback
        return true;
      });
      
      // Find the highest index number
      let maxIndex = 0;
      suggestions.forEach((s) => {
        if (s.noRegistSS) {
          const match = s.noRegistSS.match(/^(\d+)\//);
          if (match) {
            const index = parseInt(match[1]);
            if (index > maxIndex) {
              maxIndex = index;
            }
          }
        }
      });
      
      // Generate next index (pad with zero)
      const nextIndex = String(maxIndex + 1).padStart(2, '0');
      const nextRegistNumber = `${nextIndex}/SS-PDCA/${monthRoman}/${currentYear}`;
      
      return res.status(200).json({
        success: true,
        data: {
          nextRegistNumber,
          currentMonth,
          currentYear,
          monthRoman,
        },
      });
    } catch (error) {
      console.error("Error getting next registration number:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to get next registration number",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get single suggestion by ID
  async getSuggestionById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userDepartment = req.user?.department;

      const suggestion = await prisma.suggestion.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              nrp: true,
              department: true,
              position: true,
              role: true,
            },
          },
          penilaian: {
            orderBy: {
              createdAt: "desc",
            },
          },
          history: {
            orderBy: {
              changedAt: "desc",
            },
            include: {
              user: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                  nrp: true,
                },
              },
            },
          },
        },
      });

      if (!suggestion) {
        return res.status(404).json({
          success: false,
          message: "Suggestion not found",
        });
      }

      // Check department access: user must be from same department, ALL_DEPT, or have full access
      const userRole = req.user?.role;
      const userPermissionLevel = req.user?.permissionLevel;
      const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";

      if (
        !hasFullAccess &&
        userDepartment &&
        userDepartment !== "ALL_DEPT" &&
        suggestion.user.department !== userDepartment
      ) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You can only access suggestions from your department",
        });
      }

      return res.status(200).json({
        success: true,
        data: suggestion,
      });
    } catch (error) {
      console.error("Error fetching suggestion:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch suggestion",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Update suggestion status (Approve/Score)
  async updateSuggestionStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { statusIde, komentarAtasan } = req.body;
      const userDepartment = req.user?.department;

      // Validate status
      if (!["DIAJUKAN", "APPROVE", "DINILAI"].includes(statusIde)) {
        return res.status(400).json({
          success: false,
          message: "Invalid status",
        });
      }

      // Check if suggestion exists and get user department
      const existingSuggestion = await prisma.suggestion.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              department: true,
            },
          },
        },
      });

      if (!existingSuggestion) {
        return res.status(404).json({
          success: false,
          message: "Suggestion not found",
        });
      }

      // Check department access: user must be from same department, ALL_DEPT, or have full access
      const userRole = req.user?.role;
      const userPermissionLevel = req.user?.permissionLevel;
      const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";

      if (
        !hasFullAccess &&
        userDepartment &&
        userDepartment !== "ALL_DEPT" &&
        existingSuggestion.user.department !== userDepartment
      ) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You can only approve suggestions from your department",
        });
      }

      const suggestion = await prisma.suggestion.update({
        where: { id },
        data: {
          statusIde,
          ...(komentarAtasan && { komentarAtasan }),
        },
        include: {
          user: true,
        },
      });

      // Create history record with user who made the change
      const changedByUserId = req.user?.id;
      if (!changedByUserId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized: User not authenticated",
        });
      }

      await prisma.suggestionHistory.create({
        data: {
          suggestionId: id,
          statusIde,
          changedBy: changedByUserId, // User who approved/evaluated
        },
      });

      return res.status(200).json({
        success: true,
        message: "Suggestion status updated successfully",
        data: suggestion,
      });
    } catch (error) {
      console.error("Error updating suggestion status:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to update suggestion status",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Update suggestion
  async updateSuggestion(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const userDepartment = req.user?.department;

      // Remove fields that shouldn't be updated directly
      delete updateData.id;
      delete updateData.userId;
      delete updateData.createdAt;

      // Parse tanggalUsulan and tanggalEfektif if provided
      if (updateData.tanggalUsulan) {
        const parsedDate = new Date(updateData.tanggalUsulan);
        if (!isNaN(parsedDate.getTime())) {
          updateData.tanggalUsulan = parsedDate;
        } else {
          delete updateData.tanggalUsulan;
        }
      }
      
      if (updateData.tanggalEfektif) {
        const parsedDate = new Date(updateData.tanggalEfektif);
        if (!isNaN(parsedDate.getTime())) {
          updateData.tanggalEfektif = parsedDate;
        } else {
          delete updateData.tanggalEfektif;
        }
      }

      // Check if suggestion exists and get user department
      const existingSuggestion = await prisma.suggestion.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              department: true,
            },
          },
        },
      });

      if (!existingSuggestion) {
        return res.status(404).json({
          success: false,
          message: "Suggestion not found",
        });
      }

      // Check department access: user must be from same department, ALL_DEPT, or have full access
      const userRole = req.user?.role;
      const userPermissionLevel = req.user?.permissionLevel;
      const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";

      if (
        !hasFullAccess &&
        userDepartment &&
        userDepartment !== "ALL_DEPT" &&
        existingSuggestion.user.department !== userDepartment
      ) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You can only update suggestions from your department",
        });
      }

      const suggestion = await prisma.suggestion.update({
        where: { id },
        data: updateData,
        include: {
          user: true,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Suggestion updated successfully",
        data: suggestion,
      });
    } catch (error) {
      console.error("Error updating suggestion:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to update suggestion",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Delete suggestion
  async deleteSuggestion(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const userDepartment = req.user?.department;

      // Check if suggestion exists and get user department
      const existingSuggestion = await prisma.suggestion.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              department: true,
            },
          },
        },
      });

      if (!existingSuggestion) {
        return res.status(404).json({
          success: false,
          message: "Suggestion not found",
        });
      }

      // Check department access: user must be from same department, ALL_DEPT, or have full access
      const userRole = req.user?.role;
      const userPermissionLevel = req.user?.permissionLevel;
      const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";

      if (
        !hasFullAccess &&
        userDepartment &&
        userDepartment !== "ALL_DEPT" &&
        existingSuggestion.user.department !== userDepartment
      ) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You can only delete suggestions from your department",
        });
      }

      await prisma.suggestion.delete({
        where: { id },
      });

      return res.status(200).json({
        success: true,
        message: "Suggestion deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting suggestion:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to delete suggestion",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Submit scoring/evaluation
  async submitPenilaian(req: Request, res: Response) {
    try {
      const {
        suggestionId,
        penilaianKriteria,
        skorKriteria,
        komentarPenilaian,
      } = req.body;
      const userDepartment = req.user?.department;

      if (!suggestionId || !penilaianKriteria || skorKriteria === undefined) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      // Check if suggestion exists and get user department
      const existingSuggestion = await prisma.suggestion.findUnique({
        where: { id: suggestionId },
        include: {
          user: {
            select: {
              department: true,
            },
          },
        },
      });

      if (!existingSuggestion) {
        return res.status(404).json({
          success: false,
          message: "Suggestion not found",
        });
      }

      // Check department access: user must be from same department, ALL_DEPT, or have full access
      const userRole = req.user?.role;
      const userPermissionLevel = req.user?.permissionLevel;
      const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";

      if (
        !hasFullAccess &&
        userDepartment &&
        userDepartment !== "ALL_DEPT" &&
        existingSuggestion.user.department !== userDepartment
      ) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You can only evaluate suggestions from your department",
        });
      }

      const penilaian = await prisma.formPenilaian.create({
        data: {
          suggestionId,
          penilaianKriteria,
          skorKriteria,
          komentarPenilaian,
        },
        include: {
          suggestion: true,
        },
      });

      // Update suggestion status to DINILAI
      await prisma.suggestion.update({
        where: { id: suggestionId },
        data: { statusIde: "DINILAI" },
      });

      // Check if history with DINILAI status already exists for this suggestion
      const existingHistory = await prisma.suggestionHistory.findFirst({
        where: {
          suggestionId,
          statusIde: "DINILAI",
        },
      });

      // Only create history if it doesn't exist yet
      if (!existingHistory) {
        const changedByUserId = req.user?.id;
        await prisma.suggestionHistory.create({
          data: {
            suggestionId,
            statusIde: "DINILAI",
            changedBy: changedByUserId || null,
          },
        });
      }

      return res.status(201).json({
        success: true,
        message: "Penilaian submitted successfully",
        data: penilaian,
      });
    } catch (error) {
      console.error("Error submitting penilaian:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to submit penilaian",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get statistics
  async getStatistics(req: Request, res: Response) {
    try {
      const { userId, department } = req.query;
      const userDepartment = req.user?.department;

      const whereCondition: any = {};
      if (userId) whereCondition.userId = userId;

      // Check if user has full access (Super Admin or FULL_ACCESS permission)
      const userRole = req.user?.role;
      const userPermissionLevel = req.user?.permissionLevel;
      const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";

      // Department filtering: only show statistics from same department (unless ALL_DEPT or has full access)
      if (!hasFullAccess && userDepartment && userDepartment !== "ALL_DEPT") {
        // User can only see statistics from their own department
        whereCondition.user = {
          department: userDepartment as any,
        };
      } else if (department && !hasFullAccess) {
        // If user is ALL_DEPT, they can filter by any department
        whereCondition.user = {
          department: department as any,
        };
      } else if (department && hasFullAccess) {
        // Super Admin or FULL_ACCESS can filter by department if specified
        whereCondition.user = {
          department: department as any,
        };
      }

      const [total, diajukan, approved, dinilai] = await Promise.all([
        prisma.suggestion.count({ where: whereCondition }),
        prisma.suggestion.count({
          where: { ...whereCondition, statusIde: "DIAJUKAN" },
        }),
        prisma.suggestion.count({
          where: { ...whereCondition, statusIde: "APPROVE" },
        }),
        prisma.suggestion.count({
          where: { ...whereCondition, statusIde: "DINILAI" },
        }),
      ]);

      return res.status(200).json({
        success: true,
        data: {
          total,
          diajukan,
          approved,
          dinilai,
        },
      });
    } catch (error) {
      console.error("Error fetching statistics:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch statistics",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Submit multiple penilaian at once (for scoring completion)
  async submitMultiplePenilaian(req: Request, res: Response) {
    try {
      const { suggestionId, penilaianList } = req.body;
      const userDepartment = req.user?.department;
      const changedByUserId = req.user?.id;

      if (!suggestionId || !Array.isArray(penilaianList) || penilaianList.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields: suggestionId and penilaianList (array)",
        });
      }

      // Validate each penilaian item
      for (const penilaian of penilaianList) {
        if (!penilaian.penilaianKriteria || penilaian.skorKriteria === undefined) {
          return res.status(400).json({
            success: false,
            message: "Each penilaian must have penilaianKriteria and skorKriteria",
          });
        }
      }

      // Check if suggestion exists and get user department
      const existingSuggestion = await prisma.suggestion.findUnique({
        where: { id: suggestionId },
        include: {
          user: {
            select: {
              department: true,
            },
          },
        },
      });

      if (!existingSuggestion) {
        return res.status(404).json({
          success: false,
          message: "Suggestion not found",
        });
      }

      // Check department access: user must be from same department, ALL_DEPT, or have full access
      const userRole = req.user?.role;
      const userPermissionLevel = req.user?.permissionLevel;
      const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";

      if (
        !hasFullAccess &&
        userDepartment &&
        userDepartment !== "ALL_DEPT" &&
        existingSuggestion.user.department !== userDepartment
      ) {
        return res.status(403).json({
          success: false,
          message: "Forbidden: You can only evaluate suggestions from your department",
        });
      }

      // Delete existing penilaian for this suggestion to avoid duplicates
      await prisma.formPenilaian.deleteMany({
        where: { suggestionId },
      });

      // Create all penilaian records
      const createdPenilaian = await prisma.$transaction(
        penilaianList.map((penilaian) =>
          prisma.formPenilaian.create({
            data: {
              suggestionId,
              penilaianKriteria: penilaian.penilaianKriteria,
              skorKriteria: penilaian.skorKriteria,
              komentarPenilaian: penilaian.komentarPenilaian || null,
            },
          })
        )
      );

      // Update suggestion status to DINILAI
      await prisma.suggestion.update({
        where: { id: suggestionId },
        data: { statusIde: "DINILAI" },
      });

      // Check if history with DINILAI status already exists for this suggestion
      const existingHistory = await prisma.suggestionHistory.findFirst({
        where: {
          suggestionId,
          statusIde: "DINILAI",
        },
      });

      // Only create history if it doesn't exist yet, or update existing one
      if (!existingHistory) {
        await prisma.suggestionHistory.create({
          data: {
            suggestionId,
            statusIde: "DINILAI",
            changedBy: changedByUserId || null,
          },
        });
      } else if (existingHistory.changedBy !== changedByUserId) {
        // Update changedBy if different user is submitting
        await prisma.suggestionHistory.update({
          where: { id: existingHistory.id },
          data: {
            changedBy: changedByUserId || null,
          },
        });
      }

      return res.status(201).json({
        success: true,
        message: "All penilaian submitted successfully",
        data: createdPenilaian,
      });
    } catch (error) {
      console.error("Error submitting multiple penilaian:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to submit penilaian",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
}
