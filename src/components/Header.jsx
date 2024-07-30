import brainwave from "../assets/brainwave.svg";
<<<<<<< HEAD
import { disablePageScroll, enablePageScroll } from "scroll-lock";
=======
>>>>>>> 70ff497d66e3b7094afd4c86c1955e246862b6ab
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
<<<<<<< HEAD
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
=======
import MenuSvg from 
>>>>>>> 70ff497d66e3b7094afd4c86c1955e246862b6ab

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
<<<<<<< HEAD
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if(!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 broder-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
=======
        setOpenNavigation(false);
    } else {
        setOpenNavigation(true);
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm broder-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
>>>>>>> 70ff497d66e3b7094afd4c86c1955e246862b6ab
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" herf="#hero">
          <img src={brainwave} widht={190} height={40} alt="Brainwave" />
        </a>

<<<<<<< HEAD
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bh-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
=======
        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bh-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
>>>>>>> 70ff497d66e3b7094afd4c86c1955e246862b6ab
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
<<<<<<< HEAD
                onClick={handleClick}
=======
>>>>>>> 70ff497d66e3b7094afd4c86c1955e246862b6ab
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
<<<<<<< HEAD

          <HamburgerMenu />
=======
>>>>>>> 70ff497d66e3b7094afd4c86c1955e246862b6ab
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button classname="hidden lg:flex" href="#login">
<<<<<<< HEAD
          Sign in
        </Button>

        <Button
          classname="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
=======
            Sign in
        </Button>

        <Button classname="ml-auto lg:hidden" px="px-3">
            <MenuSvg openNavigation={openNavigation}/>
>>>>>>> 70ff497d66e3b7094afd4c86c1955e246862b6ab
        </Button>
      </div>
    </div>
  );
};

export default Header;
