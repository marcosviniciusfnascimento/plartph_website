"use client";

import { Button } from "@nextui-org/react";
import bannerPresets from "../assets/Presets/bannerPreset.jpg";
import Image from "next/image";
import { GiSmartphone } from "react-icons/gi";
import { LuTimer } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { SiAdobelightroom } from "react-icons/si";
import { BadgeCheck, Wand2 } from "lucide-react";
import { useRouter } from "next/navigation";
import PresetsSlider from "../components/BeforeAndAfterSlider";
import compraSegura from "../assets/Presets/compra-segura-hotmart-w1000.png";
import bannerVenda from "../assets/Presets/bannerVenda.svg";
import Reveal from "../components/Reveal/Reveal";
import AnimateH5 from "../components/Animate/h5";
import AnimateSpan from "../components/Animate/span";

export default function PresetsPage() {
  const navigate = useRouter();

  return (
    <div className="bg-gradient-to-b from-zinc-100 to-[#9F9183] flex min-h-screen flex-col items-center justify-start w-full">
      <div className="flex w-full flex-col space-y-3 items-center justify-start pt-32 text-center max-sm:px-10 pb-10 bg-zinc-200">
        <h5 className="font-Geosans text-2xl text-zinc-800">
          Deseja cores vibrantes e uma estética padrão em suas fotos?
        </h5>
        <h5 className="font-Geosans text-2xl text-zinc-800">
          Transforme seus registros em obras de arte com nossos Pack Presets
        </h5>
        <h5 className="pt-10 pb-2 font-theseasons text-6xl text-zinc-800 max-sm:text-5xl">
          Wood Mood
        </h5>
        <h5 className="font-theseasons text-3xl text-zinc-800 max-sm:text-4xl">
          Plartph
        </h5>
      </div>
      <div className="w-screen bg-primary items-center justify-center flex p-10 max-sm:p-0">
        <div className="relative w-[1248px] h-[702px] overflow-hidden">
          <Image
            src={bannerPresets}
            alt="bannerPresets"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>
      <div className="bg-stone-500/70 flex flex-col  w-full space-y-3 items-center justify-center pt-16 max-sm:px-10">
        <AnimateSpan
          direction="vertical"
          className="flex space-x-2 items-center justify-center"
        >
          <GiSmartphone size={30} />
          <h5 className="font-Geosans text-2xl text-white text-center">
            Funciona em qualquer dispositivo (iOS e Android)
          </h5>
        </AnimateSpan>
        <AnimateSpan
          direction="vertical"
          className="flex space-x-2 items-center justify-center"
        >
          <LuTimer size={30} />
          <h5 className="font-Geosans text-2xl text-white text-center">
            Rápido de usar (apenas 1 clique)
          </h5>
        </AnimateSpan>
        <AnimateSpan
          direction="vertical"
          className="flex space-x-2 items-center justify-center"
        >
          <MdDone size={30} />
          <h5 className="font-Geosans text-2xl text-white text-center">
            Utilize mesmo sem saber editar fotos
          </h5>
        </AnimateSpan>
        <AnimateSpan
          direction="vertical"
          className="flex space-x-2 items-center justify-center"
        >
          <SiAdobelightroom size={28} />
          <h5 className="font-Geosans text-2xl text-white text-center">
            Aplique os presets pelo App Lightroom Mobile (grátis)
          </h5>
        </AnimateSpan>
      </div>
      <div className="bg-stone-500/70 pt-16 w-full flex items-center justify-center max-sm:p-10">
        <Button
          endContent={<Wand2 size={25} />}
          className="bg-zinc-900 text-zinc-200 rounded-sm px-16 text-lg font-Geosans hover:bg-zinc-700"
          size="lg"
          onClick={() =>
            navigate.push("https://pay.hotmart.com/H87250702F?off=pxrz9ifx")
          }
        >
          Quero transformar minhas fotos
        </Button>
      </div>
      <div className="bg-stone-500/70 flex flex-col space-y-3 w-full items-center justify-center pb-20 max-sm:px-10">
        <AnimateSpan
          direction="vertical"
          className="flex pt-20 pb-10 max-sm:pt-10"
        >
          <h5 className="font-Geosans text-6xl text-center font-normal max-sm:text-4xl">
            Com o Pack Wood Mood você terá:
          </h5>
        </AnimateSpan>
        <AnimateSpan
          direction="vertical"
          className="flex space-x-2 items-center justify-center"
        >
          <BadgeCheck size={25} />
          <h5 className="font-Geosans text-2xl text-center">Cores Únicas</h5>
        </AnimateSpan>
        <AnimateSpan
          direction="vertical"
          className="flex space-x-2 items-center justify-center"
        >
          <BadgeCheck size={25} />
          <h5 className="font-Geosans text-2xl text-center">
            Presets Personalizáveis para se adequar ao seu rosto
          </h5>
        </AnimateSpan>
        <AnimateSpan
          direction="vertical"
          className="flex space-x-2 items-center justify-center"
        >
          <BadgeCheck size={25} />
          <h5 className="font-Geosans text-2xl text-center">
            Fotos mais nítidas
          </h5>
        </AnimateSpan>
        <AnimateSpan
          direction="vertical"
          className="flex space-x-2 items-center justify-center"
        >
          <BadgeCheck size={25} />
          <h5 className="font-Geosans text-2xl text-center">
            Estilo único e consistente de edição
          </h5>
        </AnimateSpan>
      </div>
      <div className="bg-[#BB987D] flex flex-col space-y-10 items-center justify-start py-20 px-20 max-sm:px-10 w-full">
        <h5 className="font-Geosans text-3xl text-center">
          RESULTADOS INCRÍVEIS NA PRÁTICA
        </h5>
        <h5 className="font-Geosans text-2xl text-center">
          Veja na prática o resultados dos filtros e como eles transformam a
          qualidade das suas fotos de forma natural e harmônica
        </h5>
        <PresetsSlider />
      </div>
      <div className="bg-zinc-100 flex space-x-2 items-center justify-center w-full py-20 px-20 flex-row max-sm:flex-col max-sm:px-10">
        <div className="w-4/12 items-center justify-center h-full max-sm:w-full hidden max-sm:block mb-10">
          <Image
            src={bannerVenda}
            alt="bannerVenda"
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-5 w-4/12 max-sm:w-full">
          <AnimateSpan
            direction="vertical"
            className="font-Geosans text-zinc-800 text-3xl flex flex-col space-y-2 items-center justify-center text-center"
          >
            <h5>O que você vai receber também?</h5>
            <div className="h-[1px] w-9/12 bg-zinc-800" />
          </AnimateSpan>
          <AnimateSpan
            direction="vertical"
            className="font-theseasons text-zinc-800 text-xl flex space-x-2 items-center justify-center text-center"
          >
            <MdDone size={55} or="rgb(39,39,42)" />
            <h5>
              Acesso vitalício ao Pack Wood Mood com 3 filtros profissionais
              para fotos
            </h5>
          </AnimateSpan>
          <AnimateSpan
            direction="vertical"
            className="font-theseasons text-zinc-800 text-xl flex space-x-2 items-center justify-center text-center"
          >
            <MdDone size={55} color="rgb(39,39,42)" />
            <h5>
              Um guia completo que te da instruções sobre o uso dos presets
            </h5>
          </AnimateSpan>
          <Button
            endContent={<Wand2 size={25} />}
            className="bg-zinc-800 mt-20 text-zinc-200 rounded-sm px-16 text-lg font-Geosans hover:bg-zinc-700 max-sm:px-10"
            size="lg"
            onClick={() =>
              navigate.push("https://pay.hotmart.com/H87250702F?off=pxrz9ifx")
            }
          >
            Quero transformar minhas fotos
          </Button>
          <Image
            src={compraSegura}
            alt="compraSegura"
            height={106}
            width={350}
          />
        </div>
        <div className="w-4/12 flex items-center justify-center h-full max-sm:w-full max-sm:mt-20 max-sm:hidden">
          <Image
            src={bannerVenda}
            alt="bannerVenda"
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[#BB987D] space-x-5 p-20 max-sm:flex-col flex-row max-sm:px-10">
        <h5 className="[writing-mode:vertical-rl] text-zinc-800 font-theseasonsit text-8xl rotate-180 max-sm:rotate-0 max-sm:[writing-mode:horizontal-tb] max-sm:text-6xl">
          Dúvidas
        </h5>
        <div className="flex flex-col space-y-5 w-1/2 max-sm:w-full max-sm:pt-10">
          <AnimateSpan direction="vertical" className="text-zinc-800 text-left">
            <h5 className="font-theseasonsit text-3xl">
              Funciona com o Celular?
            </h5>
            <h5 className="font-Geosans text-zinc-800 text-xl">
              Sim! O pack contém arquivos .DNG para você poder instalar na
              versão Mobile do Lightroom (app gratuíto). Se você já tem
              assinatura (paga) do Adobe Lightroom, você pode importar seus
              presets do computador diretamente para o celular através do seu
              login no app.
            </h5>
          </AnimateSpan>
          <AnimateSpan direction="vertical" className="text-zinc-800 text-left">
            <h5 className="font-theseasonsit text-3xl">
              Quando vou ter acesso aos presets?
            </h5>
            <h5 className="font-Geosans text-zinc-800 text-xl">
              Imediatamente após a confirmação da compra. Pelo cartão de
              crédito/pix leva alguns minutos e pelo boleto pode levar até 2
              dias após o pagamento.
            </h5>
          </AnimateSpan>
          <AnimateSpan direction="vertical" className="text-zinc-800 text-left">
            <h5 className="font-theseasonsit text-3xl">
              Preciso ter o LR na versão paga?
            </h5>
            <h5 className="font-Geosans text-zinc-800 text-xl">
              Não, você pode usar seus Presets na versão gratuíta do Lightroom
              Mobile (smartphone).
            </h5>
          </AnimateSpan>
        </div>
      </div>
    </div>
  );
}
