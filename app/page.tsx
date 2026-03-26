import { HeroSection } from "@/components/landing/HeroSection";
import { MechanismSection } from "@/components/landing/MechanismSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { ClosingCta } from "@/components/landing/ClosingCta";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MechanismSection />
      <TestimonialsSection />
      <FaqSection />
      <ClosingCta />
    </main>
  );
}
