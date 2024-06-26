import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationArrow } from "./Icons";

const BlogsSlider = ({ data }) => {
  return (
    <div className="bg-[#F5F5F580]/50 pt-16 lg:pt-28">
      <div className="flex flex-col items-center">
        <h1 className="title whitespace-nowrap text-center">Blogs</h1>
        <p className="para mt-6 w-full text-center text-black lg:w-[60%]">
          Copyright Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          standard dummy text ever since the 1500s,
        </p>
      </div>
      <div className="mt-10 pb-12 lg:mt-20 lg:pb-24">
        <Swiper
          modules={[Navigation, Scrollbar]}
          className="homeCarousel relative h-[86vh] !pl-[16px] lg:h-[680px] lg:!pl-[68px]"
          speed={1000}
          slidesPerView={"auto"}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
          breakpoints={{
            300: {
              spaceBetween: 15,
            },
            640: {
              spaceBetween: 30,
            },
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto">
              <div className="relative h-[80vh] w-[350px] transition-all duration-500 ease-in-out hover:shadow-[0_20px_40px_rgba(0,0,0,.5)] lg:h-[620px] lg:w-[500px]">
                <div className="relative h-[48vh] overflow-hidden lg:h-[350px]">
                  <Image
                    src={item.img}
                    width={1920}
                    height={1080}
                    alt="beyond points"
                    className={cn(
                      "h-full w-full object-cover",
                      item?.objectPosition,
                    )}
                  />
                </div>
                <div className="flex h-[32vh] flex-col justify-between border-x border-b border-[#E2E3DC] bg-white px-4 py-3.5 text-black lg:h-[270px] lg:px-8 lg:py-6">
                  <div className="flex flex-col">
                    <h1 className="whitespace-pre-line font-optima text-lg uppercase lg:text-2xl">
                      {item.title}
                    </h1>
                    <p className="para mt-2 text-xs lg:mt-4 lg:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    href={item.url}
                    className="btn w-fit bg-black px-5 py-2.5 text-sm text-white transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_5px_15px_rgba(0,0,0,.33)]"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-scrollbar"></div>
          <div
            className={
              "absolute -bottom-2 left-0 z-10 flex w-full justify-end lg:pr-[10vw]"
            }
          >
            <div className="flex gap-8 pr-4 lg:gap-6 lg:pr-16">
              <NavigationArrow className="image-swiper-button-prev size-7 rotate-180 cursor-pointer stroke-[1px] text-black lg:stroke-[2px]" />
              <NavigationArrow className="image-swiper-button-next size-7 cursor-pointer stroke-[1px] text-black lg:stroke-[2px]" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogsSlider;
