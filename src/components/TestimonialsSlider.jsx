import { cn } from "@/lib/utils";
import Image from "next/image";
import { EffectCoverflow, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationArrow } from "./Icons";

const TestimonialSlider = ({ data }) => {
  return (
    <div className="mt-16 lg:mt-28">
      <div className="flex flex-col items-center">
        <h1 className="title whitespace-nowrap text-center">Testimonials</h1>
        <p className="para mt-6 w-full text-center text-black lg:w-[60%]">
          Copyright Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry`&apos;`s
          standard dummy text ever since the 1500s,
        </p>
      </div>
      <div className="mt-10 pb-12 lg:mt-16 lg:pb-24">
        <Swiper
          modules={[Navigation, Scrollbar, EffectCoverflow]}
          effect="coverflow"
          className="homeCarousel relative h-[86vh] lg:h-[400px]"
          speed={1000}
          slidesPerView={"auto"}
          centeredSlides={true}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
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
              <div className="relative flex h-[80vh] w-[350px] lg:h-[325px] lg:w-[900px]">
                <div className="relative h-full w-[450px] overflow-hidden">
                  <Image
                    src={item.img}
                    width={1920}
                    height={1080}
                    alt="beyond points"
                    className={cn(
                      "h-full w-full object-cover object-center",
                      item?.objectPosition,
                    )}
                  />
                </div>
                <div className="flex h-full w-full flex-col justify-between border-y border-r border-[#E2E3DC] bg-white px-4 py-3.5 text-black lg:px-8 lg:py-6">
                  <div className="flex flex-col">
                    <h1 className="font-optima text-3xl text-darkGreen">
                      {item.title}
                    </h1>
                    <p className="para mt-2 text-base lg:mt-4">{item.desc}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold uppercase">{item.name}</p>
                    <p className="para text-sm">{item.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-scrollbar"></div>
          <div
            className={
              "absolute -bottom-2 left-0 z-10 flex w-full justify-end lg:pr-[5vw]"
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

export default TestimonialSlider;
