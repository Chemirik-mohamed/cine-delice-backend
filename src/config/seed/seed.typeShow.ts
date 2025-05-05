import type { PrismaClient } from "../../../generated/prisma";

export async function seedTypeShows(prisma: PrismaClient) {
  await prisma.typeShow.createMany({
    data: [{ name: "Film" }, { name: "Série" }],
    skipDuplicates: true,
  });
  console.log("typeshow add and succes");
}
