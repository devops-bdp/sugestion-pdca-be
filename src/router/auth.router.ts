import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { verifyUser, verifyRole } from "../middleware/verify.user";

export class AuthRouter {
  private authController: AuthController;
  private router: Router;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(
    "/register",
    verifyUser,
    verifyRole("Super_Admin"),
    this.authController.register.bind(this.authController)
  );
    this.router.post(
      "/login",
      this.authController.login.bind(this.authController)
    );
  }
  public getRouter(): Router {
    return this.router;
  }
}
