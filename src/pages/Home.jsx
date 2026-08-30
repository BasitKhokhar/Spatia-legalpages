import { Link } from 'react-router-dom'
import { ShieldCheck, ScrollText, Info, ArrowRight, CheckCircle2, Trash2 } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import logo from '../assets/logoo.png'

const cards = [
  {
    to: '/privacy-policy',
    icon: <ShieldCheck className="w-6 h-6 text-spatia-accent" />,
    iconBg: 'bg-spatia-accentTint',
    title: 'Privacy Policy',
    description: 'How Spatia collects, uses, stores and protects your account, your designs and your device data.',
    badge: 'Required by Google Play',
    badgeColor: 'bg-spatia-accentSoft text-spatia-accentPress',
  },
  {
    to: '/terms',
    icon: <ScrollText className="w-6 h-6 text-spatia-accentDeep" />,
    iconBg: 'bg-spatia-creditSoft',
    title: 'Terms & Conditions',
    description: 'The rules covering your licence to use Spatia, credits, rewarded ads, subscriptions and AI-generated designs.',
    badge: 'User Agreement',
    badgeColor: 'bg-spatia-creditSoft text-spatia-accentDeep',
  },
  {
    to: '/delete-account',
    icon: <Trash2 className="w-6 h-6 text-spatia-danger" />,
    iconBg: 'bg-spatia-dangerSoft',
    title: 'Delete Account',
    description: 'Delete your Spatia account, your projects and everything linked to them — in the app or by email.',
    badge: 'Required by Google Play',
    badgeColor: 'bg-spatia-dangerSoft text-spatia-danger',
  },
  {
    to: '/about',
    icon: <Info className="w-6 h-6 text-spatia-success" />,
    iconBg: 'bg-spatia-successSoft',
    title: 'About the App',
    description: 'What Spatia does — 2D floor plans, interactive 3D, AI design generation, cost estimates and exports.',
    badge: 'App Overview',
    badgeColor: 'bg-spatia-successSoft text-spatia-success',
  },
]

const highlights = [
  'Your designs stay on your device by default',
  'Rewarded ads only — always your choice to watch',
  'Delete your account in-app or from this site',
  'We never sell your personal data',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-spatia-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* App icon */}
          <div className="animate-fade-in-up flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl shadow-spatia-accentSoft">
              <img
                src={logo}
                alt="Spatia Logo"
                className="w-20 h-20 rounded-2xl object-contain"
              />
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up delay-100">
            <span className="inline-flex items-center gap-2 bg-spatia-accentSoft text-spatia-accentPress text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full border border-spatia-accent300/40 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-spatia-accent animate-pulse"></span>
              Spatia · 3D Space Designer
            </span>
          </div>

          <h1 className="opacity-0 animate-fade-in-up delay-200 font-display text-5xl md:text-6xl font-bold text-spatia-ink leading-tight mb-6">
            Legal Documents &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-spatia-accent to-spatia-accentDeep">App Information</span>
          </h1>

          <p className="opacity-0 animate-fade-in-up delay-300 text-spatia-ink2 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Everything about how Spatia handles your account and your designs — written to meet
            Google Play Developer Program Policies, Apple App Store guidelines and GDPR.
          </p>

          {/* Trust badges */}
          <div className="opacity-0 animate-fade-in-up delay-400 flex flex-wrap justify-center gap-3">
            {highlights.map((h, i) => (
              <span key={i} className="inline-flex items-center gap-2 bg-spatia-surface border border-spatia-line text-spatia-ink2 text-sm px-4 py-2 rounded-full shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-spatia-success flex-shrink-0" />
                {h}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ to, icon, iconBg, title, description, badge, badgeColor }, i) => (
            <Link
              key={to}
              to={to}
              className="group bg-spatia-surface rounded-2xl border border-spatia-line p-6 hover:shadow-xl hover:shadow-spatia-line/60 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                {icon}
              </div>

              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md ${badgeColor} mb-3`}>
                {badge}
              </span>

              <h2 className="font-display text-xl font-bold text-spatia-ink mb-2">{title}</h2>
              <p className="text-spatia-ink2 text-sm leading-relaxed mb-5">{description}</p>

              <div className="flex items-center gap-2 text-sm font-semibold text-spatia-accent group-hover:gap-3 transition-all duration-200">
                Read More
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About banner */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-r from-spatia-dark via-spatia-darkSurface to-spatia-dark rounded-3xl p-10 text-spatia-darkInk relative overflow-hidden">
          {/* decorative circles */}
          <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full bg-spatia-accent/10"></div>
          <div className="absolute -bottom-16 -left-10 w-64 h-64 rounded-full bg-spatia-credit/10"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-3">About These Documents</h2>
              <p className="text-spatia-darkInk2 text-sm leading-relaxed max-w-lg">
                These documents comply with <strong className="text-spatia-darkInk">Google Play Developer Program Policies</strong>,
                Apple App Store guidelines and GDPR. They are publicly accessible without a login, and they describe
                Spatia exactly as it ships — including the rewarded ads, the credit system and the AI design service.
              </p>
              <p className="text-spatia-darkInk2 text-sm mt-4">
                Questions? Contact us at{' '}
                <a href="mailto:basitkhokhar957@gmail.com" className="text-spatia-accent300 hover:underline">
                  basitkhokhar957@gmail.com
                </a>
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-spatia-darkInk/10 border border-spatia-darkInk/20 flex items-center justify-center backdrop-blur-sm">
                <ShieldCheck className="w-10 h-10 text-spatia-accent300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
