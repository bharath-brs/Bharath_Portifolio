import { Activity, Cloud, Database, Lock, Code2, Network } from 'lucide-react';

const skillGroups = [
  {
    icon: <Activity size={22} />,
    category: 'Incident & Service Management',
    skills: [
      { name: 'P1/P2 Incident Handling', level: 95 },
      { name: 'SLA/SLO Compliance', level: 92 },
      { name: 'Incident Bridge Calls', level: 90 },
      { name: 'End-to-End Incident Lifecycle', level: 93 },
    ],
  },
  {
    icon: <Lock size={22} />,
    category: 'Security & Compliance',
    skills: [
      { name: 'ISO 27001 Controls', level: 80 },
      { name: 'SIEM / Splunk Analysis', level: 88 },
      { name: 'Security Incident Handling', level: 85 },
      { name: 'Threat Validation & Triage', level: 82 },
    ],
  },
  {
    icon: <Cloud size={22} />,
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS ECS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Jenkins', level: 72 },
      { name: 'Datadog', level: 78 },
    ],
  },
  {
    icon: <Database size={22} />,
    category: 'Monitoring & Data',
    skills: [
      { name: 'Splunk', level: 90 },
      { name: 'SQL (Querying & Debug)', level: 82 },
      { name: 'Log Correlation', level: 88 },
      { name: 'Anomaly Detection', level: 85 },
    ],
  },
  {
    icon: <Code2 size={22} />,
    category: 'Scripting & Automation',
    skills: [
      { name: 'Python', level: 78 },
      { name: 'Log Parsing Automation', level: 82 },
      { name: 'Shell / Linux CLI', level: 80 },
      { name: 'ServiceNow', level: 85 },
    ],
  },
  {
    icon: <Network size={22} />,
    category: 'Systems & Networking',
    skills: [
      { name: 'TCP/IP, DNS, HTTP/HTTPS', level: 82 },
      { name: 'Linux / Windows', level: 85 },
      { name: 'Disaster Recovery', level: 78 },
      { name: 'Change / CAB Management', level: 88 },
    ],
  },
];

const tools = [
  'Splunk', 'Datadog', 'ServiceNow', 'AWS ECS', 'Docker', 'Jenkins',
  'Postman', 'Python', 'SQL', 'Linux', 'ISO 27001', 'RCA', 'CAB', 'ITIL',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-teal-400 font-mono text-sm tracking-widest mb-2">WHAT I BRING</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Core Skills</h2>
          <div className="mt-4 w-16 h-0.5 bg-teal-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-teal-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 group-hover:bg-teal-400/20 transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-white font-semibold text-sm leading-tight">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-teal-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-slate-500 text-sm mb-5 font-mono">TOOLS & TECHNOLOGIES</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-slate-900 border border-slate-700 text-slate-300 rounded-full text-sm hover:border-teal-400/60 hover:text-teal-400 transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
