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

// Seções do relatório completo (exibidas com blur progressivo)
const REPORT_SECTIONS = [
  {
    id: "perfil",
    label: "Seção 1",
    title: "Perfil Amoroso",
    visible: true,
    preview: null, // exibido completo (seção gratuita)
  },
  {
    id: "padrão",
    label: "Seção 2",
    title: "Padrão de Atração",
    visible: "partial", // 60% visível
    preview: "Seu padrão de atração está diretamente ligado à posição de Vênus no momento do seu nascimento. O que você interpreta como...",
  },
  {
    id: "alma-gemea",
    label: "Seção 3",
    title: "Perfil da Alma Gêmea",
    visible: false,
    preview: "Seu mapa indica que sua alma gêmea tem uma característica que...",
  },
  {
    id: "red-flags",
    label: "Seção 4",
    title: "Red Flags Astrológicos",
    visible: false,
    preview: null,
  },
  {
    id: "janela",
    label: "Seção 5",
    title: "Janela Cósmica 90 dias",
    visible: false,
    preview: null,
  },
  {
    id: "ritual",
    label: "Seção 6",
    title: "Ritual de Ativação Vênus 7 dias",
    visible: false,
    preview: null,
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

  const venusDesc = state.venusSign ? venusSignDescriptions[state.venusSign] : null;
  const firstName = state.leadName ?? "Você";
  const checkoutUrl = getCheckoutUrl("frontend", profile.slug);

  function handleCheckout() {
    window.location.href = checkoutUrl;
  }

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
            {state.venusSign ? `Vênus em ${state.venusSign}` : "Análise concluída"} · Mapa gerado
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
            {firstName}, seu Mapa da Alma Gêmea foi gerado.
          </h1>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            Abaixo você vê o início do seu mapa. As seções mais importantes estão bloqueadas.
          </p>
        </motion.div>

        <GlowDivider />

        {/* SEÇÃO 1 — Perfil Amoroso (visível completo) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-gold uppercase tracking-widest">Seção 1</span>
            <span className="font-sans text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Desbloqueado</span>
          </div>

          <h2 className="font-display text-2xl text-gradient-gold">Perfil Amoroso</h2>

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

          <div className="bg-bg-card border border-gold/20 rounded-sm p-6 space-y-3">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">Seu perfil</p>
            <h3 className="font-display text-xl text-text-primary">{profile.name}</h3>
            <p className="font-sans text-sm text-text-secondary leading-relaxed">{profile.teaser}</p>
          </div>
        </motion.div>

        {/* SEÇÃO 2 — Padrão de Atração (parcialmente visível) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-gold uppercase tracking-widest">Seção 2</span>
            <span className="font-sans text-xs text-gold/60 bg-gold/10 px-2 py-0.5 rounded-full">Parcialmente visível</span>
          </div>

          <h2 className="font-display text-2xl text-text-primary">Padrão de Atração</h2>

          <div className="bg-bg-card border border-gold/10 rounded-sm p-6 relative overflow-hidden">
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {profile.attractionPattern}
            </p>
            {/* Fade out da metade */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{
                background: "linear-gradient(to bottom, transparent, #1E1128)",
              }}
            />
          </div>
        </motion.div>

        {/* SEÇÃO 3 — Perfil da Alma Gêmea (1 frase + blur) */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-3">
            <span className="font-sans text-xs text-gold uppercase tracking-widest">Seção 3</span>
            <span className="font-sans text-xs text-amethyst/80 bg-amethyst/10 px-2 py-0.5 rounded-full">Bloqueado</span>
          </div>

          <h2 className="font-display text-2xl text-text-primary">Perfil da Alma Gêmea</h2>

          <div className="bg-bg-card border border-amethyst/20 rounded-sm p-6 relative overflow-hidden space-y-4">
            {/* Primeira frase visível */}
            <p className="font-sans text-sm text-text-secondary leading-relaxed">
              {profile.soulMateProfile.split(".")[0]}.
            </p>
            {/* Resto borrado */}
            <div className="relative">
              <p
                className="font-sans text-sm text-text-secondary leading-relaxed"
                style={{ filter: "blur(6px)", userSelect: "none" }}
              >
                {profile.soulMateProfile} Ele reconhece em você algo que outros não conseguem ver. Sua compatibilidade vai além do óbvio.
              </p>
              <div
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="font-sans text-xs text-gold bg-bg-deep/80 px-3 py-1 rounded-full border border-gold/30">
                  🔒 Desbloqueie para ler
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Seções 4, 5 e 6 — totalmente bloqueadas */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="space-y-3"
        >
          {[
            { label: "Seção 4", title: "Red Flags Astrológicos" },
            { label: "Seção 5", title: "Janela Cósmica 90 dias" },
            { label: "Seção 6", title: "Ritual de Ativação Vênus 7 dias" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-bg-dark border border-gold/5 rounded-sm p-4 flex items-center justify-between opacity-60"
            >
              <div>
                <p className="font-sans text-xs text-text-muted uppercase tracking-widest">{s.label}</p>
                <p className="font-sans text-sm text-text-primary">{s.title}</p>
              </div>
              <span className="text-gold text-lg">🔒</span>
            </div>
          ))}
        </motion.div>

        {/* Paywall CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-bg-dark border border-gold/20 rounded-sm p-6 space-y-5 text-center"
        >
          <p className="font-display text-xl text-text-primary leading-snug">
            Desbloqueie seu mapa completo agora
          </p>

          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            O que uma sessão de astrologia psicológica{" "}
            <span className="text-text-primary font-medium">(R$ 150–300)</span>{" "}
            e uma sessão de terapia de apego{" "}
            <span className="text-text-primary font-medium">(R$ 200–400)</span>{" "}
            entregariam separadas, em um mapa personalizado completo.
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
            Desbloquear meu mapa completo →
          </Button>

          <p className="font-sans text-xs text-text-muted">
            Garantia de 7 dias · Acesso imediato · Pagamento seguro
          </p>
        </motion.div>

      </div>
    </div>
  );
}
