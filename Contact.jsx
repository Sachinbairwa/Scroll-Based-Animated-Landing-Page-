import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'

const empty = { name: '', email: '', phone: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (!v.name.trim()) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email)) e.email = 'Please enter a valid email address.'
  if (v.phone && !/^[+\d][\d\s()-]{6,}$/.test(v.phone)) e.phone = 'Please enter a valid phone number.'
  if (!v.subject.trim()) e.subject = 'Please add a subject.'
  if (!v.message.trim()) e.message = 'Please write a message.'
  else if (v.message.trim().length < 20) e.message = 'Message must be at least 20 characters.'
  return e
}

export default function Contact() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const change = (k) => (ev) => {
    const next = { ...values, [k]: ev.target.value }
    setValues(next)
    if (errors[k]) setErrors({ ...errors, [k]: validate(next)[k] })
  }
  const submit = (ev) => {
    ev.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length === 0) { setSent(true); setValues(empty) }
    else setSent(false)
  }

  const input = (k) => `mt-1.5 w-full rounded-xl border bg-white/60 px-4 py-3 text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30 dark:bg-white/5 dark:text-white ${errors[k] ? 'border-red-500' : 'border-black/10 dark:border-white/10'}`
  const field = (k, label, type = 'text', required = true) => (
    <div>
      <label htmlFor={k} className="text-sm font-medium text-ink dark:text-white">{label}{required ? <span aria-hidden="true"> *</span> : ' (optional)'}</label>
      <input id={k} name={k} type={type} value={values[k]} onChange={change(k)} aria-required={required} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-error` : undefined} className={input(k)} />
      {errors[k] && <p id={`${k}-error`} role="alert" className="mt-1 text-sm text-red-500">{errors[k]}</p>}
    </div>
  )

  return (
    <section id="contact" className="py-24">
      <div className="wrap grid gap-12 lg:grid-cols-5">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Contact</p>
          <h2 className="h2 mt-3">Let’s build something remarkable</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Tell us about your project. We reply within one business day.</p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3"><Mail size={18} className="text-brand" aria-hidden="true" /> hello@auralis.studio</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-brand" aria-hidden="true" /> +1 (555) 014-2290</li>
            <li className="flex items-center gap-3"><MapPin size={18} className="text-brand" aria-hidden="true" /> 21 Market Street, San Francisco, CA</li>
          </ul>
        </motion.div>
        <motion.form noValidate onSubmit={submit} initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="glass space-y-5 rounded-3xl p-6 md:p-10 lg:col-span-3" aria-label="Contact form">
          <div className="grid gap-5 sm:grid-cols-2">{field('name', 'Name')}{field('email', 'Email', 'email')}</div>
          <div className="grid gap-5 sm:grid-cols-2">{field('phone', 'Phone', 'tel', false)}{field('subject', 'Subject')}</div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-ink dark:text-white">Message <span aria-hidden="true">*</span></label>
            <textarea id="message" name="message" rows="5" value={values.message} onChange={change('message')} aria-required="true" aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined} className={input('message')} />
            {errors.message && <p id="message-error" role="alert" className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">Send message <Send size={16} aria-hidden="true" /></button>
          <AnimatePresence>
            {sent && (
              <motion.p role="status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 rounded-xl bg-mint/15 p-4 font-medium text-teal-700 dark:text-mint">
                <CheckCircle2 size={20} aria-hidden="true" /> Thank you! Your message has been sent. We’ll be in touch shortly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}
