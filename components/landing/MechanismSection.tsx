import Link from "next/link";
import { GlowDivider } from "@/components/ui/GlowDivider";

const BULLETS = [
  {
    icon: "♀",
    title: "A posição de Vênus no dia em que você nasceu",
    text: "E o que ela revela sobre atrações que você nunca entendeu.",
  },
  {
    icon: "◎",
    title: "O seu estilo de apego emocional",
    text: "Por que certos comportamentos te fisgam de forma automática — e por que é tão difícil resistir.",
  },
  {
    icon: "✦",
    title: "O nome do seu padrão",
    text: "Específico, não genérico. Feito para o que você vive, não para todo mundo.",
  },
];

const MINI_TESTIMONIALS = [
  {
    text: "Quando vi o nome do meu padrão, fiquei olhando por 5 minutos. Era exatamente isso.",
    name: "Carla",
    age: 34,
  },
  {
    text: "Não era dedo podre. Era um programa. Não sabia que tinha nome.",
    name: "Rafaela",
    age: 29,
  },
  {
    text: "Finalmente algo que explica o padrão, não só descreve.",
    name: "Letícia",
    age: 27,
  },
];

export function MechanismSection() {
  return (
    <section className="relative px-6 py-16 bg-bg-dark">
      <div className="max-w-2xl mx-auto space-y-10">
        <GlowDivider />

        {/* Depoimentos emocionais curtos */}
        <div className="space-y-4">
          {MINI_TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="bg-bg-card border border-gold/10 rounded-sm p-4 space-y-2"
            >
              <p className="font-serif text-sm text-text-secondary leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="font-sans text-xs text-text-muted">
                — {t.name}, {t.age} anos
              </p>
            </blockquote>
          ))}
        </div>

        <div className="gold-line" />

        {/* O que você vai descobrir — ultra-comprimido */}
        <div className="space-y-5">
          <p className="font-display text-xl text-text-primary text-center">
            O que você vai descobrir
          </p>
          <div className="space-y-4">
            {BULLETS.map((b) => (
              <div key={b.title} className="flex gap-4 items-start">
                <span className="text-gold text-lg flex-shrink-0 mt-0.5">{b.icon}</span>
                <div>
                  <p className="font-sans text-sm font-semibold text-text-primary">{b.title}</p>
                  <p className="font-sans text-sm text-text-muted leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA secundário */}
        <div className="text-center space-y-3">
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center w-full max-w-sm bg-gold hover:bg-gold-light text-bg-deep font-sans font-bold uppercase tracking-widest text-sm px-8 py-5 rounded-sm transition-all duration-200 shadow-lg hover:shadow-gold/40"
          >
            Quero descobrir agora →
          </Link>
          <p className="font-sans text-xs text-text-muted">
            Gratuito para começar · 4 minutos · Sem cadastro
          </p>
        </div>

        <GlowDivider />
      </div>
    </section>
  );
}
