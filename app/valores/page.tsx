"use client";

import { Variants, motion } from "framer-motion";
import Image from "next/image";
import TitleImage from "../assets/natal/titulo.svg";
import TitleMobile from "../assets/natal/sessaoNatalMobile.svg";
import textura from "../assets/natal/textura.svg";
import magica from "../assets/natal/magica.svg";
import exclusivo from "../assets/natal/exclusivo.svg";
import natalEncantado from "../assets/natal/natalEncantado.svg";
import natal_mobile from "../assets/natal/natal_mobile.svg";
import arvore from "../assets/natal/arvore.svg";
import pinheirMobile from "../assets/natal/pinheiroMobile.svg";
import janela from "../assets/natal/janela.svg";
import janela_mobile from "../assets/natal/janela_mobile.svg";
import vagaslimitadas from "../assets/natal/vagaslimitadas.svg";
import rodape from "../assets/natal/rodape.svg";
import sofa from "../assets/natal/sofa.svg";
import AnimateH5 from "../components/Animate/h5";
import AnimateSpan from "../components/Animate/span";

export const downUpVariant: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fadeInVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default function ValoresNatal() {
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
          <AnimateH5
            direction="vertical"
            className="font-theseasonsit  text-zinc-800 text-3xl ml-64 mt-56 absolute max-sm:ml-32 max-sm:text-xl max-sm:mt-32"
          >
            dois mil e vinte e três
          </AnimateH5>
        </div>
      </motion.div>
      <motion.div
        variants={fadeInVariant}
        animate="animate"
        initial="initial"
        transition={{
          staggerChildren: 0.1,
          duration: 0.8,
          delay: 1.5,
        }}
        className="flex flex-col py-16 px-10 items-center justify-center relative w-full"
      >
        <Image
          src={textura}
          alt="textura"
          priority
          className="z-10 w-full h-full absolute object-cover"
        />
        <div className="w-96 z-20 space-y-5 flex items-start justify-center flex-col max-sm:px-10">
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-white font-normal text-6xl w-80 max-sm:text-3xl"
          >
            Fotografia para todos!
          </AnimateH5>
          <h3 className="font-theseasonsit text-white text-xl w-96 max-sm:w-72">
            Todos os cenários foram criados pensando nas diferentes formas de
            quem vai participar. Pode ser sua família inteira ou só o seu filho,
            todo mundo é bem-vindo nesse natal.
          </h3>
        </div>
      </motion.div>
      <motion.div
        variants={downUpVariant}
        animate="animate"
        initial="initial"
        transition={{
          staggerChildren: 0.01,
          duration: 0.8,
          delay: 0.5,
        }}
        className="flex flex-col pb-16 px-10 items-center relative justify-start space-y-10 bg-zinc-200 w-full"
      >
        <Image src={magica} alt="magica" width={250} height={20} />

        <Image
          src={janela}
          alt="magica"
          className="absolute right-0 top-0 w-[800px] max-sm:hidden"
        />
        <Image
          src={janela_mobile}
          alt="magica"
          className="absolute right-0 top-0 h-[200px] hidden max-sm:block"
        />
        <div className="flex flex-col space-y-2">
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-2xl text-center"
          >
            15 fotografias digitais
          </AnimateH5>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-2xl text-center"
          >
            30 minutos de sessão
          </AnimateH5>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-2xl text-center"
          >
            Cenário casa | newborn | bebê
          </AnimateH5>
        </div>
        <AnimateSpan direction="vertical">
          <Image
            src={exclusivo}
            alt="magica"
            width={200}
            height={40}
            className=" top-[54%] right-[40%] max-sm:hidden"
          />

          <Image
            src={exclusivo}
            alt="magica"
            width={120}
            height={50}
            className=" top-[52%] right-12 max-sm:block hidden"
          />
        </AnimateSpan>
        <AnimateH5
          direction="vertical"
          className="font-Geosans text-zinc-800 text-xl text-center pt-3"
        >
          + Cartão de Natal com foto do ensaio e mensagem para enviar aos
          familiares e amigos
        </AnimateH5>
        <span className="flex space-x-5 items-center justify-center">
          <span className="flex flex-col space-y-2 items-center justify-center">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-2xl text-center"
            >
              R$ 350
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center"
            >
              (à vista)
            </AnimateH5>
          </span>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-2xl text-center"
          >
            ou
          </AnimateH5>
          <span className="flex flex-col space-y-2 items-center justify-center">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-2xl text-center"
            >
              R$ 400
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center"
            >
              (até 4x)
            </AnimateH5>
          </span>
        </span>
      </motion.div>

      <motion.div
        variants={downUpVariant}
        animate="animate"
        initial="initial"
        transition={{
          staggerChildren: 0.1,
          duration: 0.8,
          delay: 1.5,
        }}
        className="flex flex-col pb-16 px-10 items-center relative justify-start space-y-10 bg-zinc-100 w-full"
      >
        <Image
          src={natalEncantado}
          alt="magica"
          width={400}
          height={200}
          className="max-sm:hidden"
        />
        <Image
          src={natal_mobile}
          alt="magica"
          height={120}
          className="hidden max-sm:block"
        />
        <Image
          src={pinheirMobile}
          alt="magica"
          className="absolute left-0 bottom-0 w-[200px] max-sm:w-[80px]"
        />
        <div className="flex flex-col space-y-2">
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-2xl text-center"
          >
            30 fotografias digitais
          </AnimateH5>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-2xl text-center"
          >
            1 hora de sessão
          </AnimateH5>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-2xl text-center"
          >
            Cenário casa | newborn | bebê
          </AnimateH5>
        </div>
        <Image
          src={exclusivo}
          alt="magica"
          width={200}
          height={40}
          className="max-sm:hidden"
        />

        <Image
          src={exclusivo}
          alt="magica"
          width={120}
          height={50}
          className="right-12 max-sm:block hidden"
        />
        <AnimateH5
          direction="vertical"
          className="font-Geosans text-zinc-800 text-xl text-center pt-3"
        >
          + Cartão de Natal com foto do ensaio e mensagem para enviar aos
          familiares e amigos
        </AnimateH5>
        <AnimateH5
          direction="vertical"
          className="font-Geosans text-zinc-800 font-semibold text-xl text-center"
        >
          E mais: 1 álbum lindo 21 X 15
        </AnimateH5>
        <span className="flex space-x-5 items-center justify-center">
          <span className="flex flex-col space-y-2 items-center justify-center">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-2xl text-center"
            >
              R$ 830
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center"
            >
              (à vista)
            </AnimateH5>
          </span>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-2xl text-center"
          >
            ou
          </AnimateH5>
          <span className="flex flex-col space-y-2 items-center justify-center">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-2xl text-center"
            >
              R$ 948
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center"
            >
              (até 4x)
            </AnimateH5>
          </span>
        </span>
      </motion.div>

      <motion.div
        variants={downUpVariant}
        animate="animate"
        initial="initial"
        transition={{
          staggerChildren: 0.1,
          duration: 0.8,
          delay: 1.5,
        }}
        className="flex flex-col pb-16 px-10 items-center relative justify-start space-y-10 bg-zinc-200 w-full py-16"
      >
        <div className="flex flex-col space-y-5">
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-500 text-4xl text-center"
          >
            Detalhes
          </AnimateH5>
          <span className="flex flex-col space-y-2">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center w-[600px] max-sm:w-72"
            >
              Agendamentos deverão ser feitos pelo whatsapp
            </AnimateH5>
          </span>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-xl text-center w-[600px] max-sm:w-72"
          >
            Depósito de R$100 para reserva da data. A vaga fica pré-agendada por
            24 horas. Não havendo o depósito até o final deste prazo, a vaga
            será automaticamente liberada.
          </AnimateH5>
          <span className="flex flex-col space-y-2">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl font-bold text-center"
            >
              IMPORTANTE
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center w-[600px] max-sm:w-72"
            >
              Em caso de desistência, o valor do depósito não será reembolsado.
            </AnimateH5>
          </span>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-500 text-4xl text-center pt-4"
          >
            Recomendações
          </AnimateH5>
          <AnimateH5
            direction="vertical"
            className="font-Geosans text-zinc-800 text-xl text-center w-[600px] max-sm:w-72"
          >
            Recomendamos também que os pequenos venham descansados e de
            barriguinha cheia para que o tempo de ensaio seja aproveitado ao
            máximo.
          </AnimateH5>
        </div>
        <Image src={vagaslimitadas} alt="magica" width={400} height={200} />
        <Image src={sofa} alt="magica" width={400} height={200} />
      </motion.div>
      <motion.div
        variants={fadeInVariant}
        animate="animate"
        initial="initial"
        transition={{
          staggerChildren: 0.1,
          duration: 0.8,
          delay: 1.5,
        }}
        className="flex flex-col py-16 px-10 items-center justify-center relative w-full"
      >
        <Image
          src={textura}
          alt="textura"
          priority
          className="z-10 w-full h-full absolute object-cover"
        />
        <Image
          src={rodape}
          alt="magica"
          width={400}
          height={200}
          className="z-20"
        />
      </motion.div>
    </div>
  );
}
