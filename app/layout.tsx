import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio — Máté Melcher",
  description:
    "Portfolio of Máté Melcher — engineer, economist, and self-taught software developer.",
  icons: {
    icon: "/img/mountain_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-surface-1">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-fg bg-transparent text-[15px] sm:text-base`}
      >
        {children}
      </body>
    </html>
  );
}
