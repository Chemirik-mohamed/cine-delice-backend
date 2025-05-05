import { hashPassword } from "lib/bcrypt";
import { type CreateUserInput, CreateUserSchema } from "schemas/user.schema";

import type { PrismaClient } from "../../../generated/prisma";

export async function seedUser(prisma: PrismaClient) {
  const data: CreateUserInput = {
    username: "Ayoub",
    email: "ayoubgre@gmail.com",
    password: "test",
  };

  const validatedData = CreateUserSchema.parse(data);

  const hashedPassword = await hashPassword(validatedData.password);

  await prisma.user.create({
    data: {
      ...validatedData,
      password: hashedPassword,
    },
  });
}
