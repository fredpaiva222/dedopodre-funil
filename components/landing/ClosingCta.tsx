import Link from "next/link";
import { StarField } from "@/components/ui/StarField";

export function ClosingCta() {
  return (
    <section className="relative px-6 py-24 bg-bg-dark overflow-hidden">
      <StarField count={40} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(45,27,61,0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center space-y-8">
        <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
          Você chegou até aqui
        </p>

        <h2 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
          Isso já diz algo.
        </h2>

        <p className="font-sans text-base text-text-secondary leading-relaxed">
          Significa que alguma parte do que você leu ecoou. Que a expressão{" "}
          <span className="text-gold italic">"dedo podre"</span> não é só uma piada que você faz com as amigas — é algo que você carrega com um peso real.
        </p>

        <p className="font-sans text-base text-text-secondary leading-relaxed">
          Você não precisa continuar sem entender por que.
        </p>

        <div className="space-y-3">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center w-full max-w-sm bg-gold hover:bg-gold-light text-bg-deep font-sans font-bold uppercase tracking-widest text-sm px-8 py-5 rounded-sm transition-all duration-200 shadow-lg"
          >
            Começar o quiz agora →
          </Link>
          <p className="font-sans text-xs text-text-muted">
            Acesso imediato · Garantia de 7 dias
          </p>
        </div>
      </div>
    </section>
  );
}
