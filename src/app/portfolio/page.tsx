"use client";

import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);

  return (
    <div className="nunito flex flex-col items-start justify-center p-7 min-h-screen bg-[#022C43] text-white">
     
      {/* Main Content */}
      <main className="ml-20 flex flex-col items-start justify-start text-start max-w-2xl px-8">
        <div className="text-gray-400">
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-10 caveat">
            &lt;body&gt;
          </p>
        </div>

        <h1 className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">P</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">o</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">r</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400 mt-4">t</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">f</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">o</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">l</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">i</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">
            o <p className="text-sm text-yellow-600 md:ml-5"></p>
          </span>
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        {/* First Row of Images */}
        <div className="sm:flex-col md:flex-row md:flex gap-5 p-5">
          <Image
            src="/aliexpe.png"
            alt="AliExpress Project"
            width={330}
            height={143}
            style={{ height: "auto" }}
            data-aos="zoom-in"
          />
          <Image
            src="/sportshold.png"
            alt="Sports Project"
            width={330}
            height={143}
            style={{ height: "auto" }}
            data-aos="zoom-in"
          />
          <Image
            src="/facebook.png"
            alt="Facebook Clone"
            width={330}
            height={143}
            style={{ height: "auto" }}
            data-aos="zoom-in"
          />
        </div>

        {/* Second Row of Images */}
        <div className="sm:flex-col md:flex-row md:flex gap-5 p-5">
          <Image
            src="/java1.png"
            alt="Java Project 1"
            width={330}
            height={143}
            style={{ height: "auto" }}
            data-aos="zoom-in"
          />
          <Image
            src="/java2.png"
            alt="Java Project 2"
            width={330}
            height={143}
            style={{ height: "auto" }}
            data-aos="zoom-in"
          />
          <Image
            src="/java3.png"
            alt="Java Project 3"
            width={330}
            height={143}
            style={{ height: "auto" }} 
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
