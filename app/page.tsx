"use client";
import IntroCarousel from "./components/Intro/IntroCarousel";
import About from "./components/Intro/About";
import MansoryGallery from "./components/MansoryGallery/MansoryGallery";
import { useEffect } from "react";
import useScreenSize from "./hooks/useScreenSize";

export default function Home() {
  return (
    <div className="bg-zinc-200">
      <IntroCarousel />
      <About />
      <MansoryGallery />
    </div>
  );
}
