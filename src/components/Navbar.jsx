import useWindowScroll from "@/hooks/useWindowScroll";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { HamburgerIcon, XMarkIcon } from "./Icons";

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
      },
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
      },
    );
  };

  return (
    <>
      <nav
        id="navbar"
        className={cn(
          "fixed left-0 top-0 z-50 flex h-[50px] lg:h-[60px] w-full items-center justify-center bg-black/30 backdrop-blur-[10px] transition-[top] duration-[0.6s]",
          animate ? "top-[-94px]" : "",
          sticked ? "top-0 z-20" : "",
        )}
      >
        <div className="container relative flex w-11/12 items-center justify-between py-2.5 lg:py-0">
          <HamburgerIcon
            className="size-5 lg:size-6 cursor-pointer text-white"
            onClick={() => openSidebar()}
          />

          <Link href="/" className="lg:abs-center" aria-label="home">
            <Image
              src="/img/logo-gold.png"
              alt="rcentric"
              height={250}
              width={50}
              className="h-[25px] w-auto lg:h-[35px]"
            />
          </Link>

          <button className="bg-black px-4 py-2 text-xs uppercase tracking-wider text-white lg:px-8 lg:py-2.5 lg:text-sm">
            Get in touch
          </button>
        </div>
      </nav>
      <div
        ref={sidebarWrapper}
        className={cn(
          "fixed -left-full top-0 z-[50] h-screen w-screen bg-black/40 text-white backdrop-blur-lg ease-in-out lg:w-[45vw]",
        )}
      >
        <XMarkIcon
          className="absolute left-[5%] top-4 size-6 cursor-pointer lg:left-[20%] lg:top-6"
          onClick={() => closeSidebar()}
        />
        <div className="flex h-full flex-col items-end justify-center uppercase">
          <div className="relative w-[85%] lg:w-[80%]">
            <div
              className="flex flex-col gap-6 text-2xl *:cursor-pointer lg:gap-8 lg:text-2xl"
              ref={linkWrapper}
            >
              <p
                onClick={() => navigate("/")}
                className={cn(
                  router.pathname === "/"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white",
                )}
              >
                HOME
              </p>
              <p
                onClick={() => navigate("/about-us")}
                className={cn(
                  router.pathname === "/about-us"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white",
                )}
              >
                ABOUT US
              </p>
              <p
                onClick={() => navigate("/benefits")}
                className={cn(
                  router.pathname === "/benefits"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white",
                )}
              >
                Benefits
              </p>
              <p
                onClick={() => navigate("/rewards-privileges")}
                className={cn(
                  router.pathname === "/rewards-privileges"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white",
                )}
              >
                Rewards & Privileges
              </p>

              <p
                onClick={() => navigate("/faqs")}
                className={cn(
                  router.pathname === "/faqs"
                    ? "text-white"
                    : "text-[#CBCBCB] hover:text-white",
                  "mt-6 text-sm lg:text-base",
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
                  "-mt-3 text-sm lg:-mt-5 lg:text-base",
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
