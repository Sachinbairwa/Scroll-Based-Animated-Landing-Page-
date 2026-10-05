import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const links = [
  ['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Timeline', '#timeline'],
  ['Pricing', '#pricing'], ['Testimonials', '#testimonials'], ['Contact', '#contact'],
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-lg shadow-black/5' : 'py-4'}`}>
      <div className="wrap flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-lg font-bold text-ink dark:text-white" aria-label="Auralis home">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent text-white"><Sparkles size={16} /></span>
          Auralis
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-brand dark:text-slate-300 dark:hover:text-white">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#contact" className="btn-primary hidden !py-2.5 sm:inline-flex">Start a project</a>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'} className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink dark:text-white lg:hidden">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="glass wrap mt-2 flex max-h-[80vh] flex-col gap-1 overflow-y-auto rounded-2xl p-3 lg:hidden">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium text-ink hover:bg-brand/10 dark:text-white">{label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2">Start a project</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
