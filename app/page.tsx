import { HeroSection } from "@/components/landing/HeroSection";
import { MechanismSection } from "@/components/landing/MechanismSection";
import { CredibilitySection } from "@/components/landing/CredibilitySection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { ClosingCta } from "@/components/landing/ClosingCta";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MechanismSection />
      <CredibilitySection />
      <TestimonialsSection />
      <FaqSection />
      <ClosingCta />
    </main>
  );
}
