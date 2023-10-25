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
import natalEncantado from "../assets/natal/natalEncantado.svg";
import natal_mobile from "../assets/natal/natal_mobile.svg";
import magica from "../assets/natal/magica.svg";
import AnimateH5 from "../components/Animate/h5";
import AnimateSpan from "../components/Animate/span";
import exclusivo from "../assets/natal/exclusivo.svg";
import arvore from "../assets/natal/pinheiroMobile.svg";
import janela from "../assets/natal/janela_mobile.svg";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Clock1, Heart } from "lucide-react";
import { HorariosDomingo, HorariosSabado, HorariosType } from "./horarios";

const getHorarioItem = (horario: HorariosType, delay: number) => {
  return (
    <Reveal width="100%" delay={delay}>
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
      <Reveal width="100%">
        <div className="flex flex-col bg-zinc-300 items-center relative  justify-center py-16 w-full">
          <h5 className="font-Geosans text-zinc-800 text-3xl pb-20">Cenário</h5>
          <div className="relative w-full h-[450px] flex z-20 items-center justify-center">
            <Image
              src={bgImage}
              alt="bg"
              className="rounded-lg w-[550px] max-sm:w-[390px]"
            />
            <div className="backdrop-blur-xl absolute h-full w-[550px] z-10 rounded-lg  max-sm:w-[390px]" />
            <Image
              src={cadeado}
              alt="bg"
              width={350}
              className="absolute z-20"
            />
          </div>
          <Image
            src={arvore}
            alt="arvore"
            className="absolute w-[250px] bottom-0 left-0 max-sm:hidden"
          />
          <Image
            src={janela}
            alt="janela"
            className="absolute w-[120px] top-0 right-0 max-sm:hidden"
          />
        </div>
      </Reveal>
      <div className="flex flex-col items-center justify-start bg-zinc-200 w-full py-16">
        <h5 className="font-Geosans text-zinc-800 text-3xl">Pacotes</h5>
        <div className="grid grid-cols-2 items-start justify-start px-64 max-md:grid-cols-1 max-sm:px-10">
          <div className="flex flex-col space-y-10 items-center justify-center w-3/4 max-sm:w-full">
            <Image src={magica} alt="magice" width={200} />
            <div className="flex flex-col space-y-2 items-center justify-start">
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
          </div>
          <div className="flex flex-col space-y-10 items-center justify-start w-3/4 max-sm:w-full pt-24 max-sm:2-full">
            <Image src={natal_mobile} alt="magice" width={200} />
            <div className="flex flex-col space-y-2 items-center justify-center">
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
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 font-semibold text-xl text-center"
            >
              E mais: 1 álbum lindo 21 X 15
            </AnimateH5>
          </div>
        </div>
        <AnimateSpan direction="vertical" className="pt-24 max-sm:pt-8">
          <Link href={"/valores"}>
            <Button
              className="bg-primary hover:opacity-90 px-4 py-2 rounded-sm"
              endContent={<Heart size={20} />}
            >
              {" "}
              Valores
            </Button>
          </Link>
        </AnimateSpan>
      </div>
      <div className="items-center w-full justify-start flex flex-col space-y-10 py-16">
        <AnimateH5
          direction="vertical"
          className="font-Geosans text-zinc-800 text-3xl text-center"
        >
          Cronograma de Horários
        </AnimateH5>

        <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1">
          <div className="flex flex-col space-y-8 items-center justify-center">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center"
            >
              Sábado (24/11)
            </AnimateH5>
            <div className="flex flex-col space-y-3 items-center justify-center">
              {HorariosSabado.map((horario, index) =>
                getHorarioItem(horario, 0.05 * index)
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-8 items-center justify-center">
            <AnimateH5
              direction="vertical"
              className="font-Geosans text-zinc-800 text-xl text-center"
            >
              Domingo (25/11)
            </AnimateH5>
            <div className="flex flex-col space-y-3 items-center justify-center">
              {HorariosDomingo.map((horario, index) =>
                getHorarioItem(horario, 0.05 * index)
              )}
            </div>
          </div>
        </div>
        <AnimateSpan direction="vertical" className="pt-16 max-sm:pt-3">
          <Link href="https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+sessoes+de+natal%21&type=phone_number&app_absent=0">
            <Button
              className="bg-primary hover:opacity-90 px-4 py-2 rounded-sm"
              endContent={<Heart size={20} />}
            >
              Quero reservar meu horário
            </Button>
          </Link>
        </AnimateSpan>
      </div>
    </div>
  );
}
