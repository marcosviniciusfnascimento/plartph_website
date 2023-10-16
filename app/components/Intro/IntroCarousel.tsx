"use client";
import Image from "next/image";
import { Carousel } from "antd";
import Image1 from "../../assets/Home/Amor_que_vira_memória.svg";
import Image2 from "../../assets/Home/Amor_que_vira_memória_(2).svg";
import Image3 from "../../assets/Home/Amor_que_vira_memória_(3).svg";

export default function IntroCarousel() {
  return (
    <div className="w-[98.89999vw]">
      <Carousel dotPosition="bottom" autoplay draggable effect="fade">
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
  );
}
