import { useEffect, useState } from 'react';
import { ArrowRight, Mail, Linkedin, Phone } from 'lucide-react';

const roles = [
  'Application Support Engineer',
  'Incident Management Specialist',
  'Change Management Expert',
  'Security Operations Professional',
];

export default function Hero() {
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot" />
          Available for opportunities
        </div>

        <h1 className="hero-name">Bharath Kadimcherla</h1>

        <div className="hero-typed">
          <span className="typed-text">{text}</span>
          <span className="cursor">|</span>
        </div>

        <p className="hero-tagline">
          IT Professional with <strong>5+ years</strong> driving incident
          resolution, system reliability, and security operations in
          SLA-driven production environments. Reducing MTTR, stabilizing
          critical systems, and leading war-room response for high-severity outages.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Get in Touch <ArrowRight size={18} />
          </a>
          <a href="#experience" className="btn-secondary">
            View Experience
          </a>
        </div>

        <div className="hero-socials">
          <a href="mailto:kadimcherlabharat@outlook.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://www.linkedin.com/in/bharath" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="tel:+918501888785" aria-label="Phone">
            <Phone size={18} />
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-value">5+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-value">99.9%</span>
          <span className="stat-label">Uptime Maintained</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-value">40%</span>
          <span className="stat-label">MTTR Reduction</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-value">25%</span>
          <span className="stat-label">Fewer Recurring Incidents</span>
        </div>
      </div>
    </section>
  );
}
