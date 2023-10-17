import { Carousel } from "antd";
import { Variants, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

const AnimationVariants: Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

function GetCarouselPage(image: StaticImageData) {
  return (
    <div className="h-96 rounded-md w-80 ">
      <div
        className="group h-96 w-[97%] rounded-md overflow-hidden relative"
        key={image.src.toString()}
      >
        <Image
          src={image}
          alt="carouselImage"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export type SessionCarrouselProps = {
  gallery: StaticImageData[];
};

export default function SessionCarousel({ gallery }: SessionCarrouselProps) {
  return (
    <motion.div
      variants={AnimationVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <Carousel
        dots={false}
        infinite
        draggable
        autoplay
        autoplaySpeed={100}
        speed={6000}
        waitForAnimate
        slidesToShow={4}
        pauseOnFocus={false}
        pauseOnHover={false}
        slidesToScroll={1}
        style={{
          width: "100%",
          height: "auto",
          padding: "0",
        }}
        responsive={[
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {gallery.map((image) => GetCarouselPage(image))}
      </Carousel>
    </motion.div>
  );
}
