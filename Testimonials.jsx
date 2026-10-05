import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const items = [
  { name: 'Priya Sharma', role: 'Head of Product', company: 'Finlytics', rating: 5, text: 'Auralis shipped our new platform in six weeks. Conversion rose 38% and the animations made our brand feel premium.', g: 'from-brand to-fuchsia-500' },
  { name: 'Daniel Reyes', role: 'Founder', company: 'Northwind Labs', rating: 5, text: 'The cleanest handover we have ever had from a vendor. Documented, fast and genuinely thoughtful design.', g: 'from-accent to-amber-400' },
  { name: 'Meera Kapoor', role: 'CTO', company: 'Orbit Health', rating: 5, text: 'They understood our users better than we did. Our dashboard went from confusing to the thing customers praise.', g: 'from-mint to-brand' },
  { name: 'Lukas Weber', role: 'Marketing Director', company: 'Alpenglow', rating: 4, text: 'Great communication and a beautiful launch page. Page speed scores improved dramatically across every device.', g: 'from-fuchsia-500 to-accent' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const go = (n) => { setDir(n > 0 ? 1 : -1); setI((v) => (v + n + items.length) % items.length) }
  const t = items[i]
  return (
    <section id="testimonials" className="py-24">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Testimonials</p>
          <h2 className="h2 mt-3">Loved by teams around the world</h2>
        </div>
        <div className="mx-auto mt-14 max-w-3xl" role="region" aria-roledescription="carousel" aria-label="Customer testimonials">
          <div className="relative min-h-[18rem] overflow-hidden">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure key={i} custom={dir} initial={{ opacity: 0, x: dir * 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: dir * -60 }} transition={{ duration: 0.35 }}
                className="glass rounded-3xl p-8 md:p-12" aria-live="polite">
                <div className="flex gap-1" role="img" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }, (_, s) => <Star key={s} size={18} className={s < t.rating ? 'fill-accent text-accent' : 'text-slate-300 dark:text-slate-600'} />)}
                </div>
                <blockquote className="mt-5 text-lg leading-relaxed text-ink dark:text-white md:text-xl">“{t.text}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span aria-hidden="true" className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${t.g} font-bold text-white`}>{t.name.split(' ').map((w) => w[0]).join('')}</span>
                  <span><span className="block font-semibold text-ink dark:text-white">{t.name}</span><span className="text-sm text-slate-500">{t.role}, {t.company}</span></span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink hover:scale-105 dark:text-white"><ChevronLeft size={20} /></button>
            <div className="flex gap-2">
              {items.map((x, n) => (
                <button key={x.name} type="button" onClick={() => { setDir(n > i ? 1 : -1); setI(n) }} aria-label={`Show testimonial ${n + 1}`} aria-current={n === i}
                  className={`h-2.5 rounded-full transition-all ${n === i ? 'w-8 bg-brand' : 'w-2.5 bg-slate-300 dark:bg-slate-600'}`} />
              ))}
            </div>
            <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="glass flex h-11 w-11 items-center justify-center rounded-full text-ink hover:scale-105 dark:text-white"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
