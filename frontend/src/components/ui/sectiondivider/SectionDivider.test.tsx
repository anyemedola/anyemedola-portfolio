import { render } from '@testing-library/react';
import SectionDivider from './SectionDivider';

describe('SectionDivider', () => {
  it('renders without crashing', () => {
    render(<SectionDivider />);
  });

  it('renders as an aria-hidden decorative element', () => {
    const { container } = render(<SectionDivider />);
    const el = container.querySelector('[aria-hidden="true"]');
    expect(el).toBeInTheDocument();
  });
});
