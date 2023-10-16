import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LayoutPages from "./components/Layout";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plartph",
  description: "Plartph - Fotografia Materna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <LayoutPages>{children}</LayoutPages>
        </Providers>
      </body>
    </html>
  );
}
