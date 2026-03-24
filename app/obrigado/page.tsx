"use client";

import { LASTLINK_URLS } from "@/lib/lastlink";
import { StarField } from "@/components/ui/StarField";
import { GlowDivider } from "@/components/ui/GlowDivider";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-bg-deep relative overflow-hidden">
      <StarField count={40} />

      <div className="relative z-10 max-w-lg mx-auto px-6 py-12 space-y-8">
        {/* Confirmação */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-2xl">
            ✦
          </div>
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            Pagamento confirmado
          </p>
          <h1 className="font-display text-3xl text-text-primary">
            Seu resultado está pronto
          </h1>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            Você recebeu o link de acesso por e-mail. Dentro você vai encontrar o nome do seu padrão, o tipo de homem que ele atrai e os 3 primeiros passos específicos para começar a sair.
          </p>
        </div>

        <GlowDivider />

        {/* Order Bump */}
        <div className="bg-bg-card border border-amethyst/30 rounded-sm p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-amethyst/20 border border-amethyst/30 flex items-center justify-center text-amethyst text-lg">
              ⚡
            </div>
            <div className="space-y-1">
              <p className="font-sans text-xs text-amethyst uppercase tracking-widest">
                Oferta especial — adicione ao seu pedido
              </p>
              <h2 className="font-display text-xl text-text-primary">
                Guia de Emergência
              </h2>
              <p className="font-sans text-xs text-text-muted">
                O que fazer quando você já está no ciclo
              </p>
            </div>
          </div>

          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            Você já está com um homem que parece parte do padrão? Esse guia é para agora — o que fazer, o que não fazer, e quando vale a pena tentar.
          </p>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-sans text-xs text-text-muted line-through">De R$ 37</p>
              <p className="font-display text-2xl text-gold">R$ 17</p>
            </div>
            <Button
              variant="amethyst"
              size="sm"
              onClick={() => { window.location.href = LASTLINK_URLS.orderBump; }}
            >
              Adicionar →
            </Button>
          </div>
        </div>

        {/* OTO 1 */}
        <div className="bg-bg-dark border border-gold/30 rounded-sm p-6 space-y-4">
          <div className="space-y-1">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">
              Próximo passo recomendado
            </p>
            <h2 className="font-display text-xl text-text-primary">
              Decodificada
            </h2>
            <p className="font-sans text-xs text-text-muted">
              Workshop de Reprogramação do Ímã do Cara Errado
            </p>
          </div>

          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            O diagnóstico mostrou o padrão. Esse workshop mostra como reprogramar. 4 aulas de 20–30 minutos + caderno de exercícios feitos para o seu padrão específico.
          </p>

          <p className="font-sans text-xs text-text-muted italic">
            &ldquo;Parei de sentir atração automática pelo tipo errado.&rdquo; — O que as participantes mais reportam.
          </p>

          <div className="flex items-center justify-between">
            <p className="font-display text-2xl text-gold">R$ 97</p>
            <Button
              variant="gold"
              size="sm"
              onClick={() => { window.location.href = LASTLINK_URLS.oto1; }}
            >
              Quero o workshop →
            </Button>
          </div>

          <p className="font-sans text-xs text-text-muted text-center">
            Ou{" "}
            <Link href="/" className="text-text-secondary underline underline-offset-2">
              não, obrigada — ir para meu resultado
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
