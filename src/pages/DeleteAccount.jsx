import { Link } from 'react-router-dom'
import { Trash2, ArrowLeft, Mail, Clock, Database, Download, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Step({ n, children }) {
  return (
    <li className="flex items-start gap-3 text-spatia-ink2 text-sm leading-relaxed">
      <span className="w-6 h-6 rounded-full bg-spatia-dangerSoft text-spatia-danger text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{n}</span>
      <span>{children}</span>
    </li>
  )
}

function Bullet({ items }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-spatia-ink2 text-sm leading-relaxed">
          <ChevronRight className="w-3.5 h-3.5 text-spatia-danger mt-1 flex-shrink-0" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  )
}

export default function DeleteAccount() {
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-spatia-accent300 to-spatia-danger flex items-center justify-center shadow-lg shadow-spatia-dangerSoft flex-shrink-0">
              <Trash2 className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold text-spatia-ink mb-1">Delete Your Account &amp; Data</h1>
              <p className="text-spatia-ink2 text-sm">
                <strong className="text-spatia-ink">App:</strong> Spatia: 3D Space Designer &nbsp;·&nbsp;
                <strong className="text-spatia-ink">Developer:</strong> Basit Khokhar
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-spatia-surface rounded-2xl border border-spatia-line shadow-sm p-8 md:p-12">

          <p className="text-spatia-ink2 text-sm leading-relaxed mb-8">
            This page explains how to delete your Spatia account and the data associated with it. You can do it
            directly inside the app, or send us a deletion request by email if you cannot sign in.
          </p>

          {/* Export first */}
          <div className="bg-spatia-creditSoft border border-spatia-credit/40 rounded-xl p-4 mb-8 flex items-start gap-3">
            <Download className="w-5 h-5 text-spatia-accentDeep flex-shrink-0 mt-0.5" />
            <p className="text-spatia-accentDeep text-sm leading-relaxed">
              <strong>Save your designs first.</strong> Deletion is permanent and your projects cannot be restored
              afterwards. Open each design you want to keep and use <strong>Export</strong> to save it as a PNG image,
              a dimensioned PDF floor plan, or an OBJ 3D model before you continue.
            </p>
          </div>

          {/* Option 1 — In-app */}
          <h2 className="font-display text-xl font-bold text-spatia-ink mb-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-spatia-dangerSoft border border-spatia-dangerLine flex items-center justify-center flex-shrink-0">
              <Trash2 className="w-4 h-4 text-spatia-danger" />
            </span>
            Option 1 — Delete from inside the app (fastest)
          </h2>
          <ol className="space-y-3 mb-8">
            <Step n="1">Open Spatia and sign in to the account you want to delete.</Step>
            <Step n="2">Go to the <strong>Settings</strong> tab in the bottom navigation bar.</Step>
            <Step n="3">Scroll to the <strong>Danger Zone</strong> section at the bottom and tap <strong>Delete Account</strong>.</Step>
            <Step n="4">Read the warning, then type <code className="bg-spatia-surface2 px-1.5 py-0.5 rounded text-xs font-semibold">DELETE</code> in the confirmation box to enable the button.</Step>
            <Step n="5">Tap <strong>Delete My Account</strong>. Your account is deactivated straight away, your session tokens are revoked, and all Spatia data on your device is wiped immediately.</Step>
          </ol>

          {/* Option 2 — Email */}
          <h2 className="font-display text-xl font-bold text-spatia-ink mb-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-spatia-accentTint border border-spatia-accentSoft flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-spatia-accent" />
            </span>
            Option 2 — Request by email
          </h2>
          <p className="text-spatia-ink2 text-sm leading-relaxed mb-3">
            If you cannot access the app or have lost your sign-in, email us <strong>from the address registered to your
            account</strong> and we will process the request for you:
          </p>
          <div className="bg-spatia-surface2 rounded-2xl border border-spatia-line p-6 mb-8">
            <a href="mailto:basitkhokhar957@gmail.com?subject=Spatia%20-%20Account%20Deletion%20Request&body=I%20request%20deletion%20of%20my%20Spatia%20account%20and%20all%20associated%20data.%0A%0AAccount%20email%3A%20%0AName%20on%20the%20account%3A%20"
               className="text-spatia-accentPress font-semibold hover:underline text-lg">
              basitkhokhar957@gmail.com
            </a>
            <p className="text-spatia-ink2 text-xs mt-2">
              Subject line: <strong>&quot;Account Deletion Request&quot;</strong>. Include your{' '}
              <strong>account email</strong> and the <strong>name on the account</strong> so we can verify ownership.
              We confirm by reply and complete the deletion within 30 days.
            </p>
          </div>

          {/* What gets deleted */}
          <h2 className="font-display text-xl font-bold text-spatia-ink mb-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-spatia-dangerSoft border border-spatia-dangerLine flex items-center justify-center flex-shrink-0">
              <Database className="w-4 h-4 text-spatia-danger" />
            </span>
            What data is deleted
          </h2>
          <Bullet items={[
            'Your account — name, email address, phone number and password hash',
            'Your linked Google sign-in association, if you used one',
            'All your projects and floor plans — rooms, walls, floors and every placed furniture item',
            'Your AI design briefs and the plans generated from them, including any free-text notes you wrote',
            'Your credit balance and every premium catalog item you unlocked (these are lost permanently and cannot be transferred)',
            'Your saved cost estimates and export history',
            'Your subscription status records held on our server',
            'Your device push notification token',
            'All Spatia data stored on your device, including downloaded 3D models, thumbnails and plan images',
          ]} />

          {/* Retention */}
          <h2 className="font-display text-xl font-bold text-spatia-ink mb-4 flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-spatia-creditSoft border border-spatia-credit/40 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 text-spatia-accentDeep" />
            </span>
            Deletion timeline &amp; retention
          </h2>
          <Bullet items={[
            'Your account is <strong>deactivated immediately</strong> when the request is submitted, and your session tokens are revoked so no device stays signed in.',
            'All associated data is <strong>permanently erased from our servers within 30 days</strong>.',
            'Data held only on your device is wiped instantly by the in-app deletion, and is removed entirely if you uninstall the app.',
            'Purchase and billing records may be retained longer where tax, accounting or consumer-protection law requires it.',
            'Google Play keeps your purchase history independently of us. To review or manage it, see your Google Play account.',
          ]} />

          <div className="bg-spatia-dangerSoft border border-spatia-dangerLine rounded-xl p-4 mt-6 flex items-start gap-3">
            <Trash2 className="w-5 h-5 text-spatia-danger flex-shrink-0 mt-0.5" />
            <p className="text-spatia-danger text-sm leading-relaxed">
              <strong>Cancel your subscription separately.</strong> Deleting your Spatia account does not cancel an active
              Google Play subscription. Cancel it in <strong>Google Play Store → Subscriptions</strong> to stop future
              billing, otherwise it will keep renewing.
            </p>
          </div>

          <p className="text-spatia-ink3 text-xs leading-relaxed mt-6">
            For the full picture of what we collect and how long we keep it, see our{' '}
            <Link to="/privacy-policy" className="text-spatia-accent hover:underline">Privacy Policy</Link>.
          </p>

        </div>
      </div>

      <Footer />
    </div>
  )
}
