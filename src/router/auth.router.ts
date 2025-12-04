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
    /**
     * @swagger
     * /api/auth/register:
     *   post:
     *     summary: Register a new user
     *     tags: [Auth]
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - firstName
     *               - lastName
     *               - nrp
     *               - password
     *               - role
     *               - department
     *               - position
     *             properties:
     *               firstName:
     *                 type: string
     *               lastName:
     *                 type: string
     *               nrp:
     *                 type: string
     *               password:
     *                 type: string
     *                 format: password
     *               role:
     *                 type: string
     *                 enum: [Non_Staff, Staff, Group_Leader, Supervisor, Dept_Head, Project_Manager, Super_Admin]
     *               department:
     *                 type: string
     *                 enum: [IT, HRGA, PLANT, HSE, TC, PRODUKSI, LOGISTIK, ALL_DEPT]
     *               position:
     *                 type: string
     *               permissionLevel:
     *                 type: string
     *                 enum: [SUBMITTER, APPROVAL_ONLY, SCORING_ONLY, APPROVAL_SCORING, FULL_ACCESS]
     *     responses:
     *       201:
     *         description: User registered successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/SuccessResponse'
     *       400:
     *         description: Bad request
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       401:
     *         description: Unauthorized - Super Admin only
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "/register",
      verifyUser,
      verifyRole("Super_Admin"),
      this.authController.register.bind(this.authController)
    );

    /**
     * @swagger
     * /api/auth/login:
     *   post:
     *     summary: Login user
     *     tags: [Auth]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - nrp
     *               - password
     *             properties:
     *               nrp:
     *                 type: string
     *               password:
     *                 type: string
     *                 format: password
     *     responses:
     *       200:
     *         description: Login successful
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 message:
     *                   type: string
     *                 token:
     *                   type: string
     *                 user:
     *                   $ref: '#/components/schemas/User'
     *       401:
     *         description: Invalid credentials
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "/login",
      this.authController.login.bind(this.authController)
    );
  }
  public getRouter(): Router {
    return this.router;
  }
}
