let users = [
  { id: 1, name: "Intan" },
  { id: 2, name: "Budi" },
];

// GET -> mengambil data
export async function GET() {
  return Response.json(users);
}

// POST -> menambah data
export async function POST(request) {
  const body = await request.json();

  const newUser = {
    id: users.length + 1,
    name: body.name,
  };

  users.push(newUser);

  return Response.json({
    message: "User berhasil ditambahkan",
    data: newUser,
  });
}