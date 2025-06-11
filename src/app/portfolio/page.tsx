"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">r</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">o</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400 mt-4">j</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">e</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">c</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400">t</span>
          <span className="inline-block hover:animate-bump hover:text-white text-yellow-400"></span>

          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        {/* First Row of Images */}
        <p className="text-lg md:mt-6 text-yellow-600 caveat">&lt;p&gt; Ui Practise using html5,css3 &lt;/p&gt; </p>
        <div className="sm:flex-col md:flex-row md:flex gap-5 p-5">


          <Link href={"https://ali-express-clone-peach.vercel.app/"}>
            <Image
              src="/aliexpe.png"
              alt="AliExpress Project"
              width={330}
              height={143}
              style={{ height: "auto" }}
              data-aos="zoom-in"
            />
          </Link>
          <Link href={"https://sportshold-web.vercel.app/"}>

            <Image
              src="/sportshold.png"
              alt="Sports Project"
              width={330}
              height={143}
              style={{ height: "auto" }}
              data-aos="zoom-in"
            />
          </Link>
          <Link href={"https://facebook-web-9v87.vercel.app/"}>

            <Image
              src="/facebook.png"
              alt="Facebook Clone"
              width={330}
              height={143}
              style={{ height: "auto" }}
              data-aos="zoom-in"
            />
          </Link>

        </div>
        <div className="flex-col   flex gap-5 p-5">

          <p className="text-lg md:mt-6 text-yellow-600 caveat items-center flex">&lt;p&gt; Using typescript and build Resume builder &lt;/p&gt; </p>

          <Link href={"https://milestone5-resume-builder-nine.vercel.app/"}>

            <Image
              src="/resume_builder.png"
              alt="resume_builder"
              width={330}
              height={53}
              style={{ height: "auto" }}
              data-aos="zoom-in"
            />
          </Link>
        </div>


        <p className="text-lg md:mt-6 text-yellow-600 caveat">&lt;p&gt; Ui and logic Practise using Nextjs,Reactjs,Tailwind &lt;/p&gt; </p>

        <div className="sm:flex-col md:flex-row md:flex gap-5 p-5">

          <Link href={"https://matoa-web.vercel.app/"}>
            <Image
              src="/matoa.png"
              alt="matoa Project"
              width={330}
              height={80}
              style={{ height: "auto" }}
              data-aos="zoom-in"
            />
          </Link>
          <Link href={"https://to-dol-list-in-react.vercel.app/"}>
            <Image
              src="/todo-react.png"
              alt="todolist Project"
              width={330}
              height={143}
              style={{ height: "auto" }}
              data-aos="zoom-in"
            />
          </Link>

          
        </div>


         <p className="text-lg md:mt-6 text-yellow-600 caveat">&lt;p&gt; Ui and logic Practise using Reactjs,Tailwind,Supabase &lt;/p&gt; </p>

        <div className="sm:flex-col md:flex-row md:flex gap-5 p-5">
        <Link href={"https://mini-hachthon-smit.vercel.app/"}>
            <Image
              src="/minihackhthon.png"
              alt="minihackhthon"
              width={330}
              height={143}
              style={{ height: "auto" }}
              data-aos="zoom-in"
            />
          </Link>
          </div>

        {/* Second Row of Images */}
        <div className="sm:flex-col md:flex-row md:flex gap-5 p-5">
          {/* <Link href={}> */}

          <Image
            src="/java1.png"
            alt="Java Project 1"
            width={330}
            height={143}
            style={{ height: "auto" }}
            data-aos="zoom-in"
          />
          {/* </Link> */}
          {/* <Link href={}> */}

          <Image
            src="/java2.png"
            alt="Java Project 2"
            width={330}
            height={143}
            style={{ height: "auto" }}
            data-aos="zoom-in"
          />
          {/* </Link> */}
          {/* <Link href={}> */}

          <Image
            src="/java3.png"
            alt="Java Project 3"
            width={330}
            height={143}
            style={{ height: "auto" }}
            data-aos="zoom-in"
          />
          {/* </Link> */}
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
