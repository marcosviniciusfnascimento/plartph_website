import { newBornImages } from "@/app/assets/NewBorn";
import SessionCarousel from "./SessionCarousel";
import { Heart } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function NewBornSession() {
  const newBornGallery = Object.values(newBornImages);
  const navigate = useRouter();
  return (
    <div
      className="w-full flex flex-col space-y-5 items-center justify-start py-5 bg-gradient-to-b from-zinc-200 to-[#BB987D] p-10"
      id="newborn"
    >
      <span className="flex flex-col space-y-2 items-center justify-center py-10">
        <span className="flex space-x-2">
          <h5 className="font-theseasons text-zinc-800 text-5xl">New Born</h5>
        </span>
      </span>
      <p className="font-Geosans text-zinc-900 text-2xl lg:max-w-[70%] md:max-w-[90%] text-center">
        Um tesouro inestimável é capturar a delicadeza e a beleza do
        recém-nascido. É possível documentar os primeiros dias de vida e
        transformar momentos cotidianos em lembranças doces e duradouras.
      </p>
      <p className="font-Geosans text-zinc-900 text-2xl lg:max-w-[70%] md:max-w-[90%] text-center">
        Imagine que incrível poder daqui a 10 anos mostrar para seu filho como
        ele era, o quartinho e até mesmo vocês quando ele nasceu!
      </p>
      <div className="flex items-center justify-center w-full pt-6 pb-10">
        <Button
          endContent={<Heart size={20} />}
          className="bg-primary hover:opacity-80 rounded-md mb-10"
          size="md"
          onClick={() =>
            navigate.push(
              "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+cobertura+de+newborn%21&type=phone_number&app_absent=0"
            )
          }
        >
          Eu Quero
        </Button>
      </div>
      <SessionCarousel gallery={newBornGallery} />
    </div>
  );
}
