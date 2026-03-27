// Tipos e descrições de Vênus — seguros para uso em componentes client
// O cálculo real fica em app/api/venus/route.ts (server-only)

export type VenusSign =
  | "Áries"
  | "Touro"
  | "Gêmeos"
  | "Câncer"
  | "Leão"
  | "Virgem"
  | "Libra"
  | "Escorpião"
  | "Sagitário"
  | "Capricórnio"
  | "Aquário"
  | "Peixes";

export const VENUS_SIGNS: VenusSign[] = [
  "Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem",
  "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes",
];

// Descrições do signo de Vênus para o produto Mapa da Alma Gêmea
// Tom: revelação positiva de padrão de atração, não diagnóstico de falha
export const venusSignDescriptions: Record<VenusSign, string> = {
  "Áries": "Vênus em Áries revela uma mulher que ama com coragem e intensidade. Você foi feita para um amor que sente como conquista e movimento. Sua alma gêmea é alguém que te desafia e te admira ao mesmo tempo.",
  "Touro": "Vênus em Touro revela uma mulher que ama com profundidade e lealdade raras. Você foi feita para um amor que é refúgio, presença e constância. Sua alma gêmea é alguém que constrói com você, não ao lado de você.",
  "Gêmeos": "Vênus em Gêmeos revela uma mulher que se apaixona pela mente antes do coração. Você foi feita para um amor que é também parceria intelectual. Sua alma gêmea é alguém que te faz pensar e rir ao mesmo tempo.",
  "Câncer": "Vênus em Câncer revela uma mulher com capacidade de amar que poucos compreendem. Você foi feita para um amor que é lar, proteção e intimidade real. Sua alma gêmea é alguém que recebe seu cuidado e o devolve com igual profundidade.",
  "Leão": "Vênus em Leão revela uma mulher feita para ser vista e escolhida sem hesitação. Você foi feita para um amor que te celebra. Sua alma gêmea é alguém que te escolhe publicamente e com orgulho, todos os dias.",
  "Virgem": "Vênus em Virgem revela uma mulher que demonstra amor através de atos concretos e atenção aos detalhes. Você foi feita para um amor que valoriza o que você faz. Sua alma gêmea é alguém que percebe e aprecia cada gesto seu.",
  "Libra": "Vênus em Libra revela uma mulher feita para conexão verdadeira e parceria equilibrada. Você foi feita para um amor que é também amizade e admiração mútua. Sua alma gêmea é alguém que te escolhe com consciência, não por impulso.",
  "Escorpião": "Vênus em Escorpião revela uma mulher que ama com uma profundidade que transforma. Você foi feita para um amor que não tem meio-termo. Sua alma gêmea é alguém que não tem medo da sua intensidade, alguém que mergulha com você.",
  "Sagitário": "Vênus em Sagitário revela uma mulher que ama com liberdade e expansão. Você foi feita para um amor que amplia o seu mundo. Sua alma gêmea é alguém que cresce com você e te convida a ser mais.",
  "Capricórnio": "Vênus em Capricórnio revela uma mulher que escolhe com cuidado e ama com comprometimento real. Você foi feita para um amor que é sólido e duradouro. Sua alma gêmea é alguém que leva você a sério desde o primeiro momento.",
  "Aquário": "Vênus em Aquário revela uma mulher que ama com liberdade e autenticidade. Você foi feita para um amor que respeita quem você é sem tentar te moldar. Sua alma gêmea é alguém que te ama exatamente como você é.",
  "Peixes": "Vênus em Peixes revela a mulher com o amor mais empático e transcendente do zodíaco. Você foi feita para um amor que sente como destino. Sua alma gêmea é alguém que reconhece sua alma antes mesmo de te conhecer completamente.",
};
