/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TitleImage from "../assets/natal/titulo.svg";
import TitleMobile from "../assets/natal/sessaoNatalMobile.svg";
import { natalGalleryImages } from "../assets/natal/mansory";
import Reveal from "../components/Reveal/Reveal";
import cadeado from "../assets/natal/cadeado.svg";
import bgImage from "../assets/natal/mansory/getty-christmas-decor-veranda-1567624256.png";
import natalEncantado from "../assets/natal/natalEncantado.svg";
import natal_mobile from "../assets/natal/natal_mobile.svg";
import magica from "../assets/natal/magica.svg";
import AnimateH5 from "../components/Animate/h5";
import AnimateSpan from "../components/Animate/span";
import exclusivo from "../assets/natal/exclusivo.svg";
import janela_mobile from "../assets/natal/janela (2).svg";
import arvore from "../assets/natal/arvore (2).svg";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Clock1, Heart } from "lucide-react";
import { HorariosDomingo, HorariosSabado, HorariosType } from "./horarios";
import { downUpVariant, fadeInVariant } from "../components/Animate/Variants";
import textura from "../assets/natal/textura.png";
import pinheirMobile from "../assets/natal/pinheiroMobile.svg";
import rodape from "../assets/natal/rodape.svg";
import sofa from "../assets/natal/sofa.svg";
import vagaslimitadas from "../assets/natal/vagaslimitadas.svg";

export const getHorarioItem = (horario: HorariosType, delay: number) => {
  const horarioreserva = `${horario.horario[0]}+%C3%A1s+${horario.horario[1]}`;
  return (
    <Reveal width="100%" delay={delay} key={horarioreserva}>
      {horario.situacao === "Disponível" && (
        <Link
          target="_blank"
          href={`https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+reservar+o+hor%C3%A1rio+das+${horarioreserva}+para+o+dia+25%21&type=phone_number&app_absent=0`}
        >
          <div className="flex flex-col space-y-3">
            <span className="flex space-x-10 items-center justify-between w-[370px]">
              <span className="flex py-2 px-4  bg-[#BB987D] w-[165px] items-center justify-between text-sm text-white rounded-xl">
                <Clock1 size={16} className="mr-3" />
                {`${horario.horario[0]}h - ${horario.horario[1]}h`}
              </span>
              <span
                className={`rounded-xl text-sm py-2 px-4 ${
                  horario.situacao === "Disponível"
                    ? "bg-green-500"
                    : "bg-[#c4c4c4]"
                } text-white`}
              >
                {horario.situacao}
              </span>
            </span>
            <span className="h-[1px] w-full border-b-1 border-dashed border-zinc-700" />
          </div>
        </Link>
      )}
      {horario.situacao === "Reservado" && (
        <div className="flex flex-col space-y-3">
          <span className="flex space-x-10 items-center justify-between w-[370px]">
            <span className="flex py-2 px-4  bg-[#BB987D] w-[165px] items-center justify-between text-sm text-white rounded-xl">
              <Clock1 size={16} className="mr-3" />
              {`${horario.horario[0]}h - ${horario.horario[1]}h`}
            </span>
            <span
              className={`rounded-xl text-sm py-2 px-4 bg-[#c4c4c4] text-white`}
            >
              {horario.situacao}
            </span>
          </span>
          <span className="h-[1px] w-full border-b-1 border-dashed border-zinc-700" />
        </div>
      )}
      {horario.situacao === "Pré reservado" && (
        <div className="flex flex-col space-y-3">
          <span className="flex space-x-10 items-center justify-between w-[370px]">
            <span className="flex py-2 px-4  bg-[#BB987D] w-[165px] items-center justify-between text-sm text-white rounded-xl">
              <Clock1 size={16} className="mr-3" />
              {`${horario.horario[0]}h - ${horario.horario[1]}h`}
            </span>
            <span
              className={`rounded-xl text-sm py-2 px-4 bg-yellow-300 text-white`}
            >
              {horario.situacao}
            </span>
          </span>
          <span className="h-[1px] w-full border-b-1 border-dashed border-zinc-700" />
        </div>
      )}
    </Reveal>
  );
};
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
            className="w-full pr-16 h-96 absolute max-sm:hidden"
            priority
          />
          <Image
            src={TitleMobile}
            priority
            alt="SessaoNatal"
            className="w-full h-96 absolute hidden max-sm:block"
          />
          <h5 className="font-theseasonsit  text-zinc-800 text-3xl ml-64 mt-56 absolute max-sm:ml-32 max-sm:text-xl max-sm:mt-32">
            dois mil e vinte e três
          </h5>
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
        className="flex flex-col py-16 px-10 items-center justify-center relative w-full bg-[#6a7153]"
      >
        <img
          src={textura.src}
          alt="textura"
          className="z-10 w-full h-full absolute object-cover opacity-30"
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
      <div className="columns-2 md:columns-4 lg:columns-5 md:p-24 p-10 bg-[#6a7153] w-full">
        {sortedImageArray.map((image, index) => (
          <Reveal width="100%" key={image.src.toString()} delay={0.05 * index}>
            <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
              <img
                src={image.src}
                alt="galleryImage"
                className="w-full rounded-md object-cover"
              />
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal width="100%">
        <div className="flex flex-col bg-zinc-300 items-center relative  justify-center py-16 w-full">
          <h5 className="font-theseasonsit text-zinc-600 text-5xl pb-20 max-sm:text-3xl">
            Cenário
          </h5>
          <div className="relative w-full h-[450px] max-sm:h-auto flex z-20 items-center justify-center">
            <img
              src={bgImage.src}
              alt="bg"
              className="rounded-lg w-[578px] max-sm:w-[300px]"
            />
            <div className="backdrop-blur-xl absolute h-full w-[578px] z-10 rounded-lg  max-sm:w-[300px]" />
            <Image
              priority
              src={cadeado}
              alt="bg"
              width={350}
              className="absolute z-20"
            />
          </div>
          <Image
            src={arvore}
            priority
            alt="pinheiro"
            className="absolute w-[250px] bottom-0 left-0 max-sm:hidden"
          />
          <Image
            priority
            src={janela_mobile}
            alt="janela"
            className="absolute w-[190px] top-0 right-0 max-sm:hidden"
          />
        </div>
      </Reveal>
      <div className="flex flex-col items-center justify-start bg-zinc-200 w-full pt-16">
        <h5 className="font-theseasonsit text-zinc-600 text-5xl max-sm:text-3xl">
          Pacotes
        </h5>
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
          <Image priority src={magica} alt="magica" width={250} height={20} />

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
              priority
              src={exclusivo}
              alt="magica"
              width={200}
              height={40}
              className=" top-[54%] right-[40%] max-sm:hidden"
            />

            <Image
              priority
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
            priority
            className="max-sm:hidden"
          />
          <Image
            src={natal_mobile}
            alt="magica"
            priority
            height={120}
            className="hidden max-sm:block"
          />
          <Image
            src={arvore}
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
            priority
            className="max-sm:hidden"
          />

          <Image
            src={exclusivo}
            alt="magica"
            width={120}
            height={50}
            priority
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
      </div>
      <div className="items-center w-full justify-start flex flex-col space-y-10 py-16">
        <AnimateH5
          direction="vertical"
          className="font-Geosans text-zinc-800 text-3xl text-center"
        >
          Cronograma de Horários
        </AnimateH5>

        <div className="grid grid-cols-1 gap-16 max-md:grid-cols-1">
          <div className="flex flex-col space-y-8 items-center justify-center">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-2xl text-center"
            >
              Sábado (25/11)
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center"
            >
              Clique no horário que deseja reservar!
            </AnimateH5>
            <div className="flex flex-col space-y-3 items-center justify-center">
              {HorariosSabado.map((horario, index) =>
                getHorarioItem(horario, 0.05 * index)
              )}
            </div>
          </div>
          {/* <div className="flex flex-col space-y-8 items-center justify-center">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center"
            >
              Domingo (26/11)
            </AnimateH5>
            <div className="flex flex-col space-y-3 items-center justify-center">
              {HorariosDomingo.map((horario, index) =>
                getHorarioItem(horario, 0.05 * index)
              )}
            </div>
          </div> */}
        </div>
      </div>
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
        <Image
          priority
          src={vagaslimitadas}
          alt="magica"
          width={400}
          height={200}
        />
        <Image priority src={sofa} alt="magica" width={400} height={200} />
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
        className="flex flex-col py-16 px-10 items-center justify-center relative w-full bg-[#6a7153]"
      >
        <img
          src={textura.src}
          alt="textura"
          className="z-10 w-full h-full absolute object-cover opacity-30"
        />
        <Image
          src={rodape}
          priority
          alt="magica"
          width={400}
          height={200}
          className="z-20"
        />
      </motion.div>
    </div>
  );
}
