"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IoLogoGithub } from "react-icons/io";
import { VscStarFull } from "react-icons/vsc";
import { BiGitRepoForked } from "react-icons/bi";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

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

type FilterType = "all" | "frontend" | "typescript" | "react" | "supabase";

const staticProjects = [
  { href: "https://ali-express-clone-peach.vercel.app/", src: "/aliexpe.png", alt: "AliExpress Clone", category: "frontend" as FilterType },
  { href: "https://sportshold-web.vercel.app/", src: "/sportshold.png", alt: "Sports Project", category: "frontend" as FilterType },
  { href: "https://facebook-web-9v87.vercel.app/", src: "/facebook.png", alt: "Facebook Clone", category: "frontend" as FilterType },
  { href: "https://milestone5-resume-builder-nine.vercel.app/", src: "/resume_builder.png", alt: "Resume Builder", category: "typescript" as FilterType },
  { href: "https://matoa-web.vercel.app/", src: "/matoa.png", alt: "Matoa Project", category: "react" as FilterType },
  { href: "https://to-dol-list-in-react.vercel.app/", src: "/todo-react.png", alt: "Todo List", category: "react" as FilterType },
  { href: "https://mini-hachthon-smit.vercel.app/", src: "/minihackhthon.png", alt: "Mini Hackathon", category: "supabase" as FilterType },
];

const filters: { label: string; value: FilterType | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "TypeScript", value: "typescript" },
  { label: "React", value: "react" },
  { label: "Supabase", value: "supabase" },
];

const Page = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType | "all">("all");
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [reposLoading, setReposLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/MuhammadHamza524727/repos?sort=updated&per_page=6&type=public")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data);
        setReposLoading(false);
      })
      .catch(() => setReposLoading(false));
  }, []);

  const filtered = activeFilter === "all"
    ? staticProjects
    : staticProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="nunito flex flex-col items-start justify-start p-7 pb-20 md:pb-7 min-h-screen bg-[var(--bg)] text-[var(--text)]">
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
            <span key={i} className="inline-block hover:animate-bump dark:hover:text-white hover:text-[#1a0f02] text-yellow-400">
              {char}
            </span>
          ))}
          <p className="text-sm md:mt-2 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        {/* ── Filter Buttons ── */}
        <div className="flex flex-wrap gap-2 mt-6">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeFilter === value
                  ? "bg-yellow-400 text-[#022C43] border-yellow-400"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:border-yellow-400 hover:text-yellow-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* ── Filtered Projects ── */}
        <div className="flex flex-wrap gap-5 p-4 mt-2 min-h-[160px]">
          {filtered.map((p) => (
            <Link key={p.href} href={p.href} target="_blank">
              <Image
                src={p.src}
                alt={p.alt}
                width={280}
                height={143}
                style={{ height: "auto" }}
                data-aos="zoom-in"
                className="rounded-md hover:scale-105 transition-transform"
              />
            </Link>
          ))}
          {filtered.length === 0 && (
            <p className="text-[var(--text-muted)] text-sm mt-4">No projects in this category.</p>
          )}
        </div>

        {/* ── GitHub Repos ── */}
        <p className="text-base md:mt-8 mt-6 text-yellow-500 caveat flex items-center gap-2">
          &lt;p&gt; <IoLogoGithub className="inline text-[var(--text)]" /> GitHub — Latest Repos &lt;/p&gt;
        </p>

        {reposLoading ? (
          <div className="flex gap-2 p-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-64 h-32 bg-[var(--bg-card)] rounded-md animate-pulse" />
            ))}
          </div>
        ) : repos.length === 0 ? (
          <p className="text-[var(--text-muted)] text-sm p-4">Could not load repos.</p>
        ) : (
          <div className="flex flex-wrap gap-4 p-4">
            {repos.map((repo) => (
              <Link
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                data-aos="zoom-in"
                className="group w-64 bg-[var(--bg-card)] hover:border-yellow-400 border border-[var(--border)] rounded-md p-4 flex flex-col gap-2 transition-all"
              >
                <div className="flex items-center gap-2">
                  <IoLogoGithub className="text-[var(--text-muted)] group-hover:text-yellow-400 text-lg flex-shrink-0 transition-colors" />
                  <span className="text-yellow-400 text-sm font-semibold truncate group-hover:text-yellow-300">
                    {repo.name}
                  </span>
                </div>
                <p className="text-[var(--text-muted)] text-xs line-clamp-2 flex-1">
                  {repo.description || "No description"}
                </p>
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mt-auto">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: langColors[repo.language] || "#6b7280" }} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><VscStarFull /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><BiGitRepoForked /> {repo.forks_count}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ── GitHub Contribution Graph ── */}
        <p className="text-base md:mt-8 mt-6 text-yellow-500 caveat">
          &lt;p&gt; GitHub — Contribution Graph &lt;/p&gt;
        </p>
        <div className="mt-4 p-4 rounded-lg bg-[var(--bg-card)] border border-[var(--border)] w-full overflow-x-auto">
          <GitHubCalendar
            username="MuhammadHamza524727"
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
          />
        </div>

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
