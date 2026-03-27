"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { StarField } from "@/components/ui/StarField";
import { Button } from "@/components/ui/Button";
import { GlowDivider } from "@/components/ui/GlowDivider";

const TESTIMONIALS = [
  {
    name: "Larissa M.",
    age: 29,
    text: "Fiz o mapa e quando li o perfil da minha alma gêmea, tive arrepios. Era exatamente o que eu sempre soube que procurava, mas nunca soube descrever.",
  },
  {
    name: "Tatiane C.",
    age: 34,
    text: "Eu não acreditava em astrologia. Mas o meu padrão de atração foi descrito com uma precisão que nenhum terapeuta tinha conseguido em dois anos de sessões.",
  },
  {
    name: "Priscila A.",
    age: 27,
    text: "Entendi em 10 minutos por que eu sempre atraía o mesmo tipo de homem. E finalmente sei o que preciso ativar para que isso mude.",
  },
];

const FAQ = [
  {
    q: "Preciso saber o horário exato de nascimento?",
    a: "O horário aumenta a precisão do mapa. Se você não sabe, pode marcar essa opção e usamos o meio-dia como referência, o que ainda entrega um resultado preciso para a posição de Vênus na maioria dos dias.",
  },
  {
    q: "Como o mapa é diferente do horóscopo comum?",
    a: "O horóscopo usa apenas o signo solar, que é o mesmo para milhões de pessoas. O Mapa da Alma Gêmea calcula a posição exata de Vênus no momento do seu nascimento, com data, hora e local, usando o mesmo motor de cálculo usado por astro.com e Astrolink. O resultado é único para você.",
  },
  {
    q: "O que recebo depois de fazer o quiz?",
    a: "Primeiro você vê seu Perfil Amoroso completo e o início do seu Padrão de Atração, gratuitamente. Para desbloquear o mapa completo, incluindo o perfil da sua alma gêmea, red flags astrológicos e a janela cósmica dos próximos 90 dias, há um investimento único.",
  },
  {
    q: "Tem garantia?",
    a: "Sim. Você tem 7 dias para pedir reembolso total, sem perguntas, caso sinta que o mapa não entregou o que prometeu.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg-deep text-text-primary overflow-hidden">
      <StarField count={80} />

      {/* Gradiente superior */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(155,110,168,0.12) 0%, transparent 60%)",
        }}
      />

      {/* ── HERO ── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            ♀ Mapa da Alma Gêmea
          </p>

          {/* Headline */}
          <h1 className="font-display text-3xl md:text-5xl text-text-primary leading-tight">
            Se você já se pegou pensando{" "}
            <span className="text-gradient-gold italic">
              "o que ela tem que eu não tenho"
            </span>{" "}
            depois de ver seu ex feliz com outra,
          </h1>

          <p className="font-serif text-xl md:text-2xl text-text-secondary leading-relaxed italic">
            esse mapa revela por que isso acontece com você e o que ativar agora para atrair o homem que te escolhe de verdade, todos os dias.
          </p>

          {/* Subheadline */}
          <p className="font-sans text-sm text-text-muted leading-relaxed max-w-lg mx-auto">
            O Mapa da Alma Gêmea revela, com base na sua data, hora e local de nascimento, o padrão exato de atração que define com quem você se conecta e por quê.
          </p>

          <Link href="/quiz">
            <Button variant="gold" size="lg">
              Descobrir meu mapa agora →
            </Button>
          </Link>

          <p className="font-sans text-xs text-text-muted">
            Gratuito para começar · Resultado em menos de 5 minutos
          </p>
        </motion.div>
      </section>

      <GlowDivider />

      {/* ── COMO FUNCIONA ── */}
      <section className="relative z-10 px-6 py-20 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12 text-center"
        >
          <div className="space-y-3">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">O mecanismo</p>
            <h2 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
              Não é horóscopo. É cálculo milimétrico.
            </h2>
            <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-lg mx-auto">
              A posição de Vênus muda a cada horas. No momento exato em que você nasceu, ela estava numa posição única, gravada no céu para sempre. Essa posição determina seu padrão de atração, seu perfil de compatibilidade e quem é sua alma gêmea.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 text-left">
            {[
              {
                icon: "♀",
                title: "Vênus natal",
                desc: "Calculamos a posição exata de Vênus com o mesmo motor do astro.com — Swiss Ephemeris, precisão de 0,001 grau.",
              },
              {
                icon: "◈",
                title: "Padrão de atração",
                desc: "Cruzamos sua posição de Vênus com seu perfil emocional (revelado no quiz) para identificar seu padrão único.",
              },
              {
                icon: "✦",
                title: "Perfil da alma gêmea",
                desc: "O mapa revela o perfil exato de quem é compatível com você: como ele pensa, como ele ama, como ele escolhe.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-bg-card border border-gold/10 rounded-sm p-5 space-y-3"
              >
                <span className="text-gold text-xl">{item.icon}</span>
                <p className="font-sans text-sm font-semibold text-text-primary">{item.title}</p>
                <p className="font-sans text-xs text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <GlowDivider />

      {/* ── DEPOIMENTOS ── */}
      <section className="relative z-10 px-6 py-20 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10 text-center"
        >
          <div className="space-y-2">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">O que dizem</p>
            <h2 className="font-display text-3xl text-text-primary">Antes de acreditar, leia isso.</h2>
          </div>

          <div className="space-y-4">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-bg-card border border-gold/10 rounded-sm p-5 text-left space-y-3"
              >
                <p className="font-sans text-sm text-text-secondary leading-relaxed italic">
                  "{t.text}"
                </p>
                <p className="font-sans text-xs text-gold">
                  {t.name}, {t.age} anos
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <GlowDivider />

      {/* ── FAQ ── */}
      <section className="relative z-10 px-6 py-20 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
          <div className="text-center space-y-2">
            <p className="font-sans text-xs text-gold uppercase tracking-widest">Dúvidas</p>
            <h2 className="font-display text-3xl text-text-primary">Perguntas frequentes</h2>
          </div>

          <div className="space-y-4">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="bg-bg-card border border-gold/10 rounded-sm p-5 space-y-2"
              >
                <p className="font-sans text-sm font-semibold text-text-primary">{item.q}</p>
                <p className="font-sans text-xs text-text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <GlowDivider />

      {/* ── CTA FINAL ── */}
      <section className="relative z-10 px-6 py-24 max-w-lg mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <p className="font-sans text-xs text-gold uppercase tracking-widest">♀ Mapa da Alma Gêmea</p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
            Você não estava errada.{" "}
            <span className="text-gradient-gold italic">
              Você só ainda não tinha o mapa.
            </span>
          </h2>
          <p className="font-sans text-sm text-text-secondary leading-relaxed">
            Descubra seu padrão de atração, o perfil da sua alma gêmea e o que ativar agora para que o próximo amor seja o último que você precisar buscar.
          </p>
          <Link href="/quiz">
            <Button variant="gold" size="lg">
              Começar meu mapa agora →
            </Button>
          </Link>
          <p className="font-sans text-xs text-text-muted">
            Gratuito para começar · Garantia de 7 dias
          </p>
        </motion.div>
      </section>
    </main>
  );
}
