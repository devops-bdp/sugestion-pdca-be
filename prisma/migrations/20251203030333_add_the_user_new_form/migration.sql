/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - Added the required column `departement` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posision` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Non_Staff', 'Staff', 'Group_Leader', 'Supervisor', 'Dept_Head', 'Project_Manager', 'Super_Admin');

-- CreateEnum
CREATE TYPE "Department" AS ENUM ('IT', 'HRGA', 'PLANT', 'HSE', 'TC', 'PRODUKSI', 'LOGISTIK');

-- CreateEnum
CREATE TYPE "Posision" AS ENUM ('MEKANIK', 'TYREMAN', 'WELDER', 'OPERATOR_DT', 'OPERATOR_FT', 'OPERATOR_CT', 'DRIVER_LV', 'DRIVER_SARANA', 'GL_PRODUKSI', 'GL_LOGISTIK', 'GL_PLANT', 'GL_HSE', 'GL_HRGA', 'PDCA_OFFICER', 'HRGA_OFFICER', 'PLANNER', 'SPV_PLANT', 'SPV_PRODUKSI', 'SPV_LOGISTIK', 'SPV_HSE', 'CCR', 'MOCO');

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "departement" "Department" NOT NULL,
ADD COLUMN     "posision" "Posision" NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL;
