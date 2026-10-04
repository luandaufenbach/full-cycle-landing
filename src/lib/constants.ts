import type { LucideIcon } from 'lucide-react';
import {
  BadgeCheck,
  Building2,
  ClipboardList,
  Globe,
  MessagesSquare,
  Microscope,
  Search,
  Sprout,
  Tractor,
  TreePine,
} from 'lucide-react';

// Defina NEXT_PUBLIC_SITE_URL no deploy (ex.: https://seudominio.com.br)
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const companyData = {
  name: 'Full Cycle',
  fullName: 'Full Cycle Consultoria e Restauração Ecológica',
  cnpj: '67.014.820/0001-03',
  serviceArea: 'Santa Catarina',
  description:
    'Consultoria ambiental e restauração ecológica em Santa Catarina, com experiência no Brasil e na Austrália. Licenciamento, CAR, diagnóstico, PRAD e monitoramento.',
};

// TODO: substituir pelo número e e-mail reais antes de publicar
const whatsappNumber = '5511999999999';
const whatsappMessage =
  'Olá! Vim pelo site da Full Cycle e gostaria de conversar sobre um projeto ambiental.';

export const contactInfo = {
  whatsapp: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  email: 'contato@fullcycle.com.br',
  linkedin: 'https://www.linkedin.com/in/gabriela-gomes-674b5689/',
};

export const navItems = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];

export const gabriela = {
  name: 'Gabriela Gomes',
  title: 'Bióloga e consultora ambiental',
  specialization: 'Restauração ecológica',
  certifications: [
    'ISO 14001 — Auditor Líder',
    'ISO 14064 — Auditor Líder',
    'Diploma of Horticulture — South Regional TAFE (Austrália)',
  ],
  languages: ['Português', 'Inglês', 'Espanhol'],
};

export const gabrielaTimeline = [
  {
    year: '2012',
    title: 'Ciências Biológicas — UFSC',
    description: 'Formação em Florianópolis com foco em ecologia e botânica.',
    country: 'Brasil',
  },
  {
    year: '2015',
    title: 'Início na Austrália',
    description: 'Primeiras experiências com ecossistemas australianos e restauração em larga escala.',
    country: 'Austrália',
  },
  {
    year: '2016',
    title: 'Diploma of Horticulture',
    description: 'South Regional TAFE — especialização em manejo de espécies nativas.',
    country: 'Austrália',
  },
  {
    year: '2017–2021',
    title: 'Atuação em consultorias de ecologia',
    description: 'Seaside Plant Nursery · Cape Life Environmental Services · Regen Australia',
    country: 'Austrália',
  },
  {
    year: '2021',
    title: 'Environmental Project Manager',
    description: 'Liderança de projetos de restauração ecológica de grande escala.',
    country: 'Austrália',
  },
  {
    year: '2024',
    title: 'Full Cycle Consultoria',
    description: 'Retorno ao Brasil e fundação da empresa em Santa Catarina.',
    country: 'Brasil',
  },
];

type Differential = { title: string; description: string; icon: LucideIcon };

export const differentials: Differential[] = [
  {
    title: 'Experiência internacional',
    description:
      'Anos de atuação na Austrália, em climas e ecossistemas muito diferentes dos nossos. Esse repertório vira soluções mais robustas para áreas brasileiras.',
    icon: Globe,
  },
  {
    title: 'Base científica',
    description:
      'Cada recomendação parte de diagnóstico de campo e dados. São mais de 100 projetos com resultados acompanhados e medidos.',
    icon: Microscope,
  },
  {
    title: 'Credenciais reconhecidas',
    description:
      'Certificação de auditor líder em ISO 14001 e ISO 14064, com formação no Brasil (UFSC) e na Austrália (TAFE).',
    icon: BadgeCheck,
  },
];

type Service = { acronym?: string; name: string };

type ClientProfile = {
  id: string;
  label: string;
  icon: LucideIcon;
  painPoint: string;
  highlight: string;
  services: Service[];
  cta: string;
};

export const clientProfiles: ClientProfile[] = [
  {
    id: 'empresa',
    label: 'Empresa ou indústria',
    icon: Building2,
    painPoint: 'Minha empresa precisa de licenças, relatórios ou certificações ambientais.',
    highlight: 'Evite multas e mantenha a conformidade com a legislação ambiental.',
    services: [
      { acronym: 'RAP', name: 'Relatório Ambiental Prévio' },
      { acronym: 'RAS', name: 'Relatório Ambiental Simplificado' },
      { acronym: 'EIA/RIMA', name: 'Estudo e Relatório de Impacto Ambiental' },
      { acronym: 'ISO 14001', name: 'Sistema de gestão ambiental' },
      { acronym: 'ISO 14064', name: 'Inventário de gases de efeito estufa' },
      { name: 'Compensação e reposição florestal' },
    ],
    cta: 'Consultar a regularização da empresa',
  },
  {
    id: 'rural',
    label: 'Produtor rural',
    icon: Tractor,
    painPoint: 'Minha propriedade rural precisa de regularização ou diagnóstico ambiental.',
    highlight: 'Acesse crédito rural e opere sem impedimentos legais.',
    services: [
      { acronym: 'CAR', name: 'Cadastro Ambiental Rural' },
      { name: 'Compensação e reposição florestal' },
      { name: 'Inventário florestal' },
      { name: 'Estudo fitossociológico' },
      { name: 'Levantamento faunístico' },
      { name: 'Projetos de crédito de carbono' },
    ],
    cta: 'Regularizar minha propriedade',
  },
  {
    id: 'restauracao',
    label: 'Restauração de área',
    icon: Sprout,
    painPoint: 'Tenho uma área degradada e quero restaurar o ecossistema.',
    highlight: 'Transforme áreas degradadas em ecossistemas vivos e produtivos.',
    services: [
      { name: 'Diagnóstico ambiental' },
      { acronym: 'PRAD', name: 'Plano de Recuperação de Áreas Degradadas' },
      { name: 'Restauração ecológica' },
      { name: 'Monitoramento ambiental contínuo' },
      { name: 'Projetos de crédito de carbono' },
    ],
    cta: 'Iniciar a restauração da minha área',
  },
];

export const trustMetrics = [
  { value: 12, suffix: '+', label: 'Anos de experiência' },
  { value: 100, suffix: '+', label: 'Projetos concluídos' },
  { value: 2, suffix: '', label: 'Países de atuação' },
  { value: 3, suffix: '', label: 'Idiomas fluentes' },
];

type ProcessStep = { title: string; description: string; icon: LucideIcon };

export const processSteps: ProcessStep[] = [
  {
    title: 'Conversa inicial',
    description: 'Entendemos a área, o objetivo do projeto, os prazos e as exigências envolvidas.',
    icon: MessagesSquare,
  },
  {
    title: 'Diagnóstico',
    description: 'Visita de campo e levantamento de dados para conhecer o ecossistema e a legislação aplicável.',
    icon: Search,
  },
  {
    title: 'Plano e licenciamento',
    description: 'Elaboração dos estudos e relatórios técnicos e acompanhamento junto aos órgãos ambientais.',
    icon: ClipboardList,
  },
  {
    title: 'Execução e monitoramento',
    description: 'Implantação da restauração e acompanhamento dos resultados ao longo do tempo.',
    icon: TreePine,
  },
];

export const faqItems = [
  {
    question: 'Quanto tempo leva um processo de licenciamento ambiental?',
    answer:
      'Depende do tipo de licença e do órgão competente. Um RAP pode ser aprovado em 60 a 90 dias; um EIA/RIMA pode levar de 6 meses a 2 anos. A conversa inicial com Gabriela já define uma estimativa para o seu caso específico.',
  },
  {
    question: 'Minha empresa precisa de certificação ISO 14001?',
    answer:
      'Não é obrigatório por lei, mas muitas cadeias de fornecimento e licitações públicas exigem. Além disso, a ISO 14001 reduz o risco de multas e fortalece a imagem da empresa com clientes, investidores e órgãos reguladores.',
  },
  {
    question: 'O que é o CAR e por que minha propriedade rural precisa?',
    answer:
      'O CAR (Cadastro Ambiental Rural) é obrigatório para toda propriedade rural no Brasil, independentemente do tamanho. Sem ele, o produtor não consegue acesso a crédito rural e licenças ambientais, e pode receber autuações do IBAMA.',
  },
  {
    question: 'Projetos de crédito de carbono valem a pena para uma área em Santa Catarina?',
    answer:
      'Sim, especialmente para áreas com remanescentes florestais nativos ou projetos de restauração ativa. Santa Catarina tem um potencial ainda pouco explorado. Gabriela avalia o potencial da sua área em uma conversa inicial sem compromisso.',
  },
  {
    question: 'O atendimento é presencial? Vocês vão até a propriedade?',
    answer:
      'A conversa inicial pode ser presencial ou online. Para diagnósticos técnicos, inventários e projetos de restauração, realizamos visitas de campo à propriedade. Atendemos toda Santa Catarina.',
  },
];
