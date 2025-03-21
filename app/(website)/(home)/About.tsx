"use client";

import React from "react";
import { THome } from "../config";

const About = ({ config }: { config: THome["about"] }) => {
  return (
    <section className="py-10 wrapper grid grid-cols-12 gap-10">
      <div className="flex flex-col justify-center col-span-6 max-1000:col-span-12">
        <h2 className="text-4xl font-poppins font-bold max-600:text-center">
          {config.title}
        </h2>
        <p className="mt-5">{config.description}</p>
      </div>

      <div className="bg-[#DAFFD3] rounded-xl overflow-hidden col-span-3 max-1000:col-span-6 max-600:col-span-12">
        <div className="h-40 max-600:h-60">
          <img
            src={config.cardOne.imageUrl}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-center p-5">{config.cardOne.text}</p>
      </div>

      <div className="bg-[#DAFFD3] rounded-xl overflow-hidden col-span-3 max-1000:col-span-6 max-600:col-span-12">
        <div className="h-40 max-600:h-60">
          <img
            src={config.cardTwo.imageUrl}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="text-center p-5">{config.cardTwo.text}</p>
      </div>

      <div className="flex items-center  gap-5 p-10 bg-[#232D22] text-white rounded-xl col-span-6 max-1000:col-span-12 max-1000:row-start-2">
        <img src={config.specialCard.imageUrl} className="w-32" />
        <div>
          <h3 className="text-4xl font-poppins font-bold">
            {config.specialCard.title}
          </h3>
          <p className="mt-2">{config.specialCard.description}</p>
        </div>
      </div>

      <div className="h-60 max-600:h-auto bg-[#DAFFD3] rounded-xl overflow-hidden flex max-600:flex-col col-span-6 max-1000:col-span-12">
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
    </section>
  );
};

export default About;
