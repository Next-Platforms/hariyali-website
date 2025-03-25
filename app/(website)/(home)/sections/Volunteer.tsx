import React from "react";
import Link from "next/link";
import { THome } from "../config";

const Volunteer = ({ config }: { config: THome["volunteer"] }) => {
  return (
    <section className="py-10 wrapper grid grid-cols-12 gap-10">
      <h2 className="text-4xl font-poppins font-bold col-span-4 max-1000:col-span-12">
        {config.title.lineOne}
        <br />
        {config.title.lineTwo}
      </h2>

      <div className="flex flex-col col-span-8 max-1000:col-span-12">
        <p>{config.description}</p>
        <Link
          href={config.button.href}
          className="text-[#53B327] font-semibold w-max mt-2"
        >
          {config.button.title} -&gt;
        </Link>
      </div>

      <div className="p-5 bg-[#DAFFD3] rounded-xl overflow-hidden col-span-4 max-800:col-span-12 flex flex-col gap-5">
        <h3 className="text-2xl font-poppins font-semibold">
          {config.cardOne.title}
        </h3>
        <img src={config.cardOne.indiaMap.imageUrl} className="h-60 mx-auto" />
        <p className="mt-2">{config.cardOne.description}</p>
      </div>

      <div className="p-5 bg-[#DAFFD3] rounded-xl overflow-hidden col-span-8 max-800:col-span-12 flex max-1000:flex-col gap-5">
        <div className="flex flex-col gap-5 justify-evenly">
          {config.cardTwo.points.map((point, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h3 className="text-2xl font-poppins font-semibold">
                {point.title}
              </h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
        <img
          src={config.cardTwo.image.imageUrl}
          className="w-60 max-1000:w-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default Volunteer;
