import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GameSection } from "@/components/GameSection";
import { Skills } from "@/components/Skills";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <GameSection />
    </div>
  );
}
