"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface DateBirthInputProps {
  onConfirm: (date: string) => void;
}

export function DateBirthInput({ onConfirm }: DateBirthInputProps) {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [error, setError] = useState("");

  function validate(): boolean {
    const d = parseInt(day, 10);
    const m = parseInt(month, 10);
    const y = parseInt(year, 10);

    if (!day || !month || !year) {
      setError("Preencha todos os campos.");
      return false;
    }
    if (d < 1 || d > 31) { setError("Dia inválido."); return false; }
    if (m < 1 || m > 12) { setError("Mês inválido."); return false; }
    if (y < 1960 || y > 2004) { setError("Ano deve estar entre 1960 e 2004."); return false; }

    const date = new Date(y, m - 1, d);
    if (date.getMonth() !== m - 1) { setError("Data inválida."); return false; }

    setError("");
    return true;
  }

  function handleConfirm() {
    if (!validate()) return;
    const formatted = `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    onConfirm(formatted);
  }

  const inputClass =
    "bg-bg-card border border-bg-card focus:border-gold outline-none text-text-primary font-sans text-center text-lg rounded-sm transition-colors duration-200 py-3";

  return (
    <div className="space-y-6">
      <div className="flex gap-3 items-end">
        <div className="flex flex-col gap-1 flex-1">
          <label className="font-sans text-xs text-text-muted uppercase tracking-widest">Dia</label>
          <input
            type="number"
            placeholder="DD"
            min={1}
            max={31}
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className={`${inputClass} w-full`}
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label className="font-sans text-xs text-text-muted uppercase tracking-widest">Mês</label>
          <input
            type="number"
            placeholder="MM"
            min={1}
            max={12}
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className={`${inputClass} w-full`}
          />
        </div>
        <div className="flex flex-col gap-1 flex-[2]">
          <label className="font-sans text-xs text-text-muted uppercase tracking-widest">Ano</label>
          <input
            type="number"
            placeholder="AAAA"
            min={1960}
            max={2004}
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={`${inputClass} w-full`}
          />
        </div>
      </div>

      {error && (
        <p className="font-sans text-sm text-rose-wine text-center">{error}</p>
      )}

      <p className="font-sans text-xs text-text-muted text-center leading-relaxed">
        Sua data é usada apenas para calcular a posição de Vênus no seu mapa natal.
        Não é armazenada nem compartilhada.
      </p>

      <Button
        variant="gold"
        size="lg"
        fullWidth
        onClick={handleConfirm}
        disabled={!day || !month || !year}
      >
        Calcular minha posição de Vênus →
      </Button>
    </div>
  );
}
