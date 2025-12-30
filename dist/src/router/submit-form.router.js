"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFormRouter = void 0;
const express_1 = require("express");
const submit_form_controller_1 = require("../controller/submit-form.controller");
const verify_user_1 = require("../middleware/verify.user");
class SubmitFormRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.submitFormController = new submit_form_controller_1.SubmitFormController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post("/", verify_user_1.verifyUser, this.submitFormController.createSuggestion.bind(this.submitFormController));
        this.router.get("/", verify_user_1.verifyUser, this.submitFormController.getAllSuggestions.bind(this.submitFormController));
        this.router.get("/next-regist-number", verify_user_1.verifyUser, this.submitFormController.getNextRegistNumber.bind(this.submitFormController));
        this.router.post("/penilaian", verify_user_1.verifyUser, (0, verify_user_1.verifyRole)("Super_Admin", "Dept_Head", "Project_Manager", "Supervisor", "Group_Leader"), this.submitFormController.submitPenilaian.bind(this.submitFormController));
        this.router.post("/penilaian/multiple", verify_user_1.verifyUser, (0, verify_user_1.verifyRole)("Super_Admin", "Dept_Head", "Project_Manager", "Supervisor", "Group_Leader"), this.submitFormController.submitMultiplePenilaian.bind(this.submitFormController));
        this.router.get("/statistics", verify_user_1.verifyUser, this.submitFormController.getStatistics.bind(this.submitFormController));
        this.router.get("/:id", verify_user_1.verifyUser, this.submitFormController.getSuggestionById.bind(this.submitFormController));
        this.router.put("/:id/status", verify_user_1.verifyUser, (0, verify_user_1.verifyRole)("Super_Admin", "Dept_Head", "Project_Manager", "Supervisor", "Group_Leader"), this.submitFormController.updateSuggestionStatus.bind(this.submitFormController));
        this.router.put("/:id", verify_user_1.verifyUser, this.submitFormController.updateSuggestion.bind(this.submitFormController));
        this.router.delete("/:id", verify_user_1.verifyUser, (0, verify_user_1.verifyRole)("Super_Admin", "Dept_Head"), this.submitFormController.deleteSuggestion.bind(this.submitFormController));
    }
    getRouter() {
        return this.router;
    }
}
exports.SubmitFormRouter = SubmitFormRouter;
