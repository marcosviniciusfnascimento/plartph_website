/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "antd";
import Image2 from "../../assets/Home/carousel/Design sem nome.jpg";
import Image3 from "../../assets/Home/carousel/Design sem nome (2).jpg";
import Image1 from "../../assets/Home/carousel/Design sem nome (1).jpg";

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
            src={Image1.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
          <img
            src={Image2.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
          <img
            src={Image3.src}
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
            src={Image2.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
          <img
            src={Image1.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
          <img
            src={Image3.src}
            alt="CarrouselImage"
            className="w-full h-auto"
          />
        </Carousel>
      </div>
    </>
  );
}
