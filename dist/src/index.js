"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const auth_router_1 = require("./router/auth.router");
const user_router_1 = require("./router/user.router");
const PORT = 8000;
const base_url_fe = process.env.BASE_URL_FE; // Frontend URL from environment
// Initialize Express app
const app = (0, express_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: base_url_fe, // Allow requests from the frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"], // Allow Authorization header
    credentials: true, // Allow credentials (cookies, headers, etc.)
}));
// Initialize Routers
const authRouter = new auth_router_1.AuthRouter();
const userRouter = new user_router_1.UserRouter();
// Register Routes
app.use("/api/auth", authRouter.getRouter()); // Authentication routes
app.use("/api/users", userRouter.getRouter()); // User management routes
// Base route
app.get("/api", (req, res) => {
    res.send("Welcome to the API!");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on -> http://localhost:${PORT}/api`);
});
