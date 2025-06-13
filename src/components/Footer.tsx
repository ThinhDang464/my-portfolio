"use client";
import { HiMail, HiDocumentText } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black/60 border-t border-gray-800/50 py-8 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-8xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="mailto:thinhd464@gmail.com"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
              aria-label="Email"
            >
              <HiMail className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/thinhdangg"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>

            <a
              href="https://github.com/ThinhDang464"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-gray-600 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
              aria-label="Resume"
            >
              <HiDocumentText className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Footer Text */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm sm:text-base">
              Built with ☕ and
              <FaHeart className="inline w-4 h-4 text-red-400 mx-1" /> using
              Next.js & Tailwind CSS
            </p>
            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Tom Dang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
