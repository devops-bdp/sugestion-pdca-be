import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Suggestion System BDP API",
      version: "1.0.0",
      description:
        "API documentation for the Suggestion System BDP - A system for managing employee suggestions and evaluations",
      contact: {
        name: "API Support",
      },
    },
    servers: [
      {
        url: process.env.API_URL || "http://localhost:8000",
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          description: "Enter JWT token",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            id: { type: "string" },
            firstName: { type: "string" },
            lastName: { type: "string" },
            nrp: { type: "string", format: "int64" },
            role: {
              type: "string",
              enum: [
                "Non_Staff",
                "Staff",
                "Group_Leader",
                "Supervisor",
                "Dept_Head",
                "Project_Manager",
                "Super_Admin",
              ],
            },
            department: {
              type: "string",
              enum: ["IT", "HRGA", "PLANT", "HSE", "TC", "PRODUKSI", "LOGISTIK", "ALL_DEPT"],
            },
            position: { type: "string" },
            permissionLevel: {
              type: "string",
              enum: [
                "SUBMITTER",
                "APPROVAL_ONLY",
                "SCORING_ONLY",
                "APPROVAL_SCORING",
                "FULL_ACCESS",
              ],
            },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        Suggestion: {
          type: "object",
          properties: {
            id: { type: "string" },
            judulIde: { type: "string" },
            masalahYangDihadapi: { type: "string" },
            uraianIde: { type: "string" },
            ideProsesPerbaikan: { type: "string" },
            hasilUraianProses: { type: "string" },
            evaluasiIde: { type: "string" },
            komentarAtasan: { type: "string", nullable: true },
            fotoSebelum: { type: "string", nullable: true },
            fotoSesudah: { type: "string", nullable: true },
            kriteriaSS: {
              type: "string",
              enum: ["QUALITY", "COST", "DELIVERY", "SAFETY", "MORALE", "PRODUCTIVITY"],
            },
            sifatPerbaikan: {
              type: "string",
              enum: ["MENCIPTAKAN", "MENINGKATKAN", "MENCONTOH"],
            },
            statusIde: {
              type: "string",
              enum: ["DIAJUKAN", "APPROVE", "DINILAI"],
            },
            userId: { type: "string" },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
            user: { $ref: "#/components/schemas/User" },
          },
        },
        FormPenilaian: {
          type: "object",
          properties: {
            id: { type: "string" },
            suggestionId: { type: "string" },
            penilaianKriteria: { type: "string" },
            skorKriteria: { type: "integer" },
            komentarPenilaian: { type: "string", nullable: true },
            createdAt: { type: "string", format: "date-time" },
            updatedAt: { type: "string", format: "date-time" },
          },
        },
        Error: {
          type: "object",
          properties: {
            success: { type: "boolean", example: false },
            message: { type: "string" },
            error: { type: "string" },
          },
        },
        SuccessResponse: {
          type: "object",
          properties: {
            success: { type: "boolean", example: true },
            message: { type: "string" },
            data: { type: "object" },
          },
        },
      },
    },
    tags: [
      {
        name: "Health",
        description: "Health check endpoints",
      },
      {
        name: "Auth",
        description: "Authentication endpoints",
      },
      {
        name: "Users",
        description: "User management endpoints",
      },
      {
        name: "Suggestions",
        description: "Suggestion management endpoints",
      },
    ],
  },
  apis: ["./src/router/*.ts", "./src/controller/*.ts", "./src/index.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);

