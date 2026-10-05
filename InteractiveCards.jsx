import { motion } from 'framer-motion'
import { ArrowUpRight, Bot, Code2, Compass, Palette } from 'lucide-react'

const cards = [
  { icon: Code2, title: 'Web Development', text: 'Lightning-fast React and Next.js builds with clean architecture and 95+ Lighthouse scores.' },
  { icon: Palette, title: 'UI/UX Design', text: 'Research-led interfaces and design systems that feel effortless and scale with your product.' },
  { icon: Bot, title: 'AI Solutions', text: 'Practical automation and intelligent features that save hours and delight your customers.' },
  { icon: Compass, title: 'Digital Strategy', text: 'Roadmaps, positioning and growth experiments grounded in real user data.' },
]

export default function InteractiveCards() {
  return (
    <section id="about" className="py-24">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">About us</p>
          <h2 className="h2 mt-3">A studio obsessed with craft and results</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">We are a team of designers, engineers and strategists who turn ambitious ideas into products people love to use.</p>
        </motion.div>
        <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <motion.li key={title} variants={{ hidden: { opacity: 0, scale: 0.92, y: 20 }, show: { opacity: 1, scale: 1, y: 0 } }}
              whileHover={{ y: -10, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }} className="group relative list-none">
              <div aria-hidden="true" className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand via-fuchsia-500 to-accent opacity-0 blur-sm transition duration-300 group-hover:opacity-70" />
              <div className="glass relative flex h-full flex-col rounded-3xl bg-white/90 p-7 dark:bg-ink/90">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-accent text-white"><Icon size={22} /></span>
                <h3 className="mt-5 text-lg font-semibold text-ink dark:text-white">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">Learn more <ArrowUpRight size={15} aria-hidden="true" /></a>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
