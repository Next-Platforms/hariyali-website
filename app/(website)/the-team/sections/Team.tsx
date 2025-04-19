"use client";

import React from "react";
import { TTheTeam } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Team = ({ config }: { config: TTheTeam["team"] }) => {
  return (
    <section className="py-10 wrapper">
      <h3 className="text-xl font-semibold text-center">{config.subTitle}</h3>
      <h2 className="text-4xl font-poppins font-bold text-center mt-2">
        {config.title}
      </h2>
      <p className="text-center mt-4">{config.description}</p>
      <div className="flex flex-col gap-5 mt-10">
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
              nextEl: ".custom-swiper-button-next-team",
              prevEl: ".custom-swiper-button-prev-team",
              enabled: true,
            }}
            pagination={{
              el: "#container-for-bullets-team",
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
            {config.teamMembers.map((member, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col bg-[#232D22] text-white rounded-xl overflow-hidden h-full">
                  <div className="bg-[#DAFFD3] h-90">
                    <img
                      src={member.profilePicture.imageUrl}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-5">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <h4 className="text-lg font-medium mt-2">
                      {member.position}
                    </h4>
                    <p className="mt-2 text-sm">{member.description}</p>
                    <div className="flex items-center justify-end gap-4 mt-2">
                      {member.socialLinks.map((link, i) => (
                        <a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="min-w-6 w-6 h-6 flex items-center justify-center"
                        >
                          <img src={link.icon.imageUrl} className="w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-max mx-auto flex gap-5">
          <div className="custom-swiper-button-prev-team cursor-pointer">
            <SlArrowLeftCircle className="text-5xl" />
          </div>
          <div
            id="container-for-bullets-team"
            className="flex items-center gap-3"
          />
          <div className="custom-swiper-button-next-team cursor-pointer">
            <SlArrowRightCircle className="text-5xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
