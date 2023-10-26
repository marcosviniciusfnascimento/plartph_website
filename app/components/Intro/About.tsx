/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import fabiolaImg from "../../assets/Fabiola.png";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { Variants, motion } from "framer-motion";
import Link from "next/link";

export const verticalVariants: Variants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const horizontalVariants: Variants = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const InvertHorizontalVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function About() {
  return (
    <>
      <div className="bg-zinc-200 py-10 space-y-4 items-center justify-center flex-col w-full relative h-auto hidden max-sm:flex">
        <span className="flex flex-col z-10">
          <motion.h5
            variants={verticalVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ display: "relative" }}
            className="text-zinc-800 font-theseasons text-[40px] z-10"
          >
            {" "}
            Prazer, Fabíola{" "}
          </motion.h5>
          <motion.h5
            variants={verticalVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ display: "relative" }}
            className="text-zinc-800 font-theseasons text-[14px] text-center z-10"
          >
            {" "}
            guardiã de lembranças
          </motion.h5>
        </span>
        <motion.div
          variants={InvertHorizontalVariants}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{ display: "relative" }}
        >
          <img
            src={fabiolaImg.src}
            alt="fabiola"
            height={412}
            width={266}
            className="z-0"
          />
        </motion.div>
        <motion.div
          variants={horizontalVariants}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: "relative" }}
          className="flex items-center justify-center flex-col"
        >
          <p className="font-Geosans text-zinc-800 text-lg font-semibold w-full px-12 z-10 text-center">
            Acredito no poder da conexão que a fotografia traz, no amor
            envolvido, no momento que se torna único a cada clique e sorriso. É
            uma forma valiosa de documentar as relações e os momentos especiais
            entre as pessoas que amamos.
          </p>
          <p className="font-Geosans text-zinc-800 text-lg font-semibold w-full px-12 z-10 text-center">
            Capturar esses momentos entre mãe e filha(o) pode ser ainda mais
            emocionante. As fotos trarão de volta lembranças de momentos felizes
            e ajudarão a manter essas memórias vivas por muitos anos.
          </p>
          <p className="font-theseasonsit text-zinc-800 text-lg font-semibold w-full px-12 z-10 mt-2 text-center">
            Conheça meu trabalho!
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
      <div className="bg-zinc-200 py-10 items-center justify-center flex w-full relative h-[90vh] max-sm:hidden">
        <span className="flex flex-col absolute top-24 left-[38%] z-10">
          <motion.h5
            variants={verticalVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ display: "relative" }}
            className="text-zinc-800 font-theseasons text-[50px] z-10"
          >
            {" "}
            Prazer, Fabíola{" "}
          </motion.h5>
          <motion.h5
            variants={verticalVariants}
            initial="initial"
            whileInView={"animate"}
            viewport={{
              once: true,
            }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{ display: "relative" }}
            className="text-zinc-800 font-theseasons text-[17px] text-end z-10"
          >
            {" "}
            guardiã de lembranças
          </motion.h5>
        </span>
        <motion.div
          variants={InvertHorizontalVariants}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{ display: "relative" }}
          className="ml-52 absolute left-[40%] z-0"
        >
          <img src={fabiolaImg.src} alt="fabiola" height={488} width={356} />
        </motion.div>
        <motion.div
          variants={horizontalVariants}
          initial="initial"
          whileInView={"animate"}
          viewport={{
            once: true,
          }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-start justify-center flex-col absolute top-56 left-[25%]"
        >
          <p className="font-Geosans text-zinc-800 text-lg font-semibold w-96 z-10">
            Acredito no poder da conexão que a fotografia traz, no amor
            envolvido, no momento que se torna único a cada clique e sorriso. É
            uma forma valiosa de documentar as relações e os momentos especiais
            entre as pessoas que amamos.
          </p>
          <p className="font-Geosans text-zinc-800 text-lg font-semibold w-96 z-10">
            Capturar esses momentos entre mãe e filha(o) pode ser ainda mais
            emocionante. As fotos trarão de volta lembranças de momentos felizes
            e ajudarão a manter essas memórias vivas por muitos anos.
          </p>
          <p className="font-theseasonsit text-zinc-800 text-lg font-semibold w-96 z-10 mt-2">
            Conheça meu trabalho!
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
    </>
  );
}
