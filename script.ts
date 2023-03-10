import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  // const service = await prisma.service.create({
  //   data: {
  //     name: "Club Payment",
  //     type: "Club",
  //     price: 500,
  //   },
  // });
  // console.log(service);
  const services = await prisma.service.findMany();
  console.log(services);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
