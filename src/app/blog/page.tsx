"use client";

import React, { useState } from "react";
import { blogPosts } from "@/lib/blog-posts";

const Page = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const post = blogPosts.find((p) => p.slug === selected);

  return (
    <div className="nunito flex flex-col items-start justify-start p-7 pb-20 md:pb-7 min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <main className="ml-0 md:ml-20 flex flex-col items-start justify-start w-full max-w-3xl px-4 md:px-8">
        {/* HTML Tags */}
        <div>
          <p className="text-sm text-yellow-600 caveat">&lt;html&gt;</p>
          <p className="text-sm text-yellow-600 md:mb-6 caveat">&lt;body&gt;</p>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-5xl font-bold">
          <p className="text-sm md:mt-6 text-yellow-600 caveat">&lt;h1&gt;</p>
          {"Blog.".split("").map((char, i) => (
            <span key={i} className="inline-block hover:animate-bump dark:hover:text-white hover:text-[#1a0f02] text-yellow-400">
              {char}
            </span>
          ))}
          <p className="text-sm md:mt-2 text-yellow-600 caveat">&lt;/h1&gt;</p>
        </h1>

        {/* ── Post Detail View ── */}
        {post ? (
          <div className="mt-6 w-full" data-aos="fade-up">
            <button
              onClick={() => setSelected(null)}
              className="text-xs text-yellow-400 hover:text-yellow-300 underline underline-offset-2 mb-4 transition-colors"
            >
              ← Back to posts
            </button>
            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-yellow-400/40 text-yellow-400">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-xl font-bold text-[var(--text)] mb-1">{post.title}</h2>
              <p className="text-xs text-[var(--text-muted)] mb-4">{post.date}</p>
              <div className="text-sm text-[var(--text-muted)] leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </div>
        ) : (
          /* ── Post List ── */
          <div className="mt-6 w-full space-y-4">
            {blogPosts.map((p) => (
              <button
                key={p.slug}
                onClick={() => setSelected(p.slug)}
                data-aos="fade-up"
                className="w-full text-left bg-[var(--bg-card)] border border-[var(--border)] hover:border-yellow-400 rounded-lg p-5 transition-all group"
              >
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full border border-yellow-400/30 text-yellow-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-base font-semibold text-[var(--text)] group-hover:text-yellow-400 transition-colors">
                  {p.title}
                </h2>
                <p className="text-xs text-[var(--text-muted)] mt-1 mb-2">{p.date}</p>
                <p className="text-sm text-[var(--text-muted)] line-clamp-2">{p.excerpt}</p>
                <span className="text-xs text-yellow-400 mt-2 inline-block group-hover:text-yellow-300">
                  Read more →
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="mt-10">
          <p className="text-sm text-yellow-600 caveat">&lt;/body&gt;</p>
          <p className="text-sm text-yellow-600 caveat">&lt;/html&gt;</p>
        </div>
      </main>
    </div>
  );
};

export default Page;
