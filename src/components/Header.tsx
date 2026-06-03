import { useState } from 'react';
import { YoutubeIcon, MenuIcon, CloseIcon } from './icons';
import './Header.css';

const CHANNEL_URL = 'https://youtube.com/@AirbourneLens';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Videos', href: '/videos' },
  { label: 'About', href: '/about' },
];

function Logo() {
  return (
    <a href="/" className="logo">
      <img src="/assets/logo.jpg" alt="Airbourne Lens" className="logo-img" />
      <span className="logo-text">Airbourne Lens</span>
    </a>
  );
}

function DesktopNav() {
  return (
    <nav className="desktop-nav">
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} className="nav-link">
          {link.label}
        </a>
      ))}
      <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="youtube-link" aria-label="YouTube channel">
        <YoutubeIcon />
      </a>
    </nav>
  );
}

function MobileToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button className="mobile-toggle" onClick={onToggle} aria-label="Toggle menu">
      {open ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <nav className="mobile-nav">
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} className="mobile-nav-link" onClick={onClose}>
          {link.label}
        </a>
      ))}
      <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="mobile-youtube-link" onClick={onClose}>
        <YoutubeIcon /> YouTube
      </a>
    </nav>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Logo />
        <DesktopNav />
        <MobileToggle open={open} onToggle={() => setOpen(!open)} />
      </div>
      {open && <MobileNav onClose={() => setOpen(false)} />}
    </header>
  );
}
