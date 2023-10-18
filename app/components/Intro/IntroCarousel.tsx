"use client";
import Image from "next/image";
import { Carousel } from "antd";
import Image2 from "../../assets/Home/Amor que vira memória.svg";
import Image3 from "../../assets/Home/Amor que vira memória (1).svg";
import Image1 from "../../assets/Home/Amor que vira memória (2).svg";
import Image1w from "../../assets/Home/Amor_que_vira_memória_w.svg";
import Image3w from "../../assets/Home/Amor_que_vira_memória_(2)_w.svg";
import Image2w from "../../assets/Home/Amor_que_vira_memória_(3)_w.svg";

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
          <Image
            src={Image1}
            alt="CarrouselImage"
            className="w-full h-auto"
            priority
          />
          <Image
            src={Image2}
            alt="CarrouselImage"
            className="w-full h-auto"
            priority
          />
          <Image
            src={Image3}
            alt="CarrouselImage"
            className="w-full h-auto"
            priority
          />
        </Carousel>
      </div>
      <div className="w-full max-sm:pt-20 bg-primary hidden max-sm:block">
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
          <Image
            src={Image1w}
            alt="CarrouselImage"
            className="w-full h-auto"
            priority
          />
          <Image
            src={Image2w}
            alt="CarrouselImage"
            className="w-full h-auto"
            priority
          />
          <Image
            src={Image3w}
            alt="CarrouselImage"
            className="w-full h-auto"
            priority
          />
        </Carousel>
      </div>
    </>
  );
}
