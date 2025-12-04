/*
  Warnings:

  - You are about to drop the column `departement` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `posision` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nrp]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "PermissionLevel" AS ENUM ('SUBMITTER', 'APPROVAL_ONLY', 'SCORING_ONLY', 'APPROVAL_SCORING', 'FULL_ACCESS');

-- CreateEnum
CREATE TYPE "Position" AS ENUM ('MEKANIK', 'TYREMAN', 'WELDER', 'OPERATOR_DT', 'OPERATOR_FT', 'OPERATOR_CT', 'DRIVER_LV', 'DRIVER_SARANA', 'GL_PRODUKSI', 'GL_LOGISTIK', 'GL_PLANT', 'GL_HSE', 'GL_HRGA', 'PDCA_OFFICER', 'HRGA_OFFICER', 'PLANNER', 'SPV_PLANT', 'SPV_PRODUKSI', 'SPV_LOGISTIK', 'SPV_HSE', 'SPV_HRGA', 'DEPT_HEAD_PLANT', 'DEPT_HEAD_PRODUKSI', 'DEPT_HEAD_LOGISTIK', 'DEPT_HEAD_HSE', 'DEPT_HEAD_HRGA', 'IT_OFFICER', 'IT_MANAGER', 'PROJECT_MANAGER', 'CCR', 'MOCO', 'MANAGEMENT_SITE');

-- CreateEnum
CREATE TYPE "KriteriaSS" AS ENUM ('QUALITY', 'COST', 'DELIVERY', 'SAFETY', 'MORALE', 'PRODUCTIVITY');

-- CreateEnum
CREATE TYPE "SifatPerbaikan" AS ENUM ('MENCIPTAKAN', 'MENINGKATKAN', 'MENCONTOH');

-- CreateEnum
CREATE TYPE "StatusIde" AS ENUM ('DIAJUKAN', 'APPROVE', 'DINILAI');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "departement",
DROP COLUMN "posision",
ADD COLUMN     "department" "Department" NOT NULL DEFAULT 'HRGA',
ADD COLUMN     "permissionLevel" "PermissionLevel" NOT NULL DEFAULT 'SUBMITTER',
ADD COLUMN     "position" "Position" NOT NULL DEFAULT 'HRGA_OFFICER';

-- DropEnum
DROP TYPE "Posision";

-- CreateTable
CREATE TABLE "Suggestion" (
    "id" TEXT NOT NULL,
    "judulIde" TEXT NOT NULL,
    "masalahYangDihadapi" TEXT NOT NULL,
    "uraianIde" TEXT NOT NULL,
    "ideProsesPerbaikan" TEXT NOT NULL,
    "hasilUraianProses" TEXT NOT NULL,
    "evaluasiIde" TEXT NOT NULL,
    "komentarAtasan" TEXT,
    "fotoSebelum" TEXT,
    "fotoSesudah" TEXT,
    "kriteriaSS" "KriteriaSS" NOT NULL,
    "sifatPerbaikan" "SifatPerbaikan" NOT NULL,
    "statusIde" "StatusIde" NOT NULL DEFAULT 'DIAJUKAN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Suggestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuggestionHistory" (
    "id" TEXT NOT NULL,
    "suggestionId" TEXT NOT NULL,
    "statusIde" "StatusIde" NOT NULL,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SuggestionHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormPenilaian" (
    "id" TEXT NOT NULL,
    "suggestionId" TEXT NOT NULL,
    "penilaianKriteria" TEXT NOT NULL,
    "skorKriteria" INTEGER NOT NULL,
    "komentarPenilaian" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FormPenilaian_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nrp_key" ON "User"("nrp");

-- AddForeignKey
ALTER TABLE "Suggestion" ADD CONSTRAINT "Suggestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SuggestionHistory" ADD CONSTRAINT "SuggestionHistory_suggestionId_fkey" FOREIGN KEY ("suggestionId") REFERENCES "Suggestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormPenilaian" ADD CONSTRAINT "FormPenilaian_suggestionId_fkey" FOREIGN KEY ("suggestionId") REFERENCES "Suggestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
