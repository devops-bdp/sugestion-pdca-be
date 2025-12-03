import { Request, Response } from "express";
export declare class UserController {
    getUserProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllUserProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getGroupLeaderProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getStaffandNonStaffProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getUserById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateUserProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateMyProfile(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
