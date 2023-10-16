import { gestantesImages } from "@/app/assets/Gestantes";
import SessionCarousel from "./SessionCarousel";
import { Heart } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function GestanteSession() {
  const gestantesGallery = Object.values(gestantesImages);
  const navigate = useRouter();
  return (
    <div
      className="w-full flex flex-col space-y-5 items-center justify-start py-5 bg-zinc-200 p-10"
      id="gestante"
    >
      <span className="flex flex-col space-y-2 items-center justify-center py-10">
        <span className="flex space-x-2">
          <h5 className="font-theseasons text-zinc-800 text-5xl">Gestante</h5>
        </span>
      </span>
      <p className="font-Geosans text-zinc-900 text-2xl lg:max-w-[70%] md:max-w-[90%] text-center">
        A sessão para gestantes tem um papel fundamental em capturar a beleza e
        a jornada única da maternidade. Ela proporciona um registro memorável do
        período de gravidez, e trás com sensibilidade a conexão entre a mãe e o
        bebê que está a caminho em fotografia.
      </p>
      <p className="font-Geosans text-zinc-900 text-2xl lg:max-w-[70%] md:max-w-[90%] text-center">
        Além de documentar esse momento especial, é um dia especial para se
        sentir confiante e radiante, destacando a feminilidade e a expectativa
        com o novo membro da família.
      </p>
      <div className="flex items-center justify-center w-full pt-6 pb-10">
        <Button
          endContent={<Heart size={20} />}
          className="bg-primary hover:opacity-80 rounded-md mb-10"
          size="md"
          onClick={() =>
            navigate.push(
              "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+cobertura+de+gestantes%21&type=phone_number&app_absent=0"
            )
          }
        >
          Eu Quero
        </Button>
      </div>
      <SessionCarousel gallery={gestantesGallery} />
    </div>
  );
}
