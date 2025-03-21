"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { THome } from "../config";

const Notices = ({ config }: { config: THome["notices"] }) => {
  return (
    <section className="py-10 wrapper flex flex-col gap-10">
      <h2 className="text-4xl font-poppins font-bold text-center">
        {config.title}
      </h2>
      <div className="flex flex-col gap-5">
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween="40px"
            modules={[Pagination]}
            pagination={{
              el: "#container-for-bullets",
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
                  <div className="flex items-center gap-2">
                    <p className="mt-2 text-xl">{notice.description}</p>
                    <Link
                      href={notice.href}
                      className="bg-[#232D22] text-white min-w-12 w-12 h-12 rounded-full flex items-center justify-center"
                    >
                      <FaArrowRightLong className="text-2xl" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-max mx-auto flex gap-5">
          <div id="container-for-bullets" className="flex items-center gap-3" />
        </div>
      </div>
    </section>
  );
};

export default Notices;
