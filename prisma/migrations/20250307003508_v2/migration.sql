/*
  Warnings:

  - You are about to drop the column `projectId` on the `Stack` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Stack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Stack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stack" ("createdAt", "designation", "id", "image", "name", "updatedAt", "userId") SELECT "createdAt", "designation", "id", "image", "name", "updatedAt", "userId" FROM "Stack";
DROP TABLE "Stack";
ALTER TABLE "new_Stack" RENAME TO "Stack";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
