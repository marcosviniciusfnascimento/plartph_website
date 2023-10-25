import { StaticImageData } from "next/image";
import CapaFeminino from "../assets/Femininos/CapaFeminino.jpg";
import CapaGestante from "../assets/Gestantes/CapaGestante.jpg";
import CapaParto from "../assets/Parto/CapaParto.jpg";
import CapaNewborn from "../assets/NewBorn/CapaNewBorn.jpg";

export type SessionsConfigType = {
  key: string;
  label: string;
  texto: string;
  imagem: StaticImageData;
};

export const SessionsConfig: SessionsConfigType[] = [
  {
    key: "gestante",
    label: "Gestantes",
    texto: "",
    imagem: CapaGestante,
  },
  {
    key: "parto",
    label: "Acompanhamento de Parto",
    texto: "",
    imagem: CapaParto,
  },
  {
    key: "newborn",
    label: "New Born",
    texto: "",
    imagem: CapaNewborn,
  },
  {
    key: "feminino",
    label: "Femininos",
    texto: "",
    imagem: CapaFeminino,
  },
];

export const scrollIntoTheView = (id: string) => {
  let element = document.getElementById(id) as HTMLElement;
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
