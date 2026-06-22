import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import FeaturedVideo from './FeaturedVideo';

describe('FeaturedVideo', () => {
  it('renders the section with id "featured-video"', () => {
    const { container } = render(<FeaturedVideo />);
    const section = container.querySelector('#featured-video');
    expect(section).toBeInTheDocument();
  });

  it('renders the iframe with the correct YouTube embed URL', () => {
    render(<FeaturedVideo />);
    const iframe = screen.getByTitle('Abandoned Shipwrecks at The Strand | Kent Coastline from Above in 4K');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('src', 'https://www.youtube.com/embed/Yka1oKuwibY');
  });

  it('renders the video title', () => {
    render(<FeaturedVideo />);
    expect(screen.getByText('Abandoned Shipwrecks at The Strand | Kent Coastline from Above in 4K')).toBeInTheDocument();
  });
});
