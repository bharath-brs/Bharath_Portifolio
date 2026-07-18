import { Shield, Activity, Users, TrendingDown } from 'lucide-react';

const highlights = [
  {
    icon: <Shield size={22} />,
    title: 'Incident Command',
    desc: 'Led P1/P2 incident bridges across Engineering, DevOps, and Operations to restore services fast.',
  },
  {
    icon: <Activity size={22} />,
    title: 'System Reliability',
    desc: 'Maintained 99.9%+ uptime through proactive monitoring, RCA, and recurrence prevention.',
  },
  {
    icon: <Users size={22} />,
    title: 'Stakeholder Communication',
    desc: 'Delivered real-time impact, progress, and ETAs during critical outages to all stakeholders.',
  },
  {
    icon: <TrendingDown size={22} />,
    title: 'MTTR Reduction',
    desc: 'Drove 30-40% MTTR reduction via Splunk log correlation and automated triage workflows.',
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="section-header">
        <span className="section-label">About Me</span>
        <h2 className="section-title">The engineer behind <span>stable systems</span></h2>
        <p className="section-subtitle">
          Bridging the gap between incidents and reliability through structured response, deep analysis, and cross-team coordination.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm an IT professional with over 5 years of experience in
            Application Support, Product Support, and Security Operations.
            I specialize in Incident, Problem, and Change Management within
            SLA-driven production environments.
          </p>
          <p>
            As a central escalation point for mission-critical incidents,
            I drive resolution across Engineering, DevOps, and Operations
            teams. My focus is on reducing MTTR, stabilizing production
            systems, and handling high-severity incidents with calm precision.
          </p>
          <p>
            With hands-on experience in SIEM platforms, Splunk-based log
            analysis, and cloud environments, I bring a security-first
            mindset to incident response, RCA, and system reliability.
          </p>
          <p>
            I'm recognized for leading war-room calls, managing stakeholder
            communication, and ensuring business continuity during critical
            outages — turning chaos into structure.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((h) => (
            <div className="highlight-card" key={h.title}>
              <div className="highlight-icon">{h.icon}</div>
              <div>
                <h4>{h.title}</h4>
                <p>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
