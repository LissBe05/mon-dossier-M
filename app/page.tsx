import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/services/page";
import Avis from "@/components/avis/page"
import StatsSection from "@/components/StatsSection";
import ChatWidget from "@/components/ChatWidget";
import Contact from "@/components/Contact";


export default function HomePage() {
  return (
    <main className="space-y-24">
      <Hero />
      <Services />
      <Avis />
      <Features />
      <HowItWorks />
      <StatsSection />
      <ChatWidget />
      <Contact />
    </main>
  );
}
