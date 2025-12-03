"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDepartment = exports.verifyRole = exports.verifyUser = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const client_1 = require("../../prisma/generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new client_1.PrismaClient({ adapter });
const verifyUser = async (req, res, next) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "No token provided",
            });
        }
        // Check if Bearer token format
        if (!authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Invalid token format. Use 'Bearer <token>'",
            });
        }
        // Extract token
        const token = authHeader.substring(7); // Remove 'Bearer ' prefix
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            });
        }
        // Verify token
        const decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        // Optional: Check if user still exists in database
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                nrp: true,
                role: true,
                departement: true,
                posision: true,
            },
        });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        // Attach user info to request
        req.user = {
            id: decoded.id,
            nrp: decoded.nrp,
            role: decoded.role,
            departement: decoded.departement,
            posision: decoded.posision,
        };
        next();
    }
    catch (error) {
        if (error instanceof Error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({
                    success: false,
                    message: "Token has expired",
                });
            }
            if (error.name === "JsonWebTokenError") {
                return res.status(401).json({
                    success: false,
                    message: "Invalid token",
                });
            }
        }
        console.error("Auth middleware error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.verifyUser = verifyUser;
// Middleware to check specific roles
const verifyRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden: Insufficient permissions",
            });
        }
        next();
    };
};
exports.verifyRole = verifyRole;
// Middleware to check specific departments
const verifyDepartment = (...allowedDepartments) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }
        if (!allowedDepartments.includes(req.user.departement)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden: Access restricted to specific departments",
            });
        }
        next();
    };
};
exports.verifyDepartment = verifyDepartment;
