import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const id = Number(params.id);
  try {
    const type = await prisma.menuType.findUnique({
      where: {
        typeid: id,
      },
    });
    if (!type) {
      throw new Error("Menu type not found");
    }
    return Response.json(type);
  } catch (error) {
    return NextResponse({ error }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const id = Number(params.id);
  const { typeName } = await request.json();

  const updateType = await prisma.menutype.update({
    where: {
      id: id,
    },
    data: {
      typeName,
    },
  });
  return Response.json(updateType)
}

export async function DELETE(request, { params }){
    const id = Number(params.id);

    const deleteType = await prisma.menutype.delete({
        where: {
            id: id
        }
    })
    return Response.json(deleteType)
}
