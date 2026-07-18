import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
        <span className="logo-mark">BK</span>
      </a>
      <div className={`nav-links ${open ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>
          Get in Touch
        </a>
      </div>
      <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}
