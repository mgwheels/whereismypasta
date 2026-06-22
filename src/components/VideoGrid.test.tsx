import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import VideoGrid from './VideoGrid';

class MockIntersectionObserver {
  observe = vi.fn()
  unobserve = vi.fn()
  disconnect = vi.fn()
}

beforeAll(() => {
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver as unknown as typeof IntersectionObserver);
});

describe('VideoGrid', () => {
  it('renders the section heading', () => {
    render(<VideoGrid />);
    expect(screen.getByText('Highlights')).toBeInTheDocument();
  });

  it('renders all three video cards', () => {
    render(<VideoGrid />);
    const cards = document.querySelectorAll('.video-card');
    expect(cards).toHaveLength(3);
  });

  it('renders location badges on each card', () => {
    render(<VideoGrid />);
    expect(screen.getByText('Maldives')).toBeInTheDocument();
    expect(screen.getByText('Kent, UK')).toBeInTheDocument();
    expect(screen.getByText('Mauritius')).toBeInTheDocument();
  });

  it('links each card to the correct YouTube URL', () => {
    render(<VideoGrid />);
    expect(screen.getByText('You & Me Maldives | Overwater Villas with Slides in Stunning 4K').closest('a')).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=2aJifMdHYQY'
    );
    expect(screen.getByText('Bayham Abbey Ruins | Stunning 4K Aerial Views of Medieval History').closest('a')).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=GEfi1wsGIkc'
    );
    expect(screen.getByText('Mauritius Paradise | Sandbank & Little Island at Belle Mare in 4K').closest('a')).toHaveAttribute(
      'href',
      'https://www.youtube.com/watch?v=_lufnNXU6GI'
    );
  });

  it('opens video links in a new tab', () => {
    render(<VideoGrid />);
    const links = document.querySelectorAll('.video-card');
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
