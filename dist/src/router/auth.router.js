"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const verify_user_1 = require("../middleware/verify.user");
class AuthRouter {
    constructor() {
        this.authController = new auth_controller_1.AuthController();
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/register", verify_user_1.verifyUser, (0, verify_user_1.verifyRole)("Super_Admin"), this.authController.register.bind(this.authController));
        this.router.post("/login", this.authController.login.bind(this.authController));
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
