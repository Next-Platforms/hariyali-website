import React from "react";
import Image from "next/image";
import { TTheMission } from "../../config";

const OurJourney = ({ config }: { config: TTheMission["ourJourney"] }) => {
  return (
    <section className="wrapper py-10">
      <h2 className="text-4xl font-poppins font-bold">{config.title}</h2>
      <div className="relative mt-5">
        <div className="absolute left-[11px] h-full w-[2px] bg-[#232D22]" />
        <div className="flex flex-col gap-10">
          {config.journeys.map((journey, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-0 top-0 w-[24px] h-[24px] rounded-full border-2 border-[#232D22] bg-background" />
              <div className="flex flex-col gap-2">
                <h3 className="font-medium">{journey.date}</h3>
                <p>{journey.description}</p>
              </div>
              {journey?.image?.imageUrl && (
                <div className="relative aspect-square w-80 mt-5">
                  <Image
                    src={journey.image.imageUrl}
                    alt={`Journey event from ${journey.date}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
