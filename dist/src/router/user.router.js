"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const verify_user_1 = require("../middleware/verify.user");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userController = new user_controller_1.UserController();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/profile", verify_user_1.verifyUser, this.userController.getUserProfile.bind(this.userController));
        this.router.get("/all", verify_user_1.verifyUser, (0, verify_user_1.verifyPermissionLevel)("FULL_ACCESS"), this.userController.getAllUserProfile.bind(this.userController));
        this.router.get("/group-leaders", verify_user_1.verifyUser, (0, verify_user_1.verifyPermissionLevel)("APPROVAL_ONLY", "APPROVAL_SCORING", "FULL_ACCESS"), this.userController.getGroupLeaderProfile.bind(this.userController));
        this.router.get("/staff", verify_user_1.verifyUser, (0, verify_user_1.verifyPermissionLevel)("APPROVAL_ONLY", "APPROVAL_SCORING", "FULL_ACCESS"), this.userController.getStaffandNonStaffProfile.bind(this.userController));
        this.router.get("/:id", verify_user_1.verifyUser, (0, verify_user_1.verifyPermissionLevel)("FULL_ACCESS"), this.userController.getUserById.bind(this.userController));
        this.router.put("/:id", verify_user_1.verifyUser, (0, verify_user_1.verifyPermissionLevel)("FULL_ACCESS"), this.userController.updateUserProfile.bind(this.userController));
        this.router.delete("/:id", verify_user_1.verifyUser, (0, verify_user_1.verifyPermissionLevel)("FULL_ACCESS"), this.userController.deleteUser.bind(this.userController));
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
