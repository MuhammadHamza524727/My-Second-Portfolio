"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { IoLogoGithub, IoTabletPortraitOutline } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RxVercelLogo } from "react-icons/rx";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsSun, BsMoon } from "react-icons/bs";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "/", icon: <GrHomeRounded />, label: "Home" },
    { href: "/about", icon: <FaUserLarge />, label: "About" },
    { href: "/portfolio", icon: <IoTabletPortraitOutline />, label: "Portfolio" },
    { href: "/blog", icon: <HiOutlineDocumentText />, label: "Blog" },
    { href: "/contact", icon: <RiContactsBook2Fill />, label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/muhammad-hamza-1461432a5", icon: <CiLinkedin />, label: "LinkedIn" },
    { href: "https://github.com/MuhammadHamza524727", icon: <IoLogoGithub />, label: "GitHub" },
    { href: "https://vercel.com/muhammad-hamzas-projects-a3383566", icon: <RxVercelLogo />, label: "Vercel" },
  ];

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden md:flex fixed left-0 top-0 h-full w-16 flex-col items-center bg-[var(--bg-nav)] border-r border-[var(--border)] z-50">
        {/* Logo */}
        <div className="mt-6">
          <Link href="/">
            <span className="text-yellow-400 nunito text-2xl font-bold hover:text-yellow-300 transition-colors">
              H.
            </span>
          </Link>
        </div>

        {/* Nav Icons */}
        <div className="mt-auto flex flex-col items-center gap-5">
          {navLinks.map(({ href, icon, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href} title={label}>
                <span className={`text-xl transition-colors ${isActive ? "text-yellow-400" : "text-gray-500 hover:text-yellow-400"}`}>
                  {icon}
                </span>
                {isActive && <span className="block w-1 h-1 bg-yellow-400 rounded-full mx-auto mt-1" />}
              </Link>
            );
          })}
        </div>

        {/* Theme toggle + Social Icons */}
        <div className="flex mt-auto mb-6 flex-col items-center gap-4">
          {mounted && (
            <button onClick={toggleTheme} title="Toggle theme" className="text-xl text-gray-500 hover:text-yellow-400 transition-colors">
              {theme === "dark" ? <BsSun /> : <BsMoon />}
            </button>
          )}
          {socialLinks.map(({ href, icon, label }) => (
            <Link key={href} href={href} target="_blank" title={label}>
              <span className="text-xl text-gray-500 hover:text-yellow-400 transition-colors">
                {icon}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-14 flex items-center justify-around bg-[var(--bg-nav)] border-t border-[var(--border)] z-50">
        {navLinks.map(({ href, icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link key={href} href={href} title={label} className="flex flex-col items-center gap-0.5">
              <span className={`text-xl transition-colors ${isActive ? "text-yellow-400" : "text-gray-500"}`}>
                {icon}
              </span>
              {isActive && <span className="block w-1 h-1 bg-yellow-400 rounded-full" />}
            </Link>
          );
        })}
        {mounted && (
          <button onClick={toggleTheme} className="text-xl text-gray-500">
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
