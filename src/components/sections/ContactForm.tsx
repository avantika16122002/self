import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, AlertCircle, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { projectTypes, budgetRanges } from '@/data/content';

type FormState = {
  name: string;
  email: string;
  project_type: string;
  budget_range: string;
  deadline: string;
  message: string;
};

const initial: FormState = {
  name: '',
  email: '',
  project_type: '',
  budget_range: '',
  deadline: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.project_type) e.project_type = 'Please select a project type.';
    if (!form.message.trim()) e.message = 'Please describe your project or task.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const { error } = await supabase.from('project_inquiries').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        project_type: form.project_type,
        budget_range: form.budget_range || null,
        deadline: form.deadline || null,
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-success-500/20 bg-success-500/5 p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-success-500" />
        <h3 className="mt-5 text-xl font-semibold text-white">Request Received</h3>
        <p className="mt-2 text-sm text-ink-300 max-w-sm">
          Thanks! Your project request has been received. I'll review the details and get back to you.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === 'error' && (
        <div className="flex items-center gap-3 rounded-xl border border-error-500/20 bg-error-500/5 px-4 py-3">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-error-500" />
          <p className="text-sm text-error-500">
            Something went wrong. Please try again or email calmpins15@gmail.com directly.
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-200">
            Name <span className="text-accent-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => handleChange('name', e.target.value)}
            className={`w-full rounded-xl border bg-ink-900/50 px-4 py-3 text-sm text-white placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 ${
              errors.name
                ? 'border-error-500/40 focus:ring-error-500/30'
                : 'border-white/[0.08] focus:border-accent-500/40 focus:ring-accent-500/20'
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="mt-1.5 text-xs text-error-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-200">
            Email <span className="text-accent-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full rounded-xl border bg-ink-900/50 px-4 py-3 text-sm text-white placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 ${
              errors.email
                ? 'border-error-500/40 focus:ring-error-500/30'
                : 'border-white/[0.08] focus:border-accent-500/40 focus:ring-accent-500/20'
            }`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1.5 text-xs text-error-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="project_type" className="mb-2 block text-sm font-medium text-ink-200">
            Project Type <span className="text-accent-400">*</span>
          </label>
          <select
            id="project_type"
            value={form.project_type}
            onChange={(e) => handleChange('project_type', e.target.value)}
            className={`w-full rounded-xl border bg-ink-900/50 px-4 py-3 text-sm text-white transition-colors focus:outline-none focus:ring-2 ${
              errors.project_type
                ? 'border-error-500/40 focus:ring-error-500/30'
                : 'border-white/[0.08] focus:border-accent-500/40 focus:ring-accent-500/20'
            }`}
          >
            <option value="">Select a type...</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.project_type && <p className="mt-1.5 text-xs text-error-500">{errors.project_type}</p>}
        </div>

        <div>
          <label htmlFor="budget_range" className="mb-2 block text-sm font-medium text-ink-200">
            Budget Range
          </label>
          <select
            id="budget_range"
            value={form.budget_range}
            onChange={(e) => handleChange('budget_range', e.target.value)}
            className="w-full rounded-xl border border-white/[0.08] bg-ink-900/50 px-4 py-3 text-sm text-white transition-colors focus:border-accent-500/40 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          >
            <option value="">Select a range...</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="deadline" className="mb-2 block text-sm font-medium text-ink-200">
          Deadline
        </label>
        <input
          id="deadline"
          type="text"
          value={form.deadline}
          onChange={(e) => handleChange('deadline', e.target.value)}
          className="w-full rounded-xl border border-white/[0.08] bg-ink-900/50 px-4 py-3 text-sm text-white placeholder:text-ink-500 transition-colors focus:border-accent-500/40 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
          placeholder="e.g. 2 weeks, flexible, ASAP"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-200">
          Message <span className="text-accent-400">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className={`w-full resize-none rounded-xl border bg-ink-900/50 px-4 py-3 text-sm text-white placeholder:text-ink-500 transition-colors focus:outline-none focus:ring-2 ${
            errors.message
              ? 'border-error-500/40 focus:ring-error-500/30'
              : 'border-white/[0.08] focus:border-accent-500/40 focus:ring-accent-500/20'
          }`}
          placeholder="Describe your project, task, or problem in as much detail as possible..."
        />
        {errors.message && <p className="mt-1.5 text-xs text-error-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-6 py-4 text-sm font-medium text-white shadow-lg shadow-accent-500/20 transition-all hover:bg-accent-600 hover:shadow-accent-500/40 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Send Project Request
          </>
        )}
      </button>
    </form>
  );
}
