import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import HamburgerIcon from "./icons/HamburgerIcon";
import XMarkIcon from "./icons/XMarkIcon";
import { BookingFormContext } from "@/providers/BookingFormProvider";
import gsap from "gsap";

const Navbar = () => {
  const windowScroll = useWindowScroll();
  const [bgCol, setBgCol] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scroll, setScroll] = useState(windowScroll.y);
  const router = useRouter();
  const { setIsFromOpen } = useContext(BookingFormContext);
  const sidebarWrapper = useRef(null);
  const linkWrapper = useRef(null);

  const navigate = (url) => {
    closeSidebar();
    router.push(url);
  };

  useEffect(() => {
    if (
      router.pathname === "/rewards-privileges" ||
      router.pathname === "/contact-us"
    ) {
      setBgCol(true);
    } else {
      setBgCol(false);
    }
  }, [router.pathname]);

  useEffect(() => {
    var navbar = document.getElementById("navbar");
    var navHeight = document.getElementById("navbar").offsetHeight;

    if (windowScroll.y > 2) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    const scrolled = windowScroll.y;

    if (scrolled > navHeight) {
      navbar.classList.add("animate");
    } else {
      navbar.classList.remove("animate");
    }

    if (scrolled > scroll) {
      navbar.classList.remove("sticked");
    } else {
      navbar.classList.add("sticked");
    }

    setScroll(scrolled);
  }, [windowScroll.y]);

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
          "fixed",
          bgCol || (!bgCol && scrolled)
            ? "transparent ext-black shadow-lg"
            : "transparent text-black",
          "top-0 z-[50] flex w-screen flex-row items-center"
        )}
      >
        <div className="container flex items-center justify-between px-4 pr-5 lg:px-16 py-2.5 lg:py-0 relative background-[#E2E3DC]">
          <div className="flex items-center gap-5 lg">
            <HamburgerIcon
              className=" size-6 cursor-pointer"
              onClick={() => openSidebar()}
            />
          </div>

          <Link
            href={"/"}
            aria-label="Home"
            className="absolute top-[75%] lg:top-1/2 left-[68px] lg:left-1/2 lg:-translate-x-1/2 -translate-y-1/2 lg:hidden"
          >
             <Image
          src="/img/logo.png"
          height={50}
          width={200}
          alt="benefits"
          className="h-svh lg:h-screen w-screen object-cover object-center"
        />
          </Link>

          <div style={{marginTop:25,alignSelf:'center'}} className="hidden lg:flex">
            <Link
              href={"/"}
              aria-label="home"
              className="absolute top-1/1 left-[45%]  -translate-y-1/2"
            >
              <Image
          src="/img/logo.png"
          height={50}
          width={150}
          alt="benefits"
          className="left-[45%]"
        />
            </Link>
            
          </div>
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
                //onClick={() => navigate("/about-us")}
                className={cn(
                  router.pathname === "/about-us"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                Who we are
              </p>
              <p
                onClick={() => navigate("/benefits")}
                className={cn(
                  router.pathname === "/benefits"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                Services
              </p>
              <p
                //onClick={() => navigate("/rewards-privileges")}
                className={cn(
                  router.pathname === "/rewards-privileges"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white"
                )}
              >
                Portfolio
              </p>

              <p
                //onClick={() => navigate("/faqs")}
                className={cn(
                  router.pathname === "/faqs"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white ",
                  "text-sm lg:text-base mt-6"
                )}
              >
                Blogs
              </p>
              <p
               // onClick={() => navigate("/contact-us")}
                className={cn(
                  router.pathname === "/contact-us"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white",
                  "text-sm lg:text-base -mt-3 lg:-mt-5"
                )}
              >
                Contact 
              </p>
              <p
                //onClick={() => navigate("/contact-us")}
                className={cn(
                  router.pathname === "/contact-us"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white",
                  "text-sm lg:text-base -mt-3 lg:-mt-5"
                )}
              >
                Carrer 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
