import "./globals.css";

export const metadata = {
  title: "My Backend",
  description: "Backend Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}