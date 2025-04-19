"use client";

import React from "react";
import Link from "next/link";

const CommonHeroSection = ({
  config,
}: {
  config: {
    title: string;
    descriptions: string[];
    bgImage: string;
    button: { title: string; href: string };
  };
}) => {
  return (
    <section
      className="min-h-screen text-white flex flex-col relative"
      style={{
        backgroundImage: `url(${config.bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[#1E2F13A3] z-[1]" />
      <div className="z-[2] wrapper flex-1 flex flex-col items-center justify-center text-center mt-[7rem] py-10">
        <h1 className="text-6xl leading-16 font-poppins font-bold">
          {config.title}
        </h1>
        <div className="flex flex-col gap-2 mt-6">
          {config.descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
        <Link href={config.button.href} className="button-primary mt-6">
          {config.button.title}
        </Link>
      </div>
    </section>
  );
};

export default CommonHeroSection;
