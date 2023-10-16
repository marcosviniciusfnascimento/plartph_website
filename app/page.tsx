"use client";
import Image from "next/image";
import introBgImage from "../public/bgLogin.jpg";
import IntroCarousel from "./components/Intro/IntroCarousel";
import About from "./components/Intro/About";
import MansoryGallery from "./components/MansoryGallery/MansoryGallery";

export default function Home() {
  return (
    <div>
      <IntroCarousel />
      <About />
      <MansoryGallery />
    </div>
  );
}
