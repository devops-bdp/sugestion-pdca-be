"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFormController = void 0;
const prisma_1 = require("../../prisma/generated/prisma");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new prisma_1.PrismaClient({ adapter });
class SubmitFormController {
    async createSuggestion(req, res) {
        try {
            const { judulIde, masalahYangDihadapi, uraianIde, ideProsesPerbaikan, hasilUraianProses, evaluasiIde, komentarAtasan, fotoSebelum, fotoSesudah, kriteriaSS, sifatPerbaikan, userId, noRegistSS, tanggalUsulan, hubungan, tanggalEfektif, } = req.body;
            if (!judulIde ||
                !masalahYangDihadapi ||
                !uraianIde ||
                !ideProsesPerbaikan ||
                !hasilUraianProses ||
                !evaluasiIde ||
                !kriteriaSS ||
                !sifatPerbaikan ||
                !userId) {
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                });
            }
            let parsedTanggalUsulan;
            let parsedTanggalEfektif;
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
            await prisma.suggestionHistory.create({
                data: {
                    suggestionId: suggestion.id,
                    statusIde: "DIAJUKAN",
                    changedBy: userId,
                },
            });
            return res.status(201).json({
                success: true,
                message: "Suggestion submitted successfully",
                data: suggestion,
            });
        }
        catch (error) {
            console.error("Error creating suggestion:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to submit suggestion",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getAllSuggestions(req, res) {
        try {
            const { statusIde, department, userId, kriteriaSS } = req.query;
            const userDepartment = req.user?.department;
            const userRole = req.user?.role;
            const userPermissionLevel = req.user?.permissionLevel;
            const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";
            let statusFilter = undefined;
            if (statusIde) {
                const statusArray = statusIde.split(',').map(s => s.trim());
                if (statusArray.length === 1) {
                    statusFilter = statusArray[0];
                }
                else if (statusArray.length > 1) {
                    statusFilter = { in: statusArray };
                }
            }
            const whereCondition = {
                ...(statusFilter && { statusIde: statusFilter }),
                ...(userId && { userId: userId }),
                ...(kriteriaSS && { kriteriaSS: kriteriaSS }),
            };
            if (!hasFullAccess && userDepartment && userDepartment !== "ALL_DEPT") {
                whereCondition.user = {
                    department: userDepartment,
                };
            }
            else if (department && !hasFullAccess) {
                whereCondition.user = {
                    department: department,
                };
            }
            else if (department && hasFullAccess) {
                whereCondition.user = {
                    department: department,
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
        }
        catch (error) {
            console.error("Error fetching suggestions:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch suggestions",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getNextRegistNumber(req, res) {
        try {
            const now = new Date();
            const currentMonth = now.getMonth() + 1;
            const currentYear = now.getFullYear();
            const romanNumerals = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
            const monthRoman = romanNumerals[currentMonth] || '';
            const currentMonthStart = new Date(currentYear, currentMonth - 1, 1);
            const currentMonthEnd = new Date(currentYear, currentMonth, 0, 23, 59, 59, 999);
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
            const suggestions = allSuggestions.filter((s) => {
                if (s.noRegistSS) {
                    const pattern = `/${monthRoman}/${currentYear}`;
                    return s.noRegistSS.includes(pattern);
                }
                return false;
            });
            let maxIndex = 0;
            suggestions.forEach((s) => {
                if (s.noRegistSS) {
                    const match = s.noRegistSS.match(/^(\d+)\//);
                    if (match) {
                        const index = parseInt(match[1], 10);
                        if (!isNaN(index) && index > maxIndex) {
                            maxIndex = index;
                        }
                    }
                }
            });
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
        }
        catch (error) {
            console.error("Error getting next registration number:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to get next registration number",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getSuggestionById(req, res) {
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
            const userRole = req.user?.role;
            const userPermissionLevel = req.user?.permissionLevel;
            const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";
            if (!hasFullAccess &&
                userDepartment &&
                userDepartment !== "ALL_DEPT" &&
                suggestion.user.department !== userDepartment) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden: You can only access suggestions from your department",
                });
            }
            return res.status(200).json({
                success: true,
                data: suggestion,
            });
        }
        catch (error) {
            console.error("Error fetching suggestion:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch suggestion",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async updateSuggestionStatus(req, res) {
        try {
            const { id } = req.params;
            const { statusIde, komentarAtasan } = req.body;
            const userDepartment = req.user?.department;
            if (!["DIAJUKAN", "APPROVE", "DINILAI"].includes(statusIde)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid status",
                });
            }
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
            const userRole = req.user?.role;
            const userPermissionLevel = req.user?.permissionLevel;
            const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";
            if (!hasFullAccess &&
                userDepartment &&
                userDepartment !== "ALL_DEPT" &&
                existingSuggestion.user.department !== userDepartment) {
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
                    changedBy: changedByUserId,
                },
            });
            return res.status(200).json({
                success: true,
                message: "Suggestion status updated successfully",
                data: suggestion,
            });
        }
        catch (error) {
            console.error("Error updating suggestion status:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to update suggestion status",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async updateSuggestion(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            const userDepartment = req.user?.department;
            delete updateData.id;
            delete updateData.userId;
            delete updateData.createdAt;
            if (updateData.tanggalUsulan) {
                const parsedDate = new Date(updateData.tanggalUsulan);
                if (!isNaN(parsedDate.getTime())) {
                    updateData.tanggalUsulan = parsedDate;
                }
                else {
                    delete updateData.tanggalUsulan;
                }
            }
            if (updateData.tanggalEfektif) {
                const parsedDate = new Date(updateData.tanggalEfektif);
                if (!isNaN(parsedDate.getTime())) {
                    updateData.tanggalEfektif = parsedDate;
                }
                else {
                    delete updateData.tanggalEfektif;
                }
            }
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
            const userRole = req.user?.role;
            const userPermissionLevel = req.user?.permissionLevel;
            const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";
            if (!hasFullAccess &&
                userDepartment &&
                userDepartment !== "ALL_DEPT" &&
                existingSuggestion.user.department !== userDepartment) {
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
        }
        catch (error) {
            console.error("Error updating suggestion:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to update suggestion",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async deleteSuggestion(req, res) {
        try {
            const { id } = req.params;
            const userDepartment = req.user?.department;
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
            const userRole = req.user?.role;
            const userPermissionLevel = req.user?.permissionLevel;
            const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";
            if (!hasFullAccess &&
                userDepartment &&
                userDepartment !== "ALL_DEPT" &&
                existingSuggestion.user.department !== userDepartment) {
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
        }
        catch (error) {
            console.error("Error deleting suggestion:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to delete suggestion",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async submitPenilaian(req, res) {
        try {
            const { suggestionId, penilaianKriteria, skorKriteria, komentarPenilaian, } = req.body;
            const userDepartment = req.user?.department;
            if (!suggestionId || !penilaianKriteria || skorKriteria === undefined) {
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                });
            }
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
            const userRole = req.user?.role;
            const userPermissionLevel = req.user?.permissionLevel;
            const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";
            if (!hasFullAccess &&
                userDepartment &&
                userDepartment !== "ALL_DEPT" &&
                existingSuggestion.user.department !== userDepartment) {
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
            await prisma.suggestion.update({
                where: { id: suggestionId },
                data: { statusIde: "DINILAI" },
            });
            const existingHistory = await prisma.suggestionHistory.findFirst({
                where: {
                    suggestionId,
                    statusIde: "DINILAI",
                },
            });
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
        }
        catch (error) {
            console.error("Error submitting penilaian:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to submit penilaian",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getStatistics(req, res) {
        try {
            const { userId, department } = req.query;
            const userDepartment = req.user?.department;
            const whereCondition = {};
            if (userId)
                whereCondition.userId = userId;
            const userRole = req.user?.role;
            const userPermissionLevel = req.user?.permissionLevel;
            const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";
            if (!hasFullAccess && userDepartment && userDepartment !== "ALL_DEPT") {
                whereCondition.user = {
                    department: userDepartment,
                };
            }
            else if (department && !hasFullAccess) {
                whereCondition.user = {
                    department: department,
                };
            }
            else if (department && hasFullAccess) {
                whereCondition.user = {
                    department: department,
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
        }
        catch (error) {
            console.error("Error fetching statistics:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch statistics",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async submitMultiplePenilaian(req, res) {
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
            for (const penilaian of penilaianList) {
                if (!penilaian.penilaianKriteria || penilaian.skorKriteria === undefined) {
                    return res.status(400).json({
                        success: false,
                        message: "Each penilaian must have penilaianKriteria and skorKriteria",
                    });
                }
            }
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
            const userRole = req.user?.role;
            const userPermissionLevel = req.user?.permissionLevel;
            const hasFullAccess = userRole === "Super_Admin" || userPermissionLevel === "FULL_ACCESS";
            if (!hasFullAccess &&
                userDepartment &&
                userDepartment !== "ALL_DEPT" &&
                existingSuggestion.user.department !== userDepartment) {
                return res.status(403).json({
                    success: false,
                    message: "Forbidden: You can only evaluate suggestions from your department",
                });
            }
            await prisma.formPenilaian.deleteMany({
                where: { suggestionId },
            });
            const createdPenilaian = await prisma.$transaction(penilaianList.map((penilaian) => prisma.formPenilaian.create({
                data: {
                    suggestionId,
                    penilaianKriteria: penilaian.penilaianKriteria,
                    skorKriteria: penilaian.skorKriteria,
                    komentarPenilaian: penilaian.komentarPenilaian || null,
                },
            })));
            await prisma.suggestion.update({
                where: { id: suggestionId },
                data: { statusIde: "DINILAI" },
            });
            const existingHistory = await prisma.suggestionHistory.findFirst({
                where: {
                    suggestionId,
                    statusIde: "DINILAI",
                },
            });
            if (!existingHistory) {
                await prisma.suggestionHistory.create({
                    data: {
                        suggestionId,
                        statusIde: "DINILAI",
                        changedBy: changedByUserId || null,
                    },
                });
            }
            else if (existingHistory.changedBy !== changedByUserId) {
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
        }
        catch (error) {
            console.error("Error submitting multiple penilaian:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to submit penilaian",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
}
exports.SubmitFormController = SubmitFormController;
