import "./globals.css";

import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font = Crimson_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
