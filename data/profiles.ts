export type ProfileId = "1A" | "1B" | "2A" | "2B" | "3A" | "3B" | "4A" | "4B";

export interface Profile {
  id: ProfileId;
  slug: string;
  name: string;
  scoreRange: [number, number];
  p7RequireCD: boolean;
  teaser: string;
  fullDescription: string;
  manType: string;
  whyCycleRepeats: string;
  firstStep: string;
}

export const profiles: Profile[] = [
  {
    id: "1A",
    slug: "padrao-oculto",
    name: "A que ainda não enxergou o padrão",
    scoreRange: [0, 7],
    p7RequireCD: true,
    teaser:
      "Você ainda está nos primeiros anos de reconhecimento. Seus relacionamentos não foram todos ruins — alguns foram genuinamente bons. O ciclo existe, mas não é forte o suficiente para ter criado uma crença fixada sobre si mesma.\n\nO perigo aqui não é o padrão já instalado. É o padrão que está se formando.",
    fullDescription:
      "Porque o Ímã do Cara Errado funciona como uma trilha: quanto mais vezes você passa pelo mesmo caminho, mais fácil fica percorrê-lo sem perceber. Você está num momento raro — ainda tem a clareza para ver o padrão antes que ele se torne automático.\n\nSua posição de Vênus revela que você busca conexão genuína, mas ainda confunde potencial com realidade. Você vê o que o homem poderia ser, não o que ele é hoje. E esse gap é onde o ciclo começa.",
    manType:
      "Homens imaturos emocionalmente — não necessariamente malvados, mas que não estão prontos para o que você precisa. O problema não é intensidade — é compatibilidade de momento.",
    whyCycleRepeats:
      "Você ainda confunde potencial com realidade. Você vê o que o homem poderia ser, não o que ele é hoje.",
    firstStep:
      "Antes de se envolver, faça uma pergunta simples: \"Esse homem está disponível para o que eu preciso agora?\" Não no futuro. Agora.",
  },
  {
    id: "1B",
    slug: "protege-demais",
    name: "A que se protege demais",
    scoreRange: [0, 7],
    p7RequireCD: false,
    teaser:
      "Você aprendeu cedo que se abrir demais dói. Então você criou um filtro — consciente ou não — que afasta homens muito presentes. Não é que você não queira amor. É que amor muito próximo ativa um alarme que você ainda não sabe explicar.\n\nO resultado prático é que você costuma se dar bem com homens que têm vida própria, são independentes.",
    fullDescription:
      "E que, na prática, não constroem intimidade de verdade. Você chama isso de ser independente também. Na verdade, é uma forma de manter o amor a uma distância segura.\n\nSeu Ímã do Cara Errado opera de forma diferente dos outros padrões: não é que você vai atrás do errado. É que você descarta o certo antes de ele chegar perto demais.",
    manType:
      "Homens independentes ao extremo, que valorizam espaço — e que não vão exigir de você o que você ainda não está pronta para dar.",
    whyCycleRepeats:
      "Você busca segurança na distância. Intimidade real parece arriscada.",
    firstStep:
      "Da próxima vez que um homem presente e cuidadoso aparecer, observe o impulso de recuar. Não precisa agir diferente ainda. Só observa.",
  },
  {
    id: "2A",
    slug: "salva-quem-nao-quer",
    name: "A que salva quem não quer ser salvo",
    scoreRange: [8, 15],
    p7RequireCD: true,
    teaser:
      "Você tem um talento incrível para enxergar o potencial nas pessoas. O problema é que você se apaixona pelo que o homem poderia ser — e fica nos relacionamentos tentando ajudá-lo a chegar lá.\n\nEnquanto isso, você vai se desgastando, esperando uma virada que nunca vem.",
    fullDescription:
      "E quando termina você sente que falhou — sendo que o problema nunca foi você. Seu Ímã do Cara Errado foi formado em um ambiente onde você aprendeu que amor é cuidar do outro acima de si mesma. Sentir que o outro precisa de você ativa a atração — não porque você seja ingênua, mas porque isso é o que parece amor para você.\n\nA posição de Vênus no seu mapa confirma esse padrão: você busca conexão através do cuidado. E homens que não precisam de cuidado parecem vazios.",
    manType:
      "Homens com potencial não realizado, que estão sempre \"passando por uma fase\", que precisam de apoio emocional, financeiro ou de direção. Homens que te fazem sentir necessária.",
    whyCycleRepeats:
      "Seu Ímã do Cara Errado foi formado em um ambiente onde você aprendeu que amor é cuidar do outro acima de si mesma.",
    firstStep:
      "Faça uma pergunta diferente logo no início: \"Esse homem está me tratando bem agora — não no potencial, não no futuro — agora?\"",
  },
  {
    id: "2B",
    slug: "espera-ser-escolhida",
    name: "A que espera ser escolhida",
    scoreRange: [8, 15],
    p7RequireCD: false,
    teaser:
      "Você gosta de ser cortejada. Você se sente mais confortável quando o homem toma a iniciativa, persiste e demonstra interesse. O problema é que essa dinâmica cria um filtro que te faz confundir insistência com amor.\n\nO homem que mais te atrai é aquele que parece ocupado, que te faz esperar um pouco, que não entrega fácil.",
    fullDescription:
      "Você chama isso de atração. Na prática, é ansiedade ativando o seu sistema de apego.\n\nSeu Ímã do Cara Errado opera através da lógica de conquista: você aprendeu que amor é algo que você tem que merecer, que conquistar, que provar que é digna de receber. Então homem fácil demais parece suspeito. Homem difícil parece desafiador — e você é boa em desafios.",
    manType:
      "Homens que controlam o ritmo do relacionamento, que dão e tiram atenção, que são imprevisíveis o suficiente para manter o sistema emocional dela em estado de alerta.",
    whyCycleRepeats:
      "Você aprendeu que amor é algo que você tem que merecer. Então homem fácil demais parece suspeito.",
    firstStep:
      "Comece a separar atração de ansiedade. Quando sentir aquele frio na barriga por causa de um homem, pergunte: \"Estou ansiosa ou estou atraída?\"",
  },
  {
    id: "3A",
    slug: "cria-proprio-abandono",
    name: "A que cria o próprio abandono",
    scoreRange: [16, 23],
    p7RequireCD: true,
    teaser:
      "Você odeia ser abandonada. Então, de forma completamente inconsciente, você aprende a se comportar de formas que acabam fazendo exatamente isso acontecer. Você cobra antes de ter razão para cobrar. Você afasta quando está com medo de ser afastada.\n\nVocê testa sem perceber que está testando.",
    fullDescription:
      "E quando o homem falha no teste, você tem a confirmação do que já esperava. Seu Ímã do Cara Errado foi construído em torno do medo do abandono. Então você inconscientemente escolhe situações que confirmam esse medo — porque o cérebro prefere o familiar ao desconhecido, mesmo que o familiar seja doloroso.\n\nSua posição de Vênus revela uma sensibilidade emocional profunda que, sem direção, se transforma em hipervigilância nos relacionamentos.",
    manType:
      "Homens com padrão evitativo — que se fecham quando a pressão aumenta. Exatamente o oposto do que você precisa, e exatamente o que confirma o que você mais teme.",
    whyCycleRepeats:
      "Seu Ímã do Cara Errado foi construído em torno do medo do abandono. Você inconscientemente escolhe situações que confirmam esse medo.",
    firstStep:
      "Identifique o momento em que você começa a testar o homem. Não julgue. Só observe. Esse é o ponto onde o ciclo começa a girar.",
  },
  {
    id: "3B",
    slug: "apaga-si-mesma",
    name: "A que apaga a si mesma por amor",
    scoreRange: [16, 23],
    p7RequireCD: false,
    teaser:
      "Você tem uma capacidade enorme de adaptação. Você aprende a gostar do que o outro gosta. Você abre mão de coisas suas para preservar o relacionamento. Você evita conflito. Você não diz quando está machucada porque não quer parecer difícil.\n\nE aos poucos você vai ficando menor, mais quieta, mais invisível.",
    fullDescription:
      "Até o homem não te ver mais de jeito nenhum. Seu Ímã do Cara Errado opera através de uma crença silenciosa: que amor exige que você se torne o que o outro precisa. Essa crença é invisível porque parece generosidade. Na prática, é autoapagamento.\n\nSua posição de Vênus revela uma capacidade genuína de conexão e empatia — que está sendo mal direcionada. Você está usando sua maior força para desaparecer.",
    manType:
      "Homens dominantes, centralizadores, que precisam ser o foco — e que, inconscientemente, se sentem bem com uma parceira que não disputa espaço.",
    whyCycleRepeats:
      "Você aprendeu que amor exige que você se torne o que o outro precisa. Essa crença é invisível porque parece generosidade.",
    firstStep:
      "Em qualquer conversa hoje, diga o que você realmente pensa — mesmo que seja diferente do que o outro pensa. Uma vez. Veja o que acontece.",
  },
  {
    id: "4A",
    slug: "viciada-intensidade",
    name: "A que é viciada na intensidade",
    scoreRange: [24, 30],
    p7RequireCD: true,
    teaser:
      "Você já sentiu um amor tão intenso que tudo ficou perto e longe ao mesmo tempo. Você sabe o que é aquele frio na barriga que não passa, aquela mistura de euforia e ansiedade que parece atração mas é quase dependência.\n\nVocê já tentou se relacionar com homens calmos e estáveis e sentiu que faltava algo.",
    fullDescription:
      "A verdade é que a intensidade que você confunde com amor é, na verdade, o seu sistema nervoso em modo de alerta. Não é amor que te faz sentir isso. É o perigo familiar que o seu corpo já aprendeu a chamar de amor.\n\nSeu Ímã do Cara Errado foi formado em um ambiente onde afeto era imprevisível — dado e tirado sem lógica aparente. Então estabilidade parece tédio. Caos parece paixão. Seu cérebro literalmente libera mais dopamina em relacionamentos instáveis porque aprendeu que é assim que amor funciona.",
    manType:
      "Homens com traços narcisistas ou com apego evitativo severo — que criam ciclos de aproximação e distância, que são intensos e depois somem.",
    whyCycleRepeats:
      "Seu cérebro literalmente libera mais dopamina em relacionamentos instáveis porque aprendeu que é assim que amor funciona.",
    firstStep:
      "Por 30 dias, não tome nenhuma decisão sobre relacionamento quando estiver no pico da euforia. Decida quando estiver calma. Euforia não é sinal verde. É sinal de que o padrão foi ativado.",
  },
  {
    id: "4B",
    slug: "nao-merece-o-que-pede",
    name: "A que acredita que não merece o que pede",
    scoreRange: [24, 30],
    p7RequireCD: false,
    teaser:
      "Você sabe exatamente o tipo de relacionamento que quer. Você consegue descrever com detalhes. Mas na hora H, você aceita muito menos — e fica.\n\nVocê faz de conta que está bem com o que o homem oferece. Você diminui o que você quer para parecer razoável.",
    fullDescription:
      "Você tem medo de pedir muito e assustar o homem que gosta. O resultado é que você constantemente está em relacionamentos que ficam abaixo do que você precisa.\n\nNo fundo, você carrega a crença de que amar demais ou pedir demais vai afastar as pessoas. Então você se torna menor do que é para caber no espaço que o outro abre. Seu Ímã do Cara Errado não atrai o homem errado — ele te faz aceitar menos do que você merece do homem que aparecer.",
    manType:
      "Homens que entregam o mínimo — não porque são necessariamente ruins, mas porque você nunca demonstrou que precisa de mais. Você treinou eles a te dar pouco.",
    whyCycleRepeats:
      "Você carrega a crença de que amar demais ou pedir demais vai afastar as pessoas.",
    firstStep:
      "Escreva em um papel o que você realmente quer em um relacionamento. Sem filtro, sem \"mas isso é muito\". Depois leia o que está escrito. Esse é o padrão que você está evitando pedir.",
  },
];

export function getProfileBySlug(slug: string): Profile | undefined {
  return profiles.find((p) => p.slug === slug);
}
