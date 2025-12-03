"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.0.1",
    "engineVersion": "f09f2815f091dbba658cdcd2264306d88bb5bda6",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"./generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id          String     @id @default(cuid())\n  firstName   String\n  lastName    String\n  nrp         BigInt\n  role        Role\n  departement Department\n  posision    Posision\n  password    String\n  createdAt   DateTime   @default(now())\n  updatedAt   DateTime   @updatedAt\n}\n\nenum Role {\n  Non_Staff\n  Staff\n  Group_Leader\n  Supervisor\n  Dept_Head\n  Project_Manager\n  Super_Admin\n}\n\nenum Department {\n  IT\n  HRGA\n  PLANT\n  HSE\n  TC\n  PRODUKSI\n  LOGISTIK\n  ALL_DEPT\n}\n\nenum Posision {\n  MEKANIK\n  TYREMAN\n  WELDER\n  OPERATOR_DT\n  OPERATOR_FT\n  OPERATOR_CT\n  DRIVER_LV\n  DRIVER_SARANA\n  GL_PRODUKSI\n  GL_LOGISTIK\n  GL_PLANT\n  GL_HSE\n  GL_HRGA\n  PDCA_OFFICER\n  HRGA_OFFICER\n  PLANNER\n  SPV_PLANT\n  SPV_PRODUKSI\n  SPV_LOGISTIK\n  SPV_HSE\n  SPV_HRGA\n  DEPT_HEAD_PLANT\n  DEPT_HEAD_PRODUKSI\n  DEPT_HEAD_LOGISTIK\n  DEPT_HEAD_HSE\n  DEPT_HEAD_HRGA\n  IT_OFFICER\n  IT_MANAGER\n  PROJECT_MANAGER\n  CCR\n  MOCO\n  MANAGEMENT_SITE\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nrp\",\"kind\":\"scalar\",\"type\":\"BigInt\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"departement\",\"kind\":\"enum\",\"type\":\"Department\"},{\"name\":\"posision\",\"kind\":\"enum\",\"type\":\"Posision\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await Promise.resolve().then(() => __importStar(require('node:buffer')));
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_bg.postgresql.js"))),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await Promise.resolve().then(() => __importStar(require("@prisma/client/runtime/query_compiler_bg.postgresql.wasm-base64.js")));
        return await decodeBase64AsWasm(wasm);
    }
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
