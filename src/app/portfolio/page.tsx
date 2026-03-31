"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { VscStarFull } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  None: "#6b7280",
};

const Page = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [reposLoading, setReposLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/MuhammadHamza524727/repos?sort=updated&per_page=6&type=public"
    )
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setReposLoading(false);
      })
      .catch(() => setReposLoading(false));
  }, []);

  return (
    <div className="nunito flex flex-col items-start justify-start p-7 pb-20 md:pb-7 min-h-screen bg-[#022C43] text-white">
      <main className="ml-0 md:ml-20 flex flex-col items-start justify-start text-start w-full max-w-5xl px-4 md:px-8">
        {/* HTML Tags */}
        <div>
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-6 caveat">&lt;body&gt;</p>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
          {"Projects.".split("").map((char, i) => (
            <span key={i} className="inline-block hover:animate-bump hover:text-white text-yellow-400">
              {char}
            </span>
          ))}
          <p className="text-sm md:mt-2 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        {/* ── Section 1: UI Practice ── */}
        <p className="text-base md:mt-8 mt-6 text-yellow-500 caveat">
          &lt;p&gt; UI Practice — HTML5, CSS3 &lt;/p&gt;
        </p>
        <div className="flex flex-wrap gap-5 p-4">
          <Link href="https://ali-express-clone-peach.vercel.app/" target="_blank">
            <Image src="/aliexpe.png" alt="AliExpress Clone" width={280} height={143} style={{ height: "auto" }} data-aos="zoom-in" className="rounded-md hover:scale-105 transition-transform" />
          </Link>
          <Link href="https://sportshold-web.vercel.app/" target="_blank">
            <Image src="/sportshold.png" alt="Sports Project" width={280} height={143} style={{ height: "auto" }} data-aos="zoom-in" className="rounded-md hover:scale-105 transition-transform" />
          </Link>
          <Link href="https://facebook-web-9v87.vercel.app/" target="_blank">
            <Image src="/facebook.png" alt="Facebook Clone" width={280} height={143} style={{ height: "auto" }} data-aos="zoom-in" className="rounded-md hover:scale-105 transition-transform" />
          </Link>
        </div>

        {/* ── Section 2: TypeScript ── */}
        <p className="text-base md:mt-6 mt-4 text-yellow-500 caveat">
          &lt;p&gt; TypeScript — Resume Builder &lt;/p&gt;
        </p>
        <div className="flex flex-wrap gap-5 p-4">
          <Link href="https://milestone5-resume-builder-nine.vercel.app/" target="_blank">
            <Image src="/resume_builder.png" alt="Resume Builder" width={280} height={53} style={{ height: "auto" }} data-aos="zoom-in" className="rounded-md hover:scale-105 transition-transform" />
          </Link>
        </div>

        {/* ── Section 3: Next.js / React ── */}
        <p className="text-base md:mt-6 mt-4 text-yellow-500 caveat">
          &lt;p&gt; Next.js, React, Tailwind &lt;/p&gt;
        </p>
        <div className="flex flex-wrap gap-5 p-4">
          <Link href="https://matoa-web.vercel.app/" target="_blank">
            <Image src="/matoa.png" alt="Matoa Project" width={280} height={80} style={{ height: "auto" }} data-aos="zoom-in" className="rounded-md hover:scale-105 transition-transform" />
          </Link>
          <Link href="https://to-dol-list-in-react.vercel.app/" target="_blank">
            <Image src="/todo-react.png" alt="Todo List" width={280} height={143} style={{ height: "auto" }} data-aos="zoom-in" className="rounded-md hover:scale-105 transition-transform" />
          </Link>
        </div>

        {/* ── Section 4: Supabase ── */}
        <p className="text-base md:mt-6 mt-4 text-yellow-500 caveat">
          &lt;p&gt; React, Tailwind, Supabase &lt;/p&gt;
        </p>
        <div className="flex flex-wrap gap-5 p-4">
          <Link href="https://mini-hachthon-smit.vercel.app/" target="_blank">
            <Image src="/minihackhthon.png" alt="Mini Hackathon" width={280} height={143} style={{ height: "auto" }} data-aos="zoom-in" className="rounded-md hover:scale-105 transition-transform" />
          </Link>
        </div>

        {/* ── Section 5: GitHub Repos ── */}
        <p className="text-base md:mt-8 mt-6 text-yellow-500 caveat flex items-center gap-2">
          &lt;p&gt; <IoLogoGithub className="inline text-white" /> GitHub — Latest Repos &lt;/p&gt;
        </p>

        {reposLoading ? (
          <div className="flex gap-2 p-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-64 h-32 bg-[#03395c] rounded-md animate-pulse" />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <p className="text-gray-400 text-sm p-4">Could not load repos.</p>
        ) : (
          <div className="flex flex-wrap gap-4 p-4">
            {repos.map((repo) => (
              <Link
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                data-aos="zoom-in"
                className="group w-64 bg-[#03395c] hover:bg-[#044a7a] border border-[#055a8c] hover:border-yellow-400 rounded-md p-4 flex flex-col gap-2 transition-all"
              >
                <div className="flex items-center gap-2">
                  <IoLogoGithub className="text-gray-400 group-hover:text-yellow-400 text-lg flex-shrink-0 transition-colors" />
                  <span className="text-yellow-400 text-sm font-semibold truncate group-hover:text-yellow-300">
                    {repo.name}
                  </span>
                </div>
                <p className="text-gray-400 text-xs line-clamp-2 flex-1">
                  {repo.description || "No description"}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-auto">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: langColors[repo.language] || "#6b7280" }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <VscStarFull /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <BiGitRepoForked /> {repo.forks_count}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* HTML Tags End */}
        <div className="mt-10">
          <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
          <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
        </div>
      </main>
    </div>
  );
};

export default Page;
