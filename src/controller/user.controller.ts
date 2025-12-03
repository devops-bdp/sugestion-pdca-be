import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { genSalt, hash, compare } from "bcrypt";


const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export class UserController {
  // Get current user's profile (from JWT token)
  async getUserProfile(req: Request, res: Response) {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          nrp: true,
          role: true,
          departement: true,
          posision: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User profile retrieved successfully",
        data: user,
      });
    } catch (error) {
      console.error("Get user profile error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get all users (Admin only)
  async getAllUserProfile(req: Request, res: Response) {
    try {
      const { page = 1, limit = 10, search, departement, role } = req.query;

      const skip = (Number(page) - 1) * Number(limit);
      const take = Number(limit);

      // Build where clause for filtering
      const where: any = {};

      if (search) {
        where.OR = [
          { firstName: { contains: search as string, mode: "insensitive" } },
          { lastName: { contains: search as string, mode: "insensitive" } },
        ];
      }

      if (departement) {
        where.departement = departement as string;
      }

      if (role) {
        where.role = role as string;
      }

      // Get total count for pagination
      const totalUsers = await prisma.user.count({ where });

      // Get users with pagination
      const users = await prisma.user.findMany({
        where,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          nrp: true,
          role: true,
          departement: true,
          posision: true,
          createdAt: true,
          updatedAt: true,
        },
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
      });

      return res.status(200).json({
        success: true,
        message: "All users retrieved successfully",
        data: users,
        pagination: {
          total: totalUsers,
          page: Number(page),
          limit: Number(limit),
          totalPages: Math.ceil(totalUsers / take),
        },
      });
    } catch (error) {
      console.error("Get all users error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get all Group Leaders
  async getGroupLeaderProfile(req: Request, res: Response) {
    try {
      const { departement } = req.query;

      const where: any = {
        role: "Group_Leader",
      };

      // Filter by department if provided
      if (departement) {
        where.departement = departement as string;
      }

      const groupLeaders = await prisma.user.findMany({
        where,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          nrp: true,
          role: true,
          departement: true,
          posision: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          departement: "asc",
        },
      });

      return res.status(200).json({
        success: true,
        message: "Group Leaders retrieved successfully",
        data: groupLeaders,
        count: groupLeaders.length,
      });
    } catch (error) {
      console.error("Get Group Leaders error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Get all Staff and Non-Staff users
  async getStaffandNonStaffProfile(req: Request, res: Response) {
    try {
      const { departement, posision } = req.query;

      const where: any = {
        role: {
          in: ["Staff", "Non_Staff"],
        },
      };

      // Filter by department if provided
      if (departement) {
        where.departement = departement as string;
      }

      // Filter by position if provided
      if (posision) {
        where.posision = posision as string;
      }

      const staffUsers = await prisma.user.findMany({
        where,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          nrp: true,
          role: true,
          departement: true,
          posision: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: [
          {
            role: "asc", // Non_Staff first, then Staff
          },
          {
            departement: "asc",
          },
        ],
      });

      // Group by role for better organization
      const grouped = {
        Non_Staff: staffUsers.filter((user) => user.role === "Non_Staff"),
        Staff: staffUsers.filter((user) => user.role === "Staff"),
      };

      return res.status(200).json({
        success: true,
        message: "Staff and Non-Staff users retrieved successfully",
        data: staffUsers,
        grouped,
        count: {
          total: staffUsers.length,
          Non_Staff: grouped.Non_Staff.length,
          Staff: grouped.Staff.length,
        },
      });
    } catch (error) {
      console.error("Get Staff and Non-Staff error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Bonus: Get user by ID (for admins to view specific user details)
  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          nrp: true,
          role: true,
          departement: true,
          posision: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).json({
        success: true,
        message: "User retrieved successfully",
        data: user,
      });
    } catch (error) {
      console.error("Get user by ID error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Bonus: Update user profile
  async updateUserProfile(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { firstName, lastName, role, departement, posision } = req.body;

      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { id },
      });

      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Update user
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          ...(firstName && { firstName }),
          ...(lastName && { lastName }),
          ...(role && { role }),
          ...(departement && { departement }),
          ...(posision && { posision }),
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          nrp: true,
          role: true,
          departement: true,
          posision: true,
          updatedAt: true,
        },
      });

      return res.status(200).json({
        success: true,
        message: "User profile updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      console.error("Update user profile error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  // Bonus: Delete user
  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;

      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { id },
      });

      if (!existingUser) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Prevent deleting yourself
      if (req.user?.id === id) {
        return res.status(400).json({
          success: false,
          message: "You cannot delete your own account",
        });
      }

      // Delete user
      await prisma.user.delete({
        where: { id },
      });

      return res.status(200).json({
        success: true,
        message: "User deleted successfully",
      });
    } catch (error) {
      console.error("Delete user error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }
  // Update current user's own profile (password only)
async updateMyProfile(req: Request, res: Response) {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { currentPassword, newPassword } = req.body;

    // Validation
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Current password and new password are required",
      });
    }

    // Check if new password is strong enough (optional)
    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 6 characters long",
      });
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Verify current password
    const isPasswordValid = await compare(currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect",
      });
    }

    // Hash new password
    const salt = await genSalt(10);
    const hashedPassword = await hash(newPassword, salt);

    // Update password
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        nrp: true,
        role: true,
        departement: true,
        posision: true,
        updatedAt: true,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Update password error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
}