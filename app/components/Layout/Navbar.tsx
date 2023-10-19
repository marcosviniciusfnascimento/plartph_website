import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NavbarWrapper,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/PlartphSvg.svg";
import { usePathname } from "next/navigation";
import { Instagram } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";

type MenuItemType = {
  path: string;
  label: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems: MenuItemType[] = [
    {
      path: "/",
      label: "Início",
    },
    {
      path: "/sessoes",
      label: "Sessões",
    },
    {
      path: "/presets",
      label: "Presets",
    },
    {
      path: "/duvidas",
      label: "Dúvidas",
    },
    {
      path: "/sobre",
      label: "Sobre",
    },
  ];

  return (
    <>
      <NavbarWrapper
        className="py-3 fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm hidden max-sm:block"
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        shouldHideOnScroll
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Abrir Menu" : "Fechar Menu"}
            className="text-zinc-800"
          />
        </NavbarContent>
        <NavbarBrand>
          <Link href="/">
            <Image alt="Logo" src={Logo} width={130} height={40} />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="end">
          <Link href={"http://instagram.com/plartph"} target="_blank">
            <Instagram
              className="text-zinc-700 hover:text-zinc-400"
              size={30}
            />
          </Link>
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+coberturas+fotograficas%21&type=phone_number&app_absent=0"
            }
            target="_blank"
          >
            <BsWhatsapp
              className="text-zinc-700 hover:text-zinc-400"
              size={27}
            />
          </Link>
        </NavbarContent>
        <NavbarMenu
          className="pt-16 bg-[#BB987D] z-20"
          onClick={() => setIsMenuOpen(false)}
        >
          {menuItems.map((item) => (
            <Link href={item.path} key={item.path}>
              <NavbarMenuItem className="text-white font-Geosans text-2xl text-center">
                {item.label}
              </NavbarMenuItem>
            </Link>
          ))}
        </NavbarMenu>
      </NavbarWrapper>
      <NavbarWrapper
        className="py-3 fixed top-0 left-0 right-0 bg-transparent backdrop-blur-3xl max-sm:hidden"
        shouldHideOnScroll
      >
        <NavbarBrand>
          <Link href="/">
            <Image alt="Logo" src={Logo} width={150} height={50} />
          </Link>
        </NavbarBrand>
        <NavbarContent justify="center">
          {menuItems.map((item) => (
            <Link href={item.path} key={item.path}>
              <NavbarItem
                className={`font-Geosans text-xl font-medium ${
                  pathname === item.path ? "text-amber-800" : "text-white"
                } hover:text-amber-800`}
              >
                {item.label}
              </NavbarItem>
            </Link>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <Link href={"http://instagram.com/plartph"} target="_blank">
            <Instagram
              className="text-zinc-200 hover:text-zinc-800"
              size={30}
            />
          </Link>
          <Link
            href={
              "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+coberturas+fotograficas%21&type=phone_number&app_absent=0"
            }
            target="_blank"
          >
            <BsWhatsapp
              className="text-zinc-200 hover:text-zinc-800"
              size={27}
            />
          </Link>
        </NavbarContent>
      </NavbarWrapper>
    </>
  );
}
