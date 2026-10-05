import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="glass flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:scale-105 dark:text-white"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
