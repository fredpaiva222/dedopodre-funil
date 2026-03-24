"use client";

import { useState } from "react";

const faqs = [
  {
    q: "\"Isso é só astrologia — não acredito muito nisso.\"",
    a: "Entendo. A parte de astrologia é uma das duas peças — a posição de Vênus é usada como dado de entrada, como um dos fatores do cálculo. A segunda peça é comportamental: as respostas que você dá no quiz. Mulheres que não acreditam em astrologia fazem o quiz e reconhecem o resultado do mesmo jeito — porque a parte comportamental é baseada em pesquisa de psicologia.",
  },
  {
    q: "\"Já fiz vários quizzes e nenhum mudou nada.\"",
    a: "Faz sentido. A maioria dos quizzes te entrega um perfil genérico. Esse combina dois fatores específicos para você e te dá um diagnóstico com nome, padrão e primeiro passo concreto. Não é para você guardar numa pasta. É para você ler e identificar o padrão antes do próximo ciclo começar.",
  },
  {
    q: "\"R$ 27 é pouco — deve ser superficial.\"",
    a: "O resultado completo tem profundidade equivalente ao que profissionais cobram R$ 300–800 para entregar em consulta. A diferença é que aqui você recebe o diagnóstico em formato acessível, sem precisar de agendamento e sem precisar contar a história toda para alguém que não te conhece.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-bg-deep">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">Dúvidas</p>
          <h2 className="font-display text-3xl text-text-primary">Antes de começar</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-bg-card rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-bg-card hover:bg-bg-card/80 transition-colors duration-150 cursor-pointer"
              >
                <span className="font-sans text-sm text-text-primary font-medium leading-snug">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 text-gold text-lg leading-none">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 bg-bg-dark">
                  <p className="font-sans text-sm text-text-secondary leading-relaxed pt-4">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
