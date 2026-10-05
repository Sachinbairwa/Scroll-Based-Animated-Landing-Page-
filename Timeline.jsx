import { motion } from 'framer-motion'

const steps = [
  ['01', 'Discover', 'We learn your users, market and goals through workshops and research.'],
  ['02', 'Strategize', 'We define scope, success metrics and a clear roadmap.'],
  ['03', 'Design', 'Wireframes, prototypes and a polished UI system you can test early.'],
  ['04', 'Build', 'Clean, tested, performant code shipped in weekly increments.'],
  ['05', 'Launch', 'Deployment, monitoring and continuous improvement after go-live.'],
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Our process</p>
          <h2 className="h2 mt-3">From idea to launch in five steps</h2>
        </div>
        <ol className="relative mx-auto mt-16 max-w-4xl">
          <span aria-hidden="true" className="absolute bottom-0 left-[18px] top-0 w-px bg-gradient-to-b from-brand via-fuchsia-500 to-accent md:left-1/2" />
          {steps.map(([n, title, text], i) => {
            const even = i % 2 === 0
            return (
              <motion.li key={n} initial={{ opacity: 0, x: even ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}
                className={`relative mb-10 pl-12 md:w-1/2 md:pl-0 ${even ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                <span aria-hidden="true" className={`absolute top-6 left-[10px] h-4 w-4 rounded-full border-4 border-paper bg-brand ring-2 ring-brand/40 dark:border-ink md:left-auto ${even ? 'md:-right-2' : 'md:-left-2'}`} />
                <div className="glass rounded-2xl p-6">
                  <span className="text-grad text-sm font-bold">{n}</span>
                  <h3 className="mt-1 text-xl font-semibold text-ink dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
