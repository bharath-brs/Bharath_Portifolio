import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const roles = [
  'Production Support Engineer',
  'ITIL Incident Management Expert',
  'Change Management Lead',
  'Enterprise Reliability Architect',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/20 via-slate-950 to-slate-950" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-400/5 animate-float"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 8 + 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <p className="text-teal-400 text-sm font-mono tracking-widest mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          Bharath{' '}
          <span className="text-teal-400">Kadimcherla</span>
        </h1>

        <div className="h-8 md:h-10 mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <p className="text-xl md:text-2xl text-slate-300 font-light">
            <span>{displayed}</span>
            <span className="inline-block w-0.5 h-6 bg-teal-400 ml-1 animate-blink" />
          </p>
        </div>

        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          5+ years of ITIL-based incident, change, and problem management. Proven expertise in 30–40% MTTR reduction, 99.9%+ uptime, and leading cross-functional war-room resolution for mission-critical systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-8 py-3 rounded transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            onClick={(e) => { e.preventDefault(); document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="border border-slate-600 hover:border-teal-400 text-slate-300 hover:text-teal-400 font-medium px-8 py-3 rounded transition-all duration-200"
          >
            View Experience
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          {[
            { icon: <Mail size={18} />, href: 'mailto:kadimcherlabharat@outlook.com', label: 'Email' },
            { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/bharath', label: 'LinkedIn' },
            { icon: <Phone size={18} />, href: 'tel:+918501888785', label: 'Phone' },
            { icon: <Github size={18} />, href: 'https://github.com/bharath-brs', label: 'GitHub' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:border-teal-400 hover:text-teal-400 transition-all duration-200 hover:-translate-y-0.5"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-teal-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
