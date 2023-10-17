"use client";

import Image from "next/image";
import fabiolaImg from "../../assets/Fabiola.svg";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import useScreenSize from "@/app/hooks/useScreenSize";
import { Variants, motion } from "framer-motion";
import Link from "next/link";

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

export default function About() {
  const isMobile = useScreenSize();
  return (
    <>
      {isMobile && (
        <div className="bg-zinc-200 py-10 space-y-4 items-center justify-center flex flex-col w-full relative h-auto">
          <span className="flex flex-col z-10">
            <motion.h5
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8 }}
              style={{ display: "relative" }}
              className="text-zinc-800 font-theseasons text-[40px] z-10"
            >
              {" "}
              Prazer, Fabíola{" "}
            </motion.h5>
            <motion.h5
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8 }}
              style={{ display: "relative" }}
              className="text-zinc-800 font-theseasons text-[14px] text-center z-10"
            >
              {" "}
              guardiã de lembranças
            </motion.h5>
          </span>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8 }}
            style={{ display: "relative" }}
          >
            <Image
              src={fabiolaImg}
              alt="fabiola"
              height={412}
              width={266}
              className="z-0"
              priority
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8 }}
            style={{ display: "relative" }}
            className="flex items-center justify-center flex-col"
          >
            <p className="font-Geosans text-zinc-800 text-lg font-semibold w-full px-12 z-10 text-center">
              Acredito no poder da conexão que a fotografia traz, no amor
              envolvido, no momento que se torna único a cada clique e sorriso.
              É uma forma valiosa de documentar as relações e os momentos
              especiais entre as pessoas que amamos.
            </p>
            <p className="font-Geosans text-zinc-800 text-lg font-semibold w-full px-12 z-10 text-center">
              Capturar esses momentos entre mãe e filha(o) pode ser ainda mais
              emocionante. As fotos trarão de volta lembranças de momentos
              felizes e ajudarão a manter essas memórias vivas por muitos anos.
            </p>
            <p className="font-theseasons text-zinc-800 text-lg font-semibold w-full px-12 z-10 mt-2 text-center">
              Conheça meu trabalho !
            </p>
            <Link href={"/sessoes"}>
              <Button
                endContent={<ArrowRight size={15} />}
                className="bg-primary mt-3 rounded-sm"
                size="sm"
              >
                Clique para saber Mais
              </Button>
            </Link>
          </motion.div>
        </div>
      )}
      {!isMobile && (
        <div className="bg-zinc-200 py-10 items-center justify-center flex w-full relative h-[90vh]">
          <span className="flex flex-col absolute top-24 left-[38%] z-10">
            <motion.h5
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8 }}
              style={{ display: "relative" }}
              className="text-zinc-800 font-theseasons text-[50px] z-10"
            >
              {" "}
              Prazer, Fabíola{" "}
            </motion.h5>
            <motion.h5
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.8 }}
              style={{ display: "relative" }}
              className="text-zinc-800 font-theseasons text-[17px] text-end z-10"
            >
              {" "}
              guardiã de lembranças
            </motion.h5>
          </span>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8 }}
            style={{ display: "relative" }}
            className="ml-52 absolute left-[40%] z-0"
          >
            <Image
              src={fabiolaImg}
              alt="fabiola"
              height={588}
              width={416}
              priority
            />
          </motion.div>
          <motion.div
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8 }}
            className="flex items-start justify-center flex-col absolute top-56 left-[25%]"
          >
            <p className="font-Geosans text-zinc-800 text-lg font-semibold w-96 z-10">
              Acredito no poder da conexão que a fotografia traz, no amor
              envolvido, no momento que se torna único a cada clique e sorriso.
              É uma forma valiosa de documentar as relações e os momentos
              especiais entre as pessoas que amamos.
            </p>
            <p className="font-Geosans text-zinc-800 text-lg font-semibold w-96 z-10">
              Capturar esses momentos entre mãe e filha(o) pode ser ainda mais
              emocionante. As fotos trarão de volta lembranças de momentos
              felizes e ajudarão a manter essas memórias vivas por muitos anos.
            </p>
            <p className="font-theseasons text-zinc-800 text-lg font-semibold w-96 z-10 mt-2">
              Conheça meu trabalho !
            </p>
            <Link href="/sessoes">
              <Button
                endContent={<ArrowRight size={15} />}
                className="bg-primary mt-3 rounded-sm"
                size="sm"
              >
                Clique para saber Mais
              </Button>
            </Link>
          </motion.div>
        </div>
      )}
    </>
  );
}
