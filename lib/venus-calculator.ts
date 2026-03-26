// Tabela de posições de Vênus por data de nascimento
// Vênus muda de signo aproximadamente a cada 23-30 dias
// Cobertura: 1975-2005 (público 21-51 anos em 2026)

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

// Cada entrada: [ano, mês, dia, signo] — Vênus entra nesse signo nessa data
const VENUS_TABLE: [number, number, number, VenusSign][] = [
  // 1975
  [1975, 1, 7, "Aquário"], [1975, 2, 4, "Peixes"], [1975, 3, 4, "Áries"],
  [1975, 3, 28, "Touro"], [1975, 4, 23, "Gêmeos"], [1975, 5, 18, "Câncer"],
  [1975, 6, 11, "Leão"], [1975, 7, 9, "Virgem"], [1975, 8, 6, "Libra"],
  [1975, 9, 2, "Escorpião"], [1975, 10, 4, "Sagitário"], [1975, 11, 9, "Escorpião"],
  [1975, 12, 7, "Sagitário"],
  // 1976
  [1976, 1, 26, "Capricórnio"], [1976, 2, 19, "Aquário"], [1976, 3, 15, "Peixes"],
  [1976, 4, 8, "Áries"], [1976, 5, 2, "Touro"], [1976, 5, 26, "Gêmeos"],
  [1976, 6, 20, "Câncer"], [1976, 7, 14, "Leão"], [1976, 8, 8, "Virgem"],
  [1976, 9, 1, "Libra"], [1976, 9, 26, "Escorpião"], [1976, 10, 20, "Sagitário"],
  [1976, 11, 14, "Capricórnio"], [1976, 12, 9, "Aquário"],
  // 1977
  [1977, 1, 4, "Peixes"], [1977, 2, 2, "Áries"], [1977, 6, 6, "Touro"],
  [1977, 7, 6, "Gêmeos"], [1977, 8, 2, "Câncer"], [1977, 8, 28, "Leão"],
  [1977, 9, 22, "Virgem"], [1977, 10, 17, "Libra"], [1977, 11, 10, "Escorpião"],
  [1977, 12, 4, "Sagitário"], [1977, 12, 27, "Capricórnio"],
  // 1978
  [1978, 1, 20, "Aquário"], [1978, 2, 13, "Peixes"], [1978, 3, 9, "Áries"],
  [1978, 4, 2, "Touro"], [1978, 4, 27, "Gêmeos"], [1978, 5, 22, "Câncer"],
  [1978, 6, 16, "Leão"], [1978, 7, 12, "Virgem"], [1978, 8, 9, "Libra"],
  [1978, 9, 7, "Escorpião"], [1978, 10, 4, "Sagitário"], [1978, 12, 7, "Capricórnio"],
  // 1979
  [1979, 1, 7, "Aquário"], [1979, 2, 5, "Peixes"], [1979, 3, 3, "Áries"],
  [1979, 3, 29, "Touro"], [1979, 4, 23, "Gêmeos"], [1979, 5, 18, "Câncer"],
  [1979, 6, 11, "Leão"], [1979, 7, 8, "Virgem"], [1979, 8, 3, "Libra"],
  [1979, 9, 1, "Escorpião"], [1979, 10, 1, "Sagitário"], [1979, 11, 9, "Escorpião"],
  [1979, 12, 5, "Sagitário"],
  // 1980
  [1980, 1, 16, "Capricórnio"], [1980, 2, 9, "Aquário"], [1980, 3, 6, "Peixes"],
  [1980, 3, 30, "Áries"], [1980, 4, 24, "Touro"], [1980, 5, 18, "Gêmeos"],
  [1980, 6, 11, "Câncer"], [1980, 7, 5, "Leão"], [1980, 7, 30, "Virgem"],
  [1980, 8, 24, "Libra"], [1980, 9, 17, "Escorpião"], [1980, 10, 12, "Sagitário"],
  [1980, 11, 5, "Capricórnio"], [1980, 11, 30, "Aquário"], [1980, 12, 24, "Peixes"],
  // 1981
  [1981, 1, 23, "Áries"], [1981, 6, 5, "Touro"], [1981, 7, 6, "Gêmeos"],
  [1981, 8, 1, "Câncer"], [1981, 8, 26, "Leão"], [1981, 9, 20, "Virgem"],
  [1981, 10, 14, "Libra"], [1981, 11, 7, "Escorpião"], [1981, 12, 1, "Sagitário"],
  [1981, 12, 25, "Capricórnio"],
  // 1982
  [1982, 1, 18, "Aquário"], [1982, 2, 11, "Peixes"], [1982, 3, 7, "Áries"],
  [1982, 3, 31, "Touro"], [1982, 4, 25, "Gêmeos"], [1982, 5, 21, "Câncer"],
  [1982, 6, 15, "Leão"], [1982, 7, 10, "Virgem"], [1982, 8, 7, "Libra"],
  [1982, 9, 7, "Escorpião"], [1982, 10, 6, "Sagitário"], [1982, 12, 9, "Capricórnio"],
  // 1983
  [1983, 1, 8, "Aquário"], [1983, 2, 2, "Peixes"], [1983, 2, 26, "Áries"],
  [1983, 3, 22, "Touro"], [1983, 4, 16, "Gêmeos"], [1983, 5, 10, "Câncer"],
  [1983, 6, 6, "Leão"], [1983, 7, 10, "Virgem"], [1983, 8, 27, "Libra"],
  [1983, 10, 5, "Escorpião"], [1983, 11, 9, "Sagitário"], [1983, 12, 6, "Capricórnio"],
  // 1984
  [1984, 1, 25, "Aquário"], [1984, 2, 19, "Peixes"], [1984, 3, 14, "Áries"],
  [1984, 4, 7, "Touro"], [1984, 5, 2, "Gêmeos"], [1984, 5, 26, "Câncer"],
  [1984, 6, 20, "Leão"], [1984, 7, 14, "Virgem"], [1984, 8, 7, "Libra"],
  [1984, 9, 1, "Escorpião"], [1984, 9, 25, "Sagitário"], [1984, 10, 20, "Capricórnio"],
  [1984, 11, 13, "Aquário"], [1984, 12, 9, "Peixes"],
  // 1985
  [1985, 1, 4, "Áries"], [1985, 2, 2, "Peixes"], [1985, 6, 6, "Touro"],
  [1985, 7, 6, "Gêmeos"], [1985, 8, 1, "Câncer"], [1985, 8, 27, "Leão"],
  [1985, 9, 21, "Virgem"], [1985, 10, 15, "Libra"], [1985, 11, 8, "Escorpião"],
  [1985, 12, 2, "Sagitário"], [1985, 12, 26, "Capricórnio"],
  // 1986
  [1986, 1, 19, "Aquário"], [1986, 2, 12, "Peixes"], [1986, 3, 8, "Áries"],
  [1986, 4, 1, "Touro"], [1986, 4, 26, "Gêmeos"], [1986, 5, 21, "Câncer"],
  [1986, 6, 15, "Leão"], [1986, 7, 11, "Virgem"], [1986, 8, 7, "Libra"],
  [1986, 9, 7, "Escorpião"], [1986, 10, 7, "Sagitário"], [1986, 12, 10, "Capricórnio"],
  // 1987
  [1987, 1, 8, "Aquário"], [1987, 2, 2, "Peixes"], [1987, 2, 27, "Áries"],
  [1987, 3, 23, "Touro"], [1987, 4, 17, "Gêmeos"], [1987, 5, 11, "Câncer"],
  [1987, 6, 6, "Leão"], [1987, 7, 5, "Virgem"], [1987, 8, 14, "Libra"],
  [1987, 9, 1, "Virgem"], [1987, 10, 1, "Libra"], [1987, 11, 9, "Escorpião"],
  [1987, 12, 5, "Sagitário"], [1987, 12, 29, "Capricórnio"],
  // 1988
  [1988, 1, 22, "Aquário"], [1988, 2, 16, "Peixes"], [1988, 3, 11, "Áries"],
  [1988, 4, 4, "Touro"], [1988, 4, 28, "Gêmeos"], [1988, 5, 22, "Câncer"],
  [1988, 6, 16, "Leão"], [1988, 7, 11, "Virgem"], [1988, 8, 6, "Libra"],
  [1988, 8, 30, "Escorpião"], [1988, 9, 24, "Sagitário"], [1988, 10, 19, "Capricórnio"],
  [1988, 11, 12, "Aquário"], [1988, 12, 7, "Peixes"],
  // 1989
  [1989, 1, 3, "Áries"], [1989, 5, 21, "Touro"], [1989, 7, 13, "Gêmeos"],
  [1989, 8, 7, "Câncer"], [1989, 9, 1, "Leão"], [1989, 9, 26, "Virgem"],
  [1989, 10, 20, "Libra"], [1989, 11, 13, "Escorpião"], [1989, 12, 7, "Sagitário"],
  [1989, 12, 31, "Capricórnio"],
  // 1990
  [1990, 1, 24, "Aquário"], [1990, 2, 17, "Peixes"], [1990, 3, 13, "Áries"],
  [1990, 4, 6, "Touro"], [1990, 4, 30, "Gêmeos"], [1990, 5, 24, "Câncer"],
  [1990, 6, 18, "Leão"], [1990, 7, 13, "Virgem"], [1990, 8, 8, "Libra"],
  [1990, 9, 6, "Escorpião"], [1990, 10, 8, "Sagitário"], [1990, 12, 13, "Capricórnio"],
  // 1991
  [1991, 1, 11, "Aquário"], [1991, 2, 5, "Peixes"], [1991, 3, 1, "Áries"],
  [1991, 3, 26, "Touro"], [1991, 4, 20, "Gêmeos"], [1991, 5, 14, "Câncer"],
  [1991, 6, 7, "Leão"], [1991, 7, 1, "Virgem"], [1991, 7, 26, "Libra"],
  [1991, 8, 21, "Escorpião"], [1991, 9, 16, "Sagitário"], [1991, 10, 13, "Capricórnio"],
  [1991, 11, 9, "Aquário"], [1991, 12, 6, "Peixes"],
  // 1992
  [1992, 1, 25, "Áries"], [1992, 6, 18, "Touro"], [1992, 8, 6, "Gêmeos"],
  [1992, 9, 1, "Câncer"], [1992, 9, 27, "Leão"], [1992, 10, 22, "Virgem"],
  [1992, 11, 15, "Libra"], [1992, 12, 9, "Escorpião"],
  // 1993
  [1993, 1, 3, "Sagitário"], [1993, 1, 27, "Capricórnio"], [1993, 2, 20, "Aquário"],
  [1993, 3, 16, "Peixes"], [1993, 4, 9, "Áries"], [1993, 5, 3, "Touro"],
  [1993, 5, 28, "Gêmeos"], [1993, 6, 21, "Câncer"], [1993, 7, 15, "Leão"],
  [1993, 8, 9, "Virgem"], [1993, 9, 2, "Libra"], [1993, 9, 27, "Escorpião"],
  [1993, 10, 21, "Sagitário"], [1993, 11, 15, "Capricórnio"], [1993, 12, 10, "Aquário"],
  // 1994
  [1994, 1, 6, "Peixes"], [1994, 2, 12, "Áries"], [1994, 3, 15, "Peixes"],
  [1994, 7, 16, "Áries"], [1994, 8, 7, "Touro"], [1994, 9, 7, "Gêmeos"],
  [1994, 10, 2, "Câncer"], [1994, 10, 29, "Leão"], [1994, 11, 23, "Virgem"],
  [1994, 12, 18, "Libra"],
  // 1995
  [1995, 1, 13, "Escorpião"], [1995, 2, 10, "Sagitário"], [1995, 3, 10, "Capricórnio"],
  [1995, 4, 6, "Aquário"], [1995, 5, 3, "Peixes"], [1995, 5, 30, "Áries"],
  [1995, 6, 25, "Touro"], [1995, 7, 21, "Gêmeos"], [1995, 8, 15, "Câncer"],
  [1995, 9, 9, "Leão"], [1995, 10, 4, "Virgem"], [1995, 10, 28, "Libra"],
  [1995, 11, 22, "Escorpião"], [1995, 12, 16, "Sagitário"],
  // 1996
  [1996, 1, 9, "Capricórnio"], [1996, 2, 2, "Aquário"], [1996, 2, 27, "Peixes"],
  [1996, 3, 22, "Áries"], [1996, 4, 15, "Touro"], [1996, 5, 10, "Gêmeos"],
  [1996, 6, 3, "Câncer"], [1996, 6, 28, "Leão"], [1996, 7, 23, "Virgem"],
  [1996, 8, 17, "Libra"], [1996, 9, 12, "Escorpião"], [1996, 10, 8, "Sagitário"],
  [1996, 11, 5, "Capricórnio"], [1996, 12, 12, "Aquário"],
  // 1997
  [1997, 1, 9, "Capricórnio"], [1997, 3, 8, "Aquário"], [1997, 4, 6, "Peixes"],
  [1997, 5, 4, "Áries"], [1997, 5, 30, "Touro"], [1997, 6, 25, "Gêmeos"],
  [1997, 7, 20, "Câncer"], [1997, 8, 14, "Leão"], [1997, 9, 8, "Virgem"],
  [1997, 10, 2, "Libra"], [1997, 10, 27, "Escorpião"], [1997, 11, 20, "Sagitário"],
  [1997, 12, 14, "Capricórnio"],
  // 1998
  [1998, 1, 7, "Aquário"], [1998, 1, 31, "Peixes"], [1998, 2, 24, "Áries"],
  [1998, 3, 20, "Touro"], [1998, 4, 13, "Gêmeos"], [1998, 5, 8, "Câncer"],
  [1998, 6, 2, "Leão"], [1998, 6, 29, "Virgem"], [1998, 7, 24, "Libra"],
  [1998, 8, 20, "Escorpião"], [1998, 9, 19, "Sagitário"], [1998, 10, 25, "Escorpião"],
  [1998, 12, 11, "Sagitário"],
  // 1999
  [1999, 1, 5, "Capricórnio"], [1999, 1, 29, "Aquário"], [1999, 2, 22, "Peixes"],
  [1999, 3, 18, "Áries"], [1999, 4, 12, "Touro"], [1999, 5, 7, "Gêmeos"],
  [1999, 6, 1, "Câncer"], [1999, 6, 26, "Leão"], [1999, 7, 21, "Virgem"],
  [1999, 8, 15, "Libra"], [1999, 9, 10, "Escorpião"], [1999, 10, 7, "Sagitário"],
  [1999, 11, 5, "Capricórnio"], [1999, 12, 15, "Aquário"],
  // 2000
  [2000, 1, 24, "Capricórnio"], [2000, 3, 2, "Aquário"], [2000, 4, 6, "Peixes"],
  [2000, 5, 5, "Áries"], [2000, 6, 1, "Touro"], [2000, 6, 26, "Gêmeos"],
  [2000, 7, 21, "Câncer"], [2000, 8, 14, "Leão"], [2000, 9, 7, "Virgem"],
  [2000, 10, 1, "Libra"], [2000, 10, 25, "Escorpião"], [2000, 11, 18, "Sagitário"],
  [2000, 12, 12, "Capricórnio"],
  // 2001
  [2001, 1, 5, "Aquário"], [2001, 1, 29, "Peixes"], [2001, 2, 22, "Áries"],
  [2001, 3, 18, "Touro"], [2001, 4, 12, "Gêmeos"], [2001, 5, 7, "Câncer"],
  [2001, 6, 2, "Leão"], [2001, 6, 29, "Virgem"], [2001, 7, 25, "Libra"],
  [2001, 8, 21, "Escorpião"], [2001, 9, 15, "Sagitário"], [2001, 10, 10, "Escorpião"],
  [2001, 11, 16, "Sagitário"],
  // 2002
  [2002, 1, 2, "Capricórnio"], [2002, 1, 27, "Aquário"], [2002, 2, 20, "Peixes"],
  [2002, 3, 16, "Áries"], [2002, 4, 9, "Touro"], [2002, 5, 4, "Gêmeos"],
  [2002, 5, 29, "Câncer"], [2002, 6, 23, "Leão"], [2002, 7, 18, "Virgem"],
  [2002, 8, 12, "Libra"], [2002, 9, 7, "Escorpião"], [2002, 10, 4, "Sagitário"],
  [2002, 10, 31, "Capricórnio"], [2002, 11, 27, "Aquário"], [2002, 12, 24, "Peixes"],
  // 2003
  [2003, 1, 27, "Áries"], [2003, 6, 17, "Touro"], [2003, 8, 8, "Gêmeos"],
  [2003, 9, 3, "Câncer"], [2003, 9, 28, "Leão"], [2003, 10, 23, "Virgem"],
  [2003, 11, 16, "Libra"], [2003, 12, 10, "Escorpião"],
  // 2004
  [2004, 1, 3, "Sagitário"], [2004, 1, 27, "Capricórnio"], [2004, 2, 20, "Aquário"],
  [2004, 3, 15, "Peixes"], [2004, 4, 8, "Áries"], [2004, 5, 3, "Touro"],
  [2004, 5, 28, "Gêmeos"], [2004, 6, 21, "Câncer"], [2004, 7, 16, "Leão"],
  [2004, 8, 10, "Virgem"], [2004, 9, 3, "Libra"], [2004, 9, 28, "Escorpião"],
  [2004, 10, 22, "Sagitário"], [2004, 11, 16, "Capricórnio"], [2004, 12, 11, "Aquário"],
  // 2005
  [2005, 1, 9, "Peixes"], [2005, 2, 16, "Áries"], [2005, 3, 9, "Peixes"],
  [2005, 6, 3, "Áries"], [2005, 7, 23, "Touro"], [2005, 8, 19, "Gêmeos"],
  [2005, 9, 11, "Câncer"], [2005, 10, 8, "Leão"], [2005, 11, 5, "Virgem"],
  [2005, 12, 2, "Libra"], [2005, 12, 30, "Escorpião"],
];

export function calculateVenusSign(birthDateStr: string): VenusSign {
  // birthDateStr formato: DD/MM/YYYY
  const parts = birthDateStr.split("/");
  if (parts.length !== 3) return "Libra"; // fallback

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) return "Libra";

  const birthDate = new Date(year, month - 1, day);

  // Percorre toda a tabela (em ordem cronológica) e pega a última entrada
  // com data <= data de nascimento. Isso corrige o bug anterior que filtrava
  // apenas o ano exato, retornando resultado errado para jan/fev quando a
  // primeira entrada de Vênus daquele ano cai depois do dia de nascimento.
  let sign: VenusSign | null = null;

  for (const [y, m, d, s] of VENUS_TABLE) {
    const entryDate = new Date(y, m - 1, d);
    if (entryDate > birthDate) break;
    sign = s;
  }

  // Fallback se data anterior à tabela (antes de 1975)
  if (sign === null) return getVenusByMonth(month);

  return sign;
}

function getVenusByMonth(month: number): VenusSign {
  const map: Record<number, VenusSign> = {
    1: "Capricórnio", 2: "Aquário", 3: "Peixes", 4: "Áries",
    5: "Touro", 6: "Gêmeos", 7: "Câncer", 8: "Leão",
    9: "Virgem", 10: "Libra", 11: "Escorpião", 12: "Sagitário",
  };
  return map[month] || "Libra";
}

export const venusSignDescriptions: Record<VenusSign, string> = {
  "Áries": "Vênus em Áries traz uma busca por intensidade e conquista. Você se sente mais viva quando está perseguindo ou sendo perseguida.",
  "Touro": "Vênus em Touro busca segurança e lealdade acima de tudo. Você precisa sentir que pode contar — e quando não pode, o vínculo se desgasta lentamente.",
  "Gêmeos": "Vênus em Gêmeos quer conexão mental antes de emocional. Você se apaixona pela conversa, pela inteligência — e se entedia quando a profundidade some.",
  "Câncer": "Vênus em Câncer é profundamente emocional e busca cuidado recíproco. Você ama com tudo — e isso te deixa vulnerável aos que não sabem receber isso.",
  "Leão": "Vênus em Leão precisa ser vista, admirada e escolhida de forma clara. Você não tolera ambiguidade — mas às vezes a intensidade te confunde.",
  "Virgem": "Vênus em Virgem demonstra amor através de atos e cuidados práticos. Você analisa antes de se abrir — e esse filtro às vezes deixa de fora quem seria bom.",
  "Libra": "Vênus em Libra busca equilíbrio e harmonia — às vezes evitando o conflito necessário para preservar a paz aparente.",
  "Escorpião": "Vênus em Escorpião quer profundidade total ou nada. Você não sabe amar pela metade — e isso atrai relações intensas que podem consumir.",
  "Sagitário": "Vênus em Sagitário quer liberdade dentro do amor. Você se sente sufocada por excesso de rotina e busca relações que expandam o mundo.",
  "Capricórnio": "Vênus em Capricórnio é seletiva e leva amor a sério. Você investe muito em quem escolhe — o que torna as perdas mais pesadas.",
  "Aquário": "Vênus em Aquário quer um amor que seja também amizade e cumplicidade intelectual. Você resiste à ideia de \"precisar\" de alguém.",
  "Peixes": "Vênus em Peixes é o amor mais empático e idealista do zodíaco. Você sente o que o outro sente — e isso te faz aceitar mais do que deveria.",
};
