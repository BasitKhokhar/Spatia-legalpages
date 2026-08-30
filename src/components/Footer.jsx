import { Link } from 'react-router-dom'
import logo from '../assets/logoo.png'

export default function Footer() {
  return (
    <footer className="bg-spatia-dark text-spatia-darkInk2 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <img
                src={logo}
                alt="Spatia Logo"
                className="w-8 h-8 rounded-md object-contain"
              />
            </div>
            <div className="leading-tight">
              <span className="font-display text-spatia-darkInk font-semibold block">Spatia</span>
              <span className="text-xs text-spatia-darkInk2">3D Space Designer</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <Link to="/privacy-policy" className="hover:text-spatia-darkInk transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-spatia-darkInk transition-colors">Terms & Conditions</Link>
            <Link to="/delete-account" className="hover:text-spatia-darkInk transition-colors">Delete Account</Link>
            <Link to="/about" className="hover:text-spatia-darkInk transition-colors">About App</Link>
          </div>
        </div>

        <div className="border-t border-spatia-darkLine mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 Spatia · <span className="text-spatia-ink3">Basit Khokhar</span></p>
          <p>
            Questions? Contact:{' '}
            <a href="mailto:basitkhokhar957@gmail.com" className="text-spatia-accent300 hover:text-spatia-accentSoft transition-colors">
              basitkhokhar957@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
