import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  try {
    // Remote existing data
    await prisma.$executeRaw`DELETE FROM Category`;
    await prisma.$executeRaw`DELETE FROM Product`;

    // Seed categories
    const mockCategories = [
      { name: "Electronics" },
      { name: "Clothing" },
      { name: "Home Decor" },
      { name: "Beauty" },
      { name: "Books" },
      { name: "Sports" },
    ];

    const seededCategories = await prisma.category.createMany({
      data: mockCategories,
      skipDuplicates: true,
    });

    const categories = await prisma.category.findMany();

    console.log(`Seeded ${seededCategories.count} categories.`);

    // Seed products
    const products = [
      {
        name: "Wireless Headphones",
        description: "Experience immersive sound with our wireless headphones.",
        price: 99.99,
        sold: 10,
        image: "headphones.jpg",
        isFlashSale: false,
        categoryId: categories?.[0]?.id ?? "1",
      },
      {
        name: "Denim Jeans",
        description:
          "Our denim jeans offer comfort and style for any occasion.",
        price: 59.99,
        sold: 5,
        image: "jeans.jpg",
        isFlashSale: true,
        categoryId: categories?.[1]?.id ?? "2",
      },
      {
        name: "Decorative Throw Pillow",
        description:
          "Add a touch of elegance to your living space with our decorative throw pillow.",
        price: 19.99,
        sold: 8,
        image: "pillow.jpg",
        isFlashSale: false,
        categoryId: categories?.[2]?.id ?? "3",
      },
      {
        name: "Lipstick Set",
        description:
          "Get the perfect pout with our long-lasting lipstick set in various shades.",
        price: 29.99,
        sold: 12,
        image: "lipstick.jpg",
        isFlashSale: true,
        categoryId: categories?.[3]?.id ?? "4",
      },
      {
        name: "Smartwatch",
        description: "Stay connected with our advanced smartwatch.",
        price: 149.99,
        sold: 3,
        image: "smartwatch.jpg",
        isFlashSale: true,
        categoryId: categories?.[0]?.id ?? "1",
      },
      {
        name: "Graphic T-Shirt",
        description: "Make a statement with our trendy graphic t-shirt.",
        price: 24.99,
        sold: 7,
        image: "tshirt.jpg",
        isFlashSale: false,
        categoryId: categories?.[1]?.id ?? "2",
      },
      {
        name: "Wall Clock",
        description: "Enhance your home decor with our stylish wall clock.",
        price: 39.99,
        sold: 2,
        image: "wallclock.jpg",
        isFlashSale: false,
        categoryId: categories?.[2]?.id ?? "3",
      },
      {
        name: "Mascara",
        description: "Get voluminous lashes with our high-quality mascara.",
        price: 14.99,
        sold: 9,
        image: "mascara.jpg",
        isFlashSale: false,
        categoryId: categories?.[3]?.id ?? "4",
      },
    ];

    const seededProducts = await prisma.product.createMany({
      data: products,
      skipDuplicates: true,
    });

    console.log(`Seeded ${seededProducts.count} products.`);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
