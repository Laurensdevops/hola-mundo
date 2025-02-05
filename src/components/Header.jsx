import { useLocation, Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-[#1460a6] lg:bg-white/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-[#1460a6]" : "bg-[#1460a6]/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link className="block w-[12rem] xl:mr-8" to={"/"}>
          <p className="text-3xl font-code font-semibold text-[#051d40]">Laurens</p>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-[#1460a6] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => {
              const isActive =
                item.to === pathname.pathname ||
                (item.url && item.url === pathname.hash);

              return item.to ? (
                // Usa Link si "to" está definido (navegación interna)
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={item.disabled ? (e) => e.preventDefault() : handleClick}
                  className={`block relative font-code text-2xl uppercase transition-colors ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.disabled
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-[#ccd6db] hover:text-[#289cd7]"
                  } ${isActive ? "z-2 lg:text-[#289cd7]" : "lg:text-black"} 
                  lg:leading-5 lg:hover:text-[#289cd7] xl:px-12`}
                >
                  {item.title}
                </Link>
              ) : (
                // Usa <a> si "href" está definido (ancla o link externo)
                <a
                  key={item.id}
                  href={item.disabled ? undefined : item.url}
                  onClick={item.disabled ? (e) => e.preventDefault() : handleClick}
                  className={`block relative font-code text-2xl uppercase transition-colors ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                    item.disabled
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-[#dbd2cc] hover:text-[#289cd7]"
                  } ${isActive ? "z-2 lg:text-[#289cd7]" : "lg:text-[#ccd6db]/50"} 
                  lg:leading-5 lg:hover:text-[#289cd7] xl:px-12`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>

          <HamburgerMenu />
        </nav>

        <Button
          className="ml-auto lg:hidden bg-[#289cd7] hover:bg-[#1460a6] text-white"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
