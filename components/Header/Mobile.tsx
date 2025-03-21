"use client";

import { useState } from "react";
import Link from "next/link";
import { RiCloseLargeFill } from "react-icons/ri";
import { THeader } from "@/app/(website)/config";

const Mobile = ({ config }: { config: THeader["header"] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="wrapper h-28 flex items-center justify-between gap-6">
        <Link href={config.logo.href}>
          <img
            src={config.logo.imageUrl}
            alt={config.logo.alt}
            className="h-12"
          />
        </Link>
        <span
          className="font-poppins cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {config.mobileMenuText}
        </span>
      </div>
      <div
        className={`fixed inset-0 flex flex-col bg-background text-foreground ${
          isOpen ? "left-0 opacity-100" : "left-[100%] opacity-0"
        } transition-all duration-300`}
      >
        <div className="wrapper h-28 flex items-center justify-between gap-6">
          <Link href={config.logo.href} onClick={() => setIsOpen(false)}>
            <img
              src={config.logo.imageUrl}
              alt={config.logo.alt}
              className="h-12"
            />
          </Link>
          <RiCloseLargeFill
            className="text-4xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <nav className="wrapper py-6 flex-1 flex flex-col items-center justify-center gap-10">
          {config.nav.map((item, i) => (
            <Link key={i} href={item.href} onClick={() => setIsOpen(false)}>
              {item.title}
            </Link>
          ))}
          <Link
            href={config.button.href}
            onClick={() => setIsOpen(false)}
            className="border-2 rounded-xl border-black px-4 py-1.5"
          >
            {config.button.title}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Mobile;
