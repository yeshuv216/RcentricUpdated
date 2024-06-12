import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import NavigationArrowIcon from "@/components/icons/NavigationArrow";
import Image from "next/image";
import { cn } from "@/lib/utils";

const BenefitsExperiencesCarousel = ({ data }) => {
  return (
    <div className="bg-[#FAFAFA] pt-10 lg:pt-20">
      <h1 className="title text-center whitespace-nowrap">F&B BENEFITS</h1>
      <div className="pt-10 lg:pt-20">
        <Swiper
          modules={[Navigation, EffectFade]}
          className="h-[80vh] lg:h-screen relative"
          speed={1000}
          loop={true}
          effect="fade"
          slidesPerView={1}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
          }}
          spaceBetween={0}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-screen h-fit">
                <div className="h-[70vh] lg:h-[85vh] w-screen">
                  <Image
                    src={item.img}
                    width={2020}
                    height={1080}
                    alt="beyond points"
                    className={cn(
                      "w-full h-full object-cover",
                      item.id === "5" ? "object-[50%_70%]" : "object-center"
                    )}
                  />
                </div>
                <div className="h-[10vh] lg:h-[15vh] w-full bg-black text-white flex items-center pl-8 lg:pl-[5vw]">
                  <h1 className="title text-white">{item.title}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div
            className={
              "absolute left-0 z-10 flex w-full justify-end bottom-[3vh] lg:bottom-[5vh] lg:pr-[10vw]"
            }
          >
            <div className="flex gap-8 pr-4 lg:gap-6 lg:pr-16">
              <NavigationArrowIcon className="image-swiper-button-prev size-7 cursor-pointer stroke-[1px] text-white lg:stroke-[2px] rotate-180" />
              <NavigationArrowIcon className="image-swiper-button-next size-7  cursor-pointer stroke-[1px] text-white lg:stroke-[2px]" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BenefitsExperiencesCarousel;
