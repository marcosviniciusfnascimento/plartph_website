"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutPages({ children }: LayoutProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto">
      <Navbar />
      <section className="w-full">{children}</section>
      <Footer />
    </main>
  );
}
