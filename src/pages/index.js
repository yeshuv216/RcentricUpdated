import BenefitsExperiencesCarousel from "@/components/BenefitsExperiencesCarousel";
import BookingForm from "@/components/BookingForm";
import HomeCarousel from "@/components/HomeCarousel";
import { benefitExperiences, benefits } from "@/lib/contants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  // img
  const animateRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // enhance investment section amimation
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: animateRef?.current,
            start: "top bottom",
            end: "+=800",
            scrub: 0.5,
            snap: 0.5,
          },
        })
        .to(imgRef?.current, {
          width: `100%`,
          height: "155%",
          ease: "power1.inOut",
          transformStyle: "preserve-3d",
        });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: animateRef?.current,
            start: "top bottom",
            end: "+=1000",
            scrub: 0.5,
            snap: 0.5,
          },
        })
        .to(imgRef?.current, {
          width: `100%`,
          height: "155%",
          ease: "power1.inOut",
          transformStyle: "preserve-3d",
        });
    });

    const imgZooming = document?.querySelectorAll(".img-zooming");
    if (imgZooming) {
      Array.from(imgZooming).map((item) => {
        gsap.to(item, {
          scale: 1,
          duration: 5,
          scrollTrigger: {
            trigger: item,
            toggleActions: "play pause resume reset",
          },
        });
      });
    }
  });

  return (
    <>
      <Head>
        <title>R Centric</title>
      </Head>
      <section className="relative">
      <Image
          src="/img/hero.png"
          style={{width:'100%',height:'100%'}}
          width={1300}
          height={1000}
          alt="benefits"
          className="left-[45%]"
        />
        <video
          src="/videos/opus_V.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_V.webp"
          className="sm:hidden h-svh w-screen object-cover"
        >
          <source src="/videos/opus_V.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 text-white w-full">
          <h1 className="title text-center mt-1">
          Crafting the future of brands with technology
          </h1>
        </div> */}
      
      </section>

      <section
       
        className="grid place-items-center mt-16 lg:mt-24 container w-11/12"
      >
         <div className="h-[15vh] lg:h-[15vh]">
                  <Image
                    src={require('../../public/img/monogram.png')}
                    width={106}
                    height={106}
                    alt="beyond points"
                  />
                </div>
        <h1 className="title text-center mt-3">Engage Your Audience with Creative and  </h1>
        <h1 className="title text-center mt-3">Compelling Content Marketing </h1>
        <p className="para text-center mt-4 w-full lg:w-[60%] text-pretty">
Our content marketing services focus on creating high-quality, valuable content that
          <br /> <br />
          resonates with your audience, drives engagement, and builds brand authority.
          <br /> <br />
        </p>
      </section>

      <div className="bg-[#ffffff]">
        <section className="container w-11/12 pt-16 lg:pt16 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 pb-1 lg:pb-0">
          <div className=" left-1/4 lg:w-[50%]">
            <Image
              src="/img/companylist.png"
              width={1700}
              height={100}
              alt="R Centric"
              style={{objectFit:'contain',marginLeft:'47%'}}
              // className="object-fit object-center h-full w-full img-zooming scale-150"
            />
          </div>
        </section>
      </div>
<div>
      <section  className="relative" style={{marginTop:30}}>
      <video
          style={{filter:"brightness('30%')"}}
          src="/videos1/1.mp4#t=0.1"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_H.webp"
          className="h-[60vh] w-screen object-cover object-center hidden sm:block"
        >
          <source src="/videos1/1.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          src="/videos1/1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_V.webp"
          className="sm:hidden h-svh w-screen object-cover"
        >
          <source src="/videos1/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 text-white w-full">
          <h1 className="title text-center mt-1">
          Branding
          </h1>
          <p className="para text-center mt-4 w-full lg:w-[100%] text-white">
          Copyright Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          <br /> <br />
          standard dummy text ever since the 1500s,
          <br /> <br />
        </p>
        </div>
      
      </section>
      <section  className="relative">
      <video
          style={{filter:"brightness('30%')"}}
          src="/videos1/2.mp4#t=0.1"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_H.webp"
          className="h-[60vh] w-screen object-cover object-center hidden sm:block"
        >
          <source src="/videos1/2.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          src="/videos1/2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_V.webp"
          className="sm:hidden h-svh w-screen object-cover"
        >
          <source src="/videos1/2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 text-white w-full">
          <h1 className="title text-center mt-1">
          Digital Marketing
          </h1>
          <p className="para text-center mt-4 w-full lg:w-[100%] text-white">
          Copyright Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          <br /> <br />
          standard dummy text ever since the 1500s,
          <br /> <br />
        </p>
        </div>
      
      </section>
      <section  className="relative">
      <video
          style={{filter:"brightness('30%')"}}
          src="/videos1/3.mp4#t=0.1"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_H.webp"
          className="h-[60vh] w-screen object-cover object-center hidden sm:block"
        >
          <source src="/videos1/3.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          src="/videos1/3.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_V.webp"
          className="sm:hidden h-svh w-screen object-cover"
        >
          <source src="/videos1/3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 text-white w-full">
          <h1 className="title text-center mt-1">
          IT Consulting
          </h1>
          <p className="para text-center mt-4 w-full lg:w-[100%] text-white">
          Copyright Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          <br /> <br />
          standard dummy text ever since the 1500s,
          <br /> <br />
        </p>
        </div>
      
      </section>
      <section  className="relative">
      <video
          style={{filter:"brightness('30%')"}}
          src="/videos1/2.mp4#t=0.1"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_H.webp"
          className="h-[60vh] w-screen object-cover object-center hidden sm:block"
        >
          <source src="/videos1/2.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          src="/videos1/2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_V.webp"
          className="sm:hidden h-svh w-screen object-cover"
        >
          <source src="/videos1/2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/2 text-white w-full">
          <h1 className="title text-center mt-1">
          Automation
          </h1>
          <p className="para text-center mt-4 w-full lg:w-[100%] text-white">
          Copyright Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          <br /> <br />
          standard dummy text ever since the 1500s,
          <br /> <br />
        </p>
        </div>
      
      </section>
      </div>
      <section className="lg:hidden">
        <Image
          src="/img/asset4.webp"
          width={1980}
          height={2000}
          alt="R Centric"
          className="object-cover object-center h-full w-full"
        />
      </section>

      <section
        data-fade-up
        className="grid place-items-center mt-16 lg:mt-8 container w-11/12"
      >
        <h1 className="title text-center mt-3 whitespace-nowrap">
        Featured Projects
        </h1>
        <p className="para text-center mt-4 w-full lg:w-[100%] text-black">
          Copyright Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          <br /> <br />
          standard dummy text ever since the 1500s,
          <br /> <br />
          </p>
      </section>

      <HomeCarousel data={benefits} />
      
{/* 
      <section className="pt-16 lg:pt-28 mt-10 lg:mt-20 flex flex-col items-center pb-14 lg:pb-28 dataFadeContainer bg-[#FAFAFA]">
        <h1 className="title text-center w-11/12 mx-auto">
          Express Your Interest
        </h1>
        <BookingForm />
      </section> */}
    </>
  );
}
