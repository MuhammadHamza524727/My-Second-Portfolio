"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaUserLarge } from "react-icons/fa6";
import { GrHomeRounded } from "react-icons/gr";
import { IoLogoGithub, IoTabletPortraitOutline } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RxVercelLogo } from "react-icons/rx";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", icon: <GrHomeRounded />, label: "Home" },
    { href: "/about", icon: <FaUserLarge />, label: "About" },
    { href: "/portfolio", icon: <IoTabletPortraitOutline />, label: "Portfolio" },
    { href: "/contact", icon: <RiContactsBook2Fill />, label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/muhammad-hamza-1461432a5",
      icon: <CiLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/MuhammadHamza524727",
      icon: <IoLogoGithub />,
      label: "GitHub",
    },
    {
      href: "https://vercel.com/muhammad-hamzas-projects-a3383566",
      icon: <RxVercelLogo />,
      label: "Vercel",
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 flex flex-col items-center bg-[#0d2233] border-r border-[#1a3a52] z-50">
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
              <span
                className={`text-xl transition-colors ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-500 hover:text-yellow-400"
                }`}
              >
                {icon}
              </span>
              {isActive && (
                <span className="block w-1 h-1 bg-yellow-400 rounded-full mx-auto mt-1" />
              )}
            </Link>
          );
        })}
      </div>

      {/* Social Icons */}
      <div className="flex mt-auto mb-6 flex-col items-center gap-4">
        {socialLinks.map(({ href, icon, label }) => (
          <Link key={href} href={href} target="_blank" title={label}>
            <span className="text-xl text-gray-500 hover:text-yellow-400 transition-colors">
              {icon}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
