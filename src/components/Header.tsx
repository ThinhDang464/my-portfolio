"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
//Nav Link array
const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Tech", href: "#tech" },
  { name: "Project", href: "#projects" },
  { name: "About", href: "#about" },
];

//Header
export function Header() {
  const [activeLink, setActiveLink] = useState("Home"); //track which navlink clicked
  return (
    <header className="bg-[#0A192F] text-white py-4 px-6">
      <div className="grid grid-cols-3 items-center">
        {/*GRID auto put child in col*/}
        {/*Branding col 1 left*/}
        <div className="justify-self-start">
          <Link href="/">
            <Image
              src="/TD.png"
              alt="Logo"
              width={80}
              height={80}
              className="h-auto"
            />
          </Link>
        </div>

        {/*Centered Nav col 2*/}
        <nav className="flex gap-8 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`relative group px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeLink === link.name
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}

              {/*animated underline for active state*/}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                  activeLink === link.name ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/*Social Icons Nav col 3*/}
        <div className="justify-self-end flex items-center gap-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group">
              @
            </div>
            <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group">
              in
            </div>
            <div className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group">
              gh
            </div>
          </div>
          <button className="relative px-6 py-2 border border-blue-400 text-blue-400 rounded-md font-medium overflow-hidden group transition-all duration-300 hover:text-white">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">Let's Connect</span>
          </button>
        </div>
      </div>
    </header>
  );
}
