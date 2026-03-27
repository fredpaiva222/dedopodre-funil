export type AnswerKey = "A" | "B" | "C" | "D";

export interface Answer {
  key: AnswerKey;
  text: string;
}

export interface SocialProofData {
  name: string;
  age: number;
  text: string;
}

export interface Question {
  id: number;
  phase: "entry" | "wound" | "pattern" | "desire" | "shadow" | "mirror" | "fear";
  text: string;
  type: "multiple";
  answers: Answer[];
  socialProofAfter?: SocialProofData;
}

export const questions: Question[] = [
  {
    id: 1,
    phase: "wound",
    text: "Pensa num relacionamento que terminou e que você ainda carrega. O que dói mais quando você pensa nele hoje?",
    type: "multiple",
    answers: [
      { key: "A", text: "A sensação de que eu dei tudo e não foi suficiente" },
      { key: "B", text: "Não entender até hoje o que realmente aconteceu" },
      { key: "C", text: "Saber que eu vi os sinais e fiquei mesmo assim" },
      { key: "D", text: "A pergunta que nunca saiu da minha cabeça: \"e se eu tivesse feito diferente?\"" },
    ],
  },
  {
    id: 2,
    phase: "pattern",
    text: "Quando alguém que você gosta começa a se distanciar, antes mesmo de confirmar que algo mudou, qual é sua reação mais honesta?",
    type: "multiple",
    answers: [
      { key: "A", text: "Fico quieta e espero, mesmo que por dentro esteja em colapso" },
      { key: "B", text: "Começo a procurar o que eu fiz de errado" },
      { key: "C", text: "Aumento a atenção, tento me tornar mais presente, mais necessária" },
      { key: "D", text: "Me afasto primeiro. Prefiro controlar minha saída do que ser abandonada" },
    ],
    socialProofAfter: {
      name: "Fernanda",
      age: 31,
      text: "Quando vi essa pergunta, tive que parar. Eu faço isso toda vez e nunca tinha colocado em palavras.",
    },
  },
  {
    id: 3,
    phase: "shadow",
    text: "Existe uma versão de você que aparece só quando você se sente realmente amada, mais leve, mais ela mesma, menos armada. Com que frequência essa versão aparece nos seus relacionamentos?",
    type: "multiple",
    answers: [
      { key: "A", text: "Raramente. Preciso mostrar que estou bem antes de me abrir" },
      { key: "B", text: "No começo sim, mas com o tempo acabo me fechando de volta" },
      { key: "C", text: "Ela aparece, mas eu a afasto. Tenho medo do que acontece quando me permito ser vista assim" },
      { key: "D", text: "Quase nunca. Não sei se já confiei em alguém o suficiente para isso" },
    ],
  },
  {
    id: 4,
    phase: "desire",
    text: "Quando você imagina um relacionamento verdadeiro, não o conto de fadas, mas o amor real do dia a dia, o que você mais deseja sentir?",
    type: "multiple",
    answers: [
      { key: "A", text: "Que sou escolhida todos os dias, mesmo quando não estou no meu melhor" },
      { key: "B", text: "Que posso ser completamente honesta sem medo de afastar" },
      { key: "C", text: "Que existe alguém que me entende sem que eu precise explicar tudo" },
      { key: "D", text: "Que minha presença faz diferença na vida dele, que eu importo de verdade" },
    ],
    socialProofAfter: {
      name: "Camila",
      age: 27,
      text: "Chorei lendo as opções. Eu nunca soube nomear o que queria. Agora sei.",
    },
  },
  {
    id: 5,
    phase: "shadow",
    text: "Tem algo que você sente mas raramente fala, uma forma de amar que parece intensa demais, estranha demais, que as pessoas ao redor não entendem. Qual dessas mais se aproxima?",
    type: "multiple",
    answers: [
      { key: "A", text: "Eu amo com uma profundidade que assusta as pessoas, e me assusta também" },
      { key: "B", text: "Consigo sentir quando algo vai mudar antes de acontecer, e fico em silêncio com isso" },
      { key: "C", text: "Quando me apego, me apego de verdade. Não consigo amar pela metade" },
      { key: "D", text: "Me importo tanto que às vezes perco a mim mesma para não perder o outro" },
    ],
  },
  {
    id: 6,
    phase: "mirror",
    text: "Pensa no último homem por quem você se apaixonou de verdade. Sem romantizar, o que você via nele que, lá no fundo, te dizia que ia ser difícil?",
    type: "multiple",
    answers: [
      { key: "A", text: "Que ele não estava pronto para o tipo de amor que eu tenho para dar" },
      { key: "B", text: "Que ele me via, mas não completamente, só a parte que era conveniente" },
      { key: "C", text: "Que eu era mais investida do que ele, e sabia disso desde o início" },
      { key: "D", text: "Que eu estava repetindo um padrão, mas entrei mesmo assim, como se não pudesse evitar" },
    ],
    socialProofAfter: {
      name: "Juliana",
      age: 34,
      text: "Essa pergunta me pegou desprevenida. Eu sabia. Desde o começo eu sabia.",
    },
  },
  {
    id: 7,
    phase: "fear",
    text: "Quando você está sozinha e honesta consigo mesma, o que você mais tem medo que seja verdade sobre o amor na sua vida?",
    type: "multiple",
    answers: [
      { key: "A", text: "Que eu já errei minha chance e não vou encontrar mais" },
      { key: "B", text: "Que algo em mim afasta as pessoas antes que elas cheguem perto o suficiente" },
      { key: "C", text: "Que eu nunca vou ser amada da forma que preciso, que esse amor não existe para mim" },
      { key: "D", text: "Que eu já encontrei, mas não estava pronta, e agora é tarde" },
    ],
  },
  {
    id: 8,
    phase: "pattern",
    text: "Como você se relaciona com a ideia de pedir o que precisa num relacionamento?",
    type: "multiple",
    answers: [
      { key: "A", text: "Raramente peço, espero que a pessoa perceba por conta própria" },
      { key: "B", text: "Peço, mas depois fico me sentindo culpada ou exagerada" },
      { key: "C", text: "Aprendi a não pedir. Já me decepcionei vezes demais quando pedi" },
      { key: "D", text: "Peço, mas na hora diminuo o pedido, nunca peço o que realmente quero" },
    ],
  },
  {
    id: 9,
    phase: "desire",
    text: "Existe alguém cujo relacionamento te faz pensar \"é isso que eu quero\". O que você mais deseja nessa conexão?",
    type: "multiple",
    answers: [
      { key: "A", text: "A forma como ele a escolhe publicamente, sem hesitar, sem deixar dúvidas" },
      { key: "B", text: "A leveza, eles erram, mas tem um fundamento que não quebra" },
      { key: "C", text: "A intimidade real, parece que se conhecem de verdade, sem máscaras" },
      { key: "D", text: "O fato de ela ser amada do jeito que é, sem precisar se adaptar" },
    ],
    socialProofAfter: {
      name: "Mariana",
      age: 29,
      text: "Tenho uma amiga assim. Faz anos que eu olho pra ela e penso: quero isso. Agora entendo o que faltava em mim.",
    },
  },
  {
    id: 10,
    phase: "mirror",
    text: "Se sua alma gêmea chegasse hoje, a conexão que você sempre soube que era possível, qual seria seu maior obstáculo para recebê-la?",
    type: "multiple",
    answers: [
      { key: "A", text: "Não acreditar que mereço esse tipo de amor" },
      { key: "B", text: "Não saber reconhecê-la, confundo intensidade com compatibilidade" },
      { key: "C", text: "O medo de me abrir de novo depois de tudo que já passei" },
      { key: "D", text: "Uma voz que me diz que isso só acontece para as outras, nunca para mim" },
    ],
  },
];
