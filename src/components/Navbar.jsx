import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../assets/logoo.png'

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/privacy-policy', label: 'Privacy Policy' },
    { to: '/terms-of-service', label: 'Terms of Service' },
    { to: '/delete-account', label: 'Delete Account' },
    { to: '/about', label: 'About App' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-spatia-surface/90 backdrop-blur-md border-b border-spatia-line shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-md flex items-center justify-center shadow-md group-hover:shadow-spatia-accentSoft transition-shadow duration-300">
            <img
              src={logo}
              alt="Spatia Logo"
              className="w-10 h-10 rounded-md object-contain" />
          </div>
          <div>
            <span className="font-display text-lg font-bold text-spatia-ink leading-none block">Spatia</span>
            <span className="text-xs text-spatia-ink3 leading-none">3D Space Designer</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${location.pathname === to
                ? 'bg-spatia-accentSoft text-spatia-accentPress font-semibold'
                : 'text-spatia-ink2 hover:text-spatia-ink hover:bg-spatia-surface2'
                }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2 rounded-lg text-spatia-ink2 hover:bg-spatia-surface2 transition" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-spatia-surface border-t border-spatia-line px-6 py-4 flex flex-col gap-1 animate-fade-in">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${location.pathname === to
                ? 'bg-spatia-accentSoft text-spatia-accentPress font-semibold'
                : 'text-spatia-ink2 hover:bg-spatia-surface2'
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
