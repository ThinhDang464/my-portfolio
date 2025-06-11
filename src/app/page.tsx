import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GameSection } from "@/components/GameSection";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { Cert } from "@/components/Cert";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Tools />
      <Cert />
      <GameSection />
    </div>
  );
}
