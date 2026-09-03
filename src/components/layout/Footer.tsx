import { Link } from 'react-router-dom';
import { Code2, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'Software Development', to: '/services/software-development' },
  { label: 'Debugging', to: '/services/debugging-automation' },
  { label: 'Automation', to: '/services/debugging-automation' },
  { label: 'Data Support', to: '/services/data-digital-support' },
  { label: 'Content & Language', to: '/services/content-language' },
  { label: 'Quick Tasks', to: '/quick-task' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-500/10 border border-accent-500/20">
                <Code2 className="h-5 w-5 text-accent-400" />
              </div>
              <span className="font-display text-base font-bold text-white">
                DevAssist<span className="text-accent-400"> Studio</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ink-400 max-w-xs">
              Technology. Tasks. Solutions. Done Right.
            </p>
            <a
              href="mailto:calmpins15@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-ink-300 hover:text-accent-400 transition-colors"
            >
              <Mail className="h-4 w-4" />
              calmpins15@gmail.com
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-ink-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-ink-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Get Started</h3>
            <p className="mt-4 text-sm text-ink-400">
              Have a project or task in mind? Send the details and get a response.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-accent-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-600 transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-ink-400">© 2026 DevAssist Studio. All rights reserved.</p>
          <p className="text-sm text-ink-500">From code and debugging to data, content and everyday digital tasks.</p>
        </div>
      </div>
    </footer>
  );
}
