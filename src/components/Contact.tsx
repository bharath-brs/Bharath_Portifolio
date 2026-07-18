import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

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
    value: '/in/bharath',
    href: 'https://www.linkedin.com/in/bharath',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'India',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:kadimcherlabharat@outlook.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-teal-400 font-mono text-sm tracking-widest mb-2">LET'S CONNECT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="mt-4 w-16 h-0.5 bg-teal-400 mx-auto" />
          <p className="text-slate-400 mt-6 max-w-lg mx-auto">
            Open to new opportunities, collaborations, or just a conversation about production reliability and incident management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Let's work together</h3>
              <p className="text-slate-400 leading-relaxed">
                Whether you need an experienced Application Support Engineer, incident management leadership, or someone to own your production reliability — I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-slate-800/60 border border-slate-700 rounded-xl hover:border-teal-400/40 transition-colors group">
                  <div className="w-10 h-10 bg-teal-400/10 rounded-lg flex items-center justify-center text-teal-400 flex-shrink-0 group-hover:bg-teal-400/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-slate-200 hover:text-teal-400 transition-colors text-sm font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-6">
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently <span className="text-teal-400 font-semibold">open to opportunities</span> in Application Support, Site Reliability Engineering, or Security Operations roles.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1.5">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Job Opportunity / Collaboration"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-sm mb-1.5">Message</label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about the opportunity or how I can help..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-teal-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-teal-500/25"
            >
              {submitted ? (
                <>
                  <CheckCircle size={18} />
                  Message Sent!
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <footer className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 Bharath Kadimcherla. All rights reserved.
        </p>
        <p className="text-slate-600 text-sm">
          Built with React & Tailwind CSS
        </p>
      </footer>
    </section>
  );
}
