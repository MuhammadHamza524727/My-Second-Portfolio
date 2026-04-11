"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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
            I&apos;m a Full-Stack Developer who has built everything from
            e-commerce platforms and MERN stack apps to AI-powered agents and
            RAG chatbots. <br />
            I work with Next.js, React, TypeScript, and Python — and have
            hands-on experience with Supabase, Sanity CMS, Docker, and
            integrating LLMs like Claude and Qwen via OpenRouter. <br />
            I&apos;ve competed in multiple hackathons including an AI Employee
            Hackathon where I earned a Bronze tier, and built agentic CLI tools
            across 5 phases. <br />
            Currently enrolled at GIAIC, I hold a cybersecurity fundamentals
            certificate from Banoqabil and keep pushing into Generative AI,
            Web3, and cloud native computing.
          </p>
          {/* Terminal Frame */}
          <div data-aos="zoom-in-left" className="flex-shrink-0">
            <div className="rounded-lg overflow-hidden border border-[var(--border)] shadow-lg shadow-yellow-400/10 w-[260px]">
              {/* Terminal Header */}
              <div className="bg-[#0d1f2d] flex items-center gap-2 px-4 py-2.5 border-b border-[var(--border)]">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-[11px] text-[var(--text-muted)] font-mono tracking-wide">
                  ~/muhammad-hamza
                </span>
              </div>
              {/* Image */}
              <div className="relative w-[260px] h-[300px]">
                <Image
                  src="/myimage.jpg"
                  alt="Muhammad Hamza"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Terminal Footer */}
              <div className="bg-[#0d1f2d] px-4 py-2 border-t border-[var(--border)]">
                <p className="text-[11px] font-mono text-yellow-400">
                  <span className="text-green-400">❯</span> Full-Stack Developer
                </p>
              </div>
            </div>
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
