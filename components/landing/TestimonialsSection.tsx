const testimonials = [
  {
    name: "Ana Paula",
    age: 34,
    text: "Fiz o quiz esperando uma coisa genérica. O resultado me descreveu de um jeito que nem minha terapeuta tinha conseguido. Específico, direto, sem rodeios. E o mais perturbador: tinha explicação para o padrão. Não era só 'você tem baixa autoestima'. Tinha uma lógica.",
  },
  {
    name: "Camila",
    age: 29,
    text: "Mostrei o resultado para a minha irmã e ela ficou com os olhos arregalados. Disse que era eu na tela. Mandei o link para ela na mesma hora.",
  },
  {
    name: "Juliana",
    age: 41,
    text: "Eu já sabia que tinha dedo podre. O que eu não sabia era POR QUÊ. Esse quiz respondeu isso. E quando a gente entende o por que, fica mais difícil ignorar.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-6 py-20 bg-bg-deep">
      <div className="max-w-2xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="font-sans text-xs text-gold uppercase tracking-[0.3em]">
            O que elas disseram
          </p>
          <h2 className="font-display text-3xl text-text-primary">
            &ldquo;Como esse quiz sabe disso?&rdquo;
          </h2>
        </div>

        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-bg-card border border-bg-card rounded-sm p-6 space-y-4"
            >
              {/* Estilo screenshot de mensagem */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amethyst/30 border border-amethyst/40 flex items-center justify-center font-bold text-amethyst-light font-sans">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-text-primary">{t.name}</p>
                  <p className="font-sans text-xs text-text-muted">{t.age} anos</p>
                </div>
              </div>
              <div className="bg-bg-dark rounded-sm rounded-tl-none p-4">
                <p className="font-sans text-sm text-text-secondary leading-relaxed">
                  {t.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
