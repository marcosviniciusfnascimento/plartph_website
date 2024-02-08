"use client";
import IntroCarousel from "./components/Intro/IntroCarousel";
import About from "./components/Intro/About";
import MansoryGallery from "./components/MansoryGallery/MansoryGallery";
import HeroSection from "./components/Intro/HeroSection";

export default function Home() {
  return (
    <div className="bg-zinc-200">
      <HeroSection />
      {/* <IntroCarousel />
      <About />
      <MansoryGallery /> */}
    </div>
  );
}
