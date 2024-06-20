import BenefitsExperiencesCarousel from "@/components/BenefitsExperiencesCarousel";
import BookingForm from "@/components/BookingForm";
import HomeCarousel from "@/components/HomeCarousel";
import Achivements from "@/components/Achivements";
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

      <section  className="relative">
      <video
          id="video"
          style={{filter:"brightness('30%')"}}
          src="/videos1/3.mp4#t=0.1"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_H.webp"
          className="h-[100vh] w-screen object-cover object-center hidden sm:block"
        >
          <source src="/videos1/3.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          id="video"
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
          Crafting the future of brands with technology
          </h1>
        </div>
      
      </section>

      <section
        data-fade-up
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
        <section ref={animateRef} className="container w-11/12 pt-16 lg:pt16 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 pb-1 lg:pb-0">
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
          id="video"
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
          id="video"
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
          id="video"
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
          id="video"
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
          id="video"
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
          id="video"
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
          id="video"
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
          id="video"
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
      <section style={{flexDirection:'row'}} className="row pt-16 lg:pt-38 mb-20 flex flex-col items-center pb-14 lg:pb-28 dataFadeContainer bg-[#373535]">
      <div style={{marginLeft:'20%'}} className="relative h-[5vh] lg:h-[5vh] lg:ml-20 w-20vw lg:w-[260px]">
                  <h1 className="font-ElMessiri text-white text-xl lg:text-3xl">
                    12+
                  </h1>
                  <p className="font-Manrope font-light para mt-2 lg:mt-2 text-white">Lorem Ipsum</p>
                </div>
                <div className="relative h-[5vh] lg:h-[5vh] w-40vw lg:w-[260px]">
                  <h1 className="font-ElMessiri text-white text-xl lg:text-3xl">
                    10+
                  </h1>
                  <p className="font-Manrope font-light  para mt-2 lg:mt-2 text-white">Countries with happy  <br /> <br />
                  customers </p>
                </div>
                <div className="relative h-[5vh] lg:h-[5vh] w-40vw lg:w-[260px]">
                  <h1 className="font-ElMessiri text-white text-xl lg:text-3xl">
                    204+
                  </h1>
                  <p className="ont-Manrope font-light  para mt-2 lg:mt-2 text-white">Clients across globe <br /> <br /></p>
                </div>
                <div className="relative h-[5vh] lg:h-[5vh] w-40vw lg:w-[260px]">
                  <h1 className="font-ElMessiri text-white text-xl lg:text-3xl">
                    204+
                  </h1>
                  <p className="font-Manrope font-light  text-weight-300 para mt-2 lg:mt-2 text-white">Total projects completed<br /> <br /></p>
                </div>
                </section>
                
                <section
        className="grid place-items-center mt-16 lg:mt-8 container w-11/12"
      >
        <h1 className="title text-center mt-3 whitespace-nowrap">
        Testimonials
        </h1>
        <p className="para text-center mt-4 w-full lg:w-[100%] text-black">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard 
          <br /> <br />
          dummy text ever since the 1500s,
          <br /> <br />
          </p>
      </section>
      <div className="relative horizontal ml-[28%] h-[20vh] lg:h-[25vh] w-[750px] lg:w-[660px]">
                <div className="items-center h-[27vh] w-[27vh] lg:h-[45vh] lg:w-[45vh]">
                  <Image
                    src="/img/testimonial.png"
                    width={220}
                    height={180}
                    alt="beyond points"
                    style={{borderRadius:10}}
                    //className="w-full h-full object-cover object-[50%_60%]"
                  />
                </div>
                <div
                  className="h-[23vh] lg:h-[20vh] bg-white border-x border-b border-[#E2E3DC] text-black text-center px-4
                 lg:px-8 py-3.5 lg:py-6"
                >
                  <h1 className="font-bodoniModa text-xl lg:text-xl">
                  “Excellent work , one of the best marketing team”
                  </h1>
                  <p className="para mt-2 lg:mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s,</p>
                </div>
              </div>

              <section
        className="grid place-items-center mt-16 lg:mt-8 container w-11/12"
      >
        <h1 className="title text-center mt-3 whitespace-nowrap">
        Blogs
        </h1>
      </section>
      <div className="relative ml-[28%] h-[20vh] lg:h-[95vh] w-[750px] lg:w-[660px]">
                <div className="items-center h-[27vh] w-[27vh] lg:h-[45vh] lg:w-[45vh]">
                  <Image
                    src="/img/testimonial.png"
                    width={220}
                    height={180}
                    alt="beyond points"
                    style={{borderRadius:10}}
                    className="w-full h-full object-cover object-[50%_60%]"
                  />
                </div>
                <div
                  className="h-[23vh] lg:h-[20vh] w-[750px] lg:w-[390px] bg-white border-x border-b border-[#E2E3DC] text-black text-center px-4
                 lg:px-8 py-3.5 lg:py-6"
                >
                  <h1 className="font-bodoniModa text-xl lg:text-xl">
                  Heading title of the blog goes here
                  </h1>
                  <p className="para mt-2 lg:mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&apos;`s standard dummy text ever since the 1500s, has been the industry`&apos;`s standard dummy text ever since the 1500`&apos;`s</p>
                 <Link
            style={{justifyContent:'center',textAlign:'center',alignContent:'center'}}
            href=''
            className="text-[10px] lg:text-[14px] uppercase lg:w-[220px] font-medium tracking-wider h-[40px] bg-black text-white w-[140px] mt-[30]"
          >
            Read More
          </Link>
                </div>

              </div>

      <section className="pt-16 lg:pt-28 mt-5 lg:mt-5 flex flex-col items-center pb-14 lg:pb-28 dataFadeContainer bg-[#000000]">
        <h1 className="title text-center text-white  w-11/12 mx-auto">
        Have a Project in Mind
        </h1>
        <BookingForm />
      </section>
    </>
  );
}
