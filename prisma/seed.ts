import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  try {
    // Remote existing data
    await prisma.$executeRaw`DELETE FROM Category`;
    await prisma.$executeRaw`DELETE FROM Product`;

    // Seed categories
    const mockCategories = [
      {
        name: "Electronics",
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686989078/fullstack-ecommerce-app/categories/electronics_byufpk.jpg",
      },
      {
        name: "Clothing",
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686989078/fullstack-ecommerce-app/categories/clothes_v112ua.jpg",
      },
      {
        name: "Home Decor",
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686989078/fullstack-ecommerce-app/categories/home-decor_zmmiwl.jpg",
      },
      {
        name: "Beauty",
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686989078/fullstack-ecommerce-app/categories/beauty_fwxehg.jpg",
      },
      {
        name: "Books",
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686989079/fullstack-ecommerce-app/categories/books_rcxu3j.jpg",
      },
      {
        name: "Sports",
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686989078/fullstack-ecommerce-app/categories/sport_pf1tgm.jpg",
      },
    ];

    // const seededCategories = await prisma.category.createMany({
    //   data: mockCategories,
    // });

    await Promise.all(
      mockCategories.map(async (category) => {
        await prisma.category.create({
          data: category,
        });
      })
    );

    const categories = await prisma.category.findMany();

    console.log(`Seeded categories.`);

    // Seed products
    const products = [
      {
        name: "Wireless Headphones",
        description: "Experience immersive sound with our wireless headphones.",
        price: 99.99,
        sold: 10,
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686988245/fullstack-ecommerce-app/products/wireless-headphone_odbynd.jpg",
        isFlashSale: false,
        categoryId: categories?.[0]?.id ?? "1",
      },
      {
        name: "Denim Jeans",
        description:
          "Our denim jeans offer comfort and style for any occasion.",
        price: 59.99,
        sold: 5,
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686988246/fullstack-ecommerce-app/products/denim-jeans_ez2wgd.jpg",
        isFlashSale: true,
        categoryId: categories?.[1]?.id ?? "2",
      },
      {
        name: "Decorative Throw Pillow",
        description:
          "Add a touch of elegance to your living space with our decorative throw pillow.",
        price: 19.99,
        sold: 8,
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686988245/fullstack-ecommerce-app/products/pillow_zor0y6.jpg",
        isFlashSale: false,
        categoryId: categories?.[2]?.id ?? "3",
      },
      {
        name: "Lipstick Set",
        description:
          "Get the perfect pout with our long-lasting lipstick set in various shades.",
        price: 29.99,
        sold: 12,
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686988246/fullstack-ecommerce-app/products/lipstick-set_jxkaaq.jpg",
        isFlashSale: true,
        categoryId: categories?.[3]?.id ?? "4",
      },
      {
        name: "Smartwatch",
        description: "Stay connected with our advanced smartwatch.",
        price: 149.99,
        sold: 3,
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686988245/fullstack-ecommerce-app/products/smart-watch_zvu0hn.jpg",
        isFlashSale: true,
        categoryId: categories?.[0]?.id ?? "1",
      },
      {
        name: "Graphic T-Shirt",
        description: "Make a statement with our trendy graphic t-shirt.",
        price: 24.99,
        sold: 7,
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686988245/fullstack-ecommerce-app/products/graphic-tshirt_rrjvfp.jpg",
        isFlashSale: false,
        categoryId: categories?.[1]?.id ?? "2",
      },
      {
        name: "Wall Clock",
        description: "Enhance your home decor with our stylish wall clock.",
        price: 39.99,
        sold: 2,
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686988245/fullstack-ecommerce-app/products/wall-clock_jpimji.jpg",
        isFlashSale: false,
        categoryId: categories?.[2]?.id ?? "3",
      },
      {
        name: "Mascara",
        description: "Get voluminous lashes with our high-quality mascara.",
        price: 14.99,
        sold: 9,
        image:
          "https://res.cloudinary.com/techupth/image/upload/v1686988245/fullstack-ecommerce-app/products/mascara_gnomzj.jpg",
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
