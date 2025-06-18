import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import HowItWorks from "@/app/components/HowItWorks";

import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <main className="space-y-24">
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
