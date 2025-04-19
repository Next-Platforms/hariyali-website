"use client";

import React, { useState } from "react";
import { TTheTeam } from "../../config";

const Presence = ({ config }: { config: TTheTeam["presence"] }) => {
  const [selectedDistrict, setSelectedDistrict] = useState(0);

  const getFieldColor = (field: string) => {
    switch (field) {
      case "1":
        return "bg-[#3A9A38]";
      case "2":
        return "bg-[#FFD037]";
      case "3":
        return "bg-[#FF786E]";
      default:
        return "bg-[#FFA037]";
    }
  };

  return (
    <section className="py-10 wrapper">
      <h3 className="text-xl font-semibold text-center">{config.subTitle}</h3>
      <h2 className="text-4xl font-poppins font-bold text-center mt-2">
        {config.title}
      </h2>
      <p className="text-center mt-4">{config.description}</p>
      <div className="font-poppins grid grid-cols-12 max-900:gap-10 mt-10">
        {/* Districts List */}
        <div className="col-span-3 max-900:col-span-12">
          <div className="bg-[#232D22] text-white rounded-xl rounded-r-none max-900:rounded-r-xl overflow-hidden h-[600px] max-900:h-[400px] flex flex-col">
            <div className="p-4 border-b border-white/10">
              <h3 className="font-semibold">District List</h3>
            </div>
            <div className="flex-1 overflow-y-auto dark-scrollbar">
              {config.districts.map((district, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedDistrict(i)}
                  className={`w-full text-left p-4 transition-colors border-b border-white/10 cursor-pointer ${
                    selectedDistrict === i ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  {district.districtName}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Selected District Table */}
        <div className="col-span-9 max-900:col-span-12">
          <div className="bg-[#E6FFDA] rounded-xl rounded-l-none max-900:rounded-l-xl overflow-hidden h-[600px] max-900:h-[600px] flex flex-col">
            <div className="flex-1 overflow-auto light-scrollbar">
              <table className="border-collapse w-full min-w-[800px] text-lg">
                <thead>
                  <tr className="sticky top-0 bg-[#E6FFDA]">
                    {config.districts[selectedDistrict].table.columns.map(
                      (column, i) => (
                        <th
                          key={i}
                          className="p-4 text-left font-semibold border border-black"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={column.icon.imageUrl}
                              className="w-6 min-w-6"
                            />
                            <span>{column.title}</span>
                          </div>
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {config.districts[selectedDistrict].table.rows.map(
                    (row, i) => (
                      <tr key={i}>
                        <td className="p-4 border border-black">{row.name}</td>
                        <td className="p-4 border border-black">{row.title}</td>
                        <td className="p-4 border border-black">
                          {row.profession}
                        </td>
                        <td className="p-4 border border-black">
                          <div className="flex gap-2 flex-wrap">
                            {row.fieldsHelpingIn.map((field, i) => (
                              <span
                                key={i}
                                className={`${getFieldColor(
                                  field
                                )} px-2 py-1 rounded-full text-white text-sm font-semibold`}
                              >
                                {field === "1"
                                  ? "On Ground"
                                  : field === "2"
                                  ? "Social Media"
                                  : field === "3"
                                  ? "Content"
                                  : field}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="p-4 border border-black">
                          {row.treesAdopted} 🌳
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        /* Dark scrollbar for district list */
        .dark-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .dark-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .dark-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          border: 2px solid rgba(255, 255, 255, 0.05);
        }

        .dark-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Light scrollbar for table */
        .light-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .light-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.05);
        }

        .light-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 20px;
          border: 2px solid rgba(0, 0, 0, 0.05);
        }

        .light-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Presence;
