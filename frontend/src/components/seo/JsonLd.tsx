const BASE_URL = 'https://anyemedola.com.br';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Any Medola',
  url: BASE_URL,
  image: `${BASE_URL}/any_blue_focus.JPG`,
  jobTitle: 'Senior Front-End Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Capgemini',
    url: 'https://www.capgemini.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Milan',
    addressCountry: 'IT',
  },
  nationality: 'Brazilian',
  sameAs: [
    'https://linkedin.com/in/dev-anyemedola',
    'https://github.com/anyemedola',
  ],
  knowsAbout: [
    'React.js', 'Next.js', 'TypeScript', 'JavaScript',
    'UI/UX Design', 'Figma', 'Front-End Development',
    'MUI', 'Tailwind CSS', 'Styled Components',
  ],
  alumniOf: [],
  description:
    'Senior Front-End Developer based in Milan, Italy, with 5+ years of experience building scalable web applications using React, Next.js, and TypeScript.',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Any Medola Portfolio',
  url: BASE_URL,
  description: 'Portfolio of Any Medola, Senior Front-End Developer based in Milan, Italy.',
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
