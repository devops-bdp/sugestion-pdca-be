import { Router } from "express";
import { SubmitFormController } from "../controller/submit-form.controller";
import { verifyUser, verifyRole } from "../middleware/verify.user";

export class SubmitFormRouter {
  private router: Router;
  private submitFormController: SubmitFormController;

  constructor() {
    this.router = Router();
    this.submitFormController = new SubmitFormController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /**
     * @swagger
     * /api/suggestions:
     *   post:
     *     summary: Submit a new suggestion
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - judulIde
     *               - masalahYangDihadapi
     *               - uraianIde
     *               - ideProsesPerbaikan
     *               - hasilUraianProses
     *               - evaluasiIde
     *               - kriteriaSS
     *               - sifatPerbaikan
     *               - userId
     *             properties:
     *               judulIde:
     *                 type: string
     *                 description: Title of the suggestion
     *               masalahYangDihadapi:
     *                 type: string
     *                 description: Problem description
     *               uraianIde:
     *                 type: string
     *                 description: Idea description
     *               ideProsesPerbaikan:
     *                 type: string
     *                 description: Improvement process idea
     *               hasilUraianProses:
     *                 type: string
     *                 description: Process result description
     *               evaluasiIde:
     *                 type: string
     *                 description: Idea evaluation
     *               komentarAtasan:
     *                 type: string
     *                 description: Supervisor comment (optional)
     *               fotoSebelum:
     *                 type: string
     *                 description: Before photo URL (optional)
     *               fotoSesudah:
     *                 type: string
     *                 description: After photo URL (optional)
     *               kriteriaSS:
     *                 type: string
     *                 enum: [QUALITY, COST, DELIVERY, SAFETY, MORALE, PRODUCTIVITY]
     *                 description: SS criteria
     *               sifatPerbaikan:
     *                 type: string
     *                 enum: [MENCIPTAKAN, MENINGKATKAN, MENCONTOH]
     *                 description: Type of improvement
     *               userId:
     *                 type: string
     *                 description: User ID submitting the suggestion
     *     responses:
     *       201:
     *         description: Suggestion submitted successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 message:
     *                   type: string
     *                 data:
     *                   $ref: '#/components/schemas/Suggestion'
     *       400:
     *         description: Missing required fields
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       401:
     *         description: Unauthorized
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "/",
      verifyUser,
      this.submitFormController.createSuggestion.bind(this.submitFormController)
    );

    /**
     * @swagger
     * /api/suggestions:
     *   get:
     *     summary: Get all suggestions with optional filters
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: query
     *         name: statusIde
     *         schema:
     *           type: string
     *           enum: [DIAJUKAN, APPROVE, DINILAI]
     *         description: Filter by status
     *       - in: query
     *         name: department
     *         schema:
     *           type: string
     *           enum: [IT, HRGA, PLANT, HSE, TC, PRODUKSI, LOGISTIK, ALL_DEPT]
     *         description: Filter by department
     *       - in: query
     *         name: userId
     *         schema:
     *           type: string
     *         description: Filter by user ID
     *       - in: query
     *         name: kriteriaSS
     *         schema:
     *           type: string
     *           enum: [QUALITY, COST, DELIVERY, SAFETY, MORALE, PRODUCTIVITY]
     *         description: Filter by SS criteria
     *     responses:
     *       200:
     *         description: List of suggestions
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
     *                     $ref: '#/components/schemas/Suggestion'
     *       401:
     *         description: Unauthorized
     *       500:
     *         description: Internal server error
     */
    this.router.get(
      "/",
      verifyUser,
      this.submitFormController.getAllSuggestions.bind(
        this.submitFormController
      )
    );

    /**
     * @swagger
     * /api/suggestions/penilaian:
     *   post:
     *     summary: Submit scoring/evaluation for a suggestion
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - suggestionId
     *               - penilaianKriteria
     *               - skorKriteria
     *             properties:
     *               suggestionId:
     *                 type: string
     *                 description: Suggestion ID to evaluate
     *               penilaianKriteria:
     *                 type: string
     *                 description: Evaluation criteria
     *               skorKriteria:
     *                 type: integer
     *                 description: Score for the criteria
     *               komentarPenilaian:
     *                 type: string
     *                 description: Evaluation comment (optional)
     *     responses:
     *       201:
     *         description: Evaluation submitted successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 message:
     *                   type: string
     *                 data:
     *                   $ref: '#/components/schemas/FormPenilaian'
     *       400:
     *         description: Missing required fields
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Scoring access required
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "/penilaian",
      verifyUser,
      verifyRole(
        "Super_Admin",
        "Dept_Head",
        "Project_Manager",
        "Supervisor",
        "Group_Leader"
      ),
      this.submitFormController.submitPenilaian.bind(this.submitFormController)
    );

    /**
     * @swagger
     * /api/suggestions/penilaian/multiple:
     *   post:
     *     summary: Submit multiple scoring/evaluation criteria at once
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - suggestionId
     *               - penilaianList
     *             properties:
     *               suggestionId:
     *                 type: string
     *                 description: Suggestion ID to evaluate
     *               penilaianList:
     *                 type: array
     *                 description: Array of evaluation criteria
     *                 items:
     *                   type: object
     *                   required:
     *                     - penilaianKriteria
     *                     - skorKriteria
     *                   properties:
     *                     penilaianKriteria:
     *                       type: string
     *                       description: Evaluation criteria name
     *                     skorKriteria:
     *                       type: integer
     *                       description: Score for the criteria
     *                     komentarPenilaian:
     *                       type: string
     *                       description: Evaluation comment (optional)
     *     responses:
     *       201:
     *         description: All evaluations submitted successfully
     *       400:
     *         description: Missing required fields
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Scoring access required
     *       500:
     *         description: Internal server error
     */
    this.router.post(
      "/penilaian/multiple",
      verifyUser,
      verifyRole(
        "Super_Admin",
        "Dept_Head",
        "Project_Manager",
        "Supervisor",
        "Group_Leader"
      ),
      this.submitFormController.submitMultiplePenilaian.bind(this.submitFormController)
    );

    /**
     * @swagger
     * /api/suggestions/statistics:
     *   get:
     *     summary: Get suggestion statistics
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: query
     *         name: userId
     *         schema:
     *           type: string
     *         description: Filter statistics by user ID
     *       - in: query
     *         name: department
     *         schema:
     *           type: string
     *           enum: [IT, HRGA, PLANT, HSE, TC, PRODUKSI, LOGISTIK, ALL_DEPT]
     *         description: Filter statistics by department
     *     responses:
     *       200:
     *         description: Statistics retrieved successfully
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 data:
     *                   type: object
     *                   properties:
     *                     total:
     *                       type: integer
     *                       description: Total suggestions
     *                     diajukan:
     *                       type: integer
     *                       description: Suggestions with DIAJUKAN status
     *                     approved:
     *                       type: integer
     *                       description: Suggestions with APPROVE status
     *                     dinilai:
     *                       type: integer
     *                       description: Suggestions with DINILAI status
     *       401:
     *         description: Unauthorized
     *       500:
     *         description: Internal server error
     */
    this.router.get(
      "/statistics",
      verifyUser,
      this.submitFormController.getStatistics.bind(this.submitFormController)
    );

    /**
     * @swagger
     * /api/suggestions/{id}:
     *   get:
     *     summary: Get suggestion by ID
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: Suggestion ID
     *     responses:
     *       200:
     *         description: Suggestion found
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 success:
     *                   type: boolean
     *                 data:
     *                   $ref: '#/components/schemas/Suggestion'
     *       404:
     *         description: Suggestion not found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       401:
     *         description: Unauthorized
     *       500:
     *         description: Internal server error
     */
    this.router.get(
      "/:id",
      verifyUser,
      this.submitFormController.getSuggestionById.bind(
        this.submitFormController
      )
    );

    /**
     * @swagger
     * /api/suggestions/{id}/status:
     *   put:
     *     summary: Update suggestion status (Approve/Reject)
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: Suggestion ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - statusIde
     *             properties:
     *               statusIde:
     *                 type: string
     *                 enum: [DIAJUKAN, APPROVE, DINILAI]
     *                 description: New status
     *               komentarAtasan:
     *                 type: string
     *                 description: Supervisor comment (optional)
     *     responses:
     *       200:
     *         description: Status updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/SuccessResponse'
     *       400:
     *         description: Invalid status
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Approval access required
     *       500:
     *         description: Internal server error
     */
    this.router.put(
      "/:id/status",
      verifyUser,
      verifyRole(
        "Super_Admin",
        "Dept_Head",
        "Project_Manager",
        "Supervisor",
        "Group_Leader"
      ),
      this.submitFormController.updateSuggestionStatus.bind(
        this.submitFormController
      )
    );

    /**
     * @swagger
     * /api/suggestions/{id}:
     *   put:
     *     summary: Update suggestion details
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: Suggestion ID
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               judulIde:
     *                 type: string
     *               masalahYangDihadapi:
     *                 type: string
     *               uraianIde:
     *                 type: string
     *               ideProsesPerbaikan:
     *                 type: string
     *               hasilUraianProses:
     *                 type: string
     *               evaluasiIde:
     *                 type: string
     *               komentarAtasan:
     *                 type: string
     *               fotoSebelum:
     *                 type: string
     *               fotoSesudah:
     *                 type: string
     *               kriteriaSS:
     *                 type: string
     *                 enum: [QUALITY, COST, DELIVERY, SAFETY, MORALE, PRODUCTIVITY]
     *               sifatPerbaikan:
     *                 type: string
     *                 enum: [MENCIPTAKAN, MENINGKATKAN, MENCONTOH]
     *     responses:
     *       200:
     *         description: Suggestion updated successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/SuccessResponse'
     *       401:
     *         description: Unauthorized
     *       404:
     *         description: Suggestion not found
     *       500:
     *         description: Internal server error
     *   delete:
     *     summary: Delete suggestion
     *     tags: [Suggestions]
     *     security:
     *       - bearerAuth: []
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         description: Suggestion ID
     *     responses:
     *       200:
     *         description: Suggestion deleted successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/SuccessResponse'
     *       401:
     *         description: Unauthorized
     *       403:
     *         description: Forbidden - Admin access required
     *       404:
     *         description: Suggestion not found
     *       500:
     *         description: Internal server error
     */
    this.router.put(
      "/:id",
      verifyUser,
      this.submitFormController.updateSuggestion.bind(this.submitFormController)
    );

    this.router.delete(
      "/:id",
      verifyUser,
      verifyRole("Super_Admin", "Dept_Head"),
      this.submitFormController.deleteSuggestion.bind(this.submitFormController)
    );
  }

  public getRouter(): Router {
    return this.router;
  }
}
