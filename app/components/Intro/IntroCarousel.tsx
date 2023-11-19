/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "antd";
import Desktop1 from "../../assets/Home/carousel/1.jpg";
import Desktop2 from "../../assets/Home/carousel/2.jpg";
import Desktop3 from "../../assets/Home/carousel/3.jpg";
import mobile1 from "../../assets/Home/carousel/mobile1.jpg";
import mobile2 from "../../assets/Home/carousel/mobile2.jpg";
import mobile3 from "../../assets/Home/carousel/mobile3.jpg";
import Image from "next/image";

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
            src={
              "https://res.cloudinary.com/dkskhotc8/image/upload/v1700403161/1_r8czy6.jpg"
            }
            alt="image"
          />
          <img
            src={
              "https://res.cloudinary.com/dkskhotc8/image/upload/v1700403161/2_ilhnrl.jpg"
            }
            alt="image"
          />
          <img
            src={
              "https://res.cloudinary.com/dkskhotc8/image/upload/v1700403162/3_kxj3rr.jpg"
            }
            alt="image"
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
            src={
              "https://res.cloudinary.com/dkskhotc8/image/upload/v1700403161/mobile1_xv2ajr.jpg"
            }
            alt="CarrouselImage"
          />

          <img
            src={
              "https://res.cloudinary.com/dkskhotc8/image/upload/v1700403161/mobile2_xokplr.jpg"
            }
            alt="CarrouselImage"
          />

          <img
            src={
              "https://res.cloudinary.com/dkskhotc8/image/upload/v1700403161/mobile3_iefq2o.jpg"
            }
            alt="CarrouselImage"
          />
        </Carousel>
      </div>
    </>
  );
}
