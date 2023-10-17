import SessionCarousel from "./SessionCarousel";
import { Heart } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FemininosImages } from "@/app/assets/Femininos";

export default function FemininoSession() {
  const femininoGallery = Object.values(FemininosImages);
  const navigate = useRouter();
  return (
    <div
      className="w-full flex flex-col space-y-5 items-center justify-start py-5 bg-gradient-to-b from-zinc-200 to-[#BB987D] p-10"
      id="feminino"
    >
      <span className="flaex flex-col space-y-2 items-center justify-center py-10">
        <span className="flex space-x-2">
          <h5 className="font-theseasons text-zinc-800 text-5xl">Feminino</h5>
        </span>
      </span>
      <p className="font-Geosans text-zinc-900 text-2xl lg:max-w-[70%] md:max-w-[90%] text-center">
        A sessão feminina é importante para valorizar a sua singularidade e
        beleza, capturando sua essência de uma maneira autêntica e poderosa. É
        importante porque oferece um espaço para se expressar, celebrar sua
        individualidade e se reconectar com sua autoestima.
      </p>
      <div className="flex items-center justify-center w-full pt-6 pb-w10">
        <Button
          endContent={<Heart size={20} />}
          className="bg-primary hover:opacity-80 rounded-md"
          size="md"
          onClick={() =>
            navigate.push(
              "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+cobertura+de+femininos%21&type=phone_number&app_absent=0"
            )
          }
        >
          Eu Quero
        </Button>
      </div>
      <SessionCarousel gallery={femininoGallery} />
    </div>
  );
}
