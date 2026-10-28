import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CircleCheck as CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'kadimcherlabharat@outlook.com',
    href: 'mailto:kadimcherlabharat@outlook.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 85018 88785',
    href: 'tel:+918501888785',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: '/in/dev-bharath',
    href: 'https://www.linkedin.com/in/dev-bharath/',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'India',
    href: null,
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const subject = data.get('subject');
    const message = data.get('message');

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      if (!response.ok) throw new Error('Failed to send');

      setSent(true);
      form.reset();
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="section-header">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Let's build <span>reliable systems</span> together</h2>
        <p className="section-subtitle">
          Whether it's incident response, reliability engineering, or a new opportunity — I'm always open to a conversation.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          {contactInfo.map((item) => (
            <a
              className="contact-card"
              key={item.label}
              href={item.href ?? undefined}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
            >
              <div className="contact-icon">{item.icon}</div>
              <div>
                <span className="contact-label">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" placeholder="What's this about?" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required placeholder="Your message..." />
          </div>
          <button
            type="submit"
            className={`form-submit ${sent ? 'sent' : ''} ${error ? 'error' : ''}`}
            disabled={sending}
          >
            {error ? (
              <>Something went wrong. Try again.</>
            ) : sent ? (
              <>
                <CheckCircle size={18} /> Message Sent
              </>
            ) : sending ? (
              <>Sending...</>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
