import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const initialValues = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Please enter a message.'
  } else if (values.message.trim().length < 12) {
    errors.message = 'Message should be at least 12 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const onChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setStatus({ type: '', message: '' })

    if (Object.keys(nextErrors).length > 0) return

    if (!profile.formEndpoint) {
      setStatus({
        type: 'info',
        message:
          'The form is validated, but no backend is connected yet. Use the email link on this page, or add a form service URL in src/data/profile.js.',
      })
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(profile.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => ({}))
        throw new Error(result.error || 'Request failed')
      }

      setValues(initialValues)
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out! Your message has been sent successfully.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'The form service could not be reached. Please email me directly instead.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <Reveal>
      <div className="contact-heading">
  <p className="eyebrow">GET IN TOUCH</p>
  <h2 id="contact-heading">
    Let's <span>Connect</span>
  </h2>
  <p className="section-copy">
    Have a project idea, an opportunity, or just want to talk
    about technology and AI? I'd be happy to hear from you.
  </p>
</div>
      </Reveal>

      <div className="contact-grid">
        <Reveal delay={80}>
          <aside className="contact-panel">
            <a className="contact-link" href={`mailto:${profile.email}`}>
              <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
              {profile.email}
            </a>
            <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} strokeWidth={1.75} aria-hidden="true" />
              GitHub
            </a>
            {profile.linkedin ? (
              <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18} strokeWidth={1.75} aria-hidden="true" />
                LinkedIn
              </a>
            ) : (
              <p className="hint">Optional: add a LinkedIn URL in profile.js</p>
            )}
          </aside>
        </Reveal>

        <Reveal delay={140}>
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                value={values.name}
                onChange={onChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name ? (
                <p id="name-error" className="field-error" role="alert">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={values.email}
                onChange={onChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="field-error" role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me a little about your project or idea..."
                value={values.message}
                onChange={onChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message ? (
                <p id="message-error" className="field-error" role="alert">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button className="button button-primary" type="submit" disabled={submitting}>
              {submitting ? 'Submitting…' : 'Send message'}
            </button>

            {status.message ? (
              <p className={`form-status is-${status.type}`} role="status">
                {status.message}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
