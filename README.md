# 🥗 Nutrition Tracker

A web-based application for tracking daily nutritional intake, built with **Next.js 16**, **Supabase**, **Prisma**, and **TensorFlow.js**.

🔗 **Live Demo**: [nutrisi-tracker.vercel.app](https://nutrisi-tracker.vercel.app)

---

## 📋 Deskripsi

Nutrition Tracker adalah aplikasi pelacak nutrisi harian yang memungkinkan pengguna memantau asupan gizi secara efisien. Aplikasi ini mengintegrasikan autentikasi pengguna melalui Supabase, penyimpanan data persisten dengan PostgreSQL via Prisma ORM, serta kemampuan analisis berbasis machine learning menggunakan TensorFlow.js.

---

## ✨ Fitur Utama

- **Autentikasi Pengguna** — Login & register aman menggunakan Supabase Auth (SSR-compatible)
- **Pelacakan Nutrisi Harian** — Catat dan pantau asupan kalori, protein, karbohidrat, dan lemak
- **Machine Learning** — Analisis nutrisi berbasis model TensorFlow.js langsung di browser
- **Database Persisten** — Penyimpanan data menggunakan PostgreSQL melalui Prisma ORM
- **Responsive Design** — Antarmuka yang responsif dibangun dengan Tailwind CSS v4
- **Server-Side Rendering** — Performa optimal dengan Next.js App Router

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|---|---|
| Framework | Next.js 16.2.6 (App Router) |
| Language | TypeScript |
| UI | React 19, Tailwind CSS v4 |
| Auth & Backend | Supabase (`@supabase/ssr`, `@supabase/supabase-js`) |
| ORM | Prisma v7 |
| Database | PostgreSQL (via Supabase) |
| Machine Learning | TensorFlow.js v4 |
| Linting | ESLint 9 |

---

## 🚀 Getting Started

### Prasyarat

Pastikan sudah terinstall:
- Node.js v18+
- npm / yarn / pnpm / bun
- Akun [Supabase](https://supabase.com)

### Instalasi

1. **Clone repository**

```bash
git clone https://github.com/naraya-albani/Nutrition-Tracker.git
cd Nutrition-Tracker
```

2. **Install dependencies**

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Konfigurasi environment**

Salin file `.env.example` menjadi `.env.local` dan isi dengan nilai yang sesuai:

```bash
cp .env.example .env.local
```

```env
DATABASE_URL=""
DIRECT_URL=""
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

| Variabel | Keterangan |
|---|---|
| `DATABASE_URL` | Connection string PostgreSQL (pooled, dari Supabase) |
| `DIRECT_URL` | Direct connection string PostgreSQL (untuk migrasi Prisma) |
| `NEXT_PUBLIC_SUPABASE_URL` | URL project Supabase kamu |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key dari Supabase dashboard |

4. **Jalankan migrasi database**

```bash
npx prisma migrate dev
```

5. **Jalankan development server**

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 📁 Struktur Proyek

```
Nutrition-Tracker/
├── app/                    # Next.js App Router (pages & routes)
├── lib/
│   └── supabase/           # Konfigurasi Supabase client
├── prisma/                 # Schema & migrasi database
├── public/                 # Static assets
├── .env.example            # Template environment variables
├── next.config.js          # Konfigurasi Next.js
├── prisma.config.ts        # Konfigurasi Prisma
├── proxy.ts                # Proxy configuration
└── package.json
```

---

## 📜 Scripts

| Script | Perintah | Deskripsi |
|---|---|---|
| Development | `npm run dev` | Jalankan server development |
| Build | `npm run build` | Build untuk production |
| Start | `npm run start` | Jalankan server production |
| Lint | `npm run lint` | Cek kode dengan ESLint |

---

## 🗄️ Database

Proyek ini menggunakan **Prisma ORM** dengan **PostgreSQL** yang di-host di Supabase. Schema database didefinisikan di `prisma/schema.prisma`.

Untuk melihat dan mengelola data secara visual:

```bash
npx prisma studio
```

---

## ☁️ Deployment

Aplikasi ini di-deploy di **Vercel**. Untuk deploy mandiri:

1. Push ke repository GitHub
2. Import project di [vercel.com](https://vercel.com)
3. Tambahkan environment variables di Vercel dashboard
4. Deploy otomatis setiap push ke branch `master`

---

## 👤 Anggota Author

- [Naraya Albani](https://github.com/naraya-albani)
- [Ana Setiawati](https://github.com/setiawatiana90-droid)
- [Intan Mayangsari](https://github.com/mayangintans84-alt)

---

## 📄 License

Proyek ini bersifat private. Hak cipta © 2026 Tim Capstone Dicoding.
