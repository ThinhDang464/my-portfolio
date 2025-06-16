"use client";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <section className="flex items-center justify-between px-10 sm:px-12 md:px-16 lg:px-20 py-12">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Hello! I'm Tom <br />
          <span className="text-blue-400">
            <Typewriter
              words={[
                "Software Developer",
                "Fullstack Developer",
                "UI Designer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <div className="space-y-4 mb-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a software engineer who is always looking to improve myself and
            contribute to meaningful projects. Welcome to my portfolio
          </p>
        </div>

        <div className="mb-8">
          <p className="text-blue-400 italic text-lg mb-2">
            "Success is no accident. It is hard work, perseverance, learning,
            studying, sacrifice and most of all, love of what you are doing."
          </p>
          <p className="text-gray-400 text-sm">- Pelé</p>
        </div>

        <a
          href="/Tom-Soft-Resume.pdf"
          download="Tom_Dang_Resume.pdf"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25" //flex takes fullwidth -> long button inline wrap content only
        >
          Get Resume
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
