"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Skills", href: "#skills" },
  { name: "Tech", href: "#tech" },
  { name: "Project", href: "#projects" },
  { name: "About", href: "#about" },
];

export function Header() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A192F] text-white py-4 px-6">
      {/* Large Desktop Layout (xl screens and up) - Full 3-column grid */}
      <div className="hidden xl:grid grid-cols-3 items-center">
        {/* Logo - Column 1 */}
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

        {/* Navigation - Column 2 */}
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
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                  activeLink === link.name ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Social Icons + Connect Button - Column 3 */}
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

      {/* Medium Screen Layout (lg to xl) - Simplified to prevent overlap */}
      <div className="hidden lg:grid xl:hidden grid-cols-2 items-center">
        {/* Logo - Column 1 */}
        <div className="justify-self-start">
          <Link href="/">
            <Image
              src="/TD.png"
              alt="Logo"
              width={70}
              height={50}
              className="h-auto"
            />
          </Link>
        </div>

        {/* Navigation + Connect Button - Column 2 */}
        <div className="justify-self-end flex items-center gap-4">
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative group px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  activeLink === link.name
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${
                    activeLink === link.name
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <button className="relative px-4 py-2 border border-blue-400 text-blue-400 rounded-md font-medium overflow-hidden group transition-all duration-300 hover:text-white">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">Connect</span>
          </button>
        </div>
      </div>

      {/* Mobile Layout (below lg) - Your existing mobile code unchanged */}
      <div className="grid lg:hidden grid-cols-3 items-center">
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

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 col-start-3 justify-self-end"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="pt-4 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 text-sm font-medium transition-colors ${
                  activeLink === link.name
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex gap-3 px-4 py-4">
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

            <div className="px-4 pb-4">
              <button className="relative px-6 py-2 border border-blue-400 text-blue-400 rounded-md font-medium overflow-hidden group transition-all duration-300 hover:text-white">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10">Let's Connect</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
