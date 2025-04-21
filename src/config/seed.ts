import { prisma } from "../lib/prisma"


async function createUser() {
    const user = await prisma.user.create(
        {
            data:{
                username: 'ayoubdev',
                email: 'ayoub@example.com',
                password: 'supersecret123',
            }
        }
    )
    console.log('✅ User created:', user)
}


createUser()
.catch((e) => {
    console.error('❌ Error while seeding:', e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())