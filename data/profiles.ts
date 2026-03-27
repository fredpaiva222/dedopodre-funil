export type ProfileId = "1A" | "1B" | "2A" | "2B" | "3A" | "3B" | "4A" | "4B";

export interface Profile {
  id: ProfileId;
  slug: string;
  name: string;
  // Exibido na página de resultado parcial (antes do paywall)
  teaser: string;
  // Exibido após desbloqueio (resultado completo)
  fullDescription: string;
  // Perfil da alma gêmea (parcialmente visível no resultado parcial)
  soulMateProfile: string;
  // Padrão de atração identificado
  attractionPattern: string;
  // Red flags astrológicos específicos deste perfil
  redFlags: string[];
  // Janela cósmica: momento favorável para conexão
  cosmicWindow: string;
}

export const profiles: Profile[] = [
  {
    id: "1A",
    slug: "amor-invisivel",
    name: "A que ama em silêncio",
    teaser:
      "Você carrega um amor enorme dentro de você, mas aprendeu a escondê-lo antes de saber se é seguro mostrá-lo. Você dá sinais sutis demais para alguém que ainda não sabe o quanto você sente.",
    fullDescription:
      "Seu padrão de atração é marcado por uma generosidade emocional que funciona de forma quase invisível. Você ama com profundidade, mas protege esse amor com uma camada de reserva que os outros às vezes interpretam como desinteresse. A raiz desse padrão está numa experiência precoce de amor não reconhecido — você aprendeu que mostrar demais é arriscado. O resultado é que você se apaixona em silêncio e espera que o outro perceba sem que você precise dizer. Sua alma gêmea precisa ser alguém com sensibilidade suficiente para ler o que não é dito.",
    soulMateProfile:
      "Seu mapa indica compatibilidade com alguém de presença tranquila e observadora, que não confunde reserva com frieza. Alguém que escolhe com cuidado e fica com consistência.",
    attractionPattern:
      "Você tende a se apaixonar por pessoas que precisam ser decifradas, o que cria uma dinâmica onde você investe mais do que recebe antes de qualquer reciprocidade ser estabelecida.",
    redFlags: [
      "Homens que comunicam pouco e interpretam seu silêncio como aprovação",
      "Relações onde a ambiguidade é mantida porque nenhum dos dois quer quebrar o equilíbrio frágil",
      "Pessoas que admiram você de longe mas nunca dão o passo",
    ],
    cosmicWindow:
      "Nos próximos 90 dias, Vênus favorece conexões iniciadas por você. Sua próxima alma gêmea pode não ser quem toma a iniciativa.",
  },
  {
    id: "1B",
    slug: "guardia-do-proprio-coracao",
    name: "A guardiã do próprio coração",
    teaser:
      "Você construiu uma proteção tão eficiente que às vezes ela funciona bem demais. Você mantém as pessoas numa distância confortável e só percebe que se afastou quando já é tarde demais.",
    fullDescription:
      "Seu padrão é marcado por uma inteligência emocional aguçada que você usa principalmente para se proteger. Você sente tudo com intensidade, mas desenvolveu um sistema interno sofisticado de avaliação que filtra ameaças antes de se abrir. O problema é que esse filtro eventualmente exclui conexões legítimas. Você não tem medo de se apaixonar — você tem medo do que acontece depois, quando a pessoa já está dentro e pode te machucar de verdade. Sua alma gêmea precisa ser alguém paciente o suficiente para entender que sua abertura é progressiva, não ausente.",
    soulMateProfile:
      "Seu mapa aponta para alguém com segurança emocional interna, que não interpreta sua cautela como rejeição e tem consistência suficiente para mostrar que vale a pena baixar a guarda.",
    attractionPattern:
      "Você tende a criar testes inconscientes para as pessoas, e quando elas falham, usa isso como confirmação de que era melhor não ter se aberto. O padrão se retroalimenta.",
    redFlags: [
      "Homens que desistem ao primeiro sinal de resistência sua",
      "Relações que ficam presas na fase de 'quase', onde os dois sentem mas nenhum assume",
      "Pessoas que confundem sua independência com ausência de necessidade de cuidado",
    ],
    cosmicWindow:
      "Seu mapa indica que uma conexão genuína está sendo bloqueada por uma proteção que já cumpriu seu papel. Os próximos 90 dias são favoráveis para deixar alguém ver o que você normalmente esconde.",
  },
  {
    id: "2A",
    slug: "redentora",
    name: "A que acredita no potencial",
    teaser:
      "Você tem um dom raro de enxergar o que as pessoas podem se tornar. Isso te faz investir em quem ainda está se construindo — e às vezes esperar por uma versão da pessoa que ainda não existe.",
    fullDescription:
      "Você ama o potencial tanto quanto a realidade, às vezes mais. Isso não é ingenuidade — é uma forma de amor genuinamente generosa. O problema aparece quando você começa a sustentar sozinha a crença em alguém que não sustenta essa crença em si mesmo. Você carrega o projeto do relacionamento enquanto o outro ainda decide se quer estar nele. Sua alma gêmea não é alguém que precisa ser salvo — é alguém que já chegou até você pronto para o que você tem a oferecer.",
    soulMateProfile:
      "Seu mapa aponta para alguém que já passou pelos próprios processos e chegou até você com clareza de quem é. Não perfeito, mas inteiro. Alguém que escolhe você com consciência, não por precisar de você.",
    attractionPattern:
      "Você é atraída por pessoas que têm algo brilhante e algo quebrado ao mesmo tempo. O brilhante te encanta, o quebrado te convoca. E você fica dividida entre os dois.",
    redFlags: [
      "Homens com muito potencial e pouca ação consistente",
      "Relações onde você sente que é a âncora emocional enquanto o outro flutua",
      "Pessoas que te agradecem mas não mudam",
    ],
    cosmicWindow:
      "Nos próximos 90 dias, seu mapa indica que uma conexão diferente está disponível: alguém que não precisa que você acredite por ele, porque já acredita em si mesmo.",
  },
  {
    id: "2B",
    slug: "a-que-espera-ser-escolhida",
    name: "A que espera ser escolhida",
    teaser:
      "Você tem muito a oferecer e sabe disso. Mas em algum momento aprendeu a esperar que o outro reconheça isso sozinho, sem que você precise se posicionar. E essa espera às vezes dura mais do que deveria.",
    fullDescription:
      "Você aprendeu em algum momento que se destacar demais é perigoso. Que querer demais afasta. Então você se posiciona de uma forma que parece passiva mas é na verdade uma estratégia: estar disponível, ser agradável, mostrar que você é uma boa escolha — e esperar que ele escolha. O problema é que esse padrão seleciona homens que precisam de pouco esforço, não homens que são capazes de grande amor. Sua alma gêmea é alguém que te escolhe ativamente, não alguém que você convence de que vale a pena ficar.",
    soulMateProfile:
      "Seu mapa indica compatibilidade com alguém que faz escolhas deliberadas e não deixa espaço para ambiguidade. Alguém que diz o que sente antes que você precise adivinhar.",
    attractionPattern:
      "Você se apaixona mais profundamente por quem dá pouca certeza do que por quem é claro. A incerteza cria uma tensão que você interpreta como sentimento intenso.",
    redFlags: [
      "Homens que mantêm a ambiguidade porque ela funciona a favor deles",
      "Relações onde você analisa cada mensagem em busca de sinais de interesse",
      "Pessoas que aparecem e somem em ciclos que você aprende a tolerar",
    ],
    cosmicWindow:
      "Nos próximos 90 dias, seu mapa aponta para uma conexão onde você não precisará interpretar sinais. O que é para você chega com clareza.",
  },
  {
    id: "3A",
    slug: "criadora-de-distancia",
    name: "A que se afasta quando chega perto",
    teaser:
      "Você deseja profundamente ser amada, mas quando o amor se aproxima de verdade, algo em você começa a recuar. Não por falta de sentimento, mas por excesso de medo do que acontece se você se permitir confiar completamente.",
    fullDescription:
      "Você tem um ciclo interno sofisticado: se apaixona, se abre, sente o risco, recua. Às vezes o recuo é sutil — você fica mais ocupada, menos presente, mais crítica. Às vezes é explícito — você termina ou provoca o fim antes que ele aconteça sem o seu controle. No fundo, você sabe que esse padrão existe. A questão não é entendê-lo, é ter alguém seguro o suficiente para que você não precise ativá-lo. Sua alma gêmea é alguém cuja presença não dispara o seu alarme interno.",
    soulMateProfile:
      "Seu mapa indica que sua alma gêmea tem uma estabilidade emocional que não reage às suas oscilações com insegurança ou afastamento. Alguém que permanece sem sufocar.",
    attractionPattern:
      "Você tende a ser mais atraída por pessoas que mantêm certa distância, porque isso mantém o relacionamento num nível de segurança onde você controla o quanto se expõe.",
    redFlags: [
      "Homens emocionalmente indisponíveis que espelham seu próprio afastamento",
      "Relações que parecem intensas mas nunca avançam para profundidade real",
      "Pessoas que interpretam seu recuo como jogo e reforçam o ciclo",
    ],
    cosmicWindow:
      "Seu mapa indica que nos próximos 90 dias uma conexão vai te desafiar a ficar quando seu instinto disser para ir. Esse momento é o ponto de virada.",
  },
  {
    id: "3B",
    slug: "a-que-se-apaga",
    name: "A que se apaga para não perder",
    teaser:
      "Você tem o hábito de se tornar o que o outro precisa antes de descobrir o que você mesma precisa. E quando o relacionamento acaba, você se pergunta onde foi parar a versão de você que existia antes.",
    fullDescription:
      "Seu amor é genuíno e profundo, mas chegou num ponto onde amar significa ceder. Ceder opinião, tempo, planos, limites. Não de forma dramática, mas de forma gradual, quase imperceptível. Você se adapta tão bem que às vezes a pessoa com quem você está nem percebe o quanto você abriu mão. E você também não percebe, até que o custo acumulado se torna grande demais para ignorar. Sua alma gêmea é alguém que ativamente quer saber quem você é, não alguém que aceita a versão moldada que você apresenta.",
    soulMateProfile:
      "Seu mapa indica compatibilidade com alguém que faz perguntas, que nota quando você está se minimizando, que quer a versão real de você, não a versão conveniente.",
    attractionPattern:
      "Você é atraída por pessoas que têm uma presença forte e saber claro do que querem. Isso inicialmente parece segurança, mas pode criar uma dinâmica onde a voz deles ocupa o espaço onde a sua deveria estar.",
    redFlags: [
      "Homens com opiniões fortes que não perguntam o que você pensa",
      "Relações onde você se sente vista, mas só em partes",
      "Pessoas que te valorizam pelo que você faz, não por quem você é",
    ],
    cosmicWindow:
      "Nos próximos 90 dias, seu mapa indica que uma conexão vai te convidar a ser inteira. Aceitar esse convite exige que você saiba o que inteira significa para você.",
  },
  {
    id: "4A",
    slug: "viciada-em-intensidade",
    name: "A que confunde intensidade com amor",
    teaser:
      "Você sente tudo com uma profundidade que poucos conseguem acompanhar. O problema é que essa intensidade se tornou o critério pelo qual você mede o amor, e nem sempre o que é intenso é o que é bom.",
    fullDescription:
      "Para você, amor que não dói um pouco não parece real. Amor que não tem tensão, drama ou o risco de perda parece vazio. Esse padrão não é fraqueza, é o resultado de ter aprendido que amor e conflito andam juntos. Que onde tem intensidade, tem conexão. A verdade é que seu coração é capaz de um amor enorme, mas está calibrado para sentir mais em ambientes de caos do que de paz. Sua alma gêmea não vai te fazer sofrer para provar que te ama. Mas ela vai precisar que você aprenda a reconhecer o amor que não machuca.",
    soulMateProfile:
      "Seu mapa indica que sua alma gêmea é alguém com profundidade emocional real, capaz de match para a sua intensidade, mas com estabilidade suficiente para que a conexão não se destrua com o próprio peso.",
    attractionPattern:
      "Você é fortemente atraída por pessoas que provocam reações físicas e emocionais intensas. A ansiedade que sente no começo de uma relação difícil muitas vezes parece maior do que o conforto que sente com alguém saudável.",
    redFlags: [
      "Homens que criam picos de euforia e vales de insegurança em ciclos regulares",
      "Relações onde a reconciliação depois do conflito é a parte mais boa",
      "Pessoas que te fazem sentir muito, mas raramente te fazem sentir segura",
    ],
    cosmicWindow:
      "Nos próximos 90 dias, seu mapa indica que você vai encontrar uma conexão que é intensa e estável ao mesmo tempo. Seu desafio será não interpretar a estabilidade como falta de sentimento.",
  },
  {
    id: "4B",
    slug: "a-que-nao-se-acredita-merecedora",
    name: "A que não acredita que merece",
    teaser:
      "Por baixo de tudo, existe uma voz que diz que o amor que você quer é para as outras. Não para você. Essa voz não é verdade, mas ela tem sido tão constante que às vezes parece.",
    fullDescription:
      "Você não duvida que o amor existe. Você duvida que existe para você especificamente. Essa crença se instalou de forma sutil, provavelmente bem antes de você ter consciência disso. E ela opera de formas invisíveis: você se sabota quando algo bom começa, você escolhe quem confirma a crença de que não é suficiente, você diminui o que sente para não ter que arriscar ser rejeitada num nível que realmente importe. Sua alma gêmea existe. O trabalho agora é se tornar capaz de recebê-la quando ela chegar.",
    soulMateProfile:
      "Seu mapa indica que sua alma gêmea vai chegar com uma clareza sobre você que vai contrastar com a voz interna. Alguém que te vê com precisão e escolhe você com consciência total disso.",
    attractionPattern:
      "Você tende a se aproximar de pessoas que te fazem trabalhar pela atenção delas, porque isso replica a sensação familiar de precisar provar que merece. E quando consegue a atenção, ainda não acredita completamente.",
    redFlags: [
      "Homens que te fazem sentir que você está sempre provando seu valor",
      "Relações onde a insegurança é sua e a facilidade é dele",
      "Pessoas que te valorizam menos do que você vale e você aceita porque parece mais real",
    ],
    cosmicWindow:
      "Nos próximos 90 dias, seu mapa indica um período de clareza sobre o que você realmente merece. O que surgir nesse período vai precisar que você acredite nele antes de precisar de prova.",
  },
];
