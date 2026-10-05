import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  { name: 'Starter', price: '$499', note: 'one-time', features: ['Single-page website', 'Responsive design', 'Basic SEO setup', '2 revision rounds', '14 days support'] },
  { name: 'Professional', price: '$999', note: 'one-time', popular: true, features: ['Up to 8 pages', 'Scroll animations and motion', 'CMS integration', 'Performance optimization', '60 days support'] },
  { name: 'Enterprise', price: 'Custom', note: 'tailored scope', features: ['Full product build', 'Design system', 'Dedicated team', 'Security and QA review', '24/7 priority support'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Pricing</p>
          <h2 className="h2 mt-3">Simple plans, no surprises</h2>
        </div>
        <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <motion.li key={p.name} variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }} whileHover={{ y: -8 }} className="list-none">
              <div className={`relative flex h-full flex-col rounded-3xl p-8 ${p.popular ? 'bg-gradient-to-b from-brand to-fuchsia-600 text-white shadow-2xl shadow-brand/30' : 'glass'}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">Recommended</span>}
                <h3 className={`text-lg font-semibold ${p.popular ? '' : 'text-ink dark:text-white'}`}>{p.name}</h3>
                <p className={`mt-4 text-5xl font-extrabold ${p.popular ? '' : 'text-ink dark:text-white'}`}>{p.price}</p>
                <p className={`text-sm ${p.popular ? 'text-white/80' : 'text-slate-500'}`}>{p.note}</p>
                <ul className="my-8 flex-1 space-y-3">
                  {p.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm"><Check size={16} aria-hidden="true" className={p.popular ? 'text-white' : 'text-brand'} />{f}</li>)}
                </ul>
                <a href="#contact" aria-label={`Choose the ${p.name} plan`} className={p.popular ? 'btn bg-white text-brand hover:shadow-xl' : 'btn-primary'}>Get started</a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
