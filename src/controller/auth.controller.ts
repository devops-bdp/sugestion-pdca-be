import dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { genSalt, hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { Pool } from "pg";

// Create a pool with proper configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Add BigInt serialization support
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { firstName, lastName, nrp, role, department, position, password } =
        req.body;

      // Validation
      if (
        !firstName ||
        !lastName ||
        !nrp ||
        !role ||
        !department ||
        !position ||
        !password
      ) {
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
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);
      
      // Auto-set permissionLevel based on role
      // Staff and Non_Staff always get SUBMITTER permission
      let defaultPermissionLevel = "SUBMITTER";
      if (role === "Staff" || role === "Non_Staff") {
        defaultPermissionLevel = "SUBMITTER";
      }
      // If permissionLevel is provided in request, use it (for other roles)
      // Otherwise use default
      const permissionLevel = req.body.permissionLevel || defaultPermissionLevel;
      
      const newUser = await prisma.user.create({
        data: {
          firstName,
          lastName,
          nrp: BigInt(nrp),
          role,
          permissionLevel: permissionLevel as any,
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
    } catch (error) {
      console.error("Register error:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  async login(req: Request, res: Response) {
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
      const isPasswordValid = await compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = sign(
        {
          id: user.id,
          nrp: user.nrp.toString(),
          role: user.role,
          department: user.department,
          position: user.position,
        },
        process.env.JWT_SECRET!,
        {
          expiresIn: "1h",
        }
      );
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
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
