import { cn } from "@/lib/utils";
import Image from "next/image";
import { EffectCoverflow, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationArrow } from "./Icons";
import { useState } from "react";

const ProjectsCarousel = ({ data }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const goToSlide = (idx) => {
    // console.log(idx);
    swiper.slideToLoop(idx);
  };

  return (
    <div className="mt-16 lg:mt-28">
      <div className="flex flex-col items-center">
        <h1 className="title text-center whitespace-nowrap">
          Featured Projects
        </h1>
        <p className="para text-center mt-6 w-full lg:w-[60%] text-black">
          Copyright Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          standard dummy text ever since the 1500s,
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-16">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => goToSlide(item.id - 1)}
            className={cn(
              "text-[#10103D] cursor-pointer font-light uppercase px-4 pb-1.5  border-gold",
              activeIndex === item.id - 1
                ? "border-b-[2px] opacity-100"
                : "opacity-30"
            )}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className="pb-12 lg:pb-24 mt-10 lg:mt-16">
        <Swiper
          modules={[Navigation, Scrollbar, EffectCoverflow]}
          effect="coverflow"
          className="h-[86vh] lg:h-[700px] relative homeCarousel"
          speed={1000}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
          onSwiper={setSwiper}
          onRealIndexChange={(idx) => setActiveIndex(idx.realIndex)}
          breakpoints={{
            300: {
              spaceBetween: 15,
            },
            640: {
              spaceBetween: 140,
            },
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
          }}
          loop={true}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id} className="!w-auto">
              <div className="relative h-[80vh] lg:h-[625px] w-[350px] lg:w-[65vw]">
                <div className="h-[48vh] lg:h-[500px] relative overflow-hidden">
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
                  className="h-[32vh] lg:h-[125px] bg-white border-x border-b border-[#E2E3DC] text-black px-4
                 lg:px-8 py-3.5 lg:py-6 flex flex-col justify-between"
                >
                  <div className="flex flex-col">
                    <p className="para mt-2 lg:mt-4 text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-scrollbar"></div>
          <div
            className={
              "absolute left-0 z-10 flex w-full justify-end -bottom-2 lg:pr-[5vw]"
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

export default ProjectsCarousel;
