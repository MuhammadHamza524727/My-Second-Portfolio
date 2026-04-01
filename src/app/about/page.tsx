"use client";

import React, { useEffect, useState } from "react";
import RotatingCube from "@/components/RotatingCube";

const skills = [
  { name: "HTML5 / CSS3", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Python", level: 65 },
];

const Page = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col items-start justify-center nunito p-7 pb-20 md:pb-7 min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <main className="ml-0 md:ml-20 flex flex-col items-start justify-start text-start md:max-w-5xl px-4 md:px-8">
        <div>
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-10 caveat">&lt;body&gt;</p>
        </div>

        <h1 className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
          {"About me.".split("").map((char, i) => (
            <span key={i} className="inline-block hover:animate-bump dark:hover:text-white hover:text-[#1a0f02] text-yellow-400">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        <div data-aos="zoom-in-right" className="flex flex-col md:flex-row gap-8 md:gap-16">
          <p className="md:text-[14px] flex sm:text-[10px] mt-4 text-[var(--text-muted)] sm:w-[80%] md:w-[50%]">
            I&apos;m a passionate front-end developer on a journey to become a
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

        {/* ── Skills Section ── */}
        <div data-aos="fade-up" className="mt-10 w-full md:w-[55%]">
          <p className="text-sm text-yellow-500 caveat mb-4">&lt;p&gt; Skills &lt;/p&gt;</p>
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-[var(--text-muted)]">{skill.name}</span>
                <span className="text-yellow-400 font-mono text-xs">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-[var(--bg-card)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: animate ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
          <p className="text-sm text-yellow-500 caveat mt-2">&lt;/p&gt;</p>
        </div>

        <div className="text-gray-400 mt-10">
          <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
          <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
        </div>
      </main>
    </div>
  );
};

export default Page;
