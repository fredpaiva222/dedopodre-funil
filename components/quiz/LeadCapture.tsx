"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StarField } from "@/components/ui/StarField";
import { Button } from "@/components/ui/Button";
import { VenusSymbol } from "@/components/ui/GlowDivider";
import { getTimezoneForCity } from "@/lib/timezones";

interface LeadCaptureProps {
  onContinue: (params: {
    name: string;
    email: string;
    birthDate: string;
    birthTime: string;
    birthCity: string;
    birthTimezone: string;
  }) => void;
}

export function LeadCapture({ onContinue }: LeadCaptureProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [birthCity, setBirthCity] = useState("");
  const [unknownTime, setUnknownTime] = useState(false);
  const [error, setError] = useState("");

  function formatDate(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 8);
    if (digits.length <= 2) return digits;
    if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
  }

  function formatTime(value: string): string {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}:${digits.slice(2)}`;
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBirthDate(formatDate(e.target.value));
  }

  function handleTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBirthTime(formatTime(e.target.value));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const trimName = name.trim();
    const trimEmail = email.trim();
    const trimCity = birthCity.trim();

    if (!trimName) { setError("Digite seu primeiro nome."); return; }
    if (!trimEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimEmail)) {
      setError("Digite um e-mail válido."); return;
    }
    if (!birthDate || birthDate.length < 10) {
      setError("Digite sua data de nascimento completa (DD/MM/AAAA)."); return;
    }
    const [d, m, y] = birthDate.split("/").map(Number);
    if (!d || !m || !y || m > 12 || d > 31 || y < 1900 || y > 2010) {
      setError("Data de nascimento inválida."); return;
    }
    if (!unknownTime && (!birthTime || birthTime.length < 5)) {
      setError("Digite o horário de nascimento ou marque que não sabe."); return;
    }
    if (!trimCity) { setError("Digite a cidade onde você nasceu."); return; }

    const finalTime = unknownTime ? "12:00" : birthTime;
    const timezone = getTimezoneForCity(trimCity);

    onContinue({
      name: trimName,
      email: trimEmail,
      birthDate,
      birthTime: finalTime,
      birthCity: trimCity,
      birthTimezone: timezone,
    });
  }

  return (
    <div className="min-h-screen bg-bg-deep flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <StarField count={60} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(155,110,168,0.15) 0%, transparent 60%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm space-y-8"
      >
        <div className="text-center space-y-4">
          <VenusSymbol className="w-8 h-10 mx-auto opacity-60" />
          <h1 className="font-display text-2xl md:text-3xl text-text-primary leading-snug">
            Para gerar seu Mapa da Alma Gêmea, preciso do momento exato do seu nascimento.
          </h1>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            A posição de Vênus muda a cada horas. Quanto mais preciso o horário, mais preciso o seu mapa.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
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

          <div className="space-y-1">
            <label className="font-sans text-xs text-text-muted uppercase tracking-widest">
              Data de nascimento
            </label>
            <input
              type="text"
              placeholder="DD/MM/AAAA"
              value={birthDate}
              onChange={handleDateChange}
              inputMode="numeric"
              className="w-full bg-bg-card border border-gold/20 rounded-sm px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="font-sans text-xs text-text-muted uppercase tracking-widest">
              Horário de nascimento
            </label>
            <input
              type="text"
              placeholder="HH:MM (ex: 14:30)"
              value={unknownTime ? "" : birthTime}
              onChange={handleTimeChange}
              disabled={unknownTime}
              inputMode="numeric"
              className="w-full bg-bg-card border border-gold/20 rounded-sm px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-40"
            />
            <label className="flex items-center gap-2 cursor-pointer mt-2">
              <input
                type="checkbox"
                checked={unknownTime}
                onChange={(e) => setUnknownTime(e.target.checked)}
                className="accent-gold"
              />
              <span className="font-sans text-xs text-text-muted">Não sei meu horário de nascimento</span>
            </label>
          </div>

          <div className="space-y-1">
            <label className="font-sans text-xs text-text-muted uppercase tracking-widest">
              Cidade de nascimento
            </label>
            <input
              type="text"
              placeholder="Ex: São Paulo, Rio de Janeiro..."
              value={birthCity}
              onChange={(e) => setBirthCity(e.target.value)}
              className="w-full bg-bg-card border border-gold/20 rounded-sm px-4 py-3 font-sans text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors"
            />
          </div>

          {error && (
            <p className="font-sans text-xs text-red-400">{error}</p>
          )}

          <Button variant="gold" size="lg" fullWidth type="submit">
            Calcular meu Mapa da Alma Gêmea →
          </Button>

          <p className="font-sans text-xs text-text-muted text-center">
            Seus dados são usados apenas para gerar seu mapa. Sem spam.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
