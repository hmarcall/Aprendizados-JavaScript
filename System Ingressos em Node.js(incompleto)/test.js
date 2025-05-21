import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Cria um novo ingresso
  const ingresso = await prisma.ingresso.create({
    data: {
      jogo: "Flamengo x Athletic",
      preco: 150.00,
      setor: "Arquibancada",
    },
  });

  console.log("Ingresso criado:", ingresso);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });