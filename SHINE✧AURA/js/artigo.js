document.addEventListener('DOMContentLoaded', function() {
    // Get slug from URL
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');

    if (!slug) {
        window.location.href = 'blog.html';
        return;
    }

    // Find post by slug
    const post = postsData.find(p => p.slug === slug);

    if (!post) {
        window.location.href = 'blog.html';
        return;
    }

    // Load article content
    loadArticle(post);

    // Load related posts
    loadRelatedPosts(post);

    // Mobile menu
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav ul');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => nav.classList.toggle('active'));
    }

    // Share buttons
    document.querySelectorAll('.share-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Compartilhar no ' + this.title);
        });
        btn.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
            this.style.background = 'var(--purple-100)';
        });
        btn.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.background = 'var(--gray-100)';
        });
    });
});

function loadArticle(post) {
    // Hero image
    const heroSection = document.getElementById('article-hero');
    const imagePath = post.image.startsWith('http') ? post.image : '../' + post.image;
    heroSection.innerHTML = `
        <img src="${imagePath}" alt="${post.title}" style="width: 100%; height: 100%; object-fit: cover; object-position: center;">
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.2), transparent);"></div>
        <div style="position: absolute; top: 2rem; left: 2rem;">
            <span style="padding: 0.5rem 1.5rem; background: linear-gradient(to right, var(--purple-600), var(--purple-800)); color: white; border-radius: 9999px; font-size: 1.125rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);" class="font-cormorant">
                ${post.category}
            </span>
        </div>
    `;

    // Title
    document.getElementById('article-title').textContent = post.title;

    // Author
    document.getElementById('article-author').innerHTML = `
        <img src="${post.author.avatar}" alt="${post.author.name}" style="width: 3rem; height: 3rem; border-radius: 50%; object-fit: cover; object-position: center;">
        <div>
            <p class="font-lora" style="font-weight: 600; color: var(--gray-900); margin-bottom: 0.25rem;">${post.author.name}</p>
            <div style="display: flex; gap: 1rem; font-size: 0.875rem; color: var(--gray-600);" class="font-lora">
                <span>📅 ${post.date}</span>
                <span>⏱️ ${post.readTime}</span>
            </div>
        </div>
    `;

    // Excerpt
    document.querySelector('#article-excerpt p').textContent = post.excerpt;

    // Content
    const contentDiv = document.getElementById('article-content');
    const contentData = getFullContent(post.slug);
    
    contentDiv.innerHTML = contentData.split('\n\n').map(paragraph => {
        if (paragraph.startsWith('## ')) {
            return `<h2 class="font-playfair" style="font-size: 2rem; margin-top: 3rem; margin-bottom: 1rem; color: var(--gray-900);">${paragraph.replace('## ', '')}</h2>`;
        }
        return `<p style="margin-bottom: 1.5rem;">${paragraph}</p>`;
    }).join('');

    // Tags
    const tags = ['Tendências', post.category, '2026', 'Dicas'];
    document.getElementById('article-tags').innerHTML = tags.map(tag => 
        `<span style="padding: 0.5rem 1rem; background: var(--purple-100); color: var(--purple-700); border-radius: 9999px; font-size: 0.875rem; font-weight: 600;" class="font-cormorant">#${tag}</span>`
    ).join('');

    // Update page title
    document.title = post.title + ' - Shine✧Aura';
}

function loadRelatedPosts(currentPost) {
    const related = postsData
        .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
        .slice(0, 3);

    const container = document.getElementById('related-posts');
    
    if (related.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--gray-600);">Nenhum artigo relacionado encontrado.</p>';
        return;
    }

    related.forEach(post => {
        const card = createBlogCard(post, false);
        container.appendChild(card);
    });
}

function createBlogCard(post, featured = false) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    const imagePath = post.image.startsWith('http') ? post.image : '../' + post.image;
    card.innerHTML = `
        <a href="artigo.html?slug=${post.slug}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
            <div class="blog-card-image">
                <img src="${imagePath}" alt="${post.title}">
                <div class="blog-card-badge font-cormorant">${post.category}</div>
                <div class="blog-card-overlay"></div>
            </div>
            <div class="blog-card-content">
                <h3 class="blog-card-title font-playfair">${post.title}</h3>
                <p class="blog-card-excerpt font-lora">${post.excerpt}</p>
                <div class="blog-card-meta font-lora">
                    <span>📅 ${post.date}</span>
                    <span>⏱️ ${post.readTime}</span>
                </div>
                <div class="blog-card-author">
                    <img src="${post.author.avatar}" alt="${post.author.name}">
                    <span class="blog-card-author-name font-lora">${post.author.name}</span>
                </div>
            </div>
        </a>
    `;
    return card;
}

function getFullContent(slug) {
    const contents = {
        'tendencias-moda-primavera-2026': `A primavera de 2026 promete revolucionar o mundo da moda com uma mistura única de nostalgia e inovação. As passarelas internacionais revelaram tendências que mesclam o clássico com o contemporâneo de forma magistral.

## Cores da Estação

O roxo royal lidera a paleta de cores, trazendo sofisticação e elegância para qualquer look. Tons pastéis também marcam presença forte, especialmente lavanda, verde menta e rosa pêssego. O preto e branco continuam atemporais, mas agora com texturas e recortes inovadores.

## Peças Chave

As alfaiatarias oversized continuam em alta, mas agora com detalhes femininos e românticos. Vestidos midi com cortes assimétricos são a aposta certeira para quem busca elegância e modernidade. Não podemos esquecer das calças wide leg que alongam a silhueta e trazem conforto sem abrir mão do estilo.

## Acessórios em Destaque

Bolsas estruturadas em tamanhos médios são o acessório do momento. Óculos de sol oversized continuam essenciais, agora com armações coloridas. Sapatos de salto médio e quadrado dominam, equilibrando estilo e praticidade.`,

        'rotina-skincare-perfeita': `Uma pele radiante começa com uma rotina de skincare bem estruturada e consistente. Não se trata apenas de produtos caros, mas sim de escolher os ingredientes certos e aplicá-los na ordem correta.

## Passo 1: Limpeza Dupla

A limpeza dupla é essencial para remover completamente maquiagem, protetor solar e impurezas. Comece com um óleo de limpeza seguido de um gel ou espuma adequado ao seu tipo de pele.

## Passo 2: Tônico e Essências

O tônico reequilibra o pH da pele, enquanto as essências hidratam profundamente e preparam a pele para os próximos passos. Procure por ingredientes como ácido hialurônico e niacinamida.

## Passo 3: Séruns e Tratamentos

É aqui que você trata as preocupações específicas da sua pele. Vitamina C pela manhã para proteção antioxidante, retinol à noite para renovação celular.

## Passo 4: Hidratação e Proteção

Finalize sempre com um hidratante adequado e nunca esqueça o protetor solar durante o dia. A proteção solar é o anti-aging mais eficaz que existe.`,

        'maquiagem-profissional-casa': `Conseguir uma maquiagem impecável em casa é totalmente possível com as técnicas certas. A chave está em entender seu rosto e usar os produtos adequados.

## Preparação da Pele

Antes de qualquer produto de maquiagem, a pele precisa estar bem hidratada e com primer. Isso garante que a make dure mais e fique com acabamento profissional.

## Base e Correção

Escolha uma base com a cobertura ideal para sua necessidade. Use corretivo apenas onde necessário e sempre com leves batidinhas. O segredo é construir a cobertura gradualmente.

## Contorno e Iluminação

O contorno não precisa ser dramático para ser eficaz. Use tons apenas alguns tons mais escuros que sua pele e esfume bem. Ilumine os pontos altos do rosto para um glow natural.

## Olhos e Lábios

Para os olhos, comece sempre com uma sombra de transição. Para os lábios, use lápis antes do batom para maior duração e definição perfeita.`,

     'beleza-natural-sem-filtros': `Em um mundo de filtros e edições, abraçar sua beleza natural é um ato revolucionário. Sua essência é única e merece ser celebrada.

## Conheça Sua Pele

Entenda as necessidades reais da sua pele, não o que o marketing diz. Pele saudável é pele bem cuidada, não necessariamente sem imperfeições.

## Maquiagem que Realça

Use maquiagem para realçar, não esconder. Destaque seus pontos favoritos em vez de tentar mudar suas características.

## Aceitação Ativa

Beleza natural não significa falta de cuidado. É sobre cuidar de si mesma com amor e aceitar seu reflexo com gentileza.

## Comparação é Armadilha

Redes sociais não refletem realidade. Cada pessoa tem sua beleza única. Celebre a sua em vez de comparar com padrões irreais.`,


     'tratamentos-cabelo-danificado':  `Cabelos danificados podem ser recuperados com tratamentos caseiros eficazes e ingredientes naturais. A natureza oferece tudo que precisamos para revitalizar os fios.

## Máscaras Nutritivas

Abacate e azeite formam uma dupla poderosa para hidratação profunda. Misture meio abacate amassado com duas colheres de azeite extra virgem e aplique nos fios por 30 minutos.

## Cronograma Capilar

Alterne entre hidratação, nutrição e reconstrução. Cada etapa atende uma necessidade específica dos fios e juntas promovem a recuperação completa.

## Proteção Térmica

Antes de usar qualquer ferramenta de calor, proteja os fios. Óleos naturais como óleo de coco podem servir como proteção térmica leve.

## Corte Regular

Cortar as pontas regularmente não faz o cabelo crescer mais rápido, mas mantém a saúde dos fios e previne que o dano se espalhe.`,

    'lifestyle-wellness-equilibrio': `O verdadeiro bem-estar vem do equilíbrio entre corpo, mente e estilo de vida. Pequenas mudanças diárias podem transformar completamente sua qualidade de vida.

## Rituais Matinais

Comece o dia com intenção. Uma rotina matinal consistente que inclua hidratação, movimento e alguns minutos de meditação prepara você para um dia produtivo e equilibrado.

## Alimentação Consciente

Não se trata de dieta restritiva, mas de escolhas conscientes. Priorize alimentos integrais, coloridos e nutritivos. A beleza começa de dentro para fora.

## Movimento e Exercício

Encontre uma atividade física que você realmente goste. Pode ser yoga, dança, caminhada ou treino funcional. O importante é se mover com prazer.

## Sono de Qualidade

O sono é quando nosso corpo se regenera. Crie uma rotina noturna relaxante, evite telas antes de dormir e mantenha o quarto em temperatura agradável.`,


     'acessorios-essenciais-2026': `Acessórios são a alma de qualquer look. Eles têm o poder de transformar uma roupa básica em algo extraordinário e expressar sua personalidade única.

## Joias Atemporais

Invista em peças clássicas que nunca saem de moda. Um bom par de brincos de argola, um colar delicado e anéis minimalistas são a base de qualquer coleção.

## Bolsas para Cada Ocasião

Você precisa de pelo menos três tipos: uma tote para o dia a dia, uma clutch para eventos e uma crossbody para passeios. Qualidade é mais importante que quantidade.

## Óculos de Sol

Além de proteger os olhos, são um statement fashion. Escolha modelos que complementem o formato do seu rosto.

## Lenços e Echarpes

Versáteis e elegantes, podem ser usados no pescoço, cabelo, bolsa ou até como cinto. São perfeitos para adicionar cor e textura.`,


     'ingredientes-ativos-skincare': `Navegar pelo mundo dos ingredientes ativos pode ser confuso. Este guia simplifica e explica os principais ativos e como usá-los de forma eficaz.

## Ácidos: AHA e BHA

Os alfa-hidroxiácidos (AHA) como glicólico e lático são ideais para esfoliar a superfície da pele. Já os beta-hidroxiácidos (BHA) como o salicílico penetram nos poros, sendo perfeitos para pele oleosa.

## Retinoides

Considerado o padrão ouro do anti-aging, o retinol e seus derivados estimulam a renovação celular e produção de colágeno. Comece devagar e sempre use protetor solar.

## Vitamina C

Potente antioxidante que protege contra danos ambientais, ilumina a pele e uniformiza o tom. Use pela manhã antes do protetor solar.

## Niacinamida

Versátil e bem tolerada, a niacinamida controla oleosidade, minimiza poros, clareia manchas e fortalece a barreira cutânea.`,


     'fragancias-assinatura-pessoal': `Uma fragrância assinatura é mais que um perfume - é uma extensão da sua personalidade. Escolher a certa pode parecer desafiador, mas com as dicas certas fica mais fácil.

## Entenda as Famílias Olfativas

Existem quatro famílias principais: florais, orientais, frescas e amadeiradas. Cada uma possui características únicas que se adequam a diferentes personalidades e ocasiões.

## Teste Corretamente

Nunca compre um perfume sem testar na pele. Spray no pulso, espere 30 minutos e sinta como evolui. A química da sua pele altera a fragrância.

## Considere as Notas

Perfumes têm três notas: topo (primeira impressão), coração (personalidade) e fundo (duração). Todas devem te agradar para ser sua assinatura.

## Camadas de Fragrância

Use produtos da mesma linha (body lotion, shower gel) para fazer a fragrância durar mais tempo e ter melhor projeção.`,


     'penteados-tendencia-2026': `Penteados podem transformar completamente seu visual. Com as técnicas certas, você pode criar looks profissionais sem sair de casa.

## Ondas Naturais

O segredo está em usar um spray texturizador e amassar os fios enquanto seca. Para ondas mais definidas, use um babyliss grande com temperatura média.

## Coque Elegante

O coque baixo continua sendo o penteado mais elegante. O truque é não alisar demais - deixe alguns fios soltos para um look romântico e moderno.

## Tranças Modernas

Esqueça as tranças tradicionais. As tendências são tranças soltas, desfeitas e com volume. Puxe as mechas após trançar para criar dimensão.

## Rabo de Cavalo Alto

Clássico e poderoso. Use dois elásticos (um na raiz, outro no meio) para criar sustentação. Enrole uma mecha de cabelo no elástico para escondê-lo.`,


     'autocuidado-praticas-diarias': `Autocuidado não é luxo, é necessidade. Incorporar práticas diárias simples pode melhorar drasticamente sua qualidade de vida e bem-estar geral.

## Morning Routine

Acorde 30 minutos mais cedo. Use esse tempo para você: hidrate-se, estique o corpo, faça journaling ou simplesmente tome seu café em paz.

## Skincare como Ritual

Transforme sua rotina de skincare em um momento de conexão consigo mesma. Massageie cada produto com carinho, observe sua pele, agradeça seu corpo.

## Pausas Conscientes

Durante o dia, faça pausas para respirar profundamente. Mesmo 2 minutos de respiração consciente reduzem stress e aumentam foco.

## Gratidão Diária

Antes de dormir, liste mentalmente três coisas pelas quais é grata. Essa prática simples melhora o humor e a qualidade do sono.`,


     'guarda-roupa-capsula': `Um guarda-roupa cápsula simplifica sua vida e melhora seu estilo. Com peças bem escolhidas, você tem infinitas possibilidades de looks.

## Peças Essenciais

Comece com o básico: calça jeans de qualidade, calça preta, blazer bem cortado, camiseta branca perfeita, camisa branca clássica e um vestido coringa.

## Paleta de Cores

Escolha uma paleta neutra como base (preto, branco, bege, cinza) e adicione 2-3 cores accent que você ame e que funcionem bem juntas.

## Qualidade sobre Quantidade

Invista em peças de qualidade que durarão anos. Uma boa peça custa mais inicialmente, mas o custo por uso compensa.

## Combinações Infinitas

Cada peça deve combinar com pelo menos 3 outras. Isso maximiza opções e simplifica escolhas diárias.`,


  };

    return contents[slug] ;
}
