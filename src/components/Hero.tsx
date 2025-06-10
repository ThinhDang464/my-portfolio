"use client";
import { Typewriter } from "react-simple-typewriter";
export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-between px-20 py-12">
      <div className="flex-1 max-w-2xl">
        <h1 className="text-6xl font-bold text-white mb-6">
          Hello! I'm <br />
          <span className="text-white">Thinh</span> <br />
          <span className="text-blue-400">
            <Typewriter
              words={[
                "Software Developer",
                "Frontend Engineer",
                "React Developer",
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
      </div>
    </section>
  );
}
