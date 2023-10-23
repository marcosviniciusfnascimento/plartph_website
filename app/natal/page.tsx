"use client";
import { motion } from "framer-motion";
import { fadeInVariant } from "../valores/page";
import Image from "next/image";
import TitleImage from "../assets/natal/titulo.svg";
import TitleMobile from "../assets/natal/sessaoNatalMobile.svg";
import { natalGalleryImages } from "../assets/natal/mansory";
import Reveal from "../components/Reveal/Reveal";
import cadeado from "../assets/natal/cadeado.svg";
import bgImage from "../assets/natal/mansory/getty-christmas-decor-veranda-1567624256.png";

export default function NatalPage() {
  const sortedImageArray = Object.values(natalGalleryImages).sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="min-h-screen bg-zinc-300 h-full w-full flex flex-col items-center justify-start">
      <motion.div
        variants={fadeInVariant}
        animate="animate"
        initial="initial"
        transition={{
          staggerChildren: 0.1,
          duration: 0.8,
        }}
        className="w-full flex flex-col items-center justify-start relative"
      >
        <div className="w-full flex flex-col items-center h-96 justify-center relative">
          <Image
            src={TitleImage}
            alt="SessaoNatal"
            priority
            className="w-full h-96 absolute max-sm:hidden"
          />
          <Image
            src={TitleMobile}
            alt="SessaoNatal"
            priority
            className="w-full h-96 absolute hidden max-sm:block"
          />
          <h5 className="font-theseasonsit  text-zinc-800 text-3xl ml-64 mt-56 absolute max-sm:ml-32 max-sm:text-xl max-sm:mt-32">
            dois mil e vinte e três
          </h5>
        </div>
      </motion.div>
      <div className="columns-2 md:columns-4 lg:columns-5 md:p-24 p-10 bg-[#6a7153] w-full">
        {sortedImageArray.map((image, index) => (
          <Reveal width="100%" key={image.src.toString()} delay={0.05 * index}>
            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
              <Image
                src={image}
                alt="galleryImage"
                className="w-full rounded-md object-cover"
              />
            </div>
          </Reveal>
        ))}
      </div>
      <div className="flex flex-col bg-zinc-200 items-center justify-center py-16 w-full">
        <h5 className="font-Geosans text-zinc-800 text-3xl pb-20">Cenário</h5>
        <div className="relative w-full h-[450px] flex z-20 items-center justify-center">
          <Image
            src={bgImage}
            alt="bg"
            className="rounded-lg w-[550px] max-sm:w-[390px]"
          />
          <div className="backdrop-blur-xl absolute h-full w-[550px] z-10 rounded-lg  max-sm:w-[390px]" />
          <Image src={cadeado} alt="bg" width={350} className="absolute z-20" />
        </div>
      </div>
    </div>
  );
}
