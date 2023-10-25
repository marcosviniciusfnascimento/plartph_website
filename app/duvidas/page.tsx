"use client";
import Image from "next/image";
import Image1 from "../assets/Parto/_MG_2951.jpg";
import Image2 from "../assets/Parto/_MG_2985.jpg";
import Reveal from "../components/Reveal/Reveal";
import { motion } from "framer-motion";
import { horizontalVariants } from "../components/Intro/About";
import AnimateH5 from "../components/Animate/h5";
import AnimateSpan from "../components/Animate/span";

export default function DuvidasPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-zinc-200">
      <div className="pt-40 flex flex-col items-center justify-center bg-zinc-200 w-full">
        <AnimateH5
          direction="vertical"
          className="font-theseasonsit text-zinc-800 text-4xl text-center"
        >
          Essa pode ser sua dúvida
        </AnimateH5>
        <AnimateSpan
          direction="horizontal"
          className="h-[1px] w-2/12 bg-zinc-800 mt-2"
        />
        <span className="pt-10 pb-20 text-zinc-800 font-Geosans text-2xl w-1/2 text-center max-sm:w-full max-sm:px-10">
          <AnimateH5 direction="vertical">
            Para que você tenha acessa a informação e saiba tudo sbre a forma
            como eu trabalho, respondi as principais dúvidas que recebo
            diariamente. Leia:
          </AnimateH5>
        </span>
      </div>
      <div className="w-full flex py-14 items-center justify-center space-x-10 max-sm:flex-col bg-primary">
        <motion.div
          variants={horizontalVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="overflow-hidden rounded-sm"
        >
          <img src={Image1.src} alt="Image1" width={300} height={650} />
        </motion.div>
        <div className="flex flex-col space-y-10 w-1/2 py-5 max-sm:w-full max-sm:px-10">
          <span className="flex flex-col space-y-5">
            <AnimateH5
              direction="vertical"
              className="text-zinc-800 font-Geosans text-2xl font-semibold"
            >
              PRECISA DE AUTORIZAÇÃO DO HOSPITAL OU OBSTETRA PARA FOTOGRAFAR O
              PARTO?
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="text-zinc-800 font-Geosans text-lg "
            >
              Sim! Para estar seguro, discuta seus planos para parto com
              antecedência com seu obstetra e/ou doula. Além disso, verifique as
              políticas do hospital em relação à fotografia. Se você está tendo
              um parto em casa, depende de você e sua equipe de parto.
            </AnimateH5>
          </span>
          <div className="flex flex-col space-y-5">
            <AnimateH5
              direction="vertical"
              className="text-zinc-800 font-Geosans text-2xl font-semibold"
            >
              EU NÃO QUERO PARTO NORMAL, VOCÊ TAMBÉM FOTOGRAFA CESÁREA?
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="text-zinc-800 font-Geosans text-lg"
            >
              {`Claro que sim! Porém, isso precisa ser conversado com o seu
                médico obstetra e com a instituição onde você será operada. Se
                todos concordarem, eu estou completamente disponível para
                fotografar uma cesariana. Esteja ciente de que existe a
                possibilidade da maternidade não permitir a entrada de
                fotógrafo. Neste caso, eu posso ficar com você e registrar os
                momentos pré e pós parto.`}
            </AnimateH5>
          </div>
        </div>
      </div>
      <div className="w-full flex pt-14 items-center justify-center space-x-10 max-sm:flex-col bg-[#BB987D]">
        <div className="flex flex-col space-y-10 w-1/2 max-sm:w-full max-sm:px-10">
          <div className="overflow-hidden rounded-sm hidden max-sm:block">
            <img src={Image2.src} alt="Image1" width={300} height={650} />
          </div>
          <span className="flex flex-col space-y-5">
            <AnimateH5
              direction="vertical"
              className="text-zinc-800 font-Geosans text-2xl font-semibold "
            >
              VOU TER PARTO NORMAL. É POSSÍVEL FAZER A COBERTURA?
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="text-zinc-800 font-Geosans text-lg "
            >
              {
                'Sim! E quando você "pensar" ou atingir cerca de 5cm ou 6cm de dilatação ou quando a transição ou trabalho de parto ativo começar me telefona que vou correndo registrar esse momento. Pode ligar mesmo!'
              }
            </AnimateH5>
          </span>
          <span className="flex flex-col space-y-5">
            <AnimateH5
              direction="vertical"
              className="text-zinc-800 font-Geosans text-2xl font-semibold "
            >
              ENTREI EM TRABALHO DE PARTO AS 2H DA MADRUGADA, O QUE EU FAÇO?
            </AnimateH5>
            <AnimateH5
              direction="vertical"
              className="text-zinc-800 font-Geosans text-lg "
            >
              Depois que você completar 38 semanas eu estarei de plantão 24
              horas por dia pra você. Não pense duas vezes antes de me ligar! Me
              avise que está em trabalho de parto ou organizo minhas coisas para
              ir te encontrar.
            </AnimateH5>
          </span>
        </div>
        <motion.div
          variants={horizontalVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="overflow-hidden rounded-sm pb-10 max-sm:hidden"
        >
          <img src={Image2.src} alt="Image1" width={300} height={650} />
        </motion.div>
      </div>
    </div>
  );
}
