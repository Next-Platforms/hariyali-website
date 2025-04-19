import React from "react";
import Hero from "./sections/Hero";
import Team from "./sections/Team";
import Presence from "./sections/Presence";
import CorePillars from "./sections/CorePillars";
import { TTheTeam } from "../config";

const TheTeamPage = ({ config }: { config: TTheTeam }) => {
  return (
    <main>
      <Hero config={config.hero} />
      <Team config={config.team} />
      <Presence config={config.presence} />
      <CorePillars config={config.corePillars} />
    </main>
  );
};

export default TheTeamPage;
