-- AlterEnum
ALTER TYPE "Department" ADD VALUE 'ALL_DEPT';

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Posision" ADD VALUE 'SPV_HRGA';
ALTER TYPE "Posision" ADD VALUE 'DEPT_HEAD_PLANT';
ALTER TYPE "Posision" ADD VALUE 'DEPT_HEAD_PRODUKSI';
ALTER TYPE "Posision" ADD VALUE 'DEPT_HEAD_LOGISTIK';
ALTER TYPE "Posision" ADD VALUE 'DEPT_HEAD_HSE';
ALTER TYPE "Posision" ADD VALUE 'DEPT_HEAD_HRGA';
ALTER TYPE "Posision" ADD VALUE 'IT_OFFICER';
ALTER TYPE "Posision" ADD VALUE 'IT_MANAGER';
ALTER TYPE "Posision" ADD VALUE 'PROJECT_MANAGER';
ALTER TYPE "Posision" ADD VALUE 'MANAGEMENT_SITE';
