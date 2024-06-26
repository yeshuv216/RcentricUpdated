import BlogsSlider from "@/components/BlogsSlider";
import HomeCarousel from "@/components/HomeCarousel";
import HomeVideoSection from "@/components/HomeVideoSection";
import Statistics from "@/components/Statistics";
import TestimonialSlider from "@/components/TestimonialsSlider";
import {
  blogs,
  featuredProjects,
  homeVideos,
  stats,
  testimonials,
} from "@/lib/contants";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>R Centric</title>
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
          className="h-svh w-full object-cover object-center lg:h-screen"
        >
          <source src="/videos/3.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-0 top-0 z-[1] h-full w-full bg-black/35"></div>
        <div className="abs-center z-[5] w-full text-white">
          <h1 className="text-center font-optima text-3xl leading-[60px] lg:text-5xl">
            Crafting the future of brands <br /> with technology
          </h1>
        </div>
      </section>

      <section className="container my-40 grid w-11/12 place-items-center">
        <Image
          src="/img/monogram.png"
          width={80}
          height={80}
          alt="beyond points"
          className="size-20"
        />
        <h1 className="title mt-14 text-center">
          Engage Your Audience with Creative and <br /> Compelling Content
          Marketing
        </h1>
        <p className="para mt-8 w-full text-center lg:w-[60%]">
          Our content marketing services focus on creating high-quality,
          valuable content that resonates with your audience, drives engagement,
          and builds brand authority.
        </p>
      </section>

      {homeVideos.map((item) => (
        <HomeVideoSection
          key={item.id}
          video={item.video}
          title={item.title}
          description={item.description}
        />
      ))}

      <section className="bg-[#F9F9F980]/50 pb-10 pt-20">
        <div className="container grid w-11/12 grid-cols-2 items-center justify-items-center lg:w-[80%] lg:grid-cols-4">
          <Image
            src="/img/clients/img1.png"
            width={199}
            height={142}
            alt="beyond points"
          />
          <Image
            src="/img/clients/img2.png"
            width={159}
            height={93}
            alt="beyond points"
          />
          <Image
            src="/img/clients/img3.png"
            width={138}
            height={39}
            alt="beyond points"
          />
          <Image
            src="/img/clients/img4.png"
            width={205}
            height={45}
            alt="beyond points"
          />
        </div>
      </section>

      <HomeCarousel data={featuredProjects} />

      <Statistics data={stats} />

      <TestimonialSlider data={testimonials} />

      <BlogsSlider data={blogs} />
    </>
  );
}
