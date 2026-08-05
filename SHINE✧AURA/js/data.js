// Posts Data
const postsData = [
  {
    id: 1,
    slug: 'tendencias-moda-primavera-2026',
    title: 'Tendências de Moda para a Primavera 2026',
    excerpt: 'Descubra as cores, estilos e peças que vão dominar a próxima estação.',
    category: 'Moda',
    author: { name: 'Isabella Rodrigues', avatar: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=100&h=100&fit=crop' },
    image: 'imagens/tendência.png',
    date: '15 de Março de 2026',
    readTime: '8 min',
    featured: true
  },
  {
    id: 2,
    slug: 'rotina-skincare-perfeita',
    title: 'A Rotina de Skincare Perfeita para Pele Radiante',
    excerpt: 'Aprenda passo a passo como criar uma rotina de cuidados que realmente funciona.',
    category: 'Skincare',
    author: { name: 'Mariana Santos', avatar: 'https://images.unsplash.com/photo-1648203276014-20f97ba1f817?w=100&h=100&fit=crop' },
    image: 'imagens/skincare.png',
    date: '12 de Março de 2026',
    readTime: '6 min',
    featured: true
  },
  {
    id: 3,
    slug: 'maquiagem-profissional-casa',
    title: 'Como Fazer uma Maquiagem Profissional em Casa',
    excerpt: 'Técnicas de maquiadores profissionais que você pode replicar facilmente no seu dia a dia.',
    category: 'Beleza',
    author: { name: 'Carolina Ferreira', avatar: 'https://images.unsplash.com/photo-1577746838851-816a43ca8733?w=100&h=100&fit=crop' },
    image: 'imagens/maquiagem.png',
    date: '10 de Março de 2026',
    readTime: '7 min',
    featured: true
  },
  {
    id: 4,
    slug: 'tratamentos-cabelo-danificado',
    title: 'Tratamentos Caseiros para Cabelos Danificados',
    excerpt: 'Receitas naturais e eficazes para recuperar a saúde dos seus fios.',
    category: 'Cabelo',
    author: { name: 'Juliana Almeida', avatar: 'https://images.unsplash.com/photo-1632765866070-3fadf25d3d5b?w=100&h=100&fit=crop' },
    image: 'imagens/cuidados-com-cabelo.webp',
    date: '8 de Março de 2026',
    readTime: '5 min'
  },
  {
    id: 5,
    slug: 'lifestyle-wellness-equilibrio',
    title: 'Lifestyle & Wellness: Encontrando o Equilíbrio',
    excerpt: 'Dicas práticas para incorporar bem-estar e autocuidado na sua rotina.',
    category: 'Lifestyle',
    author: { name: 'Beatriz Costa', avatar: 'https://images.unsplash.com/photo-1599847987657-881f11b92a75?w=100&h=100&fit=crop' },
    image: 'imagens/woman-lotus-yoga.avif',
    date: '5 de Março de 2026',
    readTime: '6 min'
  },
  {
    id: 6,
    slug: 'acessorios-essenciais-2026',
    title: 'Acessórios Essenciais que Elevam Qualquer Look',
    excerpt: 'Os acessórios certos podem transformar completamente uma produção.',
    category: 'Moda',
    author: { name: 'Gabriela Lima', avatar: 'https://images.unsplash.com/photo-1634826260499-7d97a6049913?w=100&h=100&fit=crop' },
    image: 'imagens/acessorios_1756489750352.jpg',
    date: '3 de Março de 2026',
    readTime: '5 min'
  },
  {
    id: 7,
    slug: 'ingredientes-ativos-skincare',
    title: 'Guia Completo de Ingredientes Ativos em Skincare',
    excerpt: 'Entenda quais ingredientes funcionam para cada tipo de pele e como combiná-los.',
    category: 'Skincare',
    author: { name: 'Dr. Rafael Mendes', avatar: 'https://images.unsplash.com/photo-1693004927824-f2623bbedc8b?w=100&h=100&fit=crop' },
    image: 'imagens/ativos_dermatologicos.png',
    date: '1 de Março de 2026',
    readTime: '9 min'
  },
  {
    id: 8,
    slug: 'fragancias-assinatura-pessoal',
    title: 'Como Escolher Sua Fragrância Assinatura',
    excerpt: 'Dicas de especialistas para encontrar o perfume perfeito que combina com sua personalidade.',
    category: 'Beleza',
    author: { name: 'Sofia Martins', avatar: 'https://images.unsplash.com/photo-1617726341532-11680535062e?w=100&h=100&fit=crop' },
    image: 'imagens/elegent_woman.png',
    date: '28 de Fevereiro de 2026',
    readTime: '6 min'
  },
  {
    id: 9,
    slug: 'penteados-tendencia-2026',
    title: 'Penteados em Tendência para Todas as Ocasiões',
    excerpt: 'Dos mais simples aos elaborados, aprenda a criar penteados dignos de salão em casa.',
    category: 'Cabelo',
    author: { name: 'Fernanda Oliveira', avatar: 'https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=100&h=100&fit=crop' },
    image: 'imagens/penteados.png',
    date: '25 de Fevereiro de 2026',
    readTime: '7 min'
  },
  {
    id: 10,
    slug: 'autocuidado-praticas-diarias',
    title: 'Práticas Diárias de Autocuidado que Transformam',
    excerpt: 'Pequenos hábitos que fazem grande diferença no seu bem-estar físico e mental.',
    category: 'Lifestyle',
    author: { name: 'Camila Ribeiro', avatar: 'https://images.unsplash.com/photo-1527203561188-dae1bc1a417f?w=100&h=100&fit=crop' },
    image: 'imagens/auto_cuidado.png',
    date: '22 de Fevereiro de 2026',
    readTime: '5 min'
  },
  {
    id: 11,
    slug: 'guarda-roupa-capsula',
    title: 'Como Montar um Guarda-Roupa Cápsula Perfeito',
    excerpt: 'Menos é mais: aprenda a criar um armário funcional, versátil e cheio de estilo.',
    category: 'Moda',
    author: { name: 'Larissa Torres', avatar: 'https://images.unsplash.com/photo-1563132337-f159f484226c?w=100&h=100&fit=crop' },
    image: 'imagens/meddy_perez.png',
    date: '20 de Fevereiro de 2026',
    readTime: '8 min'
  },
  {
    id: 12,
    slug: 'beleza-natural-sem-filtros',
    title: 'Beleza Natural: Abraçando Sua Essência Sem Filtros',
    excerpt: 'A verdadeira beleza está em aceitar e valorizar suas características únicas.',
    category: 'Beleza',
    author: { name: 'Amanda Silva', avatar: 'https://images.unsplash.com/photo-1617726341472-ffff3dd33ee0?w=100&h=100&fit=crop' },
    image: 'imagens/Urias_cantora.jpg',
    date: '18 de Fevereiro de 2026',
    readTime: '6 min'
  }
];

const categories = [
  { name: 'Moda', icon: '👗', image: 'https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=400', count: 3 },
  { name: 'Beleza', icon: '✨', image: 'https://images.unsplash.com/photo-1577746838851-816a43ca8733?w=400', count: 4 },
  { name: 'Skincare', icon: '❤️', image: 'https://images.unsplash.com/photo-1648203276014-20f97ba1f817?w=400', count: 2 },
  { name: 'Cabelo', icon: '✂️', image: 'https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=400', count: 2 },
  { name: 'Lifestyle', icon: '☕', image: 'https://images.unsplash.com/photo-1599847987657-881f11b92a75?w=400', count: 2 }
];
