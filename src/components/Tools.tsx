"use client";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaAws,
  FaGithub,
  FaHtml5,
  FaPhp,
  FaPython,
  FaConfluence,
  FaJira,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiSvelte,
  SiVuedotjs,
  SiSupabase,
} from "react-icons/si";

import { IoLogoJavascript } from "react-icons/io5";

const tools = [
  { id: 1, name: "HTML", icon: FaHtml5 },
  { id: 2, name: "TailwindCSS", icon: SiTailwindcss },
  { id: 3, name: "Javascript", icon: IoLogoJavascript },
  { id: 4, name: "TypeScript", icon: SiTypescript },
  { id: 5, name: "React", icon: FaReact },
  { id: 6, name: "Svelte", icon: SiSvelte },
  { id: 7, name: "VueJs", icon: SiVuedotjs },
  { id: 8, name: "NextJs", icon: SiNextdotjs },
  { id: 9, name: "NodeJs", icon: FaNodeJs },
  { id: 10, name: "Supabase", icon: SiSupabase },
  { id: 11, name: "MongoDB", icon: SiMongodb },
  { id: 12, name: "AWS Suite", icon: FaAws },
  { id: 13, name: "Github", icon: FaGithub },
  { id: 14, name: "Figma", icon: FaFigma },
  { id: 15, name: "PHP", icon: FaPhp },
  { id: 16, name: "Python", icon: FaPython },
  { id: 17, name: "Confluence", icon: FaConfluence },
  { id: 18, name: "Jira", icon: FaJira },
];

export function Tools() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-5">
      <div className="relative rounded-lg p-6 sm:p-8 md:p-12 max-w-8xl w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10 rounded-2xl"
        >
          <source src="/BG-Plex-2.mp4" type="video/mp4" />
          Your browser does not support Video tag
        </video>

        <div className="absolute inset-0 bg-black/30 rounded-2xl -z-5"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Tools
            </h2>
            <h3 className="text-white">My Reliable Toolbox</h3>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <div
                  key={tool.id}
                  className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-2 sm:p-3 lg:p-4 flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-3 lg:space-x-4 hover:bg-gray-700/60 hover:scale-105 transition-all duration-300 min-h-[80px] sm:min-h-[60px]"
                >
                  <Icon
                    size={30}
                    className="text-white flex-shrink-0 sm:w-16 sm:h-16 md:w-18 md:h-18"
                  />
                  <div>
                    <h3 className="text-[10px] sm:text-xs lg:text-sm font-semibold text-white text-center sm:text-left">
                      {tool.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
