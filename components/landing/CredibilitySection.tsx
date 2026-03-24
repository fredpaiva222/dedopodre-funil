import { GlowDivider } from "@/components/ui/GlowDivider";

export function CredibilitySection() {
  return (
    <section className="px-6 py-20 bg-bg-dark">
      <div className="max-w-2xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            Base do método
          </p>
          <h2 className="font-display text-3xl text-text-primary leading-tight">
            Isso não é mais um quiz de autoajuda
          </h2>
        </div>

        <div className="space-y-6 font-sans text-sm text-text-secondary leading-relaxed">
          <p>
            Esse método combina dois campos com base sólida que profissionais de psicologia relacional e astrologia psicológica já utilizam — separados — em consultas que custam entre{" "}
            <span className="text-text-primary font-semibold">R$ 300 e R$ 800 a sessão</span>.
          </p>
        </div>

        <div className="grid gap-5">
          <div className="flex gap-4 items-start p-5 bg-bg-card rounded-sm border border-bg-card">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold text-lg">
              ♀
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-sm font-bold text-text-primary">Astrologia Psicológica</h4>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                Praticada e estudada há décadas, documenta correlações entre posições planetárias e padrões de comportamento afetivo. Não é previsão de futuro — é leitura de predisposições.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-5 bg-bg-card rounded-sm border border-bg-card">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amethyst/10 border border-amethyst/30 flex items-center justify-center text-amethyst text-lg">
              ◎
            </div>
            <div className="space-y-1">
              <h4 className="font-sans text-sm font-bold text-text-primary">Teoria do Apego</h4>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                Desenvolvida por John Bowlby e expandida por pesquisadores como Mary Ainsworth e Amir Levine. O livro <em>Apegados</em> já foi traduzido para mais de 20 idiomas e vendeu mais de 1 milhão de cópias. É um dos modelos mais documentados para entender comportamentos relacionais em adultos.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="font-sans text-lg text-text-primary font-semibold">
            Mais de <span className="text-gold">12.400 mulheres</span> já fizeram a análise
          </p>
          <p className="font-sans text-sm text-text-muted">
            e reconheceram o padrão na primeira leitura.
          </p>
        </div>

        <GlowDivider />
      </div>
    </section>
  );
}
