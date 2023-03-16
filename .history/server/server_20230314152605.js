import fastify from "fastify";
import dotenv from 'dotenv'
import { PrismaClient } from "@prisma/client";
import sensible from "@fastify/sensible"

dotenv.config()

const app = fastify()
const prisma = new PrismaClient()

app.get("/posts", async (req, res) => {
    return await prisma.post.findMany({
            select: {
                id: true,
                title: true,
            },
     })
})

function commitToDb(promise) {
    app.to(promise)
}

app.listen({ port: 3001 })

