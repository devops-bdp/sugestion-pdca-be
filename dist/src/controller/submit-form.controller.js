"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFormController = void 0;
const prisma_1 = require("../../prisma/generated/prisma");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
});
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new prisma_1.PrismaClient({ adapter });
class SubmitFormController {
    async createSuggestion(req, res) {
        try {
            const { judulIde, masalahYangDihadapi, uraianIde, ideProsesPerbaikan, hasilUraianProses, evaluasiIde, komentarAtasan, fotoSebelum, fotoSesudah, kriteriaSS, sifatPerbaikan, userId, } = req.body;
            if (!judulIde ||
                !masalahYangDihadapi ||
                !uraianIde ||
                !ideProsesPerbaikan ||
                !hasilUraianProses ||
                !evaluasiIde ||
                !kriteriaSS ||
                !sifatPerbaikan ||
                !userId) {
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                });
            }
            const suggestion = await prisma.suggestion.create({
                data: {
                    judulIde,
                    masalahYangDihadapi,
                    uraianIde,
                    ideProsesPerbaikan,
                    hasilUraianProses,
                    evaluasiIde,
                    komentarAtasan,
                    fotoSebelum,
                    fotoSesudah,
                    kriteriaSS,
                    sifatPerbaikan,
                    userId,
                    statusIde: "DIAJUKAN",
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            nrp: true,
                            department: true,
                            position: true,
                        },
                    },
                },
            });
            await prisma.suggestionHistory.create({
                data: {
                    suggestionId: suggestion.id,
                    statusIde: "DIAJUKAN",
                },
            });
            return res.status(201).json({
                success: true,
                message: "Suggestion submitted successfully",
                data: suggestion,
            });
        }
        catch (error) {
            console.error("Error creating suggestion:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to submit suggestion",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getAllSuggestions(req, res) {
        try {
            const { statusIde, department, userId, kriteriaSS } = req.query;
            const suggestions = await prisma.suggestion.findMany({
                where: {
                    ...(statusIde && { statusIde: statusIde }),
                    ...(userId && { userId: userId }),
                    ...(kriteriaSS && { kriteriaSS: kriteriaSS }),
                    ...(department && {
                        user: {
                            department: department,
                        },
                    }),
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            nrp: true,
                            department: true,
                            position: true,
                            role: true,
                        },
                    },
                    penilaian: true,
                    history: {
                        orderBy: {
                            changedAt: "desc",
                        },
                    },
                },
                orderBy: {
                    createdAt: "desc",
                },
            });
            return res.status(200).json({
                success: true,
                count: suggestions.length,
                data: suggestions,
            });
        }
        catch (error) {
            console.error("Error fetching suggestions:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch suggestions",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getSuggestionById(req, res) {
        try {
            const { id } = req.params;
            const suggestion = await prisma.suggestion.findUnique({
                where: { id },
                include: {
                    user: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            nrp: true,
                            department: true,
                            position: true,
                            role: true,
                        },
                    },
                    penilaian: {
                        orderBy: {
                            createdAt: "desc",
                        },
                    },
                    history: {
                        orderBy: {
                            changedAt: "desc",
                        },
                    },
                },
            });
            if (!suggestion) {
                return res.status(404).json({
                    success: false,
                    message: "Suggestion not found",
                });
            }
            return res.status(200).json({
                success: true,
                data: suggestion,
            });
        }
        catch (error) {
            console.error("Error fetching suggestion:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch suggestion",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async updateSuggestionStatus(req, res) {
        try {
            const { id } = req.params;
            const { statusIde, komentarAtasan } = req.body;
            if (!["DIAJUKAN", "APPROVE", "DINILAI"].includes(statusIde)) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid status",
                });
            }
            const suggestion = await prisma.suggestion.update({
                where: { id },
                data: {
                    statusIde,
                    ...(komentarAtasan && { komentarAtasan }),
                },
                include: {
                    user: true,
                },
            });
            await prisma.suggestionHistory.create({
                data: {
                    suggestionId: id,
                    statusIde,
                },
            });
            return res.status(200).json({
                success: true,
                message: "Suggestion status updated successfully",
                data: suggestion,
            });
        }
        catch (error) {
            console.error("Error updating suggestion status:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to update suggestion status",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async updateSuggestion(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            delete updateData.id;
            delete updateData.userId;
            delete updateData.createdAt;
            const suggestion = await prisma.suggestion.update({
                where: { id },
                data: updateData,
                include: {
                    user: true,
                },
            });
            return res.status(200).json({
                success: true,
                message: "Suggestion updated successfully",
                data: suggestion,
            });
        }
        catch (error) {
            console.error("Error updating suggestion:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to update suggestion",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async deleteSuggestion(req, res) {
        try {
            const { id } = req.params;
            await prisma.suggestion.delete({
                where: { id },
            });
            return res.status(200).json({
                success: true,
                message: "Suggestion deleted successfully",
            });
        }
        catch (error) {
            console.error("Error deleting suggestion:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to delete suggestion",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async submitPenilaian(req, res) {
        try {
            const { suggestionId, penilaianKriteria, skorKriteria, komentarPenilaian, } = req.body;
            if (!suggestionId || !penilaianKriteria || skorKriteria === undefined) {
                return res.status(400).json({
                    success: false,
                    message: "Missing required fields",
                });
            }
            const penilaian = await prisma.formPenilaian.create({
                data: {
                    suggestionId,
                    penilaianKriteria,
                    skorKriteria,
                    komentarPenilaian,
                },
                include: {
                    suggestion: true,
                },
            });
            await prisma.suggestion.update({
                where: { id: suggestionId },
                data: { statusIde: "DINILAI" },
            });
            await prisma.suggestionHistory.create({
                data: {
                    suggestionId,
                    statusIde: "DINILAI",
                },
            });
            return res.status(201).json({
                success: true,
                message: "Penilaian submitted successfully",
                data: penilaian,
            });
        }
        catch (error) {
            console.error("Error submitting penilaian:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to submit penilaian",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
    async getStatistics(req, res) {
        try {
            const { userId, department } = req.query;
            const whereCondition = {};
            if (userId)
                whereCondition.userId = userId;
            if (department) {
                whereCondition.user = {
                    department: department,
                };
            }
            const [total, diajukan, approved, dinilai] = await Promise.all([
                prisma.suggestion.count({ where: whereCondition }),
                prisma.suggestion.count({
                    where: { ...whereCondition, statusIde: "DIAJUKAN" },
                }),
                prisma.suggestion.count({
                    where: { ...whereCondition, statusIde: "APPROVE" },
                }),
                prisma.suggestion.count({
                    where: { ...whereCondition, statusIde: "DINILAI" },
                }),
            ]);
            return res.status(200).json({
                success: true,
                data: {
                    total,
                    diajukan,
                    approved,
                    dinilai,
                },
            });
        }
        catch (error) {
            console.error("Error fetching statistics:", error);
            return res.status(500).json({
                success: false,
                message: "Failed to fetch statistics",
                error: error instanceof Error ? error.message : "Unknown error",
            });
        }
    }
}
exports.SubmitFormController = SubmitFormController;
