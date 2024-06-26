import Statistics from "@/components/Statistics";
import { stats } from "@/lib/contants";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>R Centric | About</title>
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
            About
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
        <p className="para mt-8 w-full text-center text-base font-light !leading-[35px] tracking-wider lg:w-[60%] lg:text-xl">
          Our content marketing services focus on creating high-quality,
          valuable content that resonates with your audience, drives engagement,
          and builds brand authority.
        </p>
        <div className="mt-16 grid w-full grid-cols-1 gap-16 font-light lg:grid-cols-2">
          <div className="para flex flex-col items-center gap-4">
            <div className="h-0.5 w-36 bg-gold"></div>
            <p>WHAT WE DO:</p>
            <p>
              Copyright Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Copyright Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the standard dummy text ever since the 1500s, has been the
              standard dummy text ever since the 1500s,.{" "}
            </p>
          </div>
          <div className="para flex flex-col items-center gap-4">
            <div className="h-0.5 w-36 bg-gold"></div>
            <p>WHAT WE DO:</p>
            <p>
              Copyright Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Copyright Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the standard dummy text ever since the 1500s, has been the
              standard dummy text ever since the 1500s,.{" "}
            </p>
          </div>
        </div>
      </section>

      <Statistics data={stats} />

      <section className="bg-[#FFFCF6] py-32">
        <div className="container w-11/12">
          <h1 className="title text-3xl lg:text-5xl">Vission and mission</h1>
          <p className="para mt-8 w-full text-left text-base font-light !leading-[35px] tracking-wider lg:w-[80%] lg:text-xl">
            Our content marketing services focus on creating high-quality,
            valuable content that resonates with your audience, drives
            engagement, and builds brand authority.
          </p>

          <div className="gird-cols-1 mt-8 grid gap-x-16 gap-y-10 lg:grid-cols-2">
            <div className="para flex flex-col items-start justify-center gap-4 font-light">
              <div className="h-0.5 w-40 bg-gold"></div>
              <p className="text-darkGreen">Aspiration & Purpose</p>
              <p>
                Copyright Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Copyright Lorem Ipsum is simply
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the standard dummy text ever since the 1500s, has been
                the standard dummy text ever since the 1500s,.{" "}
              </p>
            </div>
            <Image
              src="/img/blogs/img1.jpeg"
              width={80}
              height={80}
              alt="beyond points"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
