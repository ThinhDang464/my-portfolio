"use client";
import {
  FaCode,
  FaServer,
  FaMobile,
  FaUsers,
  FaCloud,
  FaComments,
} from "react-icons/fa";

const skillsData = [
  { id: 1, title: "Software Development", icon: FaCode },
  { id: 2, title: "Fullstack Development", icon: FaServer },
  { id: 3, title: "Mobile Development", icon: FaMobile },
  { id: 4, title: "Teamwork", icon: FaUsers },
  { id: 5, title: "Communication", icon: FaComments },
  { id: 6, title: "Cloud", icon: FaCloud },
];
export function Skills() {
  return (
    <section className="flex items-center justify-center px-20 py-12 ">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg p-8 max-w-4x1 w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-gray-300">My core competencies</p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill) => {
            const Card = skill.icon;
            return (
              <div
                key={skill.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-gray-700/50 transition-all duration-300"
              >
                <Card size={60} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white">
                  {skill.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
