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
    /**
     * @swagger
     * /api/users/profile:
     *   get:
     *     summary: Get current user profile
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: User profile retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 data:
     *                   $ref: '#/components/schemas/User'
     *       401:
     *         description: Unauthorized
     *       500:
     *         description: Internal server error
     */
    this.router.get(
      "/profile",
      verifyUser,
      this.userController.getUserProfile.bind(this.userController)
    );

    /**
     * @swagger
     * /api/users/all:
     *   get:
     *     summary: Get all users (Admin only)
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of all users
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 count:
     *                   type: integer
     *                 data:
     *                   type: array
     *                   items:
     *                     $ref: '#/components/schemas/User'
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Admin access required
     *       500:
     *         description: Internal server error
     */
    this.router.get(
      "/all",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head", "Project_Manager"),
      this.userController.getAllUserProfile.bind(this.userController)
    );

    /**
     * @swagger
     * /api/users/group-leaders:
     *   get:
     *     summary: Get all Group Leaders (Supervisors and above)
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of group leaders
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 data:
     *                   type: array
     *                   items:
     *                     $ref: '#/components/schemas/User'
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Supervisor access required
     *       500:
     *         description: Internal server error
     */
    this.router.get(
      "/group-leaders",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head", "Project_Manager", "Supervisor"),
      this.userController.getGroupLeaderProfile.bind(this.userController)
    );

    /**
     * @swagger
     * /api/users/staff:
     *   get:
     *     summary: Get Staff and Non-Staff users (Group Leaders and above)
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     responses:
     *       200:
     *         description: List of staff and non-staff users
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 data:
     *                   type: array
     *                   items:
     *                     $ref: '#/components/schemas/User'
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Group Leader access required
     *       500:
     *         description: Internal server error
     */
    this.router.get(
      "/staff",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head", "Project_Manager", "Supervisor", "Group_Leader"),
      this.userController.getStaffandNonStaffProfile.bind(this.userController)
    );

    /**
     * @swagger
     * /api/users/{id}:
     *   get:
     *     summary: Get user by ID (Admin only)
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: User ID
     *     responses:
     *       200:
     *         description: User found
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 data:
     *                   $ref: '#/components/schemas/User'
     *       404:
     *         description: User not found
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Admin access required
     *       500:
     *         description: Internal server error
     *   put:
     *     summary: Update user profile (Admin only)
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: User ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               firstName:
     *                 type: string
     *               lastName:
     *                 type: string
     *               role:
     *                 type: string
     *               department:
     *                 type: string
     *               position:
     *                 type: string
     *               permissionLevel:
     *                 type: string
     *     responses:
     *       200:
     *         description: User updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/SuccessResponse'
     *       400:
     *         description: Bad request
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Admin access required
     *       404:
     *         description: User not found
     *       500:
     *         description: Internal server error
     *   delete:
     *     summary: Delete user (Super Admin only)
     *     tags: [Users]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: User ID
     *     responses:
     *       200:
     *         description: User deleted successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/SuccessResponse'
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Super Admin access required
     *       404:
     *         description: User not found
     *       500:
     *         description: Internal server error
     */
    this.router.get(
      "/:id",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head", "Project_Manager"),
      this.userController.getUserById.bind(this.userController)
    );

    this.router.put(
      "/:id",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head"),
      this.userController.updateUserProfile.bind(this.userController)
    );

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
