"use client";

import { useEffect, useState } from "react";
import { useQuiz } from "@/context/QuizContext";
import { profiles } from "@/data/profiles";
import { venusSignDescriptions } from "@/lib/venus-calculator";
import { getCheckoutUrl } from "@/lib/lastlink";
import { StarField } from "@/components/ui/StarField";
import { GlowDivider, VenusSymbol } from "@/components/ui/GlowDivider";
import { Button } from "@/components/ui/Button";

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

  const checkoutUrl = getCheckoutUrl("frontend", profile.slug);

  function handleCheckout() {
    window.location.href = checkoutUrl;
  }

  return (
    <div className="min-h-screen bg-bg-deep relative overflow-hidden">
      <StarField count={50} />

      {/* Gradiente de fundo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,31,52,0.5) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <VenusSymbol className="w-8 h-10 mx-auto opacity-60" />
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            Análise concluída
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
            Seu padrão foi identificado
          </h1>
          {state.venusSign && (
            <p className="font-sans text-sm text-text-secondary">
              Vênus em{" "}
              <span className="text-gold font-semibold">{state.venusSign}</span>{" "}
              · Padrão mapeado
            </p>
          )}
        </div>

        <GlowDivider />

        {/* Resultado parcial — visível gratuitamente */}
        <div className="space-y-4">
          <div className="bg-bg-card border border-gold/20 rounded-sm p-6 space-y-3">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">
              Seu padrão
            </p>
            <h2 className="font-display text-2xl text-gradient-gold">
              {profile.name}
            </h2>
            {state.venusSign && venusDesc && (
              <p className="font-sans text-sm text-text-secondary leading-relaxed italic border-l-2 border-gold/30 pl-4">
                {venusDesc}
              </p>
            )}
          </div>

          {/* Prévia do resultado com blur */}
          <div className="paywall-blur">
            <div className="bg-bg-dark rounded-sm p-6 space-y-4">
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {profile.teaser}
              </p>
              {/* Conteúdo bloqueado — fica borrado */}
              <div className="space-y-3 opacity-40 select-none pointer-events-none">
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {profile.fullDescription.slice(0, 200)}...
                </p>
                <p className="font-sans text-sm text-text-secondary">
                  <strong>Tipo de homem que você atrai:</strong> {profile.manType.slice(0, 80)}...
                </p>
                <p className="font-sans text-sm text-text-secondary">
                  <strong>Por que o ciclo se repete:</strong> {profile.whyCycleRepeats.slice(0, 80)}...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Paywall CTA */}
        <div className="bg-bg-dark border border-gold/20 rounded-sm p-6 space-y-5 text-center">
          <div className="space-y-2">
            <p className="font-display text-xl text-text-primary">
              Para ler o diagnóstico completo
            </p>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              Nome do seu padrão · Tipo de homem que ele atrai · Por que o ciclo se repete · Plano de saída com 3 primeiros passos · PDF para salvar
            </p>
          </div>

          {/* Ancoragem de preço */}
          <div className="space-y-1">
            <p className="font-sans text-xs text-text-muted line-through">
              Sessão com especialista: R$ 300–800
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="font-sans text-xs text-text-muted">por apenas</span>
              <span className="font-display text-4xl text-gold">R$ 27</span>
            </div>
          </div>

          <Button variant="gold" size="lg" fullWidth onClick={handleCheckout}>
            Acessar meu resultado completo →
          </Button>

          <p className="font-sans text-xs text-text-muted">
            Garantia de 7 dias · Acesso imediato · Pagamento seguro via Lastlink
          </p>
        </div>
      </div>
    </div>
  );
}
