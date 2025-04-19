"use client";

import React from "react";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { THome } from "../../config";

const Testimonials = ({ config }: { config: THome["testimonials"] }) => {
  return (
    <section className="py-10 wrapper flex flex-col gap-10" id={config.id}>
      <h2 className="text-4xl font-poppins font-bold text-center">
        {config.title}
      </h2>
      <div className="flex flex-col gap-5">
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween="20px"
            modules={[Pagination, Navigation]}
            navigation={{
              disabledClass: "swiper-button-disabled",
              nextEl: ".custom-swiper-button-next-2",
              prevEl: ".custom-swiper-button-prev-2",
              enabled: true,
            }}
            pagination={{
              el: "#container-for-bullets-2",
              type: "bullets",
              bulletClass: "swiper-custom-bullet",
              bulletActiveClass: "swiper-custom-bullet-active",
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {config.testimonials.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col bg-[#DAFFD3] p-5 rounded-xl">
                  <iframe
                    loading="lazy"
                    height="400"
                    src={testimonial?.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-max mx-auto flex gap-5">
          <div className="custom-swiper-button-prev-2 cursor-pointer">
            <SlArrowLeftCircle className="text-5xl" />
          </div>
          <div
            id="container-for-bullets-2"
            className="flex items-center gap-3"
          />
          <div className="custom-swiper-button-next-2 cursor-pointer">
            <SlArrowRightCircle className="text-5xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
