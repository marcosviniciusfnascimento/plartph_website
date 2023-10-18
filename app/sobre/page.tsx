import { Instagram } from "lucide-react";
import fabiolaImg from "../assets/Fabiola.svg";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import AnimateH5 from "../components/Animate/h5";
import Reveal from "../components/Reveal/Reveal";

export default function SobrePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-32 bg-gradient-to-b from-[#BB987D] to-zinc-200 pb-20">
      <Reveal width="100%">
        <div className="w-full flex items-center justify-center">
          <Image
            src={fabiolaImg}
            alt="fabiola"
            height={380}
            width={250}
            priority
          />
        </div>
      </Reveal>
      <span className="pt-5">
        <AnimateH5
          direction="vertical"
          className="text-zinc-800 font-theseasonsit text-5xl text-center"
        >
          Um pouco sobre
        </AnimateH5>
        <AnimateH5
          direction="vertical"
          className="text-zinc-800 font-theseasonsit text-3xl text-center"
        >
          Mim e meu trabalho
        </AnimateH5>
      </span>
      <span className="text-zinc-800 font-Geosans text-xl pt-10 w-1/2 text-center max-sm:px-10 max-sm:w-full">
        <AnimateH5 direction="vertical">
          Durante a sessão procuro fazer fotografias atemporais, de momentos
          sinceros e conexões verdadeiras. Te prometo muitas risadas, carinho e
          sentimentos gostosos registrados no seu álbum de família. Trago isso
          da minha própria experiência e paixão pelas fotografias da minha
          família, não tem nada melhor do que se reunir e falar sobre como as
          coisas eram.
        </AnimateH5>
      </span>
      <span className="text-zinc-800 font-Geosans text-xl pt-10 w-1/2 text-center max-sm:px-10 max-sm:w-full">
        <AnimateH5 direction="vertical">
          Eu sou uma entusiasta a registros de momentos, esposa, mãe de duas
          (por enquanto de quatro patas), geminiana criativa e tagarela.
        </AnimateH5>
      </span>
      <span className="text-zinc-800 font-theseasonsit text-xl pt-10 w-1/2 text-center max-sm:px-10 max-sm:w-full">
        <AnimateH5 direction="vertical">
          Te espero para tornar o seu amor, memória.
        </AnimateH5>
      </span>
      <span className="flex space-x-2 pt-5">
        <Link href={"http://instagram.com/plartph"} target="_blank">
          <Instagram className="text-zinc-800 hover:text-zinc-400" size={30} />
        </Link>
        <Link
          href={
            "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+coberturas+fotograficas%21&type=phone_number&app_absent=0"
          }
          target="_blank"
        >
          <BsWhatsapp className="text-zinc-800 hover:text-zinc-400" size={27} />
        </Link>
      </span>
    </div>
  );
}
