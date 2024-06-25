import Link from "next/link";
import Logo from "./icons/Logo";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import XMarkIcon from "./icons/XMarkIcon";
import gsap from "gsap";
import { HamburgerIcon } from "./Icons";
import useWindowScroll from "@/hooks/useWindowScroll";
import Image from "next/image";

const Navbar = () => {
  const windowScroll = useWindowScroll();
  const [scroll, setScroll] = useState(windowScroll.y);
  const [animate, setAnimate] = useState(false);
  const [sticked, setSticked] = useState(false);

  // navbar animation refs
  const navbarRef = useRef(null);
  const sidebarWrapper = useRef(null);
  const linkWrapper = useRef(null);

  const router = useRouter();

  useEffect(() => {
    var navHeight = navbarRef.current?.offsetHeight || 0;

    const scrolled = windowScroll.y;

    if (scrolled > navHeight) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }

    if (scrolled > scroll) {
      setSticked(false);
    } else {
      setSticked(true);
    }

    setScroll(scrolled);
  }, [windowScroll.y]);

  const navigate = (url) => {
    closeSidebar();
    router.push(url);
  };

  const openSidebar = () => {
    const links = Array.from(linkWrapper?.current.children)
      .map((item) => item)
      .reverse();

    gsap.to(sidebarWrapper.current, {
      left: 0,
      duration: 1,
      ease: "power1.out",
    });
    gsap.fromTo(
      links,
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        delay: 0.4,
        ease: "power1.out",
      }
    );
  };

  const closeSidebar = () => {
    const links = Array.from(linkWrapper?.current.children).map((item) => item);
    gsap.to(sidebarWrapper.current, {
      left: "-100%",
      duration: 1,
      delay: 0.8,
      ease: "power1.in",
    });
    gsap.fromTo(
      links,
      {
        x: 0,
        opacity: 1,
      },
      {
        x: "-100%",
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power1.in",
      }
    );
  };

  return (
    <>
      <nav
        id="navbar"
        className={cn(
          "h-[60px] flex items-center justify-center w-full fixed top-0 left-0 z-50 bg-black/30 transition-[top] duration-[0.6s] backdrop-blur-[10px]",
          animate ? "top-[-94px]" : "",
          sticked ? "top-0 z-20" : ""
        )}
      >
        <div className="container flex items-center justify-between pr-5 py-2.5 lg:py-0 relative">
          <HamburgerIcon
            className=" size-6 cursor-pointer text-white"
            onClick={() => openSidebar()}
          />

          <Image src="/img/logo-gold.png" alt="rcentric" height={250} width={50} className="h-[35px] w-auto abs-center"/>

          <button className="text-white py-2.5 uppercase tracking-wider text-sm px-8 bg-black">Get in touch</button>
        </div>
      </nav>
      <div
        ref={sidebarWrapper}
        className={cn(
          "fixed top-0 h-screen -left-full w-screen lg:w-[45vw] bg-black/40 z-[50] backdrop-blur-lg text-white ease-in-out"
        )}
      >
        <XMarkIcon
          className="size-6 absolute left-[5%] lg:left-[20%] top-4 lg:top-6 cursor-pointer"
          onClick={() => closeSidebar()}
        />
        <div className="flex flex-col justify-center items-end h-full uppercase">
          <div className="w-[85%] lg:w-[80%] relative">
            <div
              className="text-2xl lg:text-2xl flex flex-col gap-6 lg:gap-8 *:cursor-pointer"
              ref={linkWrapper}
            >
              <p
                onClick={() => navigate("/")}
                className={cn(
                  router.pathname === "/"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                HOME
              </p>
              <p
                onClick={() => navigate("/about-us")}
                className={cn(
                  router.pathname === "/about-us"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                ABOUT US
              </p>
              <p
                onClick={() => navigate("/benefits")}
                className={cn(
                  router.pathname === "/benefits"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                Benefits
              </p>
              <p
                onClick={() => navigate("/rewards-privileges")}
                className={cn(
                  router.pathname === "/rewards-privileges"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                Rewards & Privileges
              </p>

              <p
                onClick={() => navigate("/faqs")}
                className={cn(
                  router.pathname === "/faqs"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white ",
                  "text-sm lg:text-base mt-6"
                )}
              >
                FAQ
              </p>
              <p
                onClick={() => navigate("/contact-us")}
                className={cn(
                  router.pathname === "/contact-us"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white",
                  "text-sm lg:text-base -mt-3 lg:-mt-5"
                )}
              >
                Contact Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
