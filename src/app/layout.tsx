import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Golden Dev Studio",
  description:
    "Portfolio premium de Geordys Adjin - Closer, Developpeur No-code et Monteur Video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-black text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
