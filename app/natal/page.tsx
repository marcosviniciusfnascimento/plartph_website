"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import pagina1mobile from "../assets/natal/Lançamento - Natal 2023.svg";
import dataImportantes from "../assets/natal/dataImportantes.svg";
import pagina1 from "../assets/natal/Lançamento - Natal 2023.svg";
import pagina2 from "../assets/natal/pagina2.svg";
import pagina4 from "../assets/natal/pagina4.svg";
import pacote1 from "../assets/natal/pacote1.svg";
import magiaMobile from "../assets/natal/magiaMobile.svg";
import pacote2 from "../assets/natal/pacote2.svg";
import backgroundPacotes from "../assets/natal/backgroundPacotes.png";
import backgroundPacotesMobile from "../assets/natal/bgPacotesMobile.png";
import { natalGalleryImages } from "../assets/natal/mansory";
import Reveal from "../components/Reveal/Reveal";
import vagasLimitadas from "../assets/natal/VagasLimitadasEnd.svg";
import AnimateH5 from "../components/Animate/h5";
import { HorariosSabado } from "./horarios";
import { Heart, Timer } from "lucide-react";
import AnimateSpan from "../components/Animate/span";
import { getHorarioItem } from "./pagee";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { scrollIntoTheView } from "../sessoes/Configurations";

export default function Page() {
  const sortedImageArray = Object.values(natalGalleryImages).sort(
    () => Math.random() - 0.5
  );
  return (
    <>
      <div className="w-full flex-col hidden max-sm:block">
        <div className="w-full h-full bg-[#D7D2CC]">
          <img
            src={
              "https://res.cloudinary.com/dkskhotc8/image/upload/v1700505424/Lanc%CC%A7amento_-_Natal_2023_ynuyod.svg"
            }
            alt="bg"
            className="h-full w-full"
          />
        </div>
        <div className="w-full bg-[#D7D2CC] flex flex-col items-center justify-center">
          <span className="flex space-x-5 items-center justify-center">
            <Link
              href="https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+sessoes+de+natal%21&type=phone_number&app_absent=0"
              target="_blank"
            >
              <Button className="bg-[#8A5B39] text-white font-Geosans rounded-md my-5">
                Quero entrar em contato
                <Heart size={15} />
              </Button>
            </Link>
            <Button
              className="bg-[#8A5B39] text-white font-Geosans rounded-md my-5"
              onClick={() => scrollIntoTheView("#horarios")}
            >
              Ver horários
              <Timer size={15} />
            </Button>
          </span>
          <Image
            src={dataImportantes}
            alt="pagine1"
            className="h-[420px] scale-125 my-16 "
          />
        </div>
        <div className=" pt-10 flex flex-col items-center justify-center bg-[#8A5B39]">
          <h5 className="font-theseasonsit text-slate-200 text-3xl">
            Sessões que já aconteceram!
          </h5>
          <div className="columns-2  md:columns-4 lg:columns-5 md:p-24 p-10 w-full">
            {sortedImageArray.map((image, index) => (
              <Reveal
                width="100%"
                key={image.src.toString()}
                delay={0.05 * index}
              >
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
        </div>

        <div className="w-full bg-white h-full p-10">
          <Image src={magiaMobile} alt="pagine1" className="w-full scale-110" />
        </div>
        <AnimateSpan
          direction="vertical"
          className="w-full relative py-16 bg-[#D9D4CF] flex-col items-center justify-center"
        >
          <img
            src={backgroundPacotesMobile.src}
            alt="bg"
            className="h-full w-full absolute z-20"
          />
          <Image src={pacote1} alt="pagine1" className="z-30 relative" />
          <Image src={pacote2} alt="pagine1" className="z-30 relative" />
        </AnimateSpan>
        <div className="w-full flex flex-col bg-white items-center justify-center">
          <Image
            src={vagasLimitadas}
            alt="vagaslimitadas"
            width={500}
            height={80}
          />
          <AnimateH5
            direction="vertical"
            className="font-Geosans py-8 text-zinc-800 text-xl text-center"
          >
            Clique no horário que deseja reservar!
          </AnimateH5>
          <div
            id="#horarios"
            className=" pb-10 flex flex-col space-y-3 items-center justify-center"
          >
            {HorariosSabado.map((horario, index) =>
              getHorarioItem(horario, 0.05 * index)
            )}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col max-sm:hidden">
        <img
          src={
            "https://res.cloudinary.com/dkskhotc8/image/upload/v1700505424/Lanc%CC%A7amento_-_Natal_2023_ynuyod.svg"
          }
          alt="pagine1"
          className="w-full h-full"
        />
        <div className="w-full bg-[#D7D2CC] flex flex-col items-center justify-center">
          <span className="flex space-x-5 items-center justify-center">
            <Link
              href="https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+sessoes+de+natal%21&type=phone_number&app_absent=0"
              target="_blank"
            >
              <Button className="bg-[#8A5B39] text-white font-Geosans rounded-md my-5">
                Quero entrar em contato
                <Heart size={15} />
              </Button>
            </Link>
            <Button
              className="bg-[#8A5B39] text-white font-Geosans rounded-md my-5"
              onClick={() => scrollIntoTheView("horarios")}
            >
              Ver horários
              <Timer size={15} />
            </Button>
          </span>
          <Image src={pagina2} alt="pagine1" className="w-full h-full" />
        </div>
        <div className=" pt-10 flex flex-col items-center justify-center bg-[#8A5B39]">
          <h5 className="font-theseasonsit text-slate-200 text-5xl">
            Sessões que já aconteceram!
          </h5>
          <div className="columns-2 md:columns-4 lg:columns-5 md:p-24 p-10 bg-[#8A5B39] w-full">
            {sortedImageArray.map((image, index) => (
              <Reveal
                width="100%"
                key={image.src.toString()}
                delay={0.05 * index}
              >
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
        </div>
        <div className="w-full bg-white h-full">
          <Image src={pagina4} alt="pagine1" className="w-full" />
        </div>
        <AnimateSpan
          direction="vertical"
          className="w-full relative py-16 bg-[#D9D4CF] h-full flex items-center justify-center"
        >
          <img
            src={backgroundPacotes.src}
            alt="bg"
            className="w-full h-full absolute z-10 max-sm:hidden"
          />
          <Image src={pacote1} alt="pagine1" className=" z-20" />
          <Image src={pacote2} alt="pagine1" className=" z-20" />
        </AnimateSpan>
        <div className="w-full flex flex-col bg-white items-center justify-center">
          <Image
            src={vagasLimitadas}
            alt="vagaslimitadas"
            width={500}
            height={80}
          />
          <AnimateH5
            direction="vertical"
            className="font-Geosans py-8 text-zinc-800 text-xl text-center"
          >
            Clique no horário que deseja reservar!
          </AnimateH5>
          <div
            id="horarios"
            className=" pb-10 flex flex-col space-y-3 items-center justify-center"
          >
            {HorariosSabado.map((horario, index) =>
              getHorarioItem(horario, 0.05 * index)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
