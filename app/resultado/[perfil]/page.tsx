"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { profiles } from "@/data/profiles";
import { venusSignDescriptions, VenusSign } from "@/lib/venus-calculator";
import { StarField } from "@/components/ui/StarField";
import { GlowDivider, VenusSymbol } from "@/components/ui/GlowDivider";
import Link from "next/link";

export default function ResultadoPage({
  params,
}: {
  params: { perfil: string };
}) {
  const searchParams = useSearchParams();
  const [venusSign, setVenusSign] = useState<VenusSign | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  const profile = profiles.find((p) => p.slug === params.perfil);

  useEffect(() => {
    const verified = searchParams.get("verified");
    if (verified === "true") {
      localStorage.setItem(`mag_purchased_${params.perfil}`, "true");
      setIsVerified(true);
    } else {
      const stored = localStorage.getItem(`mag_purchased_${params.perfil}`);
      setIsVerified(stored === "true");
    }

    try {
      const saved = localStorage.getItem("mag_quiz_state");
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
          Você precisa completar o quiz e desbloquear seu mapa completo.
        </p>
        <Link href="/" className="font-sans text-sm text-gold underline underline-offset-4">
          Voltar ao início
        </Link>
      </div>
    );
  }

  const venusDesc = venusSign ? venusSignDescriptions[venusSign] : null;

  return (
    <div className="min-h-screen bg-bg-deep relative overflow-hidden">
      <StarField count={60} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(155,110,168,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-12 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <VenusSymbol className="w-8 h-10 mx-auto opacity-60" />
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            Mapa da Alma Gêmea · Resultado completo
          </p>
          {venusSign && (
            <p className="font-sans text-sm text-text-secondary">
              Vênus em <span className="text-gold font-semibold">{venusSign}</span>
            </p>
          )}
        </div>

        {/* Perfil Amoroso */}
        <div className="bg-bg-card border border-gold/20 rounded-sm p-8 text-center space-y-3">
          <p className="font-sans text-xs text-text-muted uppercase tracking-widest">Seu perfil</p>
          <h1 className="font-display text-3xl md:text-4xl text-gradient-gold leading-tight">
            {profile.name}
          </h1>
          {venusDesc && (
            <p className="font-sans text-sm text-text-secondary leading-relaxed italic border-t border-gold/10 pt-4 mt-4">
              {venusDesc}
            </p>
          )}
        </div>

        <GlowDivider />

        {/* Padrão de Atração */}
        <div className="space-y-4">
          <h2 className="font-display text-xl text-text-primary">Padrão de Atração</h2>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">{profile.teaser}</p>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">{profile.fullDescription}</p>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">{profile.attractionPattern}</p>
        </div>

        <div className="gold-line" />

        {/* Perfil da Alma Gêmea */}
        <div className="bg-bg-card border border-amethyst/20 rounded-sm p-5 space-y-2">
          <p className="font-sans text-xs text-amethyst uppercase tracking-widest">Perfil da Alma Gêmea</p>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">{profile.soulMateProfile}</p>
        </div>

        {/* Red Flags */}
        <div className="bg-bg-card border border-gold/10 rounded-sm p-5 space-y-3">
          <p className="font-sans text-xs text-gold uppercase tracking-widest">Red Flags Astrológicos</p>
          <ul className="space-y-2">
            {profile.redFlags.map((flag, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-gold mt-0.5 flex-shrink-0 text-xs">⚠</span>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">{flag}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Janela Cósmica */}
        <div className="bg-bg-dark border border-gold/30 rounded-sm p-6 space-y-3">
          <p className="font-sans text-xs text-gold uppercase tracking-widest">Janela Cósmica 90 dias</p>
          <p className="font-display text-base text-text-primary leading-snug">{profile.cosmicWindow}</p>
        </div>

        <GlowDivider />

        <div className="text-center space-y-3">
          <p className="font-sans text-xs text-text-muted leading-relaxed">
            Salve essa página ou tire um print para consultar quando precisar.
          </p>
          <Link href="/" className="font-sans text-xs text-gold underline underline-offset-4">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
