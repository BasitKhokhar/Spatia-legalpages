import { Link } from 'react-router-dom'
import { Info, ArrowLeft, CheckCircle2, PencilRuler, Box, Sparkles, Sofa, Calculator, Download } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const features = [
  { icon: PencilRuler, title: '2D Floor Plan Editor', desc: 'Draw rooms, walls, doors and windows on a precise canvas, in meters or feet, across multiple floors including a basement and roof.' },
  { icon: Box, title: 'Interactive 3D View', desc: 'Turn any plan into a real 3D space — orbit, pinch to zoom, walk through it at eye level, and switch between Golden Hour and Night lighting.' },
  { icon: Sparkles, title: 'AI Design Generation', desc: 'Answer a short brief about your plot, floors, rooms and style, and Spatia generates a complete multi-floor layout for you.' },
  { icon: Sofa, title: 'Furniture & Fixture Catalog', desc: 'Place real furniture and fixtures across 12 space types — homes, offices, cafés, retail, clinics, salons, warehouses and more.' },
  { icon: Calculator, title: 'Construction Cost Estimate', desc: 'Estimate build cost from covered area, storeys and finish level, in your own currency, with an optional interior and finishing breakdown.' },
  { icon: Download, title: 'Export PNG, PDF & 3D', desc: 'Export a high-resolution image, a dimensioned print-ready PDF floor plan, or a .OBJ 3D model with textures.' },
]

export default function AboutApp() {
  return (
    <div className="min-h-screen bg-spatia-bg">
      <Navbar />

      <section className="pt-28 pb-12 px-6 bg-spatia-surface border-b border-spatia-line">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-spatia-ink3 hover:text-spatia-ink text-sm mb-6 transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Home
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-spatia-accent300 to-spatia-accent flex items-center justify-center shadow-lg shadow-spatia-accentSoft flex-shrink-0">
              <Info className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold text-spatia-ink mb-1">About Spatia</h1>
              <p className="text-spatia-ink2 text-sm">3D Space Designer — plan it in 2D, walk it in 3D</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">

        <div className="bg-spatia-surface rounded-2xl border border-spatia-line shadow-sm p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold text-spatia-ink mb-4">Our Story</h2>
          <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
            Most people planning a home, a shop or an office have a clear picture in their head and no way to
            get it out. Professional CAD tools are built for architects, priced for firms, and take weeks to learn.
            Spatia was built for everyone else — draw your space on your phone in minutes, then stand inside it in 3D
            before a single wall is built.
          </p>
          <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
            Spatia covers twelve kinds of space, from houses and apartments to offices, retail shops, cafés, salons,
            clinics, schools, warehouses and gardens. Describe what you need and the AI designer will lay out a full
            multi-floor plan for you; or start from a blank plot and place every wall yourself. When you are happy,
            estimate what it will cost to build and export the result as an image, a dimensioned PDF or a 3D model.
          </p>
          <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
            The app is built and maintained by <strong className="text-spatia-ink">Basit Khokhar</strong> — an independent
            developer who would rather ship a tool people actually use than a feature list nobody needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Version', value: '1.0.0' },
              { label: 'Platform', value: 'Android & iOS' },
              { label: 'Language', value: 'English' },
              { label: 'Category', value: 'Art & Design' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-spatia-surface2 rounded-xl p-4 text-center border border-spatia-lineSoft">
                <p className="text-xs text-spatia-ink3 uppercase tracking-wide mb-1">{label}</p>
                <p className="font-semibold text-spatia-ink text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-spatia-surface rounded-2xl border border-spatia-line shadow-sm p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold text-spatia-ink mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-spatia-accentTint border border-spatia-accentSoft flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-spatia-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-spatia-ink text-sm mb-1">{title}</h3>
                  <p className="text-spatia-ink2 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-spatia-surface rounded-2xl border border-spatia-line shadow-sm p-8 md:p-12">
          <h2 className="font-display text-2xl font-bold text-spatia-ink mb-4">Credits, Plans & Ads</h2>
          <p className="text-spatia-ink2 text-sm leading-relaxed mb-6">
            Spatia is free to use. Designing, editing and viewing your spaces costs nothing. Exports and some premium
            catalog items are paid for with <strong className="text-spatia-ink">credits</strong>, and you can top those up for
            free by watching a rewarded ad — or skip ads entirely with a subscription.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Free', price: '$0', points: ['Full 2D editor & 3D view', 'Basic catalog items free', 'Earn credits by watching ads'] },
              { title: 'Basic', price: '$4.99', points: ['Everything in Free', 'All premium items unlocked', 'No ads · 100 download credits'] },
              { title: 'Premium', price: '$9.99', points: ['Everything in Basic', 'Unlimited downloads', 'Unlimited editing · Priority support'] },
            ].map(({ title, price, points }) => (
              <div key={title} className="rounded-2xl border border-spatia-line bg-spatia-surface2 p-5">
                <p className="font-display font-bold text-spatia-ink text-lg">{title}</p>
                <p className="text-spatia-accent font-semibold text-sm mb-3">{price}</p>
                <ul className="space-y-1.5">
                  {points.map((p) => (
                    <li key={p} className="text-spatia-ink2 text-xs leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-spatia-success flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-spatia-ink3 text-xs leading-relaxed mt-5">
            Prices are indicative and shown in your local currency by Google Play at checkout. Plan names, pricing and
            benefits may change — the current ladder is always what you see on the Credits &amp; Plans screen in the app.
          </p>
        </div>

        <div className="bg-spatia-dark rounded-2xl p-8 md:p-12 text-spatia-darkInk">
          <h2 className="font-display text-2xl font-bold mb-4">Our Commitment</h2>
          <p className="text-spatia-darkInk2 text-sm leading-relaxed mb-6">
            Spatia is monetised with optional rewarded ads and subscriptions — never by selling what you make or who you are.
            Your projects belong to you.
          </p>
          <div className="flex flex-col gap-3">
            {[
              'We never sell or rent your personal data to anyone',
              'Ads are rewarded-only and always your choice to watch — never interstitials mid-design',
              'Your designs are stored on your device and only sent to our servers for features you ask for',
              'Account deletion works both in the app and from this website, no email chain required',
              'The privacy policy is always public, always current, and never behind a login',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm text-spatia-darkInk2">
                <CheckCircle2 className="w-4 h-4 text-spatia-accent300 flex-shrink-0 mt-0.5" />
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
