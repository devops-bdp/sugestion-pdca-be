-- AlterTable
ALTER TABLE "SuggestionHistory" ADD COLUMN "changedBy" TEXT;

-- AddForeignKey
ALTER TABLE "SuggestionHistory" ADD CONSTRAINT "SuggestionHistory_changedBy_fkey" FOREIGN KEY ("changedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;





