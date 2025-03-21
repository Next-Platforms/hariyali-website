import React from "react";
import { THome } from "../config";

const Team = ({ config }: { config: THome["team"] }) => {
  return (
    <section className="py-10 wrapper flex flex-col gap-10">
      <h2 className="text-4xl font-poppins font-bold text-center">
        {config.title}
      </h2>
      <div className="grid grid-cols-3 max-900:grid-cols-2 max-600:grid-cols-1 gap-10">
        {config.members.map((member, i) => (
          <div className="flex flex-col gap-5" key={i}>
            <div className="bg-[#DAFFD3] p-8 rounded-xl relative h-90">
              <img
                src={member.profilePicture.imageUrl}
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0">
                <img src="/leaf-1.png" className="w-16" />
              </div>
              <div className="absolute bottom-0 right-0">
                <img src="/leaf-2.png" className="w-10" />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-poppins font-bold">{member.name}</h3>
              <h4 className="text-xl font-poppins font-semibold mt-2">
                {member.position}
              </h4>
              <p className="mt-2 text-lg">{member.description}</p>
              <div className="flex items-center gap-4 mt-2">
                {member.socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#232D22] text-white min-w-6 w-6 h-6 rounded-full flex items-center justify-center"
                  >
                    <img src={link.icon.imageUrl} className="w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#232D22] text-white p-10 rounded-xl grid grid-cols-4 max-800:grid-cols-2 gap-10">
        {config.otherMembers.map((member, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-poppins font-bold">{member.value}</h3>
            <p>{member.Title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
