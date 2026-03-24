import { GlowDivider } from "@/components/ui/GlowDivider";

export function MechanismSection() {
  return (
    <section className="relative px-6 py-20 bg-bg-dark">
      <div className="max-w-2xl mx-auto space-y-10">
        <GlowDivider />

        <div className="text-center space-y-4">
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            O que ninguém te contou
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-text-primary leading-tight">
            Por que você continua atraindo o mesmo tipo de homem — mesmo quando jura que mudou?
          </h2>
        </div>

        <div className="space-y-6 font-sans text-base text-text-secondary leading-relaxed">
          <p>
            Todo mundo já falou que você tem dedo podre. As suas amigas. A sua mãe. Você mesma, na maioria das vezes.
          </p>
          <p>
            Mas dedo podre não é uma resposta. É uma descrição. E a descrição não te ajuda a mudar nada.
          </p>
          <p className="text-text-primary font-semibold">
            A pergunta real é: por quê?
          </p>
          <p>
            Por que sempre o mesmo tipo? Por que mesmo quando você "sabe" que aquele homem não presta, alguma coisa em você continua se sentindo atraída?
          </p>
        </div>

        <div className="gold-line" />

        <div className="space-y-8">
          <h3 className="font-display text-2xl text-gold text-center">
            A resposta está em dois lugares que quase ninguém olha ao mesmo tempo
          </h3>

          <div className="grid gap-6">
            {/* Card 1 */}
            <div className="bg-bg-card border border-bg-card rounded-sm p-6 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="font-sans text-xs text-gold uppercase tracking-widest">Componente 1</p>
              <h4 className="font-display text-xl text-text-primary">
                A posição de Vênus no dia em que você nasceu
              </h4>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                Vênus é o planeta que rege o que a gente deseja, o que considera bonito, o tipo de amor que a gente busca — muitas vezes sem perceber. A posição de Vênus no seu mapa astral diz muito sobre o padrão de atração que opera em você <em>antes mesmo de você pensar "gostei desse"</em>.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-bg-card border border-bg-card rounded-sm p-6 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-amethyst/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <p className="font-sans text-xs text-amethyst uppercase tracking-widest">Componente 2</p>
              <h4 className="font-display text-xl text-text-primary">
                O seu estilo de apego emocional
              </h4>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                Desde pequena, você aprendeu uma forma de receber — ou não receber — afeto. Esse aprendizado criou um modo automático de se relacionar que ativa quando você menos espera e explica por que certos comportamentos de certos homens te fisgam de um jeito que é quase impossível resistir.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-bg-deep border border-gold/20 rounded-sm p-6 text-center space-y-4">
          <p className="font-sans text-xs text-gold uppercase tracking-widest">O resultado</p>
          <p className="font-display text-xl md:text-2xl text-text-primary leading-snug">
            Quando esses dois fatores se combinam, eles revelam o seu{" "}
            <span className="text-gradient-gold font-bold">Ímã do Cara Errado</span>{" "}
            — o padrão específico que explica por que você não está "escolhendo errado". Você está seguindo um programa que nunca te foi mostrado.
          </p>
        </div>

        <GlowDivider />
      </div>
    </section>
  );
}
