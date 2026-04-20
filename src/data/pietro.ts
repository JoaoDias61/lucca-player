// Dados do Pietro — editar aqui para atualizar o site inteiro.
// TODO: trocar placeholders por arquivos reais em /public/ quando tiver as mídias.

export const pietro = {
  nome: "Lucca Barros",
  apelido: "Lucca",
  idade: 13,
  altura: "1,55 m",
  peso: "46 kg",
  peDominante: "Direito",
  cidade: "Pouso Alegre",
  estado: "MG",
  anoNascimento: 2012,
  posicoes: ["Volante"],

  bio:
    "Lucca tem 13 anos e é apaixonado por futebol desde os 4. " +
    "Joga como volante, tem boa marcação, visão de jogo e distribuição de passes, " +
    "além de muita vontade de crescer no esporte. Mora em Pouso Alegre/MG.",

  // Fotos reais do Lucca em public/imagens/ — adicionar/remover livremente
  fotos: {
    hero: [
      "/imagens/lucca-1.png",
      "/imagens/lucca-2.png",
      "/imagens/lucca-3.png",
      "/imagens/lucca-4.png",
      "/imagens/lucca-5.png",
      "/imagens/lucca-6.png",
    ],
    avatar: "/imagens/lucca-1.png",
    acao: "/imagens/lucca-3.png",
  },

  estatisticas: [
    { label: "Gols", valor: 42, icone: "goal" as const },
    { label: "Assistências", valor: 28, icone: "assist" as const },
    { label: "Jogos", valor: 86, icone: "games" as const },
    { label: "Troféus", valor: 5, icone: "trophy" as const },
  ],

  lances: [
    {
      id: 1,
      titulo: "Gol de placa pela ponta esquerda",
      descricao: "Drible curto e finalização no ângulo.",
      // TODO: trocar por /lances/lance-1.mp4
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1552667466-07770ae110d0?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      titulo: "Assistência no contra-ataque",
      descricao: "Passe na medida depois de recuperar a bola no meio.",
      // TODO: trocar por /lances/lance-2.mp4
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      titulo: "Roubada de bola e lançamento",
      descricao: "Antecipação pela lateral e lançamento longo.",
      // TODO: trocar por /lances/lance-3.mp4
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      titulo: "Drible e finalização",
      descricao: "Jogada individual da intermediária até a área.",
      // TODO: trocar por /lances/lance-4.mp4
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      titulo: "Cruzamento perfeito",
      descricao: "Subida pela lateral e cruzamento na cabeça do atacante.",
      // TODO: trocar por /lances/lance-5.mp4
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      titulo: "Chute de longa distância",
      descricao: "Finalização de fora da área que passou raspando a trave.",
      // TODO: trocar por /lances/lance-6.mp4
      videoUrl:
        "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80",
    },
  ],

  times: [
    {
      periodo: "2024 — atual",
      nome: "Pouso Alegre FC",
      categoria: "Sub-13 / Sub-14",
      destaque: "Atual clube na categoria de base",
    },
    {
      periodo: "2022 — 2023",
      nome: "Sem clube",
      categoria: "Sub-11",
      destaque: "Período de preparação e treinamento individual",
    },
    {
      periodo: "2020 — 2021",
      nome: "Ferroviário",
      categoria: "Sub-9",
      destaque: "Primeiros anos no futebol de base",
    },
  ],

  contato: {
    whatsapp: "5511997673827",
    // TODO: trocar pelo email real
    email: "contato.lucca@exemplo.com",
    mensagemWhatsApp:
      "Olá! Vi o site do Lucca e gostaria de conversar sobre o jogador.",
  },

  redesSociais: {
    // TODO: trocar pelos perfis reais
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },
};

export type Lance = (typeof pietro.lances)[number];
export type Time = (typeof pietro.times)[number];
export type Estatistica = (typeof pietro.estatisticas)[number];
