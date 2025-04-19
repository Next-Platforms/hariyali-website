"use client";

import React from "react";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { THome } from "../../config";

const Notices = ({ config }: { config: THome["notices"] }) => {
  return (
    <section className="py-10 wrapper flex flex-col gap-10">
      <h2 className="text-4xl font-poppins font-bold text-center">
        {config.title}
      </h2>
      <div className="flex flex-col gap-5">
        <div>
          <Swiper
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={3}
            spaceBetween="40px"
            modules={[Autoplay, Pagination, Navigation]}
            navigation={{
              disabledClass: "swiper-button-disabled",
              nextEl: ".custom-swiper-button-next-1",
              prevEl: ".custom-swiper-button-prev-1",
              enabled: true,
            }}
            pagination={{
              el: "#container-for-bullets-1",
              type: "bullets",
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {config.notices.map((notice, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col bg-[#DAFFD3] p-5 rounded-xl">
                  <h3 className="text-2xl font-poppins font-semibold">
                    {notice.title}
                  </h3>
                  <p className="mt-2">{notice.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-max mx-auto flex gap-5">
          <div className="custom-swiper-button-prev-1 cursor-pointer">
            <SlArrowLeftCircle className="text-5xl" />
          </div>
          <div
            id="container-for-bullets-1"
            className="flex items-center gap-3"
          />
          <div className="custom-swiper-button-next-1 cursor-pointer">
            <SlArrowRightCircle className="text-5xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;
