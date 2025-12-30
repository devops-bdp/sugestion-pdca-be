-- Migration: Add noRegistSS, tanggalUsulan, hubungan, tanggalEfektif fields to Suggestion table
-- Run this migration manually if prisma migrate dev fails

ALTER TABLE "Suggestion" 
ADD COLUMN IF NOT EXISTS "noRegistSS" TEXT,
ADD COLUMN IF NOT EXISTS "tanggalUsulan" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "hubungan" TEXT,
ADD COLUMN IF NOT EXISTS "tanggalEfektif" TIMESTAMP(3);
