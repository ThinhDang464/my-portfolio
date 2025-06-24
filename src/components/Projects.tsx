"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Streaming Website",
    description:
      "A streaming website with working streaming servers for movies viewing and trailer viewing. Features movies from different providers.",
    image: "/Stream.png",
    technologies: ["React", "TMDB", "Firebase"],
    githubLink: "https://github.com/ThinhDang464/Thomflix",
    liveLink: "https://www.youtube.com/watch?v=vcYHywIVwow",
    webLink: "https://thomflix.netlify.app/",
  },
  {
    id: 2,
    title: "AI-Tool for Assessment Management",
    description:
      "An AI-driven tool that aids educators in manual tasks like creating and grading assessments. The tool focuses on reading comprehension.",
    image: "/MMW.png",
    technologies: ["NextJs", "Supabase", "Gemini"],
    githubLink: "https://github.com/NicolaNg5/i27-MarkMyWords",
    liveLink: "https://www.youtube.com/watch?v=MsVgpVCVfx8",
    webLink: "https://markmywords.au/",
  },
  {
    id: 3,
    title: "Decentralised Marketplace",
    description:
      "A decentralised artefacts marketplace that was built and supported by the Ethereum blockchain and Ganache. Inspired by OpenSea ",
    image: "/web3.png",
    technologies: ["React", "Ethereum", "Ganache"],
    githubLink: "https://github.com/andrewzw/Decentralized-Marketplace",
    liveLink: "https://www.youtube.com/watch?v=vIkEuBTsEzM",
    webLink: null,
  },
  {
    id: 4,
    title: "Archery Glenferrie Database",
    description:
      "A database interface for Glenferrie Archery Club to keep track archers' personal records and competition results.",
    image: "/Archer.png",
    technologies: ["PHP", "JavaScript", "TailwindCSS"],
    githubLink: "https://github.com/ThinhDang464/Archery-Glen_Proj",
    liveLink: "https://www.youtube.com/watch?v=9Qzf3BBB2ew",
    webLink: null,
  },
  {
    id: 5,
    title: "TaskiVist-Android TodoList App",
    description:
      "A sophisticated logic engine capable of processing complex propositional statements and inference rules.",
    image: "/todo.png",
    technologies: ["Kotlin", "RoomDatabase", "Delta"],
    githubLink: "https://github.com/ThinhDang464/Taskivist",
    liveLink: "https://www.youtube.com/watch?v=KRRZQWgtpvs",
    webLink: null,
  },
  {
    id: 6,
    title: "Website Portfolio",
    description:
      "A responsive website portfolio to showcase my tools and projects throughout the years.",
    image: "/Web.png",
    technologies: ["NextJs", "TypeScript", "TailwindCSS"],
    githubLink: "https://github.com/ThinhDang464/my-portfolio",
    liveLink: null,
    webLink: null,
  },
  {
    id: 7,
    title: "Studio Portfolio Website",
    description:
      "A website for a Vietnamese studio to showcase their graphic design and illustrations projects.",
    image: "/ivy-stu.png",
    technologies: ["React", "JavaScript", "TailwindCSS"],
    githubLink: "https://github.com/ThinhDang464/ivy-stu",
    liveLink: null,
    webLink: "https://ivystudio.netlify.app/",
  },
];

export function Projects() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-12">
      <div className="relative rounded-xl p-6 sm:p-8 md:p-12 max-w-8xl w-full bg-black/40 ">
        {/* Content */}
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A showcase of my development work spanning web applications, apps,
            and innovative tools
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/80 hover:scale-105 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description - This will grow to fill space */}
                <p className="text-sm sm:text-base text-gray-300 mb-4 flex-1">
                  {/*Flex 1 makes description expand to fill available space -> short descp match height of longer -> push blue tech boxes down same height */}
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons -  stick to bottom */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white text-sm rounded-lg transition-all duration-200 flex-1 justify-center"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600/50 hover:bg-blue-500/50 text-white text-sm rounded-lg transition-all duration-200 flex-1 justify-center"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Demo</span>
                    </a>
                  )}

                  {project.webLink && (
                    <a
                      href={project.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600/50 hover:bg-blue-500/50 text-white text-sm rounded-lg transition-all duration-200 flex-1 justify-center"
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      <span>Visit</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
