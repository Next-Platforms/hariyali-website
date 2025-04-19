import React from "react";
import CommonHeroSection from "@/components/CommonHeroSection";
import { TTheTeam } from "../../config";

const Hero = ({ config }: { config: TTheTeam["hero"] }) => {
  return <CommonHeroSection config={config} />;
};

export default Hero;
