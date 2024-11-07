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
import Image from "next/image";

const Page = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  return (
    <div className="nunito flex flex-col items-start justify-center p-7 min-h-screen bg-[#022C43] text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-16 flex flex-col items-center bg-[#181818]">
        <div className="mt-6">
          <span className="text-yellow-400  text-2xl font-bold">H.</span>
        </div>

        {/* Icons */}
        <div className="mt-auto sm:space-y-4 md:space-y-6 flex items-center flex-col">
          <div
            className="text-gray-500 text-xl hover:text-yellow-400"
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
          >
            {isHomeHovered ? (
              <Link href="/">
                <span className="text-yellow-400 text-sm font-light">Home</span>
              </Link>
            ) : (
              <GrHomeRounded />
            )}
          </div>

          <div
            className="text-gray-500 text-xl hover:text-yellow-400"
            onMouseEnter={() => setIsAboutHovered(true)}
            onMouseLeave={() => setIsAboutHovered(false)}
          >
            {isAboutHovered ? (
              <Link href="/about">
                <span className="text-yellow-400 text-sm font-light">
                  About
                </span>
              </Link>
            ) : (
              <FaUserLarge />
            )}
          </div>

          <div
            className="text-gray-500 text-xl hover:text-yellow-400"
            onMouseEnter={() => setIsPortfolioHovered(true)}
            onMouseLeave={() => setIsPortfolioHovered(false)}
          >
            {isPortfolioHovered ? (
              <Link href="/portfolio">
                <span className="text-yellow-400 text-sm font-light">
                  PortFolio
                </span>
              </Link>
            ) : (
              <IoTabletPortraitOutline />
            )}
          </div>

          <div
            className="text-gray-500 text-xl hover:text-yellow-400"
            onMouseEnter={() => setIsContactHovered(true)}
            onMouseLeave={() => setIsContactHovered(false)}
          >
            {isContactHovered ? (
              <Link href="/contact">
                <span className="text-yellow-400 text-sm font-light">
                  Contact
                </span>
              </Link>
            ) : (
              <RiContactsBook2Fill />
            )}
          </div>
        </div>

        <div className="mt-auto mb-6 sm:hidden md:flex space-y-4 flex justify-center items-center flex-col">
          <Link
            href={
              "https://www.linkedin.com/in/muhammad-hamza-1461432a5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbumNdwPJQnyHe8gf5Jsflw%3D%3D"
            }
          >
            {" "}
            <CiLinkedin className="text-gray-500 text-xl hover:text-yellow-400" />
          </Link>
          <Link href={"https://github.com/MuhammadHamza524727"}>
            {" "}
            <IoLogoGithub className="text-gray-500 text-xl hover:text-yellow-400" />
          </Link>
          <Link href={"https://vercel.com/muhammad-hamzas-projects-a3383566"}>
            {" "}
            <RxVercelLogo className="text-gray-500 text-xl hover:text-yellow-400" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="ml-20 flex flex-col items-start justify-start text-start max-w-2xl px-8">
        <div className="text-gray-400">
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-10 caveat">
            &lt;body&gt;
          </p>
        </div>

        <h1 className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6  text-yellow-600 caveat ">&lt;h1&gt;</p>
          <span className="inline-block hover:animate-bump  hover:text-white text-yellow-400">
            P
          </span>
          <span className="inline-block hover:animate-bump  hover:text-white text-yellow-400">
            o
          </span>
          <span className="inline-block hover:animate-bump  hover:text-white text-yellow-400">
            r
          </span>
          <span className="inline-block hover:animate-bump  hover:text-white text-yellow-400 mt-4">
            t
          </span>
          <span className="inline-block hover:animate-bump  hover:text-white  text-yellow-400">
            f
          </span>
          <span className="inline-block hover:animate-bump   hover:text-white text-yellow-400">
            o
          </span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">
            l
          </span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">
            i
          </span>

          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">
            o <p className="text-sm  text-yellow-600 md:ml-5 "></p>
          </span>
          <p className="text-sm md:mt-6  text-yellow-600 caveat ">
            &lt;/h1&gt;
          </p>
        </h1>
        <div className="sm:flex-col md:flex-row md:flex gap-5 p-5 ">
          <Image
            src={"/aliexpe.png"}
            alt="glasses"
            width={330}
            height={143}
            data-aos="zoom-in"
          />
          <Image
            src={"/sportshold.png"}
            alt="glasses"
            width={330}
            height={143}
            data-aos="zoom-in"
          />
          <Image
            src={"/facebook.png"}
            alt="glasses"
            width={330}
            height={143}
            data-aos="zoom-in"
          />
        </div>
        <div className="sm:flex-col md:flex-row md:flex gap-5 p-5 ">
          <Image
            src={"/java1.png"}
            alt="glasses"
            width={330}
            height={143}
            data-aos="zoom-in"
          />
          <Image
            src={"/java2.png"}
            alt="glasses"
            width={330}
            height={143}
            data-aos="zoom-in"
          />
          <Image
            src={"/java3.png"}
            alt="glasses"
            width={330}
            height={143}
            data-aos="zoom-in"
          />
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
