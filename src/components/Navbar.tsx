import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 text-teal-400 font-bold text-xl tracking-tight hover:text-teal-300 transition-colors"
        >
          <Terminal size={22} />
          <span>BK</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-slate-300 hover:text-teal-400 transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:kadimcherlabharat@outlook.com"
          className="hidden md:inline-flex items-center gap-2 border border-teal-400 text-teal-400 px-4 py-2 rounded text-sm font-medium hover:bg-teal-400/10 transition-all duration-200"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-700/50">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-slate-300 hover:text-teal-400 transition-colors text-base font-medium w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="mailto:kadimcherlabharat@outlook.com"
                className="inline-flex border border-teal-400 text-teal-400 px-4 py-2 rounded text-sm font-medium hover:bg-teal-400/10 transition-all"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
