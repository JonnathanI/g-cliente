-- CreateTable
CREATE TABLE "gestionC" (
    "id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "gestionC_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "gestionC_telefono_key" ON "gestionC"("telefono");
