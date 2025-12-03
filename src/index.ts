import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AuthRouter } from "./router/auth.router";
import { UserRouter } from "./router/user.router";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/", (req: Request, res: Response) => {
  res.json({ 
    message: "Suggestion System API is running",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

// Routes
const authRouter = new AuthRouter();
const userRouter = new UserRouter();

app.use("/api/auth", authRouter.getRouter());
app.use("/api/users", userRouter.getRouter());

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    success: false,
    message: "Route not found",
    path: req.path 
  });
});

// Local development
const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

// CRITICAL: Export for Vercel
export default app;