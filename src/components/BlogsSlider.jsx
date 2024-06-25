import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MapPinIcon, NavigationArrow } from "./Icons";

const BlogsSlider = ({ data }) => {
  return (
    <div className="pt-16 lg:pt-28 bg-[#F5F5F580]/50">
      <div className="flex flex-col items-center">
        <h1 className="title text-center whitespace-nowrap">Blogs</h1>
        <p className="para text-center mt-6 w-full lg:w-[60%] text-black">
          Copyright Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          standard dummy text ever since the 1500s,
        </p>
      </div>
      <div className="pb-12 lg:pb-24 mt-10 lg:mt-20">
        <Swiper
          modules={[Navigation, Scrollbar]}
          className="h-[86vh] lg:h-[680px] relative !pl-[16px] lg:!pl-[68px] homeCarousel"
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
              <div className="relative h-[80vh] lg:h-[620px] w-[350px] lg:w-[500px] transition-all duration-500 ease-in-out hover:shadow-[0_20px_40px_rgba(0,0,0,.5)]">
                <div className="h-[48vh] lg:h-[350px] relative overflow-hidden">
                  <Image
                    src={item.img}
                    width={1920}
                    height={1080}
                    alt="beyond points"
                    className={cn(
                      "w-full h-full object-cover",
                      item?.objectPosition
                    )}
                  />
                </div>
                <div
                  className="h-[32vh] lg:h-[270px] bg-white border-x border-b border-[#E2E3DC] text-black px-4
                 lg:px-8 py-3.5 lg:py-6 flex flex-col justify-between"
                >
                  <div className="flex flex-col">
                    <h1 className="font-optima text-lg lg:text-2xl uppercase whitespace-pre-line">
                      {item.title}
                    </h1>
                    <p className="para mt-2 lg:mt-4 text-xs lg:text-sm">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    href={item.url}
                    className="btn w-fit bg-black text-white text-sm py-2.5 px-5 transition-all duration-500 ease-in-out hover:shadow-[0_5px_15px_rgba(0,0,0,.33)] hover:scale-105"
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
              "absolute left-0 z-10 flex w-full justify-end -bottom-2 lg:pr-[10vw]"
            }
          >
            <div className="flex gap-8 pr-4 lg:gap-6 lg:pr-16">
              <NavigationArrow className="image-swiper-button-prev size-7 cursor-pointer stroke-[1px] text-black lg:stroke-[2px] rotate-180" />
              <NavigationArrow className="image-swiper-button-next size-7  cursor-pointer stroke-[1px] text-black lg:stroke-[2px]" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogsSlider;
