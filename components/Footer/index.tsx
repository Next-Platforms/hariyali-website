"use client";

import React, { useState } from "react";
import Link from "next/link";
import { TFooter } from "@/app/(website)/config";
import { toast } from "react-toastify";

const Footer = ({ config }: { config: TFooter["footer"] }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "Footer Email Subscription", // Required
    email: "", // Required
    phone: "NA",
    message: "This is a footer email subscription.", // Required
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email) {
      toast.error("Email is required.");
      return;
    }
    setIsSubmitting(true);
    const response = await fetch("/api/handle-mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      toast.success("Thank you for subscribing.");
      setFormData({
        name: "Footer Email Subscription",
        email: "",
        phone: "NA",
        message: "This is a footer email subscription.",
      });
    } else {
      toast.error("Failed to subscribe.");
    }
    setIsSubmitting(false);
  };

  return (
    <footer className="py-10 bg-[#232D22] text-white">
      <div className="wrapper grid grid-cols-4 max-1000:grid-cols-3 gap-10 max-1000:text-center">
        <div className="max-1000:col-span-3 flex flex-col gap-10 max-1000:items-center">
          <Link href={config.logo.href} className="flex items-center gap-2">
            <img
              src={config.logo.imageUrl}
              alt={config.logo.alt}
              className="h-20"
            />
            <span className="text-3xl font-poppins font-bold">
              {config.logo.logoText}
            </span>
          </Link>
          <div className="flex items-center gap-5">
            {config.socialLinks.map((socialLink, i) => (
              <Link
                key={i}
                href={socialLink.href}
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={socialLink.icon.imageUrl}
                  alt={socialLink.title}
                  className="h-6"
                />
              </Link>
            ))}
          </div>
          <form
            className="relative max-1000:w-96 max-600:w-80"
            onSubmit={(e) => handleFormSubmit(e)}
          >
            <input
              required
              type="email"
              placeholder={config.inputField.placeholder}
              className="w-full bg-[#DAFFD3] placeholder:text-sm placeholder:text-black/80 rounded-xl px-4 py-2"
            />
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#18810D] text-white/80 px-4 py-1 rounded-xl text-sm disabled:opacity-60 cursor-pointer"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : config.inputField.buttonText}
            </button>
          </form>
        </div>
        {config.linkSections.map((section, i) => (
          <div key={i} className="flex flex-col gap-5 max-700:col-span-3">
            <h4 className="font-bold font-poppins text-2xl">{section.title}</h4>
            <ul className="flex flex-col gap-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
