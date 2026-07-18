import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    company: 'ZL Technologies',
    role: 'Member of Technical Staff',
    period: 'July 2023 – Feb 2026',
    type: 'work',
    highlights: [
      'Led production incident management ensuring 99.9%+ uptime for enterprise applications',
      'Investigated L2/L3 escalations via Splunk log correlation, reducing MTTR by 30–40% and recurring incidents by ~25%',
      'Managed P1/P2 incidents by leading bridge calls and coordinating cross-functional restoration teams',
      'Provided real-time stakeholder communication with impact summaries, progress updates, and ETAs during outages',
      'Conducted Root Cause Analysis (RCA) and implemented permanent fixes for problem management',
      'Supported CAB change management with release validation and risk-controlled deployments',
      'Performed threat validation and alert triage, tuning detection workflows to reduce false positives',
      'Participated in Disaster Recovery (DR) drills, validating failover readiness and RTO/RPO targets',
    ],
    tags: ['Splunk', 'P1/P2 Incidents', 'RCA', 'CAB', 'ISO 27001', 'DR Drills'],
  },
  {
    company: 'Social Tek',
    role: 'Associate – DevOps & Tech Support',
    period: 'May 2021 – April 2023',
    type: 'work',
    highlights: [
      'Managed production incidents and service requests ensuring timely resolution and system availability',
      'Performed log-based troubleshooting using Splunk, identifying root causes and escalating critical issues',
      'Developed Python scripts to automate log analysis, reducing manual effort by ~40%',
      'Monitored application behaviour using Splunk dashboards and alerts to detect early failure signals',
      'Supported deployment and monitoring of applications using Docker and AWS ECS',
      'Contributed to knowledge base documentation, improving team resolution efficiency',
    ],
    tags: ['Python Automation', 'Docker', 'AWS ECS', 'Splunk', 'DevOps'],
  },
  {
    company: 'HCL Technologies',
    role: 'Analyst – L1 Support',
    period: 'January 2020 – November 2020',
    type: 'work',
    highlights: [
      'Resolved user-reported issues within SLA timelines, ensuring consistent service delivery',
      'Performed initial incident triage and escalation, reducing workload on L2/L3 teams',
      'Managed incidents using ServiceNow with proper categorization, prioritization, and tracking',
      'Documented known issues and solutions to improve resolution speed and team consistency',
    ],
    tags: ['ServiceNow', 'SLA Management', 'L1 Support', 'ITIL'],
  },
];

const education = [
  {
    institution: 'Adikavi Nannaya University',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2019',
    detail: 'CGPA: 6.2',
  },
  {
    institution: 'Geetanjali Junior College',
    degree: 'Intermediate (MPC)',
    period: '2016',
    detail: '76.5%',
  },
];

const certifications = [
  { name: 'Python Programming', issuer: 'Udemy', status: 'Completed' },
  { name: 'SQL for Data Analysis', issuer: 'CareerNinja', status: 'Completed' },
  { name: 'Postman Student Expert', issuer: 'Postman', status: 'Completed' },
  { name: 'Gen AI', issuer: 'UpGrad', status: 'Completed' },
  { name: 'ISO 27001 Lead Implementer', issuer: 'In-Progress', status: 'In Progress' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-teal-400 font-mono text-sm tracking-widest mb-2">MY JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          <div className="mt-4 w-16 h-0.5 bg-teal-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase size={18} className="text-teal-400" />
              <h3 className="text-white font-semibold text-lg">Work History</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 bg-slate-950 border-2 border-teal-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                    </div>

                    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:border-teal-400/40 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h4 className="text-white font-bold text-lg">{exp.role}</h4>
                          <p className="text-teal-400 font-semibold">{exp.company}</p>
                        </div>
                        <span className="text-slate-400 text-sm bg-slate-700/50 px-3 py-1 rounded-full whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex gap-2 text-slate-400 text-sm leading-relaxed">
                            <span className="text-teal-400 mt-1.5 flex-shrink-0">▸</span>
                            {h}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 text-xs bg-teal-400/10 text-teal-400 border border-teal-400/20 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={18} className="text-teal-400" />
                <h3 className="text-white font-semibold text-lg">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 hover:border-teal-400/30 transition-colors">
                    <p className="text-white font-semibold text-sm">{edu.degree}</p>
                    <p className="text-teal-400 text-sm mt-1">{edu.institution}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-slate-500 text-xs">{edu.detail}</span>
                      <span className="text-slate-500 text-xs">{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award size={18} className="text-teal-400" />
                <h3 className="text-white font-semibold text-lg">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-teal-400/30 transition-colors flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{cert.name}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${cert.status === 'In Progress' ? 'bg-amber-400/10 text-amber-400 border border-amber-400/20' : 'bg-teal-400/10 text-teal-400 border border-teal-400/20'}`}>
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
