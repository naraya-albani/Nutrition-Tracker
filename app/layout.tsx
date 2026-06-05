import "./globals.css";

export const metadata = {
  title: "Nutrition Tracker",
  description:
    "Aplikasi untuk memindai makanan dan melacak nutrisi harian Anda dengan mudah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
