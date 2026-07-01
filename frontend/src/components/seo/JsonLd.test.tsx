import React from 'react';
import { render } from '@testing-library/react';
import JsonLd from './JsonLd';

describe('JsonLd', () => {
  it('renders without crashing', () => {
    render(<JsonLd />);
  });

  it('renders exactly two script tags with type application/ld+json', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    expect(scripts).toHaveLength(2);
  });

  it('each script tag contains valid JSON', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script) => {
      expect(() => JSON.parse(script.innerHTML)).not.toThrow();
    });
  });

  it('includes a Person schema with the correct name', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    const schemas = Array.from(scripts).map((s) => JSON.parse(s.innerHTML));
    const person = schemas.find((s) => s['@type'] === 'Person');
    expect(person).toBeDefined();
    expect(person.name).toBe('Any Medola');
  });

  it('includes a WebSite schema with the correct url', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    const schemas = Array.from(scripts).map((s) => JSON.parse(s.innerHTML));
    const website = schemas.find((s) => s['@type'] === 'WebSite');
    expect(website).toBeDefined();
    expect(website.url).toBe('https://anyemedola.com.br');
  });

  it('Person schema includes a jobTitle', () => {
    const { container } = render(<JsonLd />);
    const scripts = container.querySelectorAll('script[type="application/ld+json"]');
    const schemas = Array.from(scripts).map((s) => JSON.parse(s.innerHTML));
    const person = schemas.find((s) => s['@type'] === 'Person');
    expect(person.jobTitle).toBe('Senior Front-End Developer');
  });
});
