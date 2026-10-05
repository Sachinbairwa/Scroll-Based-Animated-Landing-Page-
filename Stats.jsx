import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

const stats = [
  { to: 10, suffix: 'K+', label: 'Projects delivered' },
  { to: 98, suffix: '%', label: 'Client satisfaction' },
  { to: 50, suffix: '+', label: 'Countries reached' },
  { to: 24, suffix: '/7', label: 'Support coverage' },
]

function Counter({ to, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, { duration: 2, ease: 'easeOut', onUpdate: (v) => setValue(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to])
  return <span ref={ref}>{value}{suffix}</span>
}

export default function Stats() {
  return (
    <section aria-label="Company statistics" className="relative py-16">
      <div className="wrap">
        <motion.dl initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="glass grid grid-cols-2 gap-8 rounded-3xl p-8 md:grid-cols-4 md:p-12">
          {stats.map((s) => (
            <motion.div key={s.label} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="text-center">
              <dt className="order-2 mt-2 text-sm text-slate-500 dark:text-slate-400">{s.label}</dt>
              <dd className="text-grad text-4xl font-extrabold md:text-5xl"><Counter to={s.to} suffix={s.suffix} /></dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
