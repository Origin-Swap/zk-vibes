import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: '[ABOUT]',      href: '#about' },
  { label: '[HOW_IT_WORKS]', href: '#how' },
  { label: '[DIFFERENT]',  href: '#different' },
  { label: '[TOKENOMICS]', href: '#tokenomics' },
  { label: '[ROADMAP]',    href: '#roadmap' },
  { label: '[TEAM]',       href: '#team' },
  { label: '[FAQ]',        href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-terminal-black/95 backdrop-blur-sm border-b border-terminal-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/logo-navbar.svg" alt="ZK Vibes" height="40" />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-5">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-terminal-dim hover:text-terminal-green hover:text-glow-dim transition-all duration-150 font-mono tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="#tokenomics" className="btn-terminal text-xs px-4 py-2 font-mono">
              &gt; LAUNCH_APP
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-terminal-dim hover:text-terminal-green"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-terminal-black/98 border-t border-terminal-green/20 px-4 pb-4">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-xs text-terminal-dim hover:text-terminal-green font-mono border-b border-terminal-green/10"
            >
              {l.label}
            </a>
          ))}
          <a href="#tokenomics" className="mt-4 block btn-terminal text-xs px-4 py-2 text-center">
            &gt; LAUNCH_APP
          </a>
        </div>
      )}
    </nav>
  )
}
