import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { YoutubeIcon, MenuIcon, CloseIcon } from './icons';

describe('YoutubeIcon', () => {
  it('renders an SVG with the youtube-icon class', () => {
    render(<YoutubeIcon />);
    const svg = document.querySelector('.youtube-icon');
    expect(svg).toBeInTheDocument();
    expect(svg?.tagName).toBe('svg');
  });
});

describe('MenuIcon', () => {
  it('renders an SVG with the menu-icon class', () => {
    render(<MenuIcon />);
    const svg = document.querySelector('.menu-icon');
    expect(svg).toBeInTheDocument();
  });
});

describe('CloseIcon', () => {
  it('renders an SVG with the close-icon class', () => {
    render(<CloseIcon />);
    const svg = document.querySelector('.close-icon');
    expect(svg).toBeInTheDocument();
  });
});
