import React from "react";
import Hero from "./sections/Hero";
import OurMission from "./sections/OurMission";
import OurJourney from "./sections/OurJourney";
import { TTheMission } from "../config";

const TheMissionPage = ({ config }: { config: TTheMission }) => {
  return (
    <main>
      <Hero config={config.hero} />
      <OurMission config={config.ourMission} />
      <OurJourney config={config.ourJourney} />
    </main>
  );
};

export default TheMissionPage;
