import React from "react";
import CommonHeroSection from "@/components/CommonHeroSection";
import { TTheMission } from "../../config";

const Hero = ({ config }: { config: TTheMission["hero"] }) => {
  return <CommonHeroSection config={config} />;
};

export default Hero;
