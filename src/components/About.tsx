import { Shield, Zap, Users, TrendingDown } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '99.9%', label: 'Uptime Maintained' },
  { value: '40%', label: 'MTTR Reduction' },
  { value: '25%', label: 'Incident Recurrence Drop' },
];

const highlights = [
  {
    icon: <Zap size={20} />,
    title: 'Rapid Incident Response',
    desc: 'Lead war-room bridge calls for P1/P2 incidents, coordinating cross-functional teams to restore services with minimal business disruption.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Security-Aligned Operations',
    desc: 'Operate with ISO 27001 awareness, handling security incidents, SIEM-based log analysis, and threat validation through Splunk.',
  },
  {
    icon: <TrendingDown size={20} />,
    title: 'Root Cause Excellence',
    desc: 'Conduct deep-dive RCAs using Splunk log correlation across application, infrastructure, and network layers to prevent recurrence.',
  },
  {
    icon: <Users size={20} />,
    title: 'Stakeholder Communication',
    desc: 'Deliver real-time impact updates and ETAs during critical outages, maintaining trust with engineering, ops, and business stakeholders.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-teal-400 font-mono text-sm tracking-widest mb-2">GET TO KNOW ME</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="mt-4 w-16 h-0.5 bg-teal-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm an IT professional with over <span className="text-teal-400 font-semibold">5 years of hands-on experience</span> in Application and Production Support, leading end-to-end P1/P2 incident management in global, SLA-driven environments. I act as a central escalation point driving rapid resolution and minimizing business impact.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My expertise spans ITIL-based Incident, Change, and Problem Management. I specialize in troubleshooting complex production issues using Splunk and cross-layer analysis, creating RFC-based changes in Jira with impact analysis and risk assessment, and conducting Root Cause Analysis to prevent recurrence.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I excel at leading bridge calls during critical outages, coordinating cross-functional teams (DevOps, Engineering, Business), executing controlled region-wise releases aligned with ISO 27001 risk-based practices, and maintaining high-availability systems with 99.9%+ uptime.
            </p>
            <div className="pt-4 flex flex-wrap gap-3">
              {['ITIL Framework', 'Splunk', 'RFC & CAB', 'RCA', 'AWS ECS', 'Docker', 'ISO 27001', 'Jira'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm bg-teal-400/10 text-teal-400 border border-teal-400/20 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-teal-400/50 transition-colors">
                  <div className="text-3xl font-bold text-teal-400 mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-teal-400/30 transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 group-hover:bg-teal-400/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
