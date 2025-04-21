import {z} from 'zod';

export const createUserSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
  });

// model User {
//     id        String        @id @default(uuid())
//     username  String
//     email     String        @unique
//     password  String
//     createdAt DateTime      @default(now())
//     recipes   Recipe[]
//     comments  Commentaire[]
//   }