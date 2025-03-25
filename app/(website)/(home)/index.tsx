import React from "react";
import Hero from "./Hero";
import Notices from "./Notices";
import About from "./About";
import Team from "./Team";
import Volunteer from "./Volunteer";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
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
