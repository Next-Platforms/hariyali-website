"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaAngleRight } from "react-icons/fa6";
import { THome } from "../config";

const Contact = ({ config }: { config: THome["contact"] }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "", // Required
    email: "", // Required
    phone: "",
    message: "", // Required
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Name, Email and Message are required fields.");
      return;
    }
    setIsSubmitting(true);
    const response = await fetch("/api/handle-mail", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      toast.success(
        "Thank you for your message. We will get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      toast.error("Failed to send message.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-10 wrapper flex flex-col gap-10" id={config.id}>
      <h2 className="text-4xl font-poppins font-bold text-center">
        {config.title}
      </h2>
      <form
        onSubmit={handleFormSubmit}
        className="flex-1 flex flex-col justify-center bg-[#DAFFD3] p-10 rounded-xl"
      >
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="input mb-8"
        />
        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="input mb-8"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="input mb-8"
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="input mb-8"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-transparent text-black border-2 border-black text-xl px-6 py-2 rounded-xl mr-auto flex items-center gap-2 disabled:opacity-60"
        >
          {isSubmitting ? "Loading..." : config.formSubmitButtonText}
          <FaAngleRight className="text-base" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
