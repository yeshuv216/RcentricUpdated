import BlogsSlider from "@/components/BlogsSlider";
import Statistics from "@/components/Statistics";
import { blogs, stats } from "@/lib/contants";
import Head from "next/head";
import Image from "next/image";

const Services = () => {
  return (
    <>
      <Head>
        <title>R Centric | Services</title>
      </Head>

      <section className="relative">
        <video
          id="video"
          src="/videos/3.mp4#t=0.1"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/img/banner_H.webp"
          className="h-[45vh] w-full object-cover object-center"
        >
          <source src="/videos/3.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-0 top-0 z-[1] h-full w-full bg-black/35"></div>
        <div className="abs-center z-[5] mt-14 w-full text-white">
          <h1 className="text-center font-optima text-3xl leading-[60px] lg:text-5xl">
            Branding
          </h1>
        </div>
      </section>

      <section className="container mt-40 grid w-11/12 place-items-center pb-20">
        <Image
          src="/img/monogram.png"
          width={80}
          height={80}
          alt="beyond points"
          className="size-24"
        />
        <h1 className="title mt-14 text-center text-3xl lg:text-5xl">
          Some headline for About
        </h1>
        <p className="para mt-8 w-full text-center text-base font-light !leading-[35px] tracking-wider lg:w-[70%] lg:text-xl">
          Our content marketing services focus on creating high-quality,
          valuable content that resonates with your audience, drives engagement,
          and builds brand authority.
        </p>
      </section>

      <Statistics data={stats} />

      <BlogsSlider data={blogs} />
    </>
  );
};

export default Services;
