import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { PrismaClient } from "../../prisma/generated/prisma/client";
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

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        nrp: string;
        role: string;
        permissionLevel: string;
        department: string;
        position: string;
      };
    }
  }
}

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    const decoded = verify(token, process.env.JWT_SECRET!) as {
      id: string;
      nrp: string;
      role: string;
      permissionLevel?: string;
      department: string;
      position: string;
    };

    // Optional: Check if user still exists in database and get latest permissionLevel
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        nrp: true,
        role: true,
        permissionLevel: true,
        department: true,
        position: true,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Attach user info to request (use permissionLevel from database, not token, to ensure it's up-to-date)
    req.user = {
      id: decoded.id,
      nrp: decoded.nrp,
      role: decoded.role,
      permissionLevel: user.permissionLevel,
      department: decoded.department,
      position: decoded.position,
    };

    next();
  } catch (error) {
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

// Middleware to check specific roles (DEPRECATED - use verifyPermissionLevel instead)
export const verifyRole = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
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

// Middleware to check permission levels (NEW - use this instead of verifyRole)
export const verifyPermissionLevel = (...allowedPermissionLevels: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!req.user.permissionLevel) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: No permission level assigned",
      });
    }

    // FULL_ACCESS has access to everything
    if (req.user.permissionLevel === "FULL_ACCESS") {
      return next();
    }

    if (!allowedPermissionLevels.includes(req.user.permissionLevel)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Insufficient permission level",
      });
    }

    next();
  };
};

// Middleware to check specific departments
export const verifyDepartment = (...allowedDepartments: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!allowedDepartments.includes(req.user.department)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: Access restricted to specific departments",
      });
    }

    next();
  };
};