"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getProfileBySlug } from "@/data/profiles";
import { StarField } from "@/components/ui/StarField";
import { GlowDivider, VenusSymbol } from "@/components/ui/GlowDivider";
import Link from "next/link";

export default function ResultadoPage({
  params,
}: {
  params: { perfil: string };
}) {
  const searchParams = useSearchParams();
  const [venusSign, setVenusSign] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  const profile = getProfileBySlug(params.perfil);

  useEffect(() => {
    // Verifica se veio do checkout com parâmetro verified
    const verified = searchParams.get("verified");
    if (verified === "true") {
      localStorage.setItem(`sdp_purchased_${params.perfil}`, "true");
      setIsVerified(true);
    } else {
      const stored = localStorage.getItem(`sdp_purchased_${params.perfil}`);
      setIsVerified(stored === "true");
    }

    // Recupera signo de Vênus do estado salvo
    try {
      const saved = localStorage.getItem("sdp_quiz_state");
      if (saved) {
        const state = JSON.parse(saved);
        if (state.venusSign) setVenusSign(state.venusSign);
      }
    } catch {}
  }, [params.perfil, searchParams]);

  if (!profile) {
    return (
      <div className="min-h-screen bg-bg-deep flex items-center justify-center">
        <p className="font-sans text-text-muted">Perfil não encontrado.</p>
      </div>
    );
  }

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-bg-deep flex flex-col items-center justify-center px-6 text-center space-y-6">
        <p className="font-display text-2xl text-text-primary">
          Esta página requer acesso pago.
        </p>
        <p className="font-sans text-sm text-text-secondary">
          Você precisa completar o quiz e acessar o resultado completo.
        </p>
        <Link
          href="/"
          className="font-sans text-sm text-gold underline underline-offset-4"
        >
          Voltar ao início
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-deep relative overflow-hidden">
      <StarField count={60} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(74,31,52,0.6) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <VenusSymbol className="w-8 h-10 mx-auto opacity-60" />
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            Resultado completo
          </p>
          {venusSign && (
            <p className="font-sans text-sm text-text-secondary">
              Vênus em{" "}
              <span className="text-gold font-semibold">{venusSign}</span>
            </p>
          )}
        </div>

        {/* Nome do padrão */}
        <div className="bg-gradient-result border border-gold/20 rounded-sm p-8 text-center space-y-3">
          <p className="font-sans text-xs text-text-muted uppercase tracking-widest">
            Seu padrão é
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-gradient-gold leading-tight">
            {profile.name}
          </h1>
        </div>

        <GlowDivider />

        {/* Descrição completa */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="font-display text-xl text-text-primary">
              O que isso significa
            </h2>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {profile.teaser}
            </p>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {profile.fullDescription}
            </p>
          </div>

          <div className="gold-line" />

          {/* Tipo de homem */}
          <div className="bg-bg-card rounded-sm p-5 space-y-2">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">
              Tipo de homem que você atrai
            </p>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {profile.manType}
            </p>
          </div>

          {/* Por que repete */}
          <div className="bg-bg-card rounded-sm p-5 space-y-2">
            <p className="font-sans text-xs text-amethyst uppercase tracking-widest">
              Por que o ciclo se repete
            </p>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {profile.whyCycleRepeats}
            </p>
          </div>

          {/* Primeiro passo */}
          <div className="bg-bg-dark border border-gold/30 rounded-sm p-6 space-y-3">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">
              Seu primeiro passo
            </p>
            <p className="font-display text-lg text-text-primary leading-snug">
              {profile.firstStep}
            </p>
          </div>
        </div>

        <GlowDivider />

        {/* Rodapé */}
        <div className="text-center space-y-3">
          <p className="font-sans text-xs text-text-muted leading-relaxed">
            Salve essa página ou tire um print para consultar quando precisar.
          </p>
          <Link
            href="/"
            className="font-sans text-xs text-gold underline underline-offset-4"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
