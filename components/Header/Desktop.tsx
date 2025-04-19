"use client";

import Link from "next/link";
import { THeader } from "@/app/(website)/config";

const Desktop = ({ config }: { config: THeader["header"] }) => {
  return (
    <div className="wrapper h-28 flex items-center justify-between gap-6">
      <Link href={config.logo.href}>
        <img
          src={config.logo.imageUrl}
          alt={config.logo.alt}
          className="h-20"
        />
      </Link>
      <nav className="flex items-center gap-6">
        {config.nav.map((item, i) => (
          <Link key={i} href={item.href}>
            {item.title}
          </Link>
        ))}
        <Link href={config.button.href} className="button-outline">
          {config.button.title}
        </Link>
      </nav>
    </div>
  );
};

export default Desktop;
