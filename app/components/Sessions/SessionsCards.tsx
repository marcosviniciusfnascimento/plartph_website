import { Variants, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface SessionsCardsProps {
  image: StaticImageData;
  title: string;
  onClick: () => void;
}

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 300,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export default function SessionsCards(props: SessionsCardsProps) {
  const { image, title, onClick } = props;
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.8 }}
      onClick={onClick}
      className="group rounded-lg relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
    >
      <div className="h-96 w-72 shadow-lg">
        <img
          alt="cardImage"
          src={image.src}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/10 group-hover:via-black/20 group-hover:to-black/15"></div>
      <div className="absolute inset-0 flex translate-y-[30%] flex-col items-center justify-center px-9 text-center transition-all duration-500">
        <h1 className="font-theseasons text-xl font-normal text-white">
          {title}
        </h1>
      </div>
    </motion.div>
  );
}
