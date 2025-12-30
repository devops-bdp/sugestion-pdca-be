"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client_1 = require("../../prisma/generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
BigInt.prototype.toJSON = function () {
    return this.toString();
};
class AuthController {
    async register(req, res) {
        try {
            const { firstName, lastName, nrp, role, department, position, password } = req.body;
            if (!firstName ||
                !lastName ||
                !nrp ||
                !role ||
                !department ||
                !position ||
                !password) {
                return res.status(400).json({
                    success: false,
                    message: "All fields are required",
                });
            }
            const existingNRP = await prisma.user.findFirst({
                where: { nrp: BigInt(nrp) },
            });
            if (existingNRP) {
                return res.status(400).json({
                    success: false,
                    message: "User with this NRP already exists",
                });
            }
            const salt = await (0, bcrypt_1.genSalt)(10);
            const hashedPassword = await (0, bcrypt_1.hash)(password, salt);
            let defaultPermissionLevel = "SUBMITTER";
            if (role === "Staff" || role === "Non_Staff") {
                defaultPermissionLevel = "SUBMITTER";
            }
            const permissionLevel = req.body.permissionLevel || defaultPermissionLevel;
            const newUser = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    nrp: BigInt(nrp),
                    role,
                    permissionLevel: permissionLevel,
                    department,
                    position,
                    password: hashedPassword,
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    nrp: true,
                    role: true,
                    permissionLevel: true,
                    department: true,
                    position: true,
                    createdAt: true,
                },
            });
            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: newUser,
            });
        }
        catch (error) {
            console.error("Register error:", error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async login(req, res) {
        const { nrp, password } = req.body;
        try {
            if (!nrp || !password) {
                return res
                    .status(400)
                    .json({ message: "nrp and password are required" });
            }
            const user = await prisma.user.findFirst({
                where: { nrp: BigInt(nrp) },
            });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const isPasswordValid = await (0, bcrypt_1.compare)(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid credentials" });
            }
            const token = (0, jsonwebtoken_1.sign)({
                id: user.id,
                nrp: user.nrp.toString(),
                role: user.role,
                department: user.department,
                position: user.position,
            }, process.env.JWT_SECRET, {
                expiresIn: "1h",
            });
            return res.status(200).json({
                message: "Login successful",
                token,
                user: {
                    id: user.id,
                    nrp: user.nrp,
                    name: `${user.firstName} ${user.lastName}`,
                    role: user.role,
                    permissionLevel: user.permissionLevel,
                    department: user.department,
                    position: user.position,
                },
            });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    }
    async updatePassword(req, res) {
        try {
            const { userId, currentPassword, newPassword } = req.body;
            if (!userId || !newPassword) {
                return res.status(400).json({
                    success: false,
                    message: "User ID and new password are required",
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
            if (currentPassword) {
                const isPasswordValid = await (0, bcrypt_1.compare)(currentPassword, user.password);
                if (!isPasswordValid) {
                    return res.status(401).json({
                        success: false,
                        message: "Current password is incorrect",
                    });
                }
            }
            const salt = await (0, bcrypt_1.genSalt)(10);
            const hashedPassword = await (0, bcrypt_1.hash)(newPassword, salt);
            await prisma.user.update({
                where: { id: userId },
                data: { password: hashedPassword },
            });
            return res.status(200).json({
                success: true,
                message: "Password updated successfully",
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
exports.AuthController = AuthController;
