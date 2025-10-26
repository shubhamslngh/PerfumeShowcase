import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CollectionSection from "../components/CollectionSection";
import CraftSection from "../components/CraftSection";

export default function Page() {
  return (
    <main className="bg-black text-white">
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <CraftSection />
    </main>
  );
}
