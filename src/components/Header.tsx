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
    <header className="bg-gray-500 text-white py-5 px-4">
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
        <nav className="flex gap-9 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`px-3 py-2 rounded-md transition-all duration-300 ${
                activeLink === link.name
                  ? "text-yellow-300 font-semibold"
                  : "hover:text-gray-200 hover:underline"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/*Social Icons Nav col 3*/}
        <div className="justify-self-end flex items-center gap-4">
          <div className="flex gap-3">
            <div>@</div> {/* Icon 1 */}
            <div>in</div> {/* Icon 2 */}
            <div>gh</div> {/* Icon 3 */}
          </div>
          <button>Connect</button>
        </div>
      </div>
    </header>
  );
}
