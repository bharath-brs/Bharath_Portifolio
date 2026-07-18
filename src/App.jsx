import { useState } from "react";

const RESUME_URL = "/resume.pdf";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

export default function App() {
  const [toast, setToast] = useState(false);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = RESUME_URL;
    a.download = "resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setToast(true);
    window.setTimeout(() => setToast(false), 2600);
  };

  return (
    <main className="container">
      <section className="hero">
        <span className="eyebrow">Open to referrals</span>
        <h1>Hi, I'm a Software Engineer building thoughtful products.</h1>
        <p className="lead">
          If you're a recruiter or someone who can refer me, grab my resume below — it has
          everything you need to consider me for a role or pass it along.
        </p>
        <div className="actions">
          <button className="btn btn-primary" onClick={handleDownload}>
            <DownloadIcon />
            Download Resume
          </button>
          <a className="btn btn-ghost" href="mailto:you@example.com?subject=Referral">
            <MailIcon />
            Email me
          </a>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h3>What's in the resume</h3>
          <p>Experience, projects, skills, education, and contact details — one PDF, ready to forward.</p>
        </div>
        <div className="card">
          <h3>How to refer</h3>
          <p>Download the resume and share it with your hiring team, or forward it to a recruiter you know.</p>
        </div>
      </section>

      <p className="footer">Thanks for considering me — every referral means a lot.</p>

      <div className={`toast ${toast ? "show" : ""}`} role="status" aria-live="polite">
        Resume download started — check your browser.
      </div>
    </main>
  );
}
