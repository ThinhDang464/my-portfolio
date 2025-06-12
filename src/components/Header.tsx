"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMail, HiDocumentText } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

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
    <header className="text-white px-0 bg-black/40 ">
      {/* Desktop Layout - Flexbox approach */}
      <div className="hidden lg:flex items-center justify-between px-6 xl:px-12 2xl:px-20 py-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/TD.png"
            alt="Logo"
            width={80}
            height={80}
            className="h-auto"
          />
        </Link>

        {/* Navigation - Centered */}
        <nav className="flex-1 flex justify-center">
          <div className="flex gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`relative group px-3 py-2 text-base xl:text-lg font-medium transition-all duration-300 ${
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
          </div>
        </nav>

        {/* Social Icons + Connect Button */}
        <div className="flex-shrink-0 flex items-center gap-3 xl:gap-4">
          {/* Social Icons */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href="mailto:thinhd464@gmail.com"
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
              aria-label="Email"
            >
              <HiMail className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/thinhdangg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://github.com/ThinhDang464"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
              aria-label="Resume"
            >
              <HiDocumentText className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>

          {/* Connect Button */}
          <button className="relative px-4 xl:px-6 py-2 border border-blue-400 text-blue-400 rounded-md text-sm xl:text-base font-medium overflow-hidden group transition-all duration-300 hover:text-white">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            <span className="relative z-10">
              <span className="hidden xl:inline">Let's Connect</span>
              <span className="xl:hidden">Connect</span>
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/TD.png"
              alt="Logo"
              width={70}
              height={70}
              className="h-auto"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
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
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden bg-slate-900 ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
          }}
        >
          {/* Navigation Links */}
          <nav className="px-4 pt-2 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-4 py-3 text-base font-medium transition-colors border-b border-gray-800 last:border-b-0 ${
                  activeLink === link.name
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 px-6 py-4">
            <a
              href="mailto:thinhd464@gmail.com"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              aria-label="Email"
            >
              <HiMail className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/thinhdangg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://github.com/ThinhDang464"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
              aria-label="Resume"
            >
              <HiDocumentText className="w-5 h-5 text-gray-300 hover:text-blue-400 transition-colors" />
            </a>
          </div>

          {/* Connect Button */}
          <div className="px-6 pb-6">
            <div className="flex justify-center">
              <button className="relative px-6 py-2 border border-blue-400 text-blue-400 rounded-md font-medium overflow-hidden group transition-all duration-300 hover:text-white">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10">Let's Connect</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
