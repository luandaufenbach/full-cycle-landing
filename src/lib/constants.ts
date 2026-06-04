// Dados da Full Cycle
export const companyData = {
  name: 'Full Cycle',
  fullName: 'Full Cycle Consultoria e Restauração Ecológica',
  cnpj: '67.014.820/0001-03',
  serviceArea: 'Santa Catarina',
  description: 'Consultoria ambiental e restauração ecológica com experiência internacional',
};

export const gabriela = {
  name: 'Gabriela Gomes',
  title: 'Bióloga | Consultora Ambiental',
  specialization: 'Especialista em Restauração Ecológica',
  yearsExperience: '12+',
  projects: '100+',
  education: [
    {
      degree: 'Ciências Biológicas',
      institution: 'UFSC',
      year: '2012',
    },
    {
      degree: 'Diploma of Horticulture',
      institution: 'South Regional TAFE (Austrália)',
      year: '2016',
    },
  ],
  certifications: [
    'ISO 14001 - Auditor Líder',
    'ISO 14064 - Auditor Líder',
    'Diploma of Horticulture • South Regional TAFE (Austrália)',
  ],
  languages: ['Português', 'Inglês', 'Espanhol'],
  companies: [
    'Seaside Plant Nursery',
    'Cape Life Environmental Services',
    'Regen Australia',
  ],
  currentRole: 'Environmental Project Manager & Ecologist (2021-2026)',
};

export const gabrielaTimeline = [
  {
    year: '2012',
    title: 'Ciências Biológicas — UFSC',
    description: 'Formação em Florianópolis com foco em ecologia e botânica',
    country: 'Brasil',
  },
  {
    year: '2015',
    title: 'Início na Austrália',
    description: 'Primeiras experiências com ecossistemas australianos e restauração em larga escala',
    country: 'Austrália',
  },
  {
    year: '2016',
    title: 'Diploma of Horticulture',
    description: 'South Regional TAFE — especialização em manejo de espécies nativas',
    country: 'Austrália',
  },
  {
    year: '2017–2021',
    title: 'Consultoras líderes em ecologia',
    description: 'Seaside Plant Nursery • Cape Life Environmental Services • Regen Australia',
    country: 'Austrália',
  },
  {
    year: '2021',
    title: 'Environmental Project Manager',
    description: 'Liderança de projetos de restauração ecológica de grande escala',
    country: 'Austrália',
  },
  {
    year: '2024',
    title: 'Full Cycle Consultoria',
    description: 'Retorno ao Brasil com fundação da empresa em Santa Catarina',
    country: 'Brasil',
  },
];

export const differentials = [
  {
    title: 'Experiência Internacional',
    description: '11 anos na Austrália + 14 anos no Brasil. Paisagens, climas e ecossistemas distintos.',
    icon: '🌍',
    color: 'bg-blue-50',
  },
  {
    title: 'Metodologia Científica',
    description: '100+ projetos implementados. Resultados mensuráveis. Restauração durável.',
    icon: '🔬',
    color: 'bg-amber-50',
  },
  {
    title: 'Certificações Reconhecidas',
    description: 'ISO 14001 | ISO 14064 | Diploma Horticulture. Credibilidade verificável.',
    icon: '✓',
    color: 'bg-green-50',
  },
];

export const clientProfiles = [
  {
    id: 'empresa',
    label: 'Empresa ou Indústria',
    icon: 'building',
    painPoint: 'Minha empresa precisa de licenças, relatórios ou certificações ambientais',
    highlight: 'Evite multas e mantenha conformidade com a legislação ambiental',
    services: [
      'RAP - Relatório Ambiental Prévio',
      'RAS - Relatório Ambiental Simplificado',
      'EIA/RIMA - Estudo de Impacto Ambiental',
      'ISO 14001 - Gestão Ambiental',
      'ISO 14064 - Inventário de Gases de Efeito Estufa',
      'Compensação & Reposição Florestal',
    ],
    cta: 'Consultar regularização da minha empresa',
  },
  {
    id: 'rural',
    label: 'Produtor Rural',
    icon: 'tractor',
    painPoint: 'Minha propriedade rural precisa de regularização ou diagnóstico ambiental',
    highlight: 'Acesse crédito rural e opere sem impedimentos legais',
    services: [
      'CAR - Cadastro Ambiental Rural',
      'Compensação & Reposição Florestal',
      'Inventário Florestal',
      'Estudo Fitossociológico',
      'Levantamento Faunístico',
      'Projetos de Crédito de Carbono',
    ],
    cta: 'Regularizar minha propriedade rural',
  },
  {
    id: 'restauracao',
    label: 'Restauração de Área',
    icon: 'sprout',
    painPoint: 'Tenho uma área degradada e quero restaurar o ecossistema',
    highlight: 'Transforme áreas degradadas em ecossistemas vivos e produtivos',
    services: [
      'Diagnóstico Ambiental',
      'PRAD - Plano de Recuperação de Áreas Degradadas',
      'Restauração Ecológica',
      'Monitoramento Ambiental Contínuo',
      'Projetos de Crédito de Carbono',
    ],
    cta: 'Iniciar restauração da minha área',
  },
];

export const trustMetrics = [
  { label: 'Anos de Experiência', numericValue: 12, suffix: '+' },
  { label: 'Projetos Completos', numericValue: 100, suffix: '+' },
  { label: 'Países de Atuação', numericValue: 2, suffix: '' },
  { label: 'Idiomas Fluentes', numericValue: 3, suffix: '' },
];

export const faqItems = [
  {
    question: 'Quanto tempo leva um processo de licenciamento ambiental?',
    answer: 'Depende do tipo de licença e do órgão competente. Um RAP pode ser aprovado em 60 a 90 dias; um EIA/RIMA pode levar de 6 meses a 2 anos. A conversa inicial com Gabriela já define uma estimativa para o seu caso específico.',
  },
  {
    question: 'Minha empresa precisa de certificação ISO 14001?',
    answer: 'Não é obrigatório por lei, mas muitas cadeias de fornecimento e licitações públicas exigem. Além disso, a ISO 14001 reduz o risco de multas e fortalece a imagem da empresa com clientes, investidores e órgãos reguladores.',
  },
  {
    question: 'O que é o CAR e por que minha propriedade rural precisa?',
    answer: 'O CAR (Cadastro Ambiental Rural) é obrigatório para toda propriedade rural no Brasil, independente do tamanho. Sem ele, o produtor não consegue acesso a crédito rural, licenças ambientais e pode receber autuações do IBAMA.',
  },
  {
    question: 'Projetos de crédito de carbono valem a pena para uma área em Santa Catarina?',
    answer: 'Sim, especialmente para áreas com remanescentes florestais nativos ou projetos de restauração ativa. Santa Catarina tem enorme potencial ainda pouco explorado. Gabriela avalia o potencial da sua área em uma conversa inicial sem compromisso.',
  },
  {
    question: 'O atendimento é presencial? Vocês vão até a propriedade?',
    answer: 'A conversa inicial pode ser presencial ou online. Para diagnósticos técnicos, inventários e projetos de restauração, realizamos visitas de campo à propriedade. Atendemos toda Santa Catarina.',
  },
];

export const contactInfo = {
  whatsapp: 'https://wa.me/5511999999999',
  email: 'contato@fullcycle.com.br',
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
};
