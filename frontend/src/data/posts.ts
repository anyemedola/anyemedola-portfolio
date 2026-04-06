export interface BlogPost {
  slug: string;
  primaryTag: string;
  tags: string[];
  title: { en: string; pt: string };
  subtitle: { en: string; pt: string };
  date: string;
  datetime: string;
  readTime: number;
  accentColor: string;
  icon: string;
  excerpt: { en: string; pt: string };
  body: {
    en: PostBody;
    pt: PostBody;
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
