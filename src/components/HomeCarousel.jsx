import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import NavigationArrowIcon from "@/components/icons/NavigationArrow";
import Image from "next/image";

const HomeCarousel = ({ data }) => {
  return (
    <>
      <div className="bg-[#FAFAFA] pb-12 lg:pb-24 mt-12 lg:mt-24 pt-14 lg:pt-24">
        <Swiper
          modules={[Navigation, Scrollbar]}
          className="h-[88vh] lg:h-[105vh] relative !pl-[16px] lg:!pl-[68px] homeCarousel"
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
              <div className="relative h-[80vh] lg:h-[95vh] w-[350px] lg:w-[660px]">
                <div className="h-[57vh] lg:h-[75vh]">
                  <Image
                    src={item.img}
                    width={1920}
                    height={1080}
                    alt="beyond points"
                    className="w-full h-full object-cover object-[50%_60%]"
                  />
                </div>
                <div
                  className="h-[23vh] lg:h-[20vh] bg-white border-x border-b border-[#E2E3DC] text-black px-4
                 lg:px-8 py-3.5 lg:py-6"
                >
                  <h1 className="font-bodoniModa text-xl lg:text-2xl uppercase">
                    {item.title}
                  </h1>
                  <p className="para mt-2 lg:mt-4">{item.desc}</p>
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
              <NavigationArrowIcon className="image-swiper-button-prev size-7 cursor-pointer stroke-[1px] text-black lg:stroke-[2px] rotate-180" />
              <NavigationArrowIcon className="image-swiper-button-next size-7  cursor-pointer stroke-[1px] text-black lg:stroke-[2px]" />
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default HomeCarousel;
