import { Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const CONTACT_ENDPOINT = 'https://hrms.shivadityainfotech.com/api/contact-us';

const ContactForm = () => {
  const location = useLocation();
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (location.state?.industry) {
      setForm((current) => ({
        ...current,
        message: `Hello, I'd like to discuss our project regarding ${location.state.industry}.`,
      }));
    }
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;

    setSubmitting(true);
    setSubmitted(false);
    setSubmitError('');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          company: form.company.trim(),
          project_description: form.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Contact request failed with status ${response.status}`);
      }

      setSubmitting(false);
      setSubmitted(true);
      setForm(initialState);
    } catch (error) {
      setSubmitting(false);
      setSubmitted(false);
      setSubmitError('We could not send your message right now. Please try again in a moment.');
    }
  };

  return (
    <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
      <div className="mb-8">
        <h3 className="font-heading text-2xl font-semibold text-brand-950">Start your next project</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Tell us what you are building, what needs to improve, and where you want the product to go next.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm font-medium text-slate-700">
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 placeholder:text-slate-400 focus:border-brand-400"
              placeholder="Your Name"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 placeholder:text-slate-400 focus:border-brand-400"
              placeholder="name@company.com"
              required
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-slate-700">
          Company
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 placeholder:text-slate-400 focus:border-brand-400"
            placeholder="Company or project name"
          />
        </label>

        <label className="block text-sm font-medium text-slate-700">
          Project details
          <textarea
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 placeholder:text-slate-400 focus:border-brand-400"
            placeholder="Tell us about your goals, audience, and timeline."
            minLength={10}
            required
          />
        </label>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center gap-2 rounded-full bg-brand-950 px-6 py-3 font-semibold text-white shadow-soft hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? (
            <>
              <span className="skeleton h-5 w-5 rounded-full" />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <Send size={16} />
            </>
          )}
        </button>

        {submitted ? <p className="text-sm font-medium text-accent-700">Thanks. Your message has been sent successfully.</p> : null}
        {submitError ? <p className="text-sm font-medium text-red-600">{submitError}</p> : null}
      </form>
    </div>
  );
};

export default ContactForm;
