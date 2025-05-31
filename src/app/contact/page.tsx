"use client";

import React, { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { FaUserLarge } from "react-icons/fa6";
import { IoTabletPortraitOutline } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { RxVercelLogo } from "react-icons/rx";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Page = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  return (
    <div className="flex flex-col items-start justify-center nunito p-7 min-h-screen bg-[#022C43] text-white">
      {/* Sidebar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      <main className="ml-20 flex flex-col items-start justify-start text-start max-w-2xl px-8">
        {/* HTML Tag Labels */}
        <div className="text-gray-400">
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-10 caveat">&lt;body&gt;</p>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
          {"Contact.".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block hover:animate-bump hover:text-white text-yellow-400"
            >
              {char}
            </span>
          ))}
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        {/* Contact Form */}
        <form className="mt-8 space-y-4 w-full">
          {/* Name and Email */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Name"
              data-aos="fade-up"
              className="p-3 bg-[#03395c] rounded-md text-white outline-none w-full mb-4 md:mb-0"
            />
            <input
              type="email"
              placeholder="Email"
              data-aos="fade-up"
              className="p-3 bg-[#03395c] rounded-md text-white outline-none w-full"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject"
            data-aos="fade-up"
            className="p-3 bg-[#03395c] rounded-md text-white outline-none w-full"
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            data-aos="fade-up"
            className="p-3 bg-[#03395c] rounded-md text-white outline-none w-full"
          />

          {/* Send Button */}
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;button&gt;</p>
          <button
            type="submit"
            data-aos="fade-up"
            className="mt-4 px-6 py-2 bg-yellow-400 text-[#022C43] rounded-md font-bold hover:bg-yellow-500"
          >
            SEND
          </button>
          <p data-aos="fade-up" className="text-sm md:mt-6 text-yellow-600 caveat">
            &lt;/button&gt;
          </p>
        </form>

        {/* HTML Tag Labels End */}
        <div className="text-gray-400 mt-14">
          <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
          <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
        </div>
      </main>
    </div>
  );
};

export default Page;
