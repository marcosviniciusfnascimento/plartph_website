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
import useScreenSize from "@/app/hooks/useScreenSize";
import { useState } from "react";

type MenuItemType = {
  path: string;
  label: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useScreenSize();
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
      {isMobile && (
        <NavbarWrapper
          className="py-3 bg-gradient-to-r from-primary via-red-200/80 to-primary h-16"
          onMenuOpenChange={setIsMenuOpen}
          shouldHideOnScroll
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Abrir Menu" : "Fechar Menu"}
            />
          </NavbarContent>
          <NavbarBrand>
            <Link href="/">
              <Image alt="Logo" src={Logo} width={130} height={40} />
            </Link>
          </NavbarBrand>
          <NavbarContent justify="end">
            <Link href={"http://instagram.com/plartph"} target="_blank">
              <Instagram className="text-zinc-700 hover:text-white" size={30} />
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+coberturas+fotograficas%21&type=phone_number&app_absent=0"
              }
              target="_blank"
            >
              <BsWhatsapp
                className="text-zinc-700 hover:text-white"
                size={27}
              />
            </Link>
          </NavbarContent>
          <NavbarMenu className="top-16">
            {menuItems.map((item) => (
              <NavbarMenuItem key={item.path} className="text-zinc-700">
                {item.label}
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </NavbarWrapper>
      )}
      {!isMobile && (
        <NavbarWrapper
          className="py-3 fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm border-b-[1px] border-zinc-100"
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
                    pathname === item.path ? "text-amber-800" : "text-black"
                  } hover:text-amber-800`}
                >
                  {item.label}
                </NavbarItem>
              </Link>
            ))}
          </NavbarContent>
          <NavbarContent justify="end">
            <Link href={"http://instagram.com/plartph"} target="_blank">
              <Instagram className="text-zinc-700 hover:text-white" size={30} />
            </Link>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=5555996442675&text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+as+coberturas+fotograficas%21&type=phone_number&app_absent=0"
              }
              target="_blank"
            >
              <BsWhatsapp
                className="text-zinc-700 hover:text-white"
                size={27}
              />
            </Link>
          </NavbarContent>
        </NavbarWrapper>
      )}
    </>
  );
}
