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
        <title>Liv Reside</title>
      </Head>
      <section className="relative">
        <video
          src="/videos/opus_H.mp4#t=0.1"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_H.webp"
          className="h-[100vh] w-screen object-cover object-center hidden sm:block"
        >
          <source src="/videos/opus_H.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
        <div className="absolute left-1/2 -translate-x-1/2 bottom-20 text-white w-full">
          <p className="subtitle text-center text-white">
            THE OPUS BY OMNIYAT
          </p>
          <h1 className="title text-center mt-3">
            EXCLUSIVE PROPERTY MANAGEMENT
          </h1>
        </div>
        <span className="hero__scrollTo">
          <span className="text-xs tracking-little text-white uppercase absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
            scroll down
          </span>
          <div className="line !h-[2.5rem]">
            <div className="background"></div>
            <div className="highlight"></div>
          </div>
        </span>
      </section>

      <section
        data-fade-up
        className="grid place-items-center mt-16 lg:mt-24 container w-11/12"
      >
        <p className="subtitle text-center">INTRODUCING</p>
        <h1 className="title text-center mt-3">LIV RESIDE</h1>
        <p className="para text-center mt-4 w-full lg:w-[60%] text-pretty">
          LIV Reside is a dedicated luxury property management service company
          for short-term rentals of OMNIYAT residences, established under the
          auspices of OMNIYAT LIV Property Management.
          <br /> <br />
          LIV Reside offers you an all-inclusive proposition to ensure you
          maximise your return on investment while maintaining market agility
          and accessibility.
          <br /> <br />
          As an esteemed owner of an OMNIYAT residence, we introduce an
          opportunity to capitalise on the promising short-term rental market in
          Dubai.
        </p>
      </section>

      <section
        className="mt-40 lg:mt-36 bg-gray flex justify-center items-center relative"
        ref={animateRef}
      >
        <div
          id="opusImg"
          className="h-[50vh] lg:h-screen relative flex justify-center items-end w-full"
        >
          <Image
            ref={imgRef}
            src="/img/asset6.webp"
            width={1980}
            height={2000}
            alt="Liv Reside"
            className="object-cover object-[60%_100%] lg:object-top h-full w-full"
          />
        </div>

        <div className="absolute left-0 bottom-0 w-full pl-5 lg:pl-20 pb-6 lg:pb-14 pt-28 flex flex-col items-start gap-[10vh] lg:gap-[25vh] bg-gradient-to-t from-black/50 to-transparent">
          <div className="flex flex-col items-start" data-fade-up>
            <p className="subtitle text-white uppercase text-sm lg:text-base">
              The Opus by OMNIYAT
            </p>
            <h1 className="title text-white mt-3 text-left lg:text-center">
              ENHANCE YOUR INVESTMENT
            </h1>
          </div>
        </div>
      </section>

      <div className="bg-[#FAFAFA]">
        <section className="container w-11/12 pt-16 lg:pt-36 flex flex-col lg:flex-row items-end gap-8 lg:gap-10 pb-10 lg:pb-20">
          <div className="w-full lg:w-[55%] overflow-hidden">
            <Image
              src="/img/asset8.webp"
              width={1980}
              height={2000}
              alt="Liv Reside"
              className="object-cover object-center h-full w-full img-zooming scale-150"
            />
          </div>
          <div
            className="w-full lg:w-[45%] flex flex-col justify-end h-full lg:pr-14"
            data-fade-up
          >
            <p className="subtitle text-left">The OPUS RESIDENCES</p>
            <h1 className="title text-left whitespace-nowrap mt-2">
              Beyond Luxury <br /> Residences
            </h1>
            <p className="para lg:mb-10 mt-4">
              As the homeowner of a residence at The Opus, embrace LIV
              Reside&lsquo;s exclusive benefits to turn your residence into an
              asset. Whether generating rental income, professional property
              management, or offering a world-class experience, LIV Reside
              maximises your residence&lsquo;s value for optimal return on
              investment.
            </p>
          </div>
        </section>
      </div>

      <section className="lg:hidden">
        <Image
          src="/img/asset4.webp"
          width={1980}
          height={2000}
          alt="Liv Reside"
          className="object-cover object-center h-full w-full"
        />
      </section>

      <section
        data-fade-up
        className="grid place-items-center mt-16 lg:mt-28 container w-11/12"
      >
        <p className="subtitle text-center">ENJOY</p>
        <h1 className="title text-center mt-3 whitespace-nowrap">
          IMMEDIATE BENEFITS
        </h1>
        <p className="para text-center mt-4 w-full lg:w-[50%] text-pretty">
          LIV Reside goes beyond standard property management with exclusive
          benefits tailored to enhance every aspect of your property ownership
          journey.
        </p>
      </section>

      <HomeCarousel data={benefits} />

      <BenefitsExperiencesCarousel data={benefitExperiences} />

      <div data-fade-up>
      <div className="mt-12 lg:mt-24">
        <Image
          src={"/img/opus-map.svg"}
          height={1980}
          width={1080}
          alt="map"
          className="w-screen h-full"
        />
      </div>
        <section className="grid place-items-center mt-16 lg:mt-36 container w-11/12">
        <div className="h-[15vh] lg:h-[15vh]">
                  <Image
                    src={require('../../public/img/meDubai/meDubai.svg')}
                    width={1920}
                    height={1080}
                    alt="beyond points"
                    className="w-full h-full object-cover object-[50%_60%]"
                  />
                </div>
          <p className="subtitle text-center">REWARDS AND PRIVILEGES</p>
          <h1 className="title text-center mt-3">BEYOND POINTS</h1>
          <p className="para text-center mt-4 w-full lg:w-[50%] text-pretty">
            LIV Reside offers a gateway to a world of extraordinary benefits
            through MeliáRewards program, designed to add an extra layer of
            luxury to your lifestyle.
          </p>
        </section>
        <div className="grid place-items-center pt-8 lg:pt-12 pb-16 lg:pb-28 container w-11/12">
          <p className="subtitle text-center">MeliáRewards: Silver Owners</p>
          <div className="para text-sm text-center mt-6 w-full lg:w-[35%] *:py-4">
            <p>VIP Treatment</p>
            <p className="border-t border-darkGreen border-opacity-15">
              20% discount on the MeliáRewards rate
            </p>
            <p className="border-t border-darkGreen border-opacity-15">
              15% discount on Food & Beverage and spas within Meliá Hotels
              International managed outlets
            </p>
            <p className="border-t border-darkGreen border-opacity-15">
              Unlimited nights
            </p>
            <p className="border-t border-darkGreen border-opacity-15">
              Maximum of 5 rooms per stay
            </p>
          </div>
          <Link href="/rewards-privileges" className="cta mt-12 lg:mt-20">
            Explore More
          </Link>
        </div>
      </div>

      <div>
        <Image
          src="/img/asset10.webp"
          width={1980}
          height={2000}
          alt="Liv Reside"
          className="h-full w-full mb-0 lg:mb-12"
        />
        <h1 className="sticky bottom-0 w-full bg-white py-8 title text-center">
          WELCOME TO A WORLD WHERE LUXURY <br /> MEETS LEGACY,AND EVERY STAY IS
          AN <br />
          EXQUISITE MEMORY.
        </h1>
      </div>

      <div className="w-11/12 container flex justify-center -mt-2 relative ">
        <p className="para text-center w-full lg:w-[50%] dataFadeTarget">
          In crafting unforgettable experiences, LIV Reside stands as your
          trusted partner, dedicated to maximising the potential of your OMNIYAT
          residence.
        </p>
      </div>

      <section className="pt-16 lg:pt-28 mt-10 lg:mt-20 flex flex-col items-center pb-14 lg:pb-28 dataFadeContainer bg-[#FAFAFA]">
        <h1 className="title text-center w-11/12 mx-auto">
          Express Your Interest
        </h1>
        <BookingForm />
      </section>
    </>
  );
}
