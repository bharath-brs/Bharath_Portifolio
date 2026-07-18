const experiences = [
  {
    role: 'Member of Technical Staff',
    company: 'ZL Technologies',
    period: 'July 2023 – Feb 2026',
    highlights: [
      'Led production incident management for enterprise applications, ensuring 99.9%+ uptime of critical systems.',
      'Investigated L2/L3 escalations using Splunk log correlation across application, infrastructure, and network layers, reducing MTTR by 30-40% and recurring incidents by ~25%.',
      'Managed P1/P2 incidents, leading bridge calls and coordinating cross-functional teams to restore services with minimal business impact.',
      'Provided real-time stakeholder communication, sharing incident impact, progress updates, and ETAs during critical outages.',
      'Conducted Root Cause Analysis (RCA) and implemented permanent fixes, contributing to problem management and recurrence prevention.',
      'Supported change management (CAB) activities, validating releases and ensuring risk-controlled deployments.',
      'Performed threat validation and alert triage, tuning detection workflows and reducing false positives.',
      'Used Splunk for centralized monitoring and anomaly detection, aligned with ISO 27001 logging practices (A.12.4).',
      'Supported security incident handling aligned with ISO 27001 A.16, ensuring structured response and documentation.',
      'Participated in Disaster Recovery (DR) drills, validating failover readiness and RTO/RPO targets.',
    ],
    tags: ['Incident Management', 'Splunk', 'RCA', 'CAB', 'ISO 27001', 'DR Drills'],
  },
  {
    role: 'Associate (DevOps & Tech Support)',
    company: 'Social Tek',
    period: 'September 2021 – April 2023',
    highlights: [
      'Managed production incidents and service requests, ensuring timely resolution and system availability.',
      'Performed log-based troubleshooting using Splunk and system logs, identifying root causes and escalating critical issues.',
      'Developed Python scripts to automate log analysis, reducing manual effort by ~40%.',
      'Used Splunk dashboards and alerts to monitor application behaviour and detect early signs of failure.',
      'Collaborated with cross-functional teams to resolve issues and improve system reliability.',
      'Contributed to knowledge base documentation, improving resolution efficiency.',
      'Supported deployment and monitoring of applications using Docker and AWS ECS, contributing to improved uptime.',
      'Assisted in post-deployment validation and change verification, ensuring stable releases.',
    ],
    tags: ['Splunk', 'Python Automation', 'Docker', 'AWS ECS', 'Monitoring'],
  },
  {
    role: 'Analyst (L1 Support)',
    company: 'HCL Technologies',
    period: 'January 2020 – November 2020',
    highlights: [
      'Resolved user-reported issues within SLA timelines, ensuring consistent service delivery.',
      'Performed initial incident triage and escalation, reducing workload on L2/L3 teams.',
      'Managed incidents using ServiceNow, ensuring proper categorization, prioritization, and tracking.',
      'Documented known issues and solutions to improve resolution speed and consistency.',
    ],
    tags: ['ServiceNow', 'L1 Support', 'Incident Triage', 'SLA'],
  },
];

const education = [
  { institution: 'Adikavi Nannaya University', degree: 'Bachelor of Computer Applications (BCA)', period: '2019', detail: 'CGPA: 6.2' },
  { institution: 'Geetanjali Junior College', degree: 'Intermediate (MPC)', period: '2016', detail: '76.5%' },
  { institution: 'Pragati High School', degree: 'SSC', period: '2014', detail: 'CGPA: 8.8' },
];

const certifications = [
  { name: 'Python Programming', issuer: 'Udemy', status: 'Completed' },
  { name: 'SQL for Data Analysis', issuer: 'CareerNinja', status: 'Completed' },
  { name: 'Postman Student Expert', issuer: 'Postman', status: 'Completed' },
  { name: 'ISO 27001 Lead Implementer', issuer: '—', status: 'In Progress' },
  { name: 'Gen AI', issuer: 'UpGrad', status: 'Completed' },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-label">Career & Education</span>
        <h2 className="section-title">Professional <span>journey</span></h2>
        <p className="section-subtitle">
          From L1 support to leading mission-critical incident response — a trajectory of growing responsibility and impact.
        </p>
      </div>

      <div className="exp-layout">
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-marker">
                <div className="marker-dot" />
                {idx < experiences.length - 1 && <div className="marker-line" />}
              </div>
              <div className="timeline-card">
                <div className="timeline-top">
                  <h3>{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <span className="timeline-company">{exp.company}</span>
                <ul className="timeline-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="timeline-tags">
                  {exp.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="exp-sidebar">
          <div className="sidebar-card">
            <h3>Education</h3>
            {education.map((e) => (
              <div className="edu-item" key={e.institution}>
                <div className="edu-top">
                  <span className="edu-degree">{e.degree}</span>
                  <span className="edu-period">{e.period}</span>
                </div>
                <span className="edu-institution">{e.institution}</span>
                <span className="edu-detail">{e.detail}</span>
              </div>
            ))}
          </div>

          <div className="sidebar-card">
            <h3>Certifications</h3>
            {certifications.map((c) => (
              <div className="cert-item" key={c.name}>
                <div>
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-issuer">{c.issuer}</span>
                </div>
                <span className={`cert-status ${c.status === 'Completed' ? 'done' : 'progress'}`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
