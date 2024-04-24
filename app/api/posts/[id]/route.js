const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export async function GET(req, { params }) {
  try {
    return Response.json(await prisma.post.findUnique({
      where: { id: Number(params.id) },
    }));
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  try {
    const { title, content } = await req.json();
    return Response.json(await prisma.post.update({
      where: { id: Number(params.id) },
      data: { title, content },
    }));
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}

export async function DELETE(req, { params }) {
  try {
    return Response.json(await prisma.post.delete({
      where: { id: Number(params.id) },
    }));
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
}