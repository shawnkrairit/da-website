-- CreateTable
CREATE TABLE "attorney" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "imageUrl" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "fullNameEn" TEXT NOT NULL,
    "fullNameTh" TEXT NOT NULL,
    "fullNameCn" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleTh" TEXT NOT NULL,
    "titleCn" TEXT NOT NULL,
    "biographyEn" TEXT NOT NULL,
    "biographyTh" TEXT NOT NULL,
    "biographyCn" TEXT NOT NULL,
    "education" TEXT[],

    CONSTRAINT "attorney_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "department" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "nameEn" TEXT NOT NULL,
    "nameTh" TEXT NOT NULL,
    "nameCn" TEXT NOT NULL,

    CONSTRAINT "department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attorney_department" (
    "attorneyId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "attorney_department_pkey" PRIMARY KEY ("attorneyId","departmentId")
);

-- CreateTable
CREATE TABLE "insight" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "coverImage" TEXT,
    "publishedAt" TIMESTAMP(3),
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "titleEn" TEXT NOT NULL,
    "titleTh" TEXT NOT NULL,
    "titleCn" TEXT NOT NULL,
    "excerptEn" TEXT NOT NULL,
    "excerptTh" TEXT NOT NULL,
    "excerptCn" TEXT NOT NULL,
    "bodyEn" TEXT NOT NULL,
    "bodyTh" TEXT NOT NULL,
    "bodyCn" TEXT NOT NULL,
    "authorId" TEXT,

    CONSTRAINT "insight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "insight_department" (
    "insightId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "insight_department_pkey" PRIMARY KEY ("insightId","departmentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "attorney_slug_key" ON "attorney"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "department_slug_key" ON "department"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "insight_slug_key" ON "insight"("slug");

-- CreateIndex
CREATE INDEX "insight_publishedAt_idx" ON "insight"("publishedAt");

-- AddForeignKey
ALTER TABLE "attorney_department" ADD CONSTRAINT "attorney_department_attorneyId_fkey" FOREIGN KEY ("attorneyId") REFERENCES "attorney"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "attorney_department" ADD CONSTRAINT "attorney_department_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insight" ADD CONSTRAINT "insight_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "attorney"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insight_department" ADD CONSTRAINT "insight_department_insightId_fkey" FOREIGN KEY ("insightId") REFERENCES "insight"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "insight_department" ADD CONSTRAINT "insight_department_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "department"("id") ON DELETE CASCADE ON UPDATE CASCADE;
