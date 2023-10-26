/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "antd";
import Desktop1 from "../../assets/Home/carousel/1.jpg";
import Desktop2 from "../../assets/Home/carousel/2.jpg";
import Desktop3 from "../../assets/Home/carousel/3.jpg";
import mobile1 from "../../assets/Home/carousel/mobile1.jpg";
import mobile2 from "../../assets/Home/carousel/mobile2.jpg";
import mobile3 from "../../assets/Home/carousel/mobile3.jpg";

export default function IntroCarousel() {
  return (
    <>
      <div className="w-full max-sm:pt-20 bg-primary max-sm:hidden">
        <Carousel
          dotPosition="bottom"
          autoplay
          draggable
          effect="fade"
          speed={1000}
          pauseOnFocus={false}
          pauseOnHover={false}
          autoplaySpeed={3000}
        >
          <img
            src={Desktop1.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
          <img
            src={Desktop2.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
          <img
            src={Desktop3.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
        </Carousel>
      </div>
      <div className="w-full hidden max-sm:block">
        <Carousel
          dotPosition="bottom"
          autoplay
          draggable
          effect="fade"
          speed={1000}
          pauseOnFocus={false}
          pauseOnHover={false}
          autoplaySpeed={3000}
        >
          <img
            src={mobile1.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
          <img
            src={mobile2.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
          <img
            src={mobile3.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
        </Carousel>
      </div>
    </>
  );
}
