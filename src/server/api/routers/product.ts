import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
// TODO #1: Create tRPC router
// TODO #2: Import Prisma client
// TODO #3: Query product categories and return response

export const productRouter = createTRPCRouter({
  getProductCategories: protectedProcedure.query(async () => {
    return "product categories";
  }),
});
