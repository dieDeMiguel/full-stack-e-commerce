import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DeleteAllProducts() {
  await prisma.product.deleteMany();
}

DeleteAllProducts()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// (async () => {
//   try {
//     await main();
//   } catch (e) {
//     throw e;
//   } finally {
//     await prisma.$disconnect();
//   }
// })();
