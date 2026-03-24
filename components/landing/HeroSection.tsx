import Link from "next/link";
import { StarField } from "@/components/ui/StarField";
import { VenusSymbol } from "@/components/ui/GlowDivider";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-bg-deep">
      <StarField count={80} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45,27,61,0.7) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        <div className="flex justify-center">
          <VenusSymbol className="w-10 h-12 opacity-70 animate-[float_6s_ease-in-out_infinite]" />
        </div>

        <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
          Diagnóstico de Padrão Afetivo
        </p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
          <span className="text-text-primary">Você não tem</span>{" "}
          <span className="text-gradient-gold">dedo podre.</span>
          <br />
          <span className="text-text-primary">Você tem um padrão</span>
          <br />
          <span className="text-text-secondary text-3xl md:text-4xl font-normal italic">
            que nunca te explicaram.
          </span>
        </h1>

        <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
          Em menos de 4 minutos, esse quiz combina a posição de Vênus no dia em que você nasceu com o seu estilo emocional — e revela o{" "}
          <span className="text-gold font-semibold">Ímã do Cara Errado</span>: o padrão específico que explica cada relacionamento que já terminou do mesmo jeito.
        </p>

        <div className="space-y-3">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center w-full max-w-sm bg-gold hover:bg-gold-light text-bg-deep font-sans font-bold uppercase tracking-widest text-sm px-8 py-5 rounded-sm transition-all duration-200 shadow-lg hover:shadow-gold/40"
          >
            Descobrir meu padrão agora →
          </Link>
          <p className="font-sans text-xs text-text-muted">
            Gratuito para começar · Resultado em 4 minutos · Sem cadastro
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="flex -space-x-2">
            {["R", "C", "J", "A", "M"].map((letter, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-amethyst/40 border-2 border-bg-deep flex items-center justify-center text-xs font-bold text-amethyst-light font-sans"
              >
                {letter}
              </div>
            ))}
          </div>
          <p className="font-sans text-xs text-text-muted">
            <span className="text-text-secondary font-semibold">+12.400 mulheres</span> já descobriram seu padrão
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent mx-auto" />
      </div>
    </section>
  );
}
