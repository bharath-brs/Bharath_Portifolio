import { AlertCircle, CheckCircle2, RefreshCw, FileText } from 'lucide-react';

const processes = [
  {
    icon: <AlertCircle size={24} />,
    title: 'Incident Management',
    description: 'End-to-end detection, triage, and resolution of P1/P2 incidents in SLA-driven environments. Act as central escalation point, leading bridge calls and coordinating cross-functional teams (DevOps, Engineering, Business) to restore services with minimal business impact.',
    details: [
      'P1/P2 Incident Handling & Escalation Management',
      'Detection → Triage → Resolution → RCA lifecycle',
      'SLA/SLO Compliance & TAT Tracking',
      'War Room & Bridge Call Leadership',
      'Splunk-based L2/L3 escalation investigation',
      'MTTR reduction by 30–40% through log correlation',
      'Real-time stakeholder communication',
    ],
    color: 'from-red-500/20 to-red-600/20',
    accent: 'text-red-400',
    border: 'border-red-500/30',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Change Management',
    description: 'ITIL-based change lifecycle using RFC creation, impact analysis, risk assessment, CAB coordination, and controlled releases. Aligned with ISO 27001 Clause 6 risk-based planning to ensure high change success rates and minimal post-deployment incidents.',
    details: [
      'RFC Creation in Jira with detailed impact analysis',
      'Risk Assessment & Rollback Planning',
      'CAB (Change Advisory Board) Coordination',
      'Change Communication & Stakeholder Approval',
      'Primary implementer for approved changes',
      'Release validation and post-deployment monitoring',
      'Region-wise controlled deployments',
      'ISO 27001 Clause 6 compliance',
    ],
    color: 'from-blue-500/20 to-blue-600/20',
    accent: 'text-blue-400',
    border: 'border-blue-500/30',
  },
  {
    icon: <CheckCircle2 size={24} />,
    title: 'Problem Management',
    description: 'Root Cause Analysis and systematic problem management to prevent incident recurrence. Identify patterns, implement permanent fixes, and contribute to knowledge base for continuous improvement and operational excellence.',
    details: [
      'Root Cause Analysis (RCA) methodology',
      'Incident trend analysis & recurrence prevention',
      'Permanent fix implementation',
      'Problem categorization & severity assessment',
      'Knowledge base & SOP documentation',
      'Repeat incident prevention strategies',
      'Cross-functional problem resolution',
      'Post-incident review & learning capture',
    ],
    color: 'from-green-500/20 to-green-600/20',
    accent: 'text-green-400',
    border: 'border-green-500/30',
  },
  {
    icon: <FileText size={24} />,
    title: 'Security Incident Handling',
    description: 'Structured security incident response aligned with ISO 27001 A.16 controls. Includes detection, triage, escalation, investigation, and post-incident documentation to ensure compliance and minimize security impact.',
    details: [
      'ISO 27001 A.16 Incident Management controls',
      'Security threat detection & validation',
      'Alert triage & false positive reduction',
      'SIEM-based analysis (Splunk)',
      'Structured security incident response',
      'Log monitoring & correlation',
      'Incident documentation & compliance',
      'Disaster Recovery (DR) drills & RTO/RPO validation',
    ],
    color: 'from-purple-500/20 to-purple-600/20',
    accent: 'text-purple-400',
    border: 'border-purple-500/30',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-teal-400 font-mono text-sm tracking-widest mb-2">CORE PROCESSES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">ITIL Expertise</h2>
          <div className="mt-4 w-16 h-0.5 bg-teal-400 mx-auto" />
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Specialized in implementing ITIL best practices for incident, change, and problem management in production environments. Proven expertise in driving system reliability and operational excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {processes.map((process, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br ${process.color} border ${process.border} rounded-xl p-8 hover:border-teal-400/60 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 ${process.accent} mb-4 group-hover:scale-110 transition-transform`}>
                {process.icon}
              </div>

              <h3 className="text-white font-bold text-xl mb-3 group-hover:text-teal-400 transition-colors">
                {process.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-5">
                {process.description}
              </p>

              <div className="space-y-2">
                {process.details.map((detail, j) => (
                  <div key={j} className="flex gap-2.5 items-start">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${process.accent}`} />
                    <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 border border-slate-800 rounded-xl p-8 md:p-12">
          <h3 className="text-white font-bold text-xl mb-6">Key Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                metric: '99.9%+',
                label: 'Uptime Maintained',
                desc: 'Enterprise application availability through structured incident management',
              },
              {
                metric: '30–40%',
                label: 'MTTR Reduction',
                desc: 'Splunk-based log correlation and cross-layer analysis',
              },
              {
                metric: '~25%',
                label: 'Incident Recurrence Drop',
                desc: 'Through systematic RCA and problem management practices',
              },
              {
                metric: 'High',
                label: 'Change Success Rate',
                desc: 'ISO 27001 aligned risk-based change planning & execution',
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-700 rounded-lg p-6 hover:border-teal-400/40 transition-colors">
                <div className="text-teal-400 font-bold text-3xl mb-1">{item.metric}</div>
                <div className="text-white font-semibold text-sm mb-2">{item.label}</div>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
