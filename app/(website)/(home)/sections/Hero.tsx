import React from "react";
import Link from "next/link";
import { THome } from "../../config";

const Hero = ({ config }: { config: THome["hero"] }) => {
  return (
    <section
      className="min-h-screen text-white flex flex-col relative"
      style={{
        backgroundImage: `url(${config.background.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[#1E2F13A3] z-[1]" />
      <div className="z-[2] wrapper flex-1 flex flex-col mt-[7rem] py-10">
        <div className="flex max-1200:flex-col items-center gap-10 my-auto">
          <div className="w-[50%] max-1200:w-full flex flex-col items-start">
            <h1 className="text-6xl leading-16 font-poppins font-bold">
              {config.title}
            </h1>
            <p className="mt-4">{config.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <Link href={config.button1.href} className="button-primary">
                {config.button1.title}
              </Link>
              <Link href={config.button2.href} className="button-outline">
                {config.button2.title}
              </Link>
            </div>
          </div>
          <div className="w-[50%] max-1200:w-full flex flex-col gap-10">
            <div className="flex max-600:flex-col gap-10">
              <div className="bg-[#DAFFD333] rounded-xl overflow-hidden w-[50%] max-600:w-full">
                <div className="h-40 max-600:h-60">
                  <img
                    src={config.cardOne.imageUrl}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-center p-5">{config.cardOne.text}</p>
              </div>
              <div className="bg-[#DAFFD333] rounded-xl overflow-hidden w-[50%] max-600:w-full">
                <div className="h-40 max-600:h-60">
                  <img
                    src={config.cardTwo.imageUrl}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-center p-5">{config.cardTwo.text}</p>
              </div>
            </div>
            <div className="h-60 max-600:h-auto bg-[#DAFFD333] rounded-xl overflow-hidden flex max-600:flex-col">
              <div className="w-[50%] max-600:w-full max-600:h-60">
                <img
                  src={config.cardThree.imageUrl}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="w-[50%] max-600:w-full text-center p-5 m-auto">
                {config.cardThree.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
