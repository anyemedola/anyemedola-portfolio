const BASE_URL = 'https://anyemedola.com.br';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Any Medola',
  url: BASE_URL,
  image: `${BASE_URL}/any_blue_focus.JPG`,
  jobTitle: 'Full Stack Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'MIGMA',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ragusa, Sicily',
    addressCountry: 'IT',
  },
  nationality: 'Brazilian',
  sameAs: [
    'https://linkedin.com/in/dev-anyemedola',
    'https://github.com/anyemedola',
  ],
  knowsAbout: [
    'React.js', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript',
    'React Native', 'Firebase', 'PHP', 'MySQL', 'PostgreSQL',
    'UI/UX Design', 'Figma', 'Full Stack Development',
    'MUI', 'Tailwind CSS', 'Styled Components',
  ],
  alumniOf: [],
  description:
    'Full Stack Engineer based in Sicily, Italy, with 5+ years of experience building scalable web and mobile applications using React, Next.js, Node.js and Firebase.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Any Medola Portfolio',
  url: BASE_URL,
  description: 'Portfolio of Any Medola, Full Stack Engineer based in Sicily, Italy.',
  author: {
    '@type': 'Person',
    name: 'Any Medola',
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
