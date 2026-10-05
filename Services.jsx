import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'

const services = [
  { title: 'Product websites that convert', text: 'Story-driven marketing sites with scroll-based motion, built for speed and SEO.', points: ['Conversion-focused layouts', 'Performance budgets', 'CMS integration'], g: 'from-brand to-fuchsia-500' },
  { title: 'Web apps and dashboards', text: 'Scalable React applications with reusable component libraries and clean data flows.', points: ['Design systems', 'Role-based dashboards', 'API integrations'], g: 'from-accent to-amber-400' },
  { title: 'Brand and motion design', text: 'Identity, illustration and micro-interactions that make your brand unforgettable.', points: ['Visual identity', 'Motion guidelines', 'Launch assets'], g: 'from-mint to-brand' },
]

function Row({ s, i }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const left = i % 2 === 0
  return (
    <div ref={ref} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <motion.div initial={{ opacity: 0, x: left ? -60 : 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}
        className={left ? '' : 'md:order-2'}>
        <h3 className="text-2xl font-bold text-ink dark:text-white md:text-3xl">{s.title}</h3>
        <p className="mt-3 text-slate-600 dark:text-slate-400">{s.text}</p>
        <ul className="mt-5 space-y-2">
          {s.points.map((p) => <li key={p} className="flex items-center gap-2 text-sm font-medium"><Check size={16} className="text-brand" aria-hidden="true" />{p}</li>)}
        </ul>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: left ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}
        className={left ? '' : 'md:order-1'} aria-hidden="true">
        <motion.div style={{ y }} className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br ${s.g} shadow-2xl shadow-brand/20`}>
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/20" />
          <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl bg-white/20 p-4 dark:bg-white/10"><div className="h-2 w-2/3 rounded bg-white/70" /><div className="mt-2 h-2 w-1/2 rounded bg-white/40" /></div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Services</p>
          <h2 className="h2 mt-3">Everything you need to launch and grow</h2>
        </motion.div>
        <div className="mt-16 space-y-24">{services.map((s, i) => <Row key={s.title} s={s} i={i} />)}</div>
      </div>
    </section>
  )
}
