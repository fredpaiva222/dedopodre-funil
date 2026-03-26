"use client";

import { useEffect, useState } from "react";
import { useQuiz } from "@/context/QuizContext";
import { profiles } from "@/data/profiles";
import { venusSignDescriptions } from "@/lib/venus-calculator";
import { getCheckoutUrl } from "@/lib/lastlink";
import { StarField } from "@/components/ui/StarField";
import { GlowDivider, VenusSymbol } from "@/components/ui/GlowDivider";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const WHAT_IS_UNLOCKED = [
  {
    label: "O mecanismo exato",
    description:
      "Por que sua posição de Vênus, combinada com o seu perfil emocional, cria atrações automáticas — explicado em linguagem clara, não em jargão.",
  },
  {
    label: "O tipo de homem que ativa seu padrão",
    description:
      "Descrição detalhada dos perfis masculinos que disparam o seu ímã — para você reconhecer antes de se envolver, não depois.",
  },
  {
    label: "Por que o ciclo se repete",
    description:
      "A raiz psicológica específica do seu padrão — não 'apego ansioso genérico', mas o mecanismo concreto do SEU perfil.",
  },
  {
    label: "Os 3 primeiros passos",
    description:
      "Ações sequenciais feitas para o seu padrão específico. Não conselhos de autoajuda. Uma direção real.",
  },
  {
    label: "PDF para salvar",
    description:
      "Seu resultado completo formatado para consultar sempre que precisar.",
  },
];

export default function ResultadoParcialPage() {
  const { state } = useQuiz();
  const [profile, setProfile] = useState(profiles[0]);

  useEffect(() => {
    if (state.profileId) {
      const found = profiles.find((p) => p.id === state.profileId);
      if (found) setProfile(found);
    }
  }, [state.profileId]);

  const venusDesc = state.venusSign
    ? venusSignDescriptions[state.venusSign]
    : null;

  const firstName = state.leadName ?? "Você";
  const checkoutUrl = getCheckoutUrl("frontend", profile.slug);

  function handleCheckout() {
    window.location.href = checkoutUrl;
  }

  return (
    <div className="min-h-screen bg-bg-deep relative overflow-hidden">
      <StarField count={50} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,31,52,0.5) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-12 space-y-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <VenusSymbol className="w-8 h-10 mx-auto opacity-60" />
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            {state.venusSign ? `Vênus em ${state.venusSign}` : "Análise concluída"} · Padrão identificado
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
            {firstName}, seu padrão foi encontrado.
          </h1>
        </motion.div>

        <GlowDivider />

        {/* ENTREGA GRATUITA — valor real antes do paywall */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4"
        >
          {/* Card Vênus */}
          {state.venusSign && venusDesc && (
            <div className="bg-bg-card border border-gold/20 rounded-sm p-6 space-y-3">
              <p className="font-sans text-xs text-gold uppercase tracking-widest">
                Vênus em {state.venusSign}
              </p>
              <p className="font-sans text-sm text-text-secondary leading-relaxed italic border-l-2 border-gold/30 pl-4">
                {venusDesc}
              </p>
            </div>
          )}

          {/* Card padrão — visível completo */}
          <div className="bg-bg-card border border-gold/20 rounded-sm p-6 space-y-3">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">
              Seu padrão
            </p>
            <h2 className="font-display text-2xl text-gradient-gold">
              {profile.name}
            </h2>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {profile.teaser}
            </p>
          </div>
        </motion.div>

        {/* Transição emocional para o paywall */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center space-y-3 py-2"
        >
          <div className="w-16 h-px bg-gold/30 mx-auto" />
          <p className="font-serif text-base text-text-secondary leading-relaxed italic">
            Até aqui, você vê o padrão de fora.
            <br />
            No diagnóstico completo, você entra nele.
          </p>
          <div className="w-16 h-px bg-gold/30 mx-auto" />
        </motion.div>

        {/* O que está desbloqueado — descrito com especificidade */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="font-display text-lg text-text-primary">
            Seu diagnóstico completo inclui:
          </p>
          <div className="space-y-3">
            {WHAT_IS_UNLOCKED.map((item) => (
              <div
                key={item.label}
                className="flex gap-3 items-start bg-bg-dark border border-gold/10 rounded-sm p-4"
              >
                <span className="text-gold mt-0.5 flex-shrink-0">✦</span>
                <div className="space-y-0.5">
                  <p className="font-sans text-sm font-semibold text-text-primary">
                    {item.label}
                  </p>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Paywall CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-bg-dark border border-gold/20 rounded-sm p-6 space-y-5 text-center"
        >
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            Esse diagnóstico combina o que uma sessão de astrologia psicológica{" "}
            <span className="text-text-primary font-medium">(R$ 150–300)</span> e uma sessão de terapia de apego{" "}
            <span className="text-text-primary font-medium">(R$ 200–400)</span> entregariam separadas.
          </p>

          <div className="space-y-1">
            <p className="font-sans text-xs text-text-muted line-through">
              De R$ 47
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-sans text-xs text-text-muted">por apenas</span>
              <span className="font-display text-4xl text-gold">R$ 27</span>
            </div>
          </div>

          <Button variant="gold" size="lg" fullWidth onClick={handleCheckout}>
            Acessar meu diagnóstico completo →
          </Button>

          <p className="font-sans text-xs text-text-muted">
            Garantia de 7 dias · Acesso imediato · Pagamento seguro
          </p>
        </motion.div>

      </div>
    </div>
  );
}
