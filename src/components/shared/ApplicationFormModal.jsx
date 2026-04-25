import { Send, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  experience: '',
  portfolio: '',
  coverLetter: '',
};

const APPLICATION_ENDPOINT = 'https://hrms.shivadityainfotech.com/api/job-applications';

const ApplicationFormModal = ({ opening, onClose }) => {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const isValid = useMemo(() => {
    return (
      form.name.trim() &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.phone.trim() &&
      form.experience.trim() &&
      form.coverLetter.trim().length > 20
    );
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isValid) return;

    setSubmitting(true);
    setSubmitted(false);
    setSubmitError('');

    try {
      const response = await fetch(APPLICATION_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: opening.title,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          experience: form.experience.trim(),
          portfolio: form.portfolio.trim(),
          coverLetter: form.coverLetter.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Application request failed with status ${response.status}`);
      }

      setSubmitting(false);
      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      setSubmitting(false);
      setSubmitted(false);
      setSubmitError('We could not submit your application right now. Please try again in a moment.');
    }
  };

  if (!opening) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/45 px-4 py-6 backdrop-blur-sm" onClick={onClose}>
      <div
        className="glass-panel relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] p-6 sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-form-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-950"
          aria-label="Close application form"
        >
          <X size={18} />
        </button>

        <div className="pr-12">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-600">Apply Now</p>
          <h2 id="application-form-title" className="mt-4 font-heading text-3xl font-semibold text-ink">
            {opening.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Fill out the form below to apply for this role. This demo form captures candidate intent and can later be connected to email, a backend, or an ATS.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">{opening.type}</span>
            <span className="rounded-full bg-accent-100 px-3 py-2 text-xs font-semibold text-accent-700">{opening.location}</span>
          </div>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Full name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400 focus:border-brand-400"
                placeholder="Your full name"
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Email address
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400 focus:border-brand-400"
                placeholder="name@example.com"
                required
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Phone number
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400 focus:border-brand-400"
                placeholder="+91 98765 43210"
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              Experience
              <input
                type="text"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400 focus:border-brand-400"
                placeholder="e.g. 4 years"
                required
              />
            </label>
          </div>

          <label className="block text-sm font-medium text-slate-700">
            Portfolio / LinkedIn / Resume link
            <input
              type="url"
              name="portfolio"
              value={form.portfolio}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400 focus:border-brand-400"
              placeholder="https://"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Why are you a good fit?
            <textarea
              name="coverLetter"
              rows="6"
              value={form.coverLetter}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none placeholder:text-slate-400 focus:border-brand-400"
              placeholder={`Tell us why you are a strong fit for the ${opening.title} role.`}
              required
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={!isValid || submitting}
              className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <span className="skeleton h-5 w-5 rounded-full" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <Send size={16} />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-brand-950 hover:-translate-y-0.5"
            >
              Cancel
            </button>
          </div>

          {submitted ? (
            <p className="text-sm font-medium text-accent-700">
              Thanks. Your application for {opening.title} has been queued for review.
            </p>
          ) : null}

          {submitError ? <p className="text-sm font-medium text-red-600">{submitError}</p> : null}
        </form>
      </div>
    </div>
  );
};

export default ApplicationFormModal;
