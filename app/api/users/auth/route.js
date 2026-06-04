let users = [
  {
    id: 1,
    username: "admin",
    password: "123456",
  },
];

// GET - Melihat semua user
export async function GET() {
  return Response.json({
    success: true,
    data: users,
  });
}

// POST - Register / Login
export async function POST(request) {
  const body = await request.json();

  const { username, password } = body;

  // cek user sudah ada
  const user = users.find((u) => u.username === username);

  if (user) {
    // LOGIN
    if (user.password === password) {
      return Response.json({
        success: true,
        message: "Login berhasil",
        user,
      });
    }

    return Response.json({
      success: false,
      message: "Password salah",
    });
  }

  // REGISTER
  const newUser = {
    id: users.length + 1,
    username,
    password,
  };

  users.push(newUser);

  return Response.json({
    success: true,
    message: "Registrasi berhasil",
    user: newUser,
  });
}

// PUT - Update user
export async function PUT(request) {
  const body = await request.json();

  const { id, username } = body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return Response.json({
      success: false,
      message: "User tidak ditemukan",
    });
  }

  user.username = username;

  return Response.json({
    success: true,
    message: "User berhasil diupdate",
    data: user,
  });
}

// DELETE - Hapus user
export async function DELETE(request) {
  const body = await request.json();

  const { id } = body;

  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return Response.json({
      success: false,
      message: "User tidak ditemukan",
    });
  }

  users.splice(index, 1);

  return Response.json({
    success: true,
    message: "User berhasil dihapus",
  });
}
