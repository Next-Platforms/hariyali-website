import React from "react";
import Hero from "./sections/Hero";
import { TTheMission } from "../config";

const TheMissionPage = ({ config }: { config: TTheMission }) => {
  return (
    <main>
      <Hero config={config.hero} />
      {/* More sections to added below */}
    </main>
  );
};

export default TheMissionPage;
