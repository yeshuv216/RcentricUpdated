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
          className="h-[48vh] lg:h-[105vh] relative !pl-[16px] lg:!pl-[68px] homeCarousel"
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
              <div className="relative h-[20vh] lg:h-[95vh] w-[350px] lg:w-[660px]">
                <div className="h-[27vh] lg:h-[45vh]">
                  <Image
                    src={item.img}
                    width={520}
                    height={180}
                    alt="beyond points"
                    style={{borderRadius:60}}
                    className="w-full h-full object-cover object-[50%_60%]"
                  />
                </div>
                <div
                  className="h-[23vh] lg:h-[20vh] bg-white border-x border-b border-[#E2E3DC] text-black text-center px-4
                 lg:px-8 py-3.5 lg:py-6"
                >
                  <h1 className="font-bodoniModa text-xl lg:text-xl">
                    {item.title}
                  </h1>
                  <p className="para mt-2 lg:mt-4">{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeCarousel;
