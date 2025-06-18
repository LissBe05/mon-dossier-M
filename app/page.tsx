import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import HowItWorks from "@/app/components/HowItWorks";



export default function HomePage() {
  return (
    <main className="space-y-24">
      <Hero />
      <Features />
      <HowItWorks />
      
    </main>
  );
}
