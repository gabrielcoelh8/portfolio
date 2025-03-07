/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Stack` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "deploy" TEXT NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Project" ("createdAt", "deploy", "description", "github", "id", "image", "published", "title", "updatedAt", "userId") SELECT "createdAt", "deploy", "description", "github", "id", "image", "published", "title", "updatedAt", "userId" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE TABLE "new_Stack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "userId" TEXT,
    "projectId" TEXT,
    CONSTRAINT "Stack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Stack" ("createdAt", "designation", "id", "image", "name", "projectId", "updatedAt", "userId") SELECT "createdAt", "designation", "id", "image", "name", "projectId", "updatedAt", "userId" FROM "Stack";
DROP TABLE "Stack";
ALTER TABLE "new_Stack" RENAME TO "Stack";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "title" TEXT,
    "education" TEXT,
    "email" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "github" TEXT NOT NULL
);
INSERT INTO "new_User" ("createdAt", "cv", "education", "email", "github", "id", "linkedin", "name", "title") SELECT "createdAt", "cv", "education", "email", "github", "id", "linkedin", "name", "title" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_linkedin_key" ON "User"("linkedin");
CREATE UNIQUE INDEX "User_github_key" ON "User"("github");
CREATE TABLE "new__ProjectToStack" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProjectToStack_A_fkey" FOREIGN KEY ("A") REFERENCES "Project" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProjectToStack_B_fkey" FOREIGN KEY ("B") REFERENCES "Stack" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__ProjectToStack" ("A", "B") SELECT "A", "B" FROM "_ProjectToStack";
DROP TABLE "_ProjectToStack";
ALTER TABLE "new__ProjectToStack" RENAME TO "_ProjectToStack";
CREATE UNIQUE INDEX "_ProjectToStack_AB_unique" ON "_ProjectToStack"("A", "B");
CREATE INDEX "_ProjectToStack_B_index" ON "_ProjectToStack"("B");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
