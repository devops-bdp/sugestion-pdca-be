"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const client_1 = require("../../prisma/generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const bcrypt_1 = require("bcrypt");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
class UserController {
    async getUserProfile(req, res) {
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
        }
        catch (error) {
            console.error("Get user profile error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getAllUserProfile(req, res) {
        try {
            const { page = 1, limit = 10, search, departement, role } = req.query;
            const skip = (Number(page) - 1) * Number(limit);
            const take = Number(limit);
            const where = {};
            if (search) {
                where.OR = [
                    { firstName: { contains: search, mode: "insensitive" } },
                    { lastName: { contains: search, mode: "insensitive" } },
                ];
            }
            if (departement) {
                where.departement = departement;
            }
            if (role) {
                where.role = role;
            }
            const totalUsers = await prisma.user.count({ where });
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
        }
        catch (error) {
            console.error("Get all users error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getGroupLeaderProfile(req, res) {
        try {
            const { departement } = req.query;
            const where = {
                role: "Group_Leader",
            };
            if (departement) {
                where.departement = departement;
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
        }
        catch (error) {
            console.error("Get Group Leaders error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getStaffandNonStaffProfile(req, res) {
        try {
            const { departement, posision } = req.query;
            const where = {
                role: {
                    in: ["Staff", "Non_Staff"],
                },
            };
            if (departement) {
                where.departement = departement;
            }
            if (posision) {
                where.posision = posision;
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
                        role: "asc",
                    },
                    {
                        departement: "asc",
                    },
                ],
            });
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
        }
        catch (error) {
            console.error("Get Staff and Non-Staff error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getUserById(req, res) {
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
        }
        catch (error) {
            console.error("Get user by ID error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async updateUserProfile(req, res) {
        try {
            const { id } = req.params;
            const { firstName, lastName, role, departement, posision } = req.body;
            const existingUser = await prisma.user.findUnique({
                where: { id },
            });
            if (!existingUser) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
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
        }
        catch (error) {
            console.error("Update user profile error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            const existingUser = await prisma.user.findUnique({
                where: { id },
            });
            if (!existingUser) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
            if (req.user?.id === id) {
                return res.status(400).json({
                    success: false,
                    message: "You cannot delete your own account",
                });
            }
            await prisma.user.delete({
                where: { id },
            });
            return res.status(200).json({
                success: true,
                message: "User deleted successfully",
            });
        }
        catch (error) {
            console.error("Delete user error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async updateMyProfile(req, res) {
        try {
            const userId = req.user?.id;
            if (!userId) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                });
            }
            const { currentPassword, newPassword } = req.body;
            if (!currentPassword || !newPassword) {
                return res.status(400).json({
                    success: false,
                    message: "Current password and new password are required",
                });
            }
            if (newPassword.length < 6) {
                return res.status(400).json({
                    success: false,
                    message: "New password must be at least 6 characters long",
                });
            }
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
            const isPasswordValid = await (0, bcrypt_1.compare)(currentPassword, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({
                    success: false,
                    message: "Current password is incorrect",
                });
            }
            const salt = await (0, bcrypt_1.genSalt)(10);
            const hashedPassword = await (0, bcrypt_1.hash)(newPassword, salt);
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
        }
        catch (error) {
            console.error("Update password error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
}
exports.UserController = UserController;
