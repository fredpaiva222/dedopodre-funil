export type AnswerKey = "A" | "B" | "C" | "D";

export interface Answer {
  key: AnswerKey;
  text: string;
  score: number;
}

export interface SocialProofData {
  name: string;
  age: number;
  text: string;
}

export interface Question {
  id: number;
  phase: "neutral" | "recognition" | "mirror" | "final";
  text: string;
  type: "date" | "multiple";
  answers?: Answer[];
  socialProofAfter?: SocialProofData;
  strategicImageAfter?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    phase: "neutral",
    type: "date",
    text: "Para calcular a posição de Vênus no seu mapa, preciso saber quando você nasceu.",
  },
  {
    id: 2,
    phase: "neutral",
    type: "multiple",
    text: "Pensando nos seus últimos dois ou três relacionamentos — como a maioria deles terminou?",
    answers: [
      { key: "A", text: "Terminamos por incompatibilidade, sem muita dor dos dois lados.", score: 0 },
      { key: "B", text: "Eu terminei porque percebi que não estava me fazendo bem.", score: 1 },
      { key: "C", text: "O relacionamento foi acabando aos poucos e eu fui a última a aceitar.", score: 2 },
      { key: "D", text: "Terminou de um jeito que me pegou de surpresa ou que eu não consegui entender direito.", score: 3 },
    ],
  },
  {
    id: 3,
    phase: "recognition",
    type: "multiple",
    text: "Quando você se apaixona, que tipo de homem normalmente te chama mais atenção?",
    answers: [
      { key: "A", text: "Homem estável, carinhoso, que deixa claro o que quer.", score: 0 },
      { key: "B", text: "Homem confiante, um pouco misterioso, que não facilita.", score: 1 },
      { key: "C", text: "Homem intenso, que mistura momentos incríveis com momentos de distância.", score: 2 },
      { key: "D", text: "Homem que parece precisar de você de alguma forma, mesmo que não verbalize.", score: 3 },
    ],
    socialProofAfter: {
      name: "Rafaela",
      age: 31,
      text: "Quando li a opção C, senti um frio na barriga. Era exatamente o que eu sempre procurava sem admitir.",
    },
  },
  {
    id: 4,
    phase: "recognition",
    type: "multiple",
    text: "No começo de um relacionamento, como você costuma agir?",
    answers: [
      { key: "A", text: "Fico animada mas mantenho o ritmo — deixo as coisas se desenvolverem naturalmente.", score: 0 },
      { key: "B", text: "Fico animada e demonstro interesse, mas ainda preservo meu espaço.", score: 1 },
      { key: "C", text: "Fico muito animada e começo a organizar minha vida em torno da pessoa.", score: 2 },
      { key: "D", text: "Fico animada mas com ansiedade — fico lendo mensagem, analisando o que ele faz.", score: 3 },
    ],
  },
  {
    id: 5,
    phase: "recognition",
    type: "multiple",
    text: "Quando o homem que você gosta some por um tempo ou fica menos presente, o que acontece com você?",
    answers: [
      { key: "A", text: "Fico chateada mas respeito o espaço. Se sumir demais, passo à frente.", score: 0 },
      { key: "B", text: "Fico um pouco ansiosa mas consigo segurar. Mando uma mensagem e espero.", score: 1 },
      { key: "C", text: "Fico muito ansiosa, começo a criar hipóteses, analiso tudo que ele fez nos últimos dias.", score: 2 },
      { key: "D", text: "Fico obcecada, fico verificando o status dele, conto os dias desde a última mensagem.", score: 3 },
    ],
    strategicImageAfter: "woman-phone-night",
  },
  {
    id: 6,
    phase: "mirror",
    type: "multiple",
    text: "Se você olhar para os homens com quem se envolveu seriamente, eles têm algo em comum?",
    answers: [
      { key: "A", text: "Não muito. Foram bem diferentes entre si.", score: 0 },
      { key: "B", text: "Talvez uma característica ou outra, mas não é um padrão claro.", score: 1 },
      { key: "C", text: "Sim, alguns padrões claros — tipo de personalidade, jeito de tratar ou de terminar.", score: 2 },
      { key: "D", text: "Sim, e quando eu percebo isso fico perturbada porque parece que é sempre o mesmo homem com rostos diferentes.", score: 3 },
    ],
    socialProofAfter: {
      name: "Carla",
      age: 38,
      text: "Fiz uma lista dos homens que eu amei de verdade. Cinco homens diferentes, mesma história. Não dá pra ser coincidência.",
    },
  },
  {
    id: 7,
    phase: "mirror",
    type: "multiple",
    text: "Já aconteceu de você ter um relacionamento com um homem bom, estável e presente — e não sentir o mesmo tesão ou atração que sentia pelos outros?",
    answers: [
      { key: "A", text: "Não, nunca senti isso.", score: 0 },
      { key: "B", text: "Uma vez ou outra, mas não sei se era o relacionamento ou a pessoa específica.", score: 1 },
      { key: "C", text: "Sim, já aconteceu. Sabia que ele era bom pra mim mas faltava algo.", score: 2 },
      { key: "D", text: "Sim, e aí eu fui embora ou criei um distanciamento mesmo sabendo que ele era a escolha certa.", score: 3 },
    ],
  },
  {
    id: 8,
    phase: "mirror",
    type: "multiple",
    text: "Quando uma amiga te fala que o homem com quem você está envolvida não é bom pra você, o que normalmente acontece?",
    answers: [
      { key: "A", text: "Eu ouço, considero e, se fizer sentido, tomo uma decisão.", score: 0 },
      { key: "B", text: "Ouço, mas preciso de mais tempo pra processar e só mudo quando eu mesma percebo.", score: 1 },
      { key: "C", text: "Ouço, concordo em partes, mas continuo no relacionamento esperando o homem mudar.", score: 2 },
      { key: "D", text: "Já sei o que vão falar antes de falar, mas continuo assim mesmo porque sinto que é diferente dessa vez.", score: 3 },
    ],
    strategicImageAfter: "friends-serious-talk",
  },
  {
    id: 9,
    phase: "final",
    type: "multiple",
    text: "Qual dessas frases mais se parece com algo que você já pensou ou falou?",
    answers: [
      { key: "A", text: "\"Acho que ainda não encontrei a pessoa certa.\"", score: 0 },
      { key: "B", text: "\"Sempre me envolvo com homens que não estão prontos.\"", score: 1 },
      { key: "C", text: "\"Não entendo por que isso sempre acontece comigo.\"", score: 2 },
      { key: "D", text: "\"Eu sei que tenho dedo podre. Isso é um negócio meu mesmo.\"", score: 3 },
    ],
    socialProofAfter: {
      name: "Letícia",
      age: 27,
      text: "Quando vi essa pergunta, fiquei olhando para o D por uns 30 segundos. Porque é exatamente isso que eu falo quando conto pra alguém.",
    },
  },
  {
    id: 10,
    phase: "final",
    type: "multiple",
    text: "Se você descobrisse que o seu dedo podre não é azar nem fraqueza, mas um padrão específico com nome, causa e saída — o que você faria?",
    answers: [
      { key: "A", text: "Provavelmente não mudaria muita coisa. Cada relacionamento é diferente.", score: 0 },
      { key: "B", text: "Ficaria curiosa, mas não sei se mudaria algo na prática.", score: 1 },
      { key: "C", text: "Queria entender melhor. Se faz sentido, tentaria mudar.", score: 2 },
      { key: "D", text: "Queria saber agora. Já cansei de repetir o mesmo ciclo.", score: 3 },
    ],
  },
];
