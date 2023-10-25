"use client";

import SessionsCards from "../components/Sessions/SessionsCards";
import { useEffect, useState } from "react";
import { SessionsConfig, scrollIntoTheView } from "./Configurations";
import GestanteSession from "../components/Sessions/GestanteSession";
import NewBornSession from "../components/Sessions/NewBornSession";
import PartoSession from "../components/Sessions/PartoSession";
import FemininoSession from "../components/Sessions/FemininoSession";
import { Variants, motion } from "framer-motion";

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

export default function SessoesPage() {
  const [selectedSession, setSelectedSession] = useState<string>();

  useEffect(() => {
    if (selectedSession) {
      scrollIntoTheView(selectedSession);
    }
  }, [selectedSession]);

  return (
    <div className="pt-32 flex w-full items-center justify-start py-9 flex-col space-y-5 bg-zinc-200">
      <motion.h5
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8 }}
        className="mt-10 font-theseasonsit text-4xl font-thin text-zinc-800 md:text-md text-center w-full"
      >
        Sessões e Acompanhamentos
      </motion.h5>
      <motion.span
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.25 }}
        className="h-[1px] bg-zinc-800 lg:w-56 md:w-24"
      />
      <motion.p
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-zinc-800 lg:max-w-[50%] md:max-w-[75%] font-Geosans text-xl text-center pt-10 max-sm:px-10 max-sm:pt-0"
      >
        Antes de uma sessão acontecer, todas as expectativas são alinhadas em
        uma reunião. Gosto de fazer assim para que tudo aconteça como você
        imagina e sonha para esse momento. Conversamos sobre estilos de sessão,
        possíveis lugares para se realizar ela, roupas, maquiagem e tudo o que
        envolve a produção desse dia.
      </motion.p>
      <motion.p
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 0.75 }}
        className="text-zinc-800 lg:max-w-[50%] md:max-w-[75%] font-Geosans text-xl text-center pt-4 pb-10 max-sm:px-10"
      >
        Conduzir as sessões com leveza e preservar a singularidade de cada
        instante com sensibilidade e interferindo o menos possível é como eu
        trabalho. Desta forma as fotos se tornam mais reais, e transmitem assim
        um sentimento verdadeiro, com aquele quentinho que as lembranças trazem.
      </motion.p>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.8, delay: 1 }}
        className="grid lg:grid-cols-4 gap-3 md:grid-cols-2 pb-10"
      >
        {SessionsConfig.map((session) => (
          <SessionsCards
            image={session.imagem}
            title={session.label}
            key={session.key}
            onClick={() => {
              scrollIntoTheView(session.key);
              setSelectedSession(session.key);
            }}
          />
        ))}
      </motion.div>
      {selectedSession === "gestante" && <GestanteSession />}
      {selectedSession === "newborn" && <NewBornSession />}
      {selectedSession === "parto" && <PartoSession />}
      {selectedSession === "feminino" && <FemininoSession />}
    </div>
  );
}
