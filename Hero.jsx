import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Zap } from 'lucide-react'

const dots = Array.from({ length: 14 }, (_, i) => ({ left: `${(i * 37) % 97}%`, top: `${(i * 53) % 90}%`, delay: `${(i % 7) * 0.8}s`, size: 4 + (i % 3) * 2 }))
const bars = [40, 65, 50, 80, 62, 95, 74]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const desktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches
  const k = desktop ? 1 : 0
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 220 * k])
  const slowY = useTransform(scrollYProgress, [0, 1], [0, 90 * k])
  const fastY = useTransform(scrollYProgress, [0, 1], [0, -140 * k])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60 * k])

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      <motion.div style={{ y: bgY }} aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-brand/30 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-[26rem] w-[26rem] rounded-full bg-accent/25 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-mint/20 blur-[110px]" />
        {dots.map((d, i) => (
          <span key={i} className="drift absolute rounded-full bg-brand" style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay }} />
        ))}
      </motion.div>

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-2">
        <motion.div style={{ y: textY }}>
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">
            <span className="h-2 w-2 rounded-full bg-mint" /> Next Generation Digital Experience
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-ink dark:text-white sm:text-6xl xl:text-7xl">
            Build experiences that <span className="text-grad">move people.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Auralis is a digital studio that designs and engineers fast, accessible, motion-rich products for ambitious brands, from first sketch to global launch.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Start your project <ArrowRight size={16} /></a>
            <a href="#services" className="btn-ghost"><Play size={16} /> See our work</a>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative mx-auto w-full max-w-md" aria-hidden="true">
          <motion.div style={{ y: slowY }} className="glass rounded-3xl p-6 shadow-2xl shadow-brand/20">
            <div className="flex items-center justify-between">
              <div><p className="text-xs text-slate-500">Monthly visitors</p><p className="text-3xl font-bold text-ink dark:text-white">248,930</p></div>
              <span className="rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-mint">+24.8%</span>
            </div>
            <div className="mt-8 flex h-40 items-end gap-3">
              {bars.map((h, i) => (
                <motion.div key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.7, delay: 0.7 + i * 0.08 }}
                  style={{ height: `${h}%`, originY: 1 }} className="flex-1 rounded-t-lg bg-gradient-to-t from-brand to-fuchsia-400" />
              ))}
            </div>
          </motion.div>
          <motion.div style={{ y: fastY }} className="absolute -left-4 top-6 sm:-left-10">
            <div className="glass float flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl"><TrendingUp size={18} className="text-brand" /><span className="text-sm font-semibold text-ink dark:text-white">4.9 / 5 rating</span></div>
          </motion.div>
          <motion.div style={{ y: fastY }} className="absolute -bottom-6 -right-2 sm:-right-8">
            <div className="glass float flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl" style={{ animationDelay: '1.5s' }}><Zap size={18} className="text-accent" /><span className="text-sm font-semibold text-ink dark:text-white">98 Lighthouse</span></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
