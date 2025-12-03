import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { verifyUser, verifyRole } from "../middleware/verify.user";

export class UserRouter {
  private router: Router;
  private userController: UserController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // Get current user profile (authenticated users only)
    this.router.get(
      "/profile",
      verifyUser,
      this.userController.getUserProfile.bind(this.userController)
    );

    // Get all users (Admin only)
    this.router.get(
      "/all",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head", "Project_Manager"),
      this.userController.getAllUserProfile.bind(this.userController)
    );

    // Get all Group Leaders (Supervisors and above)
    this.router.get(
      "/group-leaders",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head", "Project_Manager", "Supervisor"),
      this.userController.getGroupLeaderProfile.bind(this.userController)
    );

    // Get Staff and Non-Staff (Group Leaders and above)
    this.router.get(
      "/staff",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head", "Project_Manager", "Supervisor", "Group_Leader"),
      this.userController.getStaffandNonStaffProfile.bind(this.userController)
    );

    // Get user by ID (Admin only)
    this.router.get(
      "/:id",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head", "Project_Manager"),
      this.userController.getUserById.bind(this.userController)
    );

    // Update user (Admin only)
    this.router.put(
      "/:id",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head"),
      this.userController.updateUserProfile.bind(this.userController)
    );

    // Delete user (Super Admin only)
    this.router.delete(
      "/:id",
      verifyUser,
      verifyRole("Super_Admin"),
      this.userController.deleteUser.bind(this.userController)
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
