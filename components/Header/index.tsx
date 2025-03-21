import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { THeader } from "@/app/(website)/config";

const Header = ({ config }: { config: THeader["header"] }) => {
  return (
    <header className="absolute top-0 left-0 right-0 z-[999] text-white">
      <div className="max-900:hidden">
        <Desktop config={config} />
      </div>
      <div className="hidden max-900:block">
        <Mobile config={config} />
      </div>
    </header>
  );
};

export default Header;
