const skillGroups = [
  {
    category: 'Incident & Service Management',
    skills: [
      { name: 'P1/P2 Incident Handling', level: 95 },
      { name: 'Incident Lifecycle Management', level: 93 },
      { name: 'SLA/SLO Compliance', level: 90 },
      { name: 'Bridge Calls & Stakeholder Comms', level: 92 },
    ],
  },
  {
    category: 'Problem & Change Management',
    skills: [
      { name: 'Root Cause Analysis (RCA)', level: 90 },
      { name: 'Incident Trend Analysis', level: 85 },
      { name: 'Change Validation & CAB', level: 88 },
      { name: 'Post-Deployment Validation', level: 86 },
    ],
  },
  {
    category: 'Security & Compliance',
    skills: [
      { name: 'ISO 27001 (A.16, A.12, A.9)', level: 82 },
      { name: 'Security Incident Handling', level: 85 },
      { name: 'SIEM-Based Analysis (Splunk)', level: 90 },
    ],
  },
  {
    category: 'Technical Stack',
    skills: [
      { name: 'Splunk & Datadog', level: 90 },
      { name: 'AWS ECS & Docker', level: 80 },
      { name: 'Python Scripting', level: 82 },
      { name: 'SQL & Log Debugging', level: 85 },
      { name: 'Linux & Windows', level: 88 },
      { name: 'TCP/IP, DNS, HTTP/HTTPS', level: 85 },
    ],
  },
];

const tools = ['Splunk', 'Datadog', 'AWS ECS', 'Docker', 'Jenkins', 'Python', 'SQL', 'ServiceNow', 'Linux', 'Windows'];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-header">
        <span className="section-label">Skills & Expertise</span>
        <h2 className="section-title">Competencies that <span>drive reliability</span></h2>
        <p className="section-subtitle">
          A blend of process discipline, technical depth, and security awareness built across enterprise production environments.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.category}>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="tools-strip">
        {tools.map((tool) => (
          <span className="tool-chip" key={tool}>{tool}</span>
        ))}
      </div>
    </section>
  );
}
