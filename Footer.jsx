import { Github, Linkedin, Mail, Sparkles, Twitter } from 'lucide-react'

const nav = [['Home', '#home'], ['About', '#about'], ['Services', '#services'], ['Timeline', '#timeline'], ['Pricing', '#pricing'], ['Testimonials', '#testimonials'], ['Contact', '#contact']]
const social = [[Twitter, 'Twitter', 'https://twitter.com'], [Linkedin, 'LinkedIn', 'https://linkedin.com'], [Github, 'GitHub', 'https://github.com/Sachinbairwa']]

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-14 dark:border-white/10">
      <div className="wrap grid gap-10 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2 text-lg font-bold text-ink dark:text-white" aria-label="Auralis home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-accent text-white"><Sparkles size={16} /></span> Auralis
          </a>
          <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">A digital studio crafting fast, beautiful and accessible experiences for ambitious brands.</p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-semibold text-ink dark:text-white">Navigate</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {nav.map(([l, h]) => <li key={h}><a href={h} className="text-slate-600 transition hover:text-brand dark:text-slate-400">{l}</a></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="font-semibold text-ink dark:text-white">Connect</h2>
          <p className="mt-4 flex items-center gap-2 text-sm"><Mail size={16} aria-hidden="true" /> hello@auralis.studio</p>
          <ul className="mt-4 flex gap-3">
            {social.map(([Icon, label, href]) => (
              <li key={label}><a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink transition hover:scale-110 hover:text-brand dark:text-white"><Icon size={18} /></a></li>
            ))}
          </ul>
        </div>
      </div>
      <p className="wrap mt-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} Auralis Studio. All rights reserved.</p>
    </footer>
  )
}
