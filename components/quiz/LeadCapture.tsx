"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StarField } from "@/components/ui/StarField";
import { Button } from "@/components/ui/Button";
import { VenusSymbol } from "@/components/ui/GlowDivider";

interface LeadCaptureProps {
  onContinue: (name: string, email: string) => void;
}

export function LeadCapture({ onContinue }: LeadCaptureProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError("Digite seu primeiro nome.");
      return;
    }
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError("Digite um e-mail válido.");
      return;
    }

    setError("");
    onContinue(trimmedName, trimmedEmail);
  }

  return (
    <div className="min-h-screen bg-bg-deep flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <StarField count={50} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 20%, rgba(74,31,52,0.5) 0%, transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm space-y-8 text-center"
      >
        <div className="space-y-4">
          <VenusSymbol className="w-8 h-10 mx-auto opacity-60" />
          <h1 className="font-display text-2xl md:text-3xl text-text-primary leading-snug">
            Antes de revelar seu padrão, preciso saber para quem enviar.
          </h1>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            Vou calcular a posição de Vênus no dia em que você nasceu e combinar com o seu perfil emocional. O resultado fica salvo no seu e-mail.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Seu primeiro nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-bg-card border border-gold/20 rounded-sm px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-bg-card border border-gold/20 rounded-sm px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          {error && (
            <p className="font-sans text-xs text-red-400">{error}</p>
          )}

          <Button variant="gold" size="lg" fullWidth type="submit">
            Começar minha análise →
          </Button>

          <p className="font-sans text-xs text-text-muted">
            Sem spam. Você pode descadastrar a qualquer momento.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
