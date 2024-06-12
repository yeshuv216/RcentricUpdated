import NavigationArrowIcon from "@/components/icons/NavigationArrow";
import Image from "next/image";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const RewardsCarousel = ({ data }) => {
  return (
    <>
      <div className="bg-[#FAFAFA] pb-16 lg:pb-32">
        <Swiper
          modules={[Navigation, Scrollbar]}
          className="h-[96vh] lg:h-[115vh] relative pt-16 lg:pt-20 !pl-[16px] lg:!pl-[68px] rewardsCarousel"
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
              <div className="relative h-[80vh] lg:h-[95vh] w-[350px] lg:w-[560px]">
                <div className="h-[45vh] lg:h-[65vh]">
                  <Image
                    src={item.img}
                    width={1920}
                    height={1080}
                    alt="beyond points"
                    className="w-full h-full object-cover object-[50%_60%]"
                  />
                </div>
                <div
                  className="h-[35vh] lg:h-[30vh] bg-white border-x border-b border-[#E2E3DC] text-black px-4
                 lg:px-8 py-3 lg:py-6"
                >
                  <h1 className="font-bodoniModa text-2xl uppercase">
                    {item.title}
                  </h1>
                  <ul className="para list-disc pl-5 mt-3 text-black">
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-scrollbar"></div>
          <div
            className={
              "absolute left-0 z-10 flex w-full justify-end lg:pr-[10vw] -bottom-2 lg:bottom-0"
            }
          >
            <div className="flex gap-8 pr-4 lg:gap-6 lg:pr-16">
              <NavigationArrowIcon className="image-swiper-button-prev size-7 cursor-pointer stroke-[1px] text-black lg:stroke-[2px] rotate-180" />
              <NavigationArrowIcon className="image-swiper-button-next size-7  cursor-pointer stroke-[1px] text-black lg:stroke-[2px]" />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default RewardsCarousel;
