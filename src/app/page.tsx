import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GameSection } from "@/components/GameSection";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { Cert } from "@/components/Cert";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="tech">
        <Tools />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="connect">
        <Connect />
      </div>
      <GameSection />
      <Footer />
    </div>
  );
}
