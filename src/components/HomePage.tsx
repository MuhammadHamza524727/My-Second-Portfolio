"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Loader from "../components/Loader";

const FULL_TEXT = "Front End Developer / Exploring Agentic AI";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [visitorCount, setVisitorCount] = useState<number | "...">("...");

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Typing animation — starts after loader finishes
  useEffect(() => {
    if (isLoading) return;
    let i = 0;
    setDisplayText("");
    const interval = setInterval(() => {
      setDisplayText(FULL_TEXT.slice(0, i + 1));
      i++;
      if (i >= FULL_TEXT.length) clearInterval(interval);
    }, 55);
    return () => clearInterval(interval);
  }, [isLoading]);

  // Unique visitor counter — counts only once per browser
  useEffect(() => {
    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:7860";
    const alreadyVisited = localStorage.getItem("hmz_visited");

    if (alreadyVisited) {
      // Already visited — just fetch current count, don't increment
      fetch(`${apiBase}/api/visitors`)
        .then((r) => r.json())
        .then((d) => setVisitorCount(d.count))
        .catch(() => setVisitorCount("..."));
    } else {
      // First visit — increment and mark in localStorage
      fetch(`${apiBase}/api/visitors`, { method: "POST" })
        .then((r) => r.json())
        .then((d) => {
          setVisitorCount(d.count);
          localStorage.setItem("hmz_visited", "1");
        })
        .catch(() => setVisitorCount("..."));
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex nunito flex-col items-start justify-center p-7 pb-20 md:pb-7 min-h-screen bg-[var(--bg)] text-[var(--text)]">
          <main className="ml-0 md:ml-20 flex flex-col items-start justify-start text-start max-w-2xl px-4 md:px-8">
            <div>
              <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
              <p className="text-sm text-yellow-600 md:mb-10 caveat">&lt;body&gt;</p>
            </div>

            <h1 data-aos="zoom-out" className="text-2xl md:text-5xl font-bold">
              <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
              {"Hi,".split("").map((char, i) => (
                <span key={i} className="inline-block hover:animate-bump hover:text-yellow-400">
                  {char}
                </span>
              ))}
              <br />
              <span className="inline-block hover:animate-bump hover:text-yellow-400 mt-4">I</span>
              {" "}
              <span className="inline-block hover:animate-bump hover:text-yellow-400">`m</span>
              {" "}
              {"Muhammad Hamza".split("").map((char, i) => (
                <span key={i} className="inline-block hover:animate-bump hover:text-yellow-400">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <br />
              {"web Developer.".split("").map((char, i) => (
                <span key={i} className={`inline-block hover:animate-bump hover:text-yellow-400${i === 0 ? " mt-3" : ""}`}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;/h1&gt;</p>
            </h1>

            {/* Typing Animation */}
            <p className="text-[12px] caveat mt-4 text-[var(--text-muted)] h-5">
              {displayText}
              {displayText.length < FULL_TEXT.length && (
                <span className="animate-blink">|</span>
              )}
            </p>

            <Link href={"/contact"}>
              <button
                data-aos="zoom-out"
                className="mt-6 px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-[#0a192f] transition-colors"
              >
                CONTACT ME
              </button>
            </Link>

            {/* Visitor Counter */}
            <div className="mt-5 flex items-center gap-2 px-3 py-2 rounded-md border border-yellow-400/30 bg-yellow-400/5 w-fit">
              <span className="text-yellow-400 text-base">👁</span>
              <div className="flex flex-col leading-tight">
                <span className="text-yellow-400 font-bold text-sm font-mono">{visitorCount}</span>
                <span className="text-[var(--text-muted)] text-[10px] caveat">total visitors</span>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
              <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default HomePage;
