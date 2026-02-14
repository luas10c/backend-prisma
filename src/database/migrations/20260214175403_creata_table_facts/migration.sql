-- CreateTable
CREATE TABLE "tb_facts" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "source" TEXT,
    "category_id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tb_facts_pkey" PRIMARY KEY ("id")
);
