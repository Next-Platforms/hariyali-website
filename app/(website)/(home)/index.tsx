import React from "react";
import Hero from "./sections/Hero";
import Notices from "./sections/Notices";
import About from "./sections/About";
import Team from "./sections/Team";
import Volunteer from "./sections/Volunteer";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import { THome } from "../config";

const HomePage = ({ config }: { config: THome }) => {
  return (
    <main>
      <Hero config={config.hero} />
      <Notices config={config.notices} />
      <About config={config.about} />
      <Team config={config.team} />
      <Volunteer config={config.volunteer} />
      <Testimonials config={config.testimonials} />
      <Contact config={config.contact} />
    </main>
  );
};

export default HomePage;
