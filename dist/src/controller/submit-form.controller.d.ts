import { Request, Response } from "express";
export declare class SubmitFormController {
    createSuggestion(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getAllSuggestions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getNextRegistNumber(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getSuggestionById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateSuggestionStatus(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateSuggestion(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteSuggestion(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    submitPenilaian(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    getStatistics(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    submitMultiplePenilaian(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
