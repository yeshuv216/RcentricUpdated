import BlogsSlider from "@/components/BlogsSlider";
import BookingForm from "@/components/BookingForm";
import Counter from "@/components/Counter";
import HomeCarousel from "@/components/HomeCarousel";
import HomeVideoSection from "@/components/HomeVideoSection";
import Statistics from "@/components/Statistics";
import TestimonialSlider from "@/components/TestimonialsSlider";
import {
  benefits,
  blogs,
  featuredProjects,
  homeVideos,
  stats,
  testimonials,
} from "@/lib/contants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
          className="h-svh lg:h-screen w-screen object-cover object-center"
        >
          <source src="/videos/3.mp4#t=0.1" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute left-0 top-0 w-full h-full bg-black/35 z-[1]"></div>
        <div className="abs-center text-white w-full z-[5]">
          <h1 className="font-optima text-5xl leading-[60px] text-center">
            Crafting the future of brands <br /> with technology
          </h1>
        </div>
      </section>

      <section className="grid place-items-center my-40 container w-11/12">
        <div className="h-[15vh] lg:h-[15vh]">
          <Image
            src="/img/monogram.png"
            width={80}
            height={80}
            alt="beyond points"
            className="size-20"
          />
        </div>
        <h1 className="title text-center mt-3">
          Engage Your Audience with Creative and{" "}
        </h1>
        <h1 className="title text-center mt-3">
          Compelling Content Marketing{" "}
        </h1>
        <p className="para text-center mt-8 w-full lg:w-[60%]">
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

      <section className="  bg-[#F9F9F980]/50 pt-20 pb-10">
        <div className="container w-11/12 lg:w-[80%] grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center">
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
