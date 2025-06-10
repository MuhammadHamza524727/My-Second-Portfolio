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
import RotatingCube from "@/components/RotatingCube";
import Navbar from "@/components/Navbar";

const Page = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  return (
    <div  className="flex flex-col items-start justify-center nunito p-7 min-h-screen bg-[#022C43] text-white">
      {/* Sidebar */}
      {/* <Navbar/> */}

      {/* Main Content */}
      <main className="ml-20 flex flex-col items-start justify-start text-start md:max-w-5xl px-8  ">
        <div className="text-gray-400">
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-10 caveat">
            &lt;body&gt;
          </p>
        </div>

        <h1 className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6  text-yellow-600 caveat ">&lt;h1&gt;</p>
          <span className="inline-block hover:animate-bump  hover:text-white text-yellow-400">
            A
          </span>
          <span className="inline-block hover:animate-bump  hover:text-white text-yellow-400">
            b
          </span>
          <span className="inline-block hover:animate-bump  hover:text-white text-yellow-400">
            o
          </span>
          <span className="inline-block hover:animate-bump  hover:text-white text-yellow-400 mt-4">
            u{" "}
          </span>
          <span className="inline-block hover:animate-bump  hover:text-white  text-yellow-400">
            t
          </span>{" "}
          <span className="inline-block hover:animate-bump   hover:text-white text-yellow-400">
            m
          </span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">
            e
          </span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">
            . <p className="text-sm  text-yellow-600 md:ml-5 "></p>
          </span>
          <p className="text-sm md:mt-6  text-yellow-600 caveat ">
            &lt;/h1&gt;
          </p>
        </h1>
        <div data-aos="zoom-in-right" className="flex gap-64  ">
          <p className="md:text-[14px] flex sm:text-[10px] mt-4 text-gray-300 sm:w-[80%] md:w-[50%]">
            I m a passionate front-end developer on a journey to become a
            full-stack powerhouse. <br />
            I hold a cybersecurity fundamentals certificate from Banoqabil and
            am continuously expanding my skill set in cutting-edge fields such
            as generative AI, web3, metaverse, and cloud native computing.{" "}
            <br />
            Currently enrolled at GIAIC, I am also diving deep into the latest
            advancements in AI technology. <br />
            My goal is to leverage this diverse knowledge to create impactful
            digital experiences that push the boundaries of Generative A.I.
          </p>
          <div>
            <RotatingCube />
          </div>
        </div>

        <div className="text-gray-400 mt-14">
          <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
          <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
        </div>
      </main>
    </div>
  );
};

export default Page;
