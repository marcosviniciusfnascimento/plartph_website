import Image from "next/image";
import Logo from "../../assets/PlartphSvg.png";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-primary flex flex-col space-y-2 py-3 items-center justify-center w-full">
      <img alt="logo" src={Logo.src} width={130} height={40} />
      <h5 className="font-light text-sm">{`Todos os direitos reservados ©️ | ${year}`}</h5>
    </footer>
  );
}
