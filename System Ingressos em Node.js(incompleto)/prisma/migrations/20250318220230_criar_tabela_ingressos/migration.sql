-- CreateTable
CREATE TABLE "Ingresso" (
    "id" SERIAL NOT NULL,
    "jogo" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "setor" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ingresso_pkey" PRIMARY KEY ("id")
);
