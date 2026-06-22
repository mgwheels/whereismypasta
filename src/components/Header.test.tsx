import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

describe('Header', () => {
  it('renders the logo linking to home', () => {
    render(<Header />);
    const logo = screen.getByText('Airbourne Lens');
    expect(logo).toBeInTheDocument();
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });

  it('renders all nav links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('Locations')).toHaveAttribute('href', '/locations');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
  });

  it('renders a YouTube link with the channel URL', () => {
    render(<Header />);
    const link = screen.getByLabelText('YouTube channel');
    expect(link).toHaveAttribute('href', 'https://youtube.com/@AirbourneLens');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('shows the mobile menu when the toggle is clicked', async () => {
    render(<Header />);
    const toggle = screen.getByLabelText('Toggle menu');
    const user = userEvent.setup();

    expect(screen.getAllByText('About')).toHaveLength(1);

    await user.click(toggle);

    expect(screen.getAllByText('About')).toHaveLength(2);
  });
});
