import React from "react";
import Image from "next/image";
import { TTheMission } from "../../config";

const OurMission = ({ config }: { config: TTheMission["ourMission"] }) => {
  return (
    <section className="wrapper py-10 flex flex-col gap-5">
      <h2 className="text-4xl font-poppins font-bold">{config.title}</h2>
      <div className="flex flex-col gap-5">
        {config.paragraphs.map(({ paragraph }, index) => (
          <p key={index} className="text-gray-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={config.image.imageUrl}
          alt="Our Mission"
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default OurMission;
