import React from "react";
import { TTheTeam } from "../../config";

const CorePillars = ({ config }: { config: TTheTeam["corePillars"] }) => {
  return (
    <section className="py-10 wrapper">
      <div className="grid grid-cols-3 max-900:grid-cols-2 max-600:grid-cols-1 gap-10">
        {config.cards.map((card, i) => (
          <div key={i} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl font-poppins font-bold">{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <div className="bg-[#DAFFD3] rounded-xl overflow-hidden mt-auto">
              <img
                src={card.image.imageUrl}
                className="w-full h-60 object-cover"
                alt={card.title}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CorePillars;
