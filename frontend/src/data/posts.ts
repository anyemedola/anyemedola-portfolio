export interface BlogPost {
  slug: string;
  primaryTag: string;
  tags: string[];
  title: { en: string; pt: string; it?: string };
  subtitle: { en: string; pt: string; it?: string };
  date: string;
  datetime: string;
  readTime: number;
  accentColor: string;
  icon: string;
  coverImage?: string;
  excerpt: { en: string; pt: string; it?: string };
  body: {
    en: PostBody;
    pt: PostBody;
    it?: PostBody;
  };
}

export interface PostBody {
  intro: string;
  sections: PostSection[];
  closing: string;
  html?: string; // raw HTML from backoffice rich editor (API posts)
}

export interface PostSection {
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  code?: string;
  blockquote?: { text: string; cite?: string };
  pullquote?: string;
  list?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: 'inteira',
    primaryTag: 'Ensaio',
    tags: ['Identidade', 'Sicília'],
    accentColor: '#FF7C95',
    icon: '❧',
    title: {
      en: 'Whole',
      pt: 'Inteira',
      it: 'Intera',
    },
    subtitle: {
      en: "On identity, new beginnings, and the discovery that I don't have to choose between my parts to be who I am.",
      pt: 'Sobre identidade, recomeços e a descoberta de que não preciso escolher entre as minhas partes para ser quem sou.',
      it: "Sull'identità, i nuovi inizi e la scoperta che non ho bisogno di scegliere tra le mie parti per essere chi sono.",
    },
    coverImage: '/sunset-sea.jpg',
    date: 'Junho 2026',
    datetime: '2026-06-01',
    readTime: 6,
    excerpt: {
      en: 'I am made precisely of improbable encounters — an essay on identity, new beginnings, and the discovery that I don\'t have to choose between my parts to be who I am.',
      pt: 'Sou feita justamente dos encontros improváveis — um ensaio sobre identidade, recomeços e a descoberta de que não preciso escolher entre as minhas partes para ser quem sou.',
      it: 'Sono fatta proprio degli incontri improbabili — un saggio sull\'identità, i nuovi inizi e la scoperta che non devo scegliere tra le mie parti per essere chi sono.',
    },
    body: {
      pt: {
        intro: '',
        sections: [],
        closing: '',
        html: `<p><span style="float:left;font-family:'Bodoni Moda',serif;font-weight:700;font-size:84px;line-height:.76;color:#B5546A;padding:8px 12px 0 0">H</span>á algum tempo, eu acreditava que a vida exigia definições. Que era preciso escolher um lado, uma versão de si mesma, um caminho principal e permanecer nele. Como se a coerência fosse uma linha reta e não uma coleção de curvas.</p>

<p style="font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(26px,4vw,34px);line-height:1.25;color:#2E211F;text-align:center;margin:52px auto;max-width:540px">Hoje, percebo que sou feita justamente dos encontros improváveis.</p>

<p>Sou a mistura de um samba no fim de tarde de domingo com ABBA tocando numa noite de verão europeu. Amo gelato quase na mesma intensidade que amo açaí. Cresci acreditando que gostar de coisas tão diferentes era um sinal de indecisão, quando, na verdade, talvez fosse apenas uma forma mais ampla de experimentar o mundo.</p>

<p>Demorei para entender que não precisava escolher entre uma coisa e outra. Que podia abraçar o paradoxo.</p>

<p>Sou desenvolvedora de sistemas. Tenho fascínio por lógica, padrões e problemas complexos. Fiz três semestres de Física em uma universidade pública, encantada pela elegância das equações e pela forma como elas tentam explicar o universo. Mas também sou apaixonada por viagens, livros, escrita e histórias. Produzo conteúdo em três idiomas e encontro prazer tanto em organizar códigos quanto em organizar palavras.</p>

<p>Por muito tempo, achei que minha profissão deveria responder à pergunta: "Quem é você?". Até descobrir que ela responde apenas a uma parte dela.</p>

<div style="display:flex;align-items:center;gap:16px;margin:48px 0"><span style="flex:1;height:1px;background:#E2CDB8"></span><span style="color:#DDA94A;font-size:18px">✦</span><span style="flex:1;height:1px;background:#E2CDB8"></span></div>

<p style="font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(24px,3.4vw,30px);line-height:1.3;color:#2E211F;text-align:center;margin:0 auto 44px;max-width:520px">Essa descoberta não veio de forma tranquila.</p>

<p>No início deste ano, a vida me obrigou a encarar uma pergunta que eu evitava havia muito tempo: quem sou eu quando o meu cargo deixa de existir?</p>

<p>Quando um contrato de trabalho chegou ao fim, algo dentro de mim também pareceu se desfazer. Sem emprego, percebi que havia depositado uma parte perigosa da minha identidade naquilo que eu fazia para viver. E, quando essa estrutura desapareceu, eu já não sabia exatamente quem era.</p>

<p>A busca por uma nova oportunidade se tornou quase obsessiva. Eu acreditava que o próximo emprego preencheria o vazio, devolveria a segurança e restauraria a imagem que eu tinha de mim mesma. Mas, quanto mais eu procurava, mais percebia que estava tentando vender uma versão incompleta da minha própria história.</p>

<p>Foi durante esse processo — e atravessando um período em que a depressão quase me consumiu — que comecei a entender algo transformador: eu nunca fui apenas uma desenvolvedora frontend.</p>

<p>Eu era a pessoa que escrevia código, sim. Mas também era aquela que enxergava o produto pelos olhos do usuário. A que fazia perguntas sobre comportamento, experiência e significado. A que possuía uma sensibilidade natural para design, uma criatividade inquieta e uma curiosidade que ultrapassava qualquer descrição de cargo.</p>

<p>Passei tanto tempo tentando me encaixar em uma definição profissional que me esqueci de enxergar tudo o que existia ao redor dela.</p>

<p>Foi somente quando parei de tentar provar que era uma boa desenvolvedora e comecei a mostrar quem eu realmente era — os problemas que gosto de resolver, a forma como penso, a combinação improvável entre lógica e criatividade, técnica e sensibilidade — que algo mudou.</p>

<blockquote><p>Percebi que minha força nunca esteve em caber dentro de uma função específica. Ela sempre esteve na minha multiplicidade.</p></blockquote>

<p>Talvez eu devesse ter percebido isso antes.</p>

<p>Cresci entre extremos que nunca pareceram extremos para mim. Entre a cidade e o sítio. Entre a escola particular e os dias de dar comida aos porcos, andar a cavalo e voltar para casa com cheiro de terra. Entre o asfalto e a poeira, entre a tecnologia e a simplicidade da vida rural.</p>

<p>Talvez tenha sido ali que aprendi, sem perceber, que uma pessoa pode habitar mundos diferentes sem deixar de pertencer a nenhum deles.</p>

<p>Ainda assim, durante muitos anos, essa multiplicidade me incomodou. Chamei de indecisão aquilo que era curiosidade. Chamei de falta de personalidade aquilo que era amplitude. Julguei como defeito aquilo que hoje reconheço como uma das minhas maiores qualidades.</p>

<p>Passei tempo demais tentando me encaixar em definições simples, quando a verdade é que nunca fui simples. E não porque eu seja contraditória, mas porque sou humana.</p>

<p>Hoje entendo que somos mais do que os cargos que ocupamos, os diplomas que colecionamos ou as descrições que cabem em um perfil profissional. Somos também os livros que nos transformaram, as viagens que nos desafiaram, as conversas que nos marcaram, os lugares de onde viemos e os sonhos que insistimos em carregar.</p>

<div style="text-align:center;margin:56px auto;max-width:540px"><p style="font-family:'Bodoni Moda',serif;font-weight:700;font-size:clamp(26px,4vw,36px);line-height:1.25;color:#2E211F;margin:0 0 8px">Somos as nossas contradições.</p><p style="font-family:'Bodoni Moda',serif;font-weight:700;font-size:clamp(26px,4vw,36px);line-height:1.25;color:#B5546A;margin:0 0 8px">Somos os nossos paradoxos.</p><p style="font-family:'Bodoni Moda',serif;font-style:italic;font-weight:500;font-size:clamp(22px,3.2vw,28px);line-height:1.3;color:#6B554F;margin:0">Somos todas as versões de nós mesmos que aprendemos a aceitar.</p></div>

<p>Hoje, trocaria todos os adjetivos que usei para me diminuir por apenas um: <strong style="color:#C28A2C;font-weight:700">incrível</strong>.</p>

<p>Não porque eu faça tudo perfeitamente. Muito pelo contrário. Mas porque finalmente compreendi que não preciso escolher entre as minhas partes para ser inteira.</p>

<div style="background:#FFFBF5;border:1px solid #ECDBCB;border-radius:20px;padding:36px 40px;margin:44px 0;display:flex;flex-direction:column;gap:14px"><p style="margin:0;font-size:21px;color:#3A2A28">Posso amar <strong style="color:#B5546A;font-weight:600">samba e ABBA</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso escolher entre <strong style="color:#B5546A;font-weight:600">gelato e açaí</strong> dependendo do dia.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso escrever <strong style="color:#B5546A;font-weight:600">códigos e histórias</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso ser <strong style="color:#B5546A;font-weight:600">racional e criativa</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso ser <strong style="color:#B5546A;font-weight:600">técnica e sensível</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso ser <strong style="color:#B5546A;font-weight:600">muitas coisas ao mesmo tempo</strong>.</p></div>

<p>E talvez a maior liberdade da vida seja justamente essa: descobrir que não precisamos nos reduzir para caber nas expectativas dos outros. Podemos carregar todas as nossas versões conosco, misturá-las, reinventá-las e, ainda assim, continuar exatamente quem somos.</p>

<p style="font-family:'Bodoni Moda',serif;font-style:italic;font-weight:500;font-size:clamp(24px,3.6vw,34px);line-height:1.3;color:#2E211F;text-align:center;margin:52px auto 0;max-width:560px">Ou melhor: nos tornar, a cada dia, mais de quem sempre fomos.</p>

<div style="display:flex;align-items:center;gap:16px;justify-content:center;margin:60px 0 0"><span style="flex:0 0 40px;height:1px;background:#E2CDB8"></span><span style="font-family:'Bodoni Moda',serif;font-style:italic;font-size:24px;color:#B5546A">Any</span><span style="flex:0 0 40px;height:1px;background:#E2CDB8"></span></div>`,
      },
      en: {
        intro: '',
        sections: [],
        closing: '',
        html: `<p>This essay was written in Portuguese. <a href="/blog/inteira">Read the original.</a></p>`,
      },
      it: {
        intro: '',
        sections: [],
        closing: '',
        html: `<p>Questo saggio è stato scritto in portoghese. <a href="/blog/inteira">Leggi l'originale.</a></p>`,
      },
    },
  },
  {
    slug: 'post-1',
    primaryTag: 'Tech & Dev',
    tags: ['React', 'Front-End'],
    accentColor: '#4DB89E',
    icon: '⌨️',
    title: {
      en: 'Your Post Title Goes Here — Make It Compelling',
      pt: 'O Título do Seu Post Vai Aqui — Deixe-o Convincente',
    },
    subtitle: {
      en: 'A subtitle that gives context to the article. One or two sentences that expand on the title and hook the reader.',
      pt: 'Um subtítulo que dá contexto ao artigo. Uma ou duas frases que expandem o título e prendem o leitor.',
    },
    date: 'Jan 2025',
    datetime: '2025-01-01',
    readTime: 8,
    excerpt: {
      en: 'A short excerpt that gives the reader a taste of what the article is about. Two or three sentences is ideal.',
      pt: 'Um trecho curto que dá ao leitor uma ideia do que o artigo é. Duas ou três frases é o ideal.',
    },
    body: {
      en: {
        intro: "This is where your article begins. The opening paragraph should hook the reader and give them a clear sense of what they'll learn or gain from reading this piece. Keep it conversational and direct.",
        sections: [
          {
            heading: 'First Section Title',
            paragraphs: [
              "Each section should flow naturally from the one before it. Use clear, accessible language — your readers have different backgrounds, and great writing is inclusive by default.",
              "You can include code snippets to illustrate technical concepts:",
            ],
            code: `// Example: a simple custom hook
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};`,
          },
          {
            heading: 'What I Learned From This',
            paragraphs: ["This is a great spot for a blockquote — something that summarizes a key insight or a lesson that shaped your thinking:"],
            blockquote: {
              text: "The best front-end code is the kind that users never have to think about — it just works, beautifully.",
              cite: '— Any Medola',
            },
            pullquote: "Accessibility isn't a feature — it's a foundation. Build it in from the start, not as an afterthought.",
            subheading: 'Key Takeaways',
            list: [
              'First key point from the article goes here.',
              'Second insight — keep it concise and actionable.',
              'Third takeaway that the reader can apply right away.',
            ],
          },
        ],
        closing: "Your closing paragraph wraps everything up. Invite the reader to try something, leave a comment, or follow you for more. Keep it warm and personal — people connect with people, not with content factories.",
      },
      pt: {
        intro: "Aqui é onde o seu artigo começa. O parágrafo de abertura deve prender o leitor e dar-lhe uma ideia clara do que aprenderá ao ler este texto. Mantenha um tom conversacional e direto.",
        sections: [
          {
            heading: 'Título da Primeira Seção',
            paragraphs: [
              "Cada seção deve fluir naturalmente da anterior. Use linguagem clara e acessível — seus leitores têm diferentes backgrounds, e uma boa escrita é inclusiva por padrão.",
              "Você pode incluir trechos de código para ilustrar conceitos técnicos:",
            ],
            code: `// Exemplo: um custom hook simples
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};`,
          },
          {
            heading: 'O Que Aprendi Com Isso',
            paragraphs: ["Este é um ótimo lugar para uma citação em destaque — algo que resume um insight importante:"],
            blockquote: {
              text: "O melhor código front-end é aquele com o qual os usuários nunca precisam se preocupar — simplesmente funciona, lindamente.",
              cite: '— Any Medola',
            },
            pullquote: "Acessibilidade não é uma funcionalidade — é uma fundação. Construa desde o início, não como um afterthought.",
            subheading: 'Pontos Principais',
            list: [
              'Primeiro ponto principal do artigo vai aqui.',
              'Segundo insight — seja conciso e prático.',
              'Terceiro ponto que o leitor pode aplicar imediatamente.',
            ],
          },
        ],
        closing: "O parágrafo final resume tudo. Convide o leitor a experimentar algo, deixar um comentário ou te seguir para mais conteúdo. Mantenha um tom caloroso e pessoal.",
      },
    },
  },
  {
    slug: 'post-2',
    primaryTag: 'UI/UX',
    tags: ['Design', 'Figma'],
    accentColor: '#C43560',
    icon: '✏️',
    title: { en: 'Your Post Title Goes Here', pt: 'O Título do Seu Post Vai Aqui' },
    subtitle: { en: 'A subtitle that gives context to the article.', pt: 'Um subtítulo que dá contexto ao artigo.' },
    date: 'Feb 2025',
    datetime: '2025-02-01',
    readTime: 6,
    excerpt: {
      en: 'A short excerpt that gives the reader a taste of what the article is about.',
      pt: 'Um trecho curto que dá ao leitor uma ideia do que o artigo é.',
    },
    body: {
      en: { intro: 'Coming soon.', sections: [], closing: '' },
      pt: { intro: 'Em breve.', sections: [], closing: '' },
    },
  },
  {
    slug: 'post-3',
    primaryTag: 'Career & Life',
    tags: ['Europe', 'Dev Life'],
    accentColor: '#8B7355',
    icon: '🌍',
    title: { en: 'Your Post Title Goes Here', pt: 'O Título do Seu Post Vai Aqui' },
    subtitle: { en: 'A subtitle that gives context to the article.', pt: 'Um subtítulo que dá contexto ao artigo.' },
    date: 'Mar 2025',
    datetime: '2025-03-01',
    readTime: 5,
    excerpt: {
      en: 'A short excerpt that gives the reader a taste of what the article is about.',
      pt: 'Um trecho curto que dá ao leitor uma ideia do que o artigo é.',
    },
    body: {
      en: { intro: 'Coming soon.', sections: [], closing: '' },
      pt: { intro: 'Em breve.', sections: [], closing: '' },
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
