import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(){
    const type = await prisma.menutype.findMany()
    return Response.json(type)
}

export async function POST(req) {
  const { typeName } = await req.json();
  const newType = await prisma.menutype.create({
    data: {
        typeName,
    }
  })
  return Response.json(newType)
}
