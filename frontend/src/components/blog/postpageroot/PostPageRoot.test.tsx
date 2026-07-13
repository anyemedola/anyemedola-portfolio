import { render, screen } from '@testing-library/react';
import PostPageRoot from './PostPageRoot';

describe('PostPageRoot', () => {
  it('renders without crashing', () => {
    render(<PostPageRoot>content</PostPageRoot>);
  });

  it('renders its children', () => {
    render(
      <PostPageRoot>
        <span data-testid="child">hello</span>
      </PostPageRoot>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
