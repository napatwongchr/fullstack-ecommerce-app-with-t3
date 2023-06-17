import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// TODO #1: Create tRPC router
// TODO #2: Import Prisma client
// TODO #3: Query product categories and return response

export const productRouter = createTRPCRouter({
  getProductCategories: protectedProcedure.query(async () => {
    const categories = await prisma.category.findMany();
    return categories;
  }),

  getFlashSales: protectedProcedure.query(async () => {
    const flashSaleProducts = await prisma.product.findMany({
      where: {
        isFlashSale: true,
      },
    });
    return flashSaleProducts;
  }),
});
