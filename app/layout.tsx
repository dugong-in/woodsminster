import type { Metadata } from "next";
import { Montserrat_Alternates, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WoodsMinster | Handcrafted Luxury Furniture",
  description:
    "Discover exquisite, handcrafted furniture pieces that blend timeless elegance with modern design. Each WoodsMinster creation tells a unique story of artisanal excellence and sustainable luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserratAlternates.className} ${geistMono.variable} antialiased transition-colors duration-500 theme-transition`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
