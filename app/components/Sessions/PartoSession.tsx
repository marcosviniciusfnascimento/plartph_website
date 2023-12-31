"use client";

import SessionCarousel from "./SessionCarousel";
import { Heart } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { PartoImages } from "@/app/assets/Parto";
import Reveal from "../Reveal/Reveal";
import AnimateSpan from "../Animate/span";
import AnimateH5 from "../Animate/h5";
import Link from "next/link";

export default function PartoSession() {
  const PartoGallery = Object.values(PartoImages);
  const navigate = useRouter();
  return (
    <Reveal width="100%">
      <div
        className="w-full flex flex-col space-y-5 items-center justify-start py-5 bg-gradient-to-b from-zinc-200 to-[#BB987D] p-10"
        id="parto"
      >
        <span className="flex flex-col space-y-2 items-center justify-center py-10">
          <span className="flex space-x-2 max-sm:px-10">
            <AnimateH5
              direction="vertical"
              className="font-theseasons text-zinc-800 text-5xl text-center max-sm:text-4xl"
            >
              Acompanhamento de Parto
            </AnimateH5>
          </span>
        </span>
        <AnimateSpan
          direction="vertical"
          className="font-Geosans text-zinc-900 text-2xl lg:max-w-[70%] md:max-w-[90%] text-center"
        >
          Fotografias tiradas no momento do parto são importantes para eternizar
          um dos momentos mais intensos e emocionantes da vida.
        </AnimateSpan>
        <AnimateSpan
          direction="vertical"
          className="font-Geosans text-zinc-900 text-2xl lg:max-w-[70%] md:max-w-[90%] text-center"
        >
          Esses registros capturam a força da mãe, a chegada do bebê e o início
          de uma jornada familiar extraordinária com muito amor.
        </AnimateSpan>
        <div className="flex items-center justify-center w-full pt-6 pb-10">
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+cobertura+de+parto%21&type=phone_number&app_absent=0"
            }
          >
            <Button
              endContent={<Heart size={20} />}
              className="bg-[#BB987D] hover:opacity-80 rounded-md mb-10"
              size="md"
            >
              Eu Quero
            </Button>
          </Link>
        </div>
        <SessionCarousel gallery={PartoGallery} />
      </div>
    </Reveal>
  );
}
