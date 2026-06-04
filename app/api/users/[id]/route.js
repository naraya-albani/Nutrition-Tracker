export async function GET(request, context) {
  const { id } = await context.params;

  return Response.json({
    id,
    message: `User dengan id ${id}`,
  });
}

export async function PUT(request, context) {
  const { id } = await context.params;

  const body = await request.json();

  return Response.json({
    message: `User ${id} berhasil diupdate`,
    data: body,
  });
}

export async function DELETE(request, context) {
  const { id } = await context.params;

  return Response.json({
    message: `User ${id} berhasil dihapus`,
  });
}