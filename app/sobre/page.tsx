import { Instagram } from "lucide-react";
import fabiolaImg from "../assets/Fabiola.svg";
import Image from "next/image";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

export default function SobrePage() {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-32 bg-gradient-to-b from-[#BB987D] to-zinc-200 pb-20">
      <Image src={fabiolaImg} alt="fabiola" height={488} width={316} priority />
      <span className="pt-5">
        <h5 className="text-zinc-800 font-theseasonsit text-3xl text-center">
          Um pouco sobre
        </h5>
        <h5 className="text-zinc-800 font-theseasonsit text-xl text-center">
          Mim e meu trabalho
        </h5>
      </span>
      <span className="text-zinc-800 font-Geosans text-xl pt-10 w-1/2 text-center max-sm:px-10 max-sm:w-full">
        Durante a sessão procuro fazer fotografias atemporais, de momentos
        sinceros e conexões verdadeiras. Te prometo muitas risadas, carinho e
        sentimentos gostosos registrados no seu álbum de família. Trago isso da
        minha própria experiência e paixão pelas fotografias da minha família,
        não tem nada melhor do que se reunir e falar sobre como as coisas eram.
      </span>
      <span className="text-zinc-800 font-Geosans text-xl pt-10 w-1/2 text-center max-sm:px-10 max-sm:w-full">
        Eu sou uma entusiasta a registros de momentos, esposa, mãe de duas (por
        enquanto de quatro patas), geminiana criativa e tagarela.
      </span>
      <span className="text-zinc-800 font-theseasonsit text-xl pt-10 w-1/2 text-center max-sm:px-10 max-sm:w-full">
        Te espero para tornar o seu amor, memória.
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
