import { useEffect, useState } from 'react'
import {
  ShieldCheck, Database, Eye, Share2, Lock, Clock,
  UserCheck, Baby, CreditCard, Bell, Megaphone, RefreshCw, Mail,
  Smartphone, ChevronRight, ExternalLink
} from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import logo from '../assets/logoo.png'

const sections = [
  { id: 'intro', label: 'Introduction & Overview', icon: ShieldCheck },
  { id: 'data-collected', label: 'Information We Collect', icon: Database },
  { id: 'how-we-use', label: 'How We Use Your Data', icon: Eye },
  { id: 'permissions', label: 'App Permissions', icon: Smartphone },
  { id: 'data-sharing', label: 'Data Sharing & Third Parties', icon: Share2 },
  { id: 'advertising', label: 'Advertising & Consent', icon: Megaphone },
  { id: 'data-storage', label: 'Data Storage & Security', icon: Lock },
  { id: 'data-retention', label: 'Data Retention', icon: Clock },
  { id: 'user-rights', label: 'Your Rights & Controls', icon: UserCheck },
  { id: 'childrens-privacy', label: "Children's Privacy", icon: Baby },
  { id: 'in-app-purchases', label: 'Purchases & Subscriptions', icon: CreditCard },
  { id: 'notifications', label: 'Push Notifications', icon: Bell },
  { id: 'policy-changes', label: 'Changes to This Policy', icon: RefreshCw },
  { id: 'contact', label: 'Contact Information', icon: Mail },
]

function SectionHeading({ id, icon: Icon, children }) {
  return (
    <h2 id={id} className="font-display text-2xl font-bold text-spatia-ink mb-5 pt-2 flex items-center gap-3 scroll-mt-24">
      <span className="w-9 h-9 rounded-xl bg-spatia-accentTint border border-spatia-accentSoft flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-spatia-accent" />
      </span>
      {children}
    </h2>
  )
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-spatia-ink2 text-sm leading-relaxed">
          <ChevronRight className="w-3.5 h-3.5 text-spatia-accent flex-shrink-0 mt-1" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  )
}

function SubHeading({ children }) {
  return <h3 className="font-semibold text-spatia-ink text-base mt-5 mb-3">{children}</h3>
}

function InfoBox({ children }) {
  return (
    <div className="bg-spatia-creditSoft border border-spatia-credit/40 rounded-xl p-4 mb-6">
      <p className="text-spatia-accentDeep text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function Divider() {
  return <div className="border-t border-spatia-lineSoft my-10" />
}

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('intro')
  const [tocOpen, setTocOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sectionEls = sections.map(s => document.getElementById(s.id)).filter(Boolean)
      let current = sections[0].id
      for (const el of sectionEls) {
        if (el.getBoundingClientRect().top < 120) current = el.id
      }
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setTocOpen(false)
  }

  const permissions = [
    { perm: 'INTERNET', reason: 'To reach our backend for sign-in, saving projects, AI design generation, the catalog, and purchase verification' },
    { perm: 'ACCESS_NETWORK_STATE', reason: 'To detect when you are offline so the app can switch to offline behaviour instead of failing requests' },
    { perm: 'POST_NOTIFICATIONS', reason: 'Android 13+ runtime permission for push notifications and the download progress notification' },
    { perm: 'FOREGROUND_SERVICE', reason: 'To keep an offline-resource download running while the app is in the background' },
    { perm: 'FOREGROUND_SERVICE_DATA_SYNC', reason: 'Android 14+ typed declaration for that same download service' },
    { perm: 'com.android.vending.BILLING', reason: 'Required by Google Play Billing for the in-app subscription purchase flow' },
  ]

  const iosPermissions = [
    { perm: 'Photo Library (add only)', reason: 'Asked for the first time you export a PNG, so the image can be saved to your photo library. Decline and the app falls back to the share sheet.' },
    { perm: 'App Tracking Transparency', reason: 'Asked once on iOS before ads are initialised. Your answer controls whether ads shown to you can be personalised.' },
  ]

  return (
    <div className="min-h-screen bg-spatia-bg">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 bg-spatia-surface border-b border-spatia-line">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-center justify-center gap-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-spatia-accentSoft flex-shrink-0">
              <img
                src={logo}
                alt="Spatia Logo"
                className="w-14 h-14 rounded-xl object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h1 className="font-display text-4xl font-bold text-spatia-ink">Privacy Policy</h1>
              </div>
              <p className="text-spatia-ink2 text-sm">
                <strong className="text-spatia-ink">App:</strong> Spatia: 3D Space Designer &nbsp;·&nbsp;
                <strong className="text-spatia-ink">Last updated:</strong> August 30, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile TOC toggle */}
      <div className="lg:hidden sticky top-16 z-40 bg-spatia-surface border-b border-spatia-line px-6 py-3">
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="flex items-center justify-between w-full text-sm font-medium text-spatia-ink2"
        >
          <span>📋 Jump to section: <span className="text-spatia-accent font-semibold">{sections.find(s => s.id === activeSection)?.label}</span></span>
          <ChevronRight className={`w-4 h-4 transition-transform ${tocOpen ? 'rotate-90' : ''}`} />
        </button>
        {tocOpen && (
          <div className="mt-3 max-h-64 overflow-y-auto flex flex-col gap-0.5 animate-fade-in">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeSection === id ? 'bg-spatia-accentSoft text-spatia-accentPress font-semibold' : 'text-spatia-ink2 hover:bg-spatia-surface2'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 flex gap-10">

        {/* Sticky Sidebar TOC — desktop only */}
        <aside className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-24">
            <div className="bg-spatia-surface rounded-2xl border border-spatia-line overflow-hidden shadow-sm">
              <div className="px-5 py-4 bg-spatia-dark text-spatia-darkInk">
                <h3 className="font-display text-sm font-semibold">Table of Contents</h3>
              </div>
              <nav className="p-3 max-h-[70vh] overflow-y-auto">
                {sections.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150 mb-0.5 ${activeSection === id
                      ? 'bg-spatia-accentSoft text-spatia-accentPress font-semibold border border-spatia-accent300/40'
                      : 'text-spatia-ink2 hover:bg-spatia-surface2 hover:text-spatia-ink'
                      }`}
                  >
                    <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${activeSection === id ? 'text-spatia-accent' : 'text-spatia-ink3'}`} />
                    <span className="leading-tight">{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Content */}
        <article className="flex-1 min-w-0">
          <div className="bg-spatia-surface rounded-2xl border border-spatia-line shadow-sm p-8 md:p-12">

            {/* 1. Introduction */}
            <SectionHeading id="intro" icon={ShieldCheck}>1. Introduction &amp; Overview</SectionHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              Welcome to <strong className="text-spatia-ink">Spatia: 3D Space Designer</strong> — a mobile app for designing
              spaces. You draw a floor plan in 2D, furnish it from a catalog, view and walk through it in 3D, optionally
              have an AI generate a full multi-floor layout for you, estimate what it would cost to build, and export the
              result as an image, a PDF or a 3D model.
            </p>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              This Privacy Policy explains what information Spatia ("we", "us", "our") collects, why we collect it, who
              it is shared with, how long it is kept, and what control you have over it. It applies to the Spatia app on
              Android and iOS (package <code className="bg-spatia-surface2 px-1 rounded text-xs">com.spatia3dspacedesigner.app</code>).
            </p>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              By creating an account or using Spatia, you agree to the practices described here. If you do not agree,
              please do not use the app.
            </p>
            <InfoBox>
              This policy is written to meet the Google Play Developer Program Policies and Data Safety requirements,
              the Apple App Store guidelines, and the GDPR for users in the EU/EEA and UK.
            </InfoBox>

            <Divider />

            {/* 2. Data Collected */}
            <SectionHeading id="data-collected" icon={Database}>2. Information We Collect</SectionHeading>

            <SubHeading>Account &amp; Registration Data</SubHeading>
            <BulletList items={[
              '<strong>Full Name</strong> — shown on your profile inside the app',
              '<strong>Email Address</strong> — your login identifier, and where password-reset codes are sent',
              '<strong>Password</strong> — sent over HTTPS and hashed on our server. We never store it in readable form, and it is never written to your device',
              '<strong>Phone Number</strong> — optional, collected at sign-up for account recovery and contact',
              '<strong>Google account details</strong> — if you sign in with Google, we receive an ID token from Google containing your name, email address and profile picture URL. We never receive your Google password',
            ]} />

            <SubHeading>Your Design Content</SubHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-3">
              This is the content you create in the app. It lives on your device, and is sent to our servers only when a
              feature you have asked for needs it (such as AI generation or syncing a project to your account):
            </p>
            <BulletList items={[
              '<strong>Projects and floor plans</strong> — room dimensions, walls, doors, windows, floors, and the furniture and fixtures you place',
              '<strong>Project names and thumbnails</strong> — whatever you name your designs',
              '<strong>AI design briefs</strong> — the answers you give the AI wizard: space type, plot dimensions, number of floors, which side faces the road, the rooms you want on each level, your chosen style, and any free-text notes you write (including the "describe your dream space" field). This text is sent to our server and passed to the AI model that generates your plan',
              '<strong>Cost estimates</strong> — covered area, number of storeys, finish level and the currency you pick',
              '<strong>Export history</strong> — a record of which exports you generated and what they cost in credits',
            ]} />
            <InfoBox>
              Please do not put personal information you would not want processed — names, addresses, phone numbers, or
              anything confidential — into free-text AI brief fields. Everything you type there is sent to our server and
              on to the AI model that produces your design.
            </InfoBox>

            <SubHeading>Credits, Unlocks &amp; Subscription Data</SubHeading>
            <BulletList items={[
              '<strong>Credit balance</strong> — your current credits and your spending history',
              '<strong>Rewarded ad counters</strong> — how many rewarded ads you have watched today, so the daily cap of 5 can be enforced',
              '<strong>Unlocked items</strong> — which premium catalog items you have unlocked with credits',
              '<strong>Subscription status</strong> — your plan tier, expiry date, and licence key, used to decide what the app unlocks for you',
            ]} />

            <SubHeading>Device &amp; Technical Data</SubHeading>
            <BulletList items={[
              '<strong>Push notification token</strong> — a Firebase Cloud Messaging token identifying your device installation, registered with our server after you sign in and grant notification permission',
              '<strong>Platform</strong> — whether the device is Android or iOS, stored alongside the push token so notifications are formatted correctly',
              '<strong>Network connectivity status</strong> — read on-device to switch between online and offline behaviour. It is not transmitted or logged',
              '<strong>Advertising identifiers</strong> — used by Google AdMob when you watch a rewarded ad. See <a href="#advertising" class="text-spatia-accent hover:underline">Advertising &amp; Consent</a> below',
            ]} />

            <SubHeading>Authentication Tokens</SubHeading>
            <BulletList items={[
              '<strong>JWT access token</strong> and <strong>refresh token</strong> — issued when you sign in, stored in the app\'s private on-device storage, and attached to each API request to prove it is really you',
              'These tokens expire and refresh automatically, and are deleted from your device when you log out or delete your account',
            ]} />

            <SubHeading>Locally Stored Data</SubHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-3">
              Spatia keeps a local store on your device (MMKV) so the app opens instantly and keeps working without a
              connection. It is private to the app, is not readable by other apps, and holds:
            </p>
            <BulletList items={[
              'Your projects and floor plans',
              'Your credit balance, unlocked items and settings',
              'A partially-completed AI brief, so nine screens of answers survive a phone call or the app being closed',
              'Cached catalog data and downloaded offline resources (plan images, catalog thumbnails, 3D models)',
              'Your preferences — theme (Light / Dark / System), units (Meters / Feet), and language',
            ]} />

            <SubHeading>What We Do <em>Not</em> Collect</SubHeading>
            <BulletList items={[
              '<strong>Location</strong> — Spatia never requests or collects your GPS or network location',
              '<strong>Contacts, camera, microphone, calendar, SMS or call logs</strong> — none of these are requested',
              '<strong>Files on your device</strong> — the app does not browse your storage. It only <em>adds</em> an exported image to your photo library, with your permission',
              '<strong>Payment card details</strong> — payments are handled entirely by Google Play; we never see your card',
            ]} />

            <Divider />

            {/* 3. How We Use */}
            <SectionHeading id="how-we-use" icon={Eye}>3. How We Use Your Data</SectionHeading>
            <BulletList items={[
              '<strong>Authentication &amp; account security</strong> — your email and password (or Google sign-in) verify your identity and issue secure session tokens',
              '<strong>Running the app</strong> — your projects, plans and placed furniture are what the 2D editor, 3D viewer and export features operate on',
              '<strong>AI design generation</strong> — your brief is sent to our server, which passes it to an AI model to generate a floor plan and returns it to the app',
              '<strong>Cost estimates</strong> — your area, storey and finish inputs are used to calculate an estimated build cost',
              '<strong>Credits &amp; entitlements</strong> — your balance, unlocks and plan tier decide which items you can place and which exports you can download',
              '<strong>Purchase verification</strong> — Google Play purchase tokens are verified with our server to activate your subscription',
              '<strong>Rewarded ads</strong> — to serve the ad, credit your reward, and enforce the daily cap of 5 ads',
              '<strong>Push notifications</strong> — your FCM token lets us send you notifications about your account and the app',
              '<strong>Offline resources</strong> — to download and manage the 3D models, thumbnails and plan images you choose to keep on-device',
              '<strong>Support</strong> — if you email us, we use your message and email address to answer you',
            ]} />
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              We do <strong className="text-spatia-ink">not</strong> use your designs, AI briefs or account information to
              build advertising profiles, and we do not sell them.
            </p>

            <Divider />

            {/* 4. Permissions */}
            <SectionHeading id="permissions" icon={Smartphone}>4. App Permissions</SectionHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-5">
              These are the Android permissions Spatia declares, each for a specific and limited purpose:
            </p>

            <div className="overflow-x-auto rounded-xl border border-spatia-line mb-6">
              <table className="w-full text-sm">
                <thead className="bg-spatia-surface2 border-b border-spatia-line">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-spatia-ink w-72">Permission</th>
                    <th className="text-left px-4 py-3 font-semibold text-spatia-ink">Why It&apos;s Needed</th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map(({ perm, reason }, i) => (
                    <tr key={perm} className={i % 2 === 0 ? 'bg-spatia-surface' : 'bg-spatia-surface2/60'}>
                      <td className="px-4 py-3 font-mono text-xs text-spatia-accentPress font-semibold whitespace-nowrap">{perm}</td>
                      <td className="px-4 py-3 text-spatia-ink2">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <SubHeading>iOS prompts</SubHeading>
            <div className="overflow-x-auto rounded-xl border border-spatia-line mb-6">
              <table className="w-full text-sm">
                <thead className="bg-spatia-surface2 border-b border-spatia-line">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-spatia-ink w-72">Prompt</th>
                    <th className="text-left px-4 py-3 font-semibold text-spatia-ink">When &amp; Why</th>
                  </tr>
                </thead>
                <tbody>
                  {iosPermissions.map(({ perm, reason }, i) => (
                    <tr key={perm} className={i % 2 === 0 ? 'bg-spatia-surface' : 'bg-spatia-surface2/60'}>
                      <td className="px-4 py-3 text-xs text-spatia-accentPress font-semibold">{perm}</td>
                      <td className="px-4 py-3 text-spatia-ink2">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <InfoBox>
              <strong>No location, Bluetooth, camera, microphone or contacts.</strong> Spatia does not request any of these,
              and cannot read your files. The only storage access it has is permission to <em>add</em> an exported image to
              your photo library — and if you decline, exporting still works through the share sheet.
            </InfoBox>

            <Divider />

            {/* 5. Data Sharing */}
            <SectionHeading id="data-sharing" icon={Share2}>5. Data Sharing &amp; Third Parties</SectionHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-5">
              We share data only with the service providers needed to operate Spatia, and only the minimum each one needs:
            </p>
            <BulletList items={[
              '<strong>Our backend server</strong> — receives your account details, projects you save to your account, AI briefs, credit and subscription state, and your push token. It is operated by us',
              '<strong>AI design provider</strong> — your AI design brief is sent from our server to a third-party AI model provider (currently OpenAI or Google Gemini) to generate your floor plan. Which provider handles a request is decided on our server; your account details are not included in what is sent to the model',
              '<strong>Google AdMob</strong> — serves rewarded ads and receives advertising identifiers and device signals. See <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" class="text-spatia-accent hover:underline">how Google uses data from apps that use its services</a>',
              '<strong>Firebase Cloud Messaging (Google)</strong> — delivers push notifications to your device using the token described above. See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" class="text-spatia-accent hover:underline">Firebase\'s privacy documentation</a>',
              '<strong>Google Sign-In</strong> — if you choose it, Google authenticates you and returns an ID token to the app. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-spatia-accent hover:underline">Google\'s Privacy Policy</a>',
              '<strong>Google Play Billing</strong> — processes all subscription payments. We receive only what is needed to verify a purchase (product ID, purchase token, order ID) — never your payment details',
              '<strong>Legal requests</strong> — we may disclose information if we are legally required to, or to protect our rights, safety, or the safety of others',
              '<strong>No data selling</strong> — we do not sell, rent or trade your personal information to anyone, for any purpose',
            ]} />

            <Divider />

            {/* 6. Advertising */}
            <SectionHeading id="advertising" icon={Megaphone}>6. Advertising &amp; Consent</SectionHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              Spatia shows <strong className="text-spatia-ink">rewarded ads only</strong>. There are no banner ads and no
              interstitials that interrupt you while designing. A rewarded ad plays only when you choose to watch one to
              earn a credit — from the Export screen, the Earn Credits screen, or an unlock prompt. You can watch up to
              5 per day.
            </p>
            <BulletList items={[
              '<strong>Provider</strong> — ads are served by Google AdMob',
              '<strong>Consent (EU/EEA &amp; UK)</strong> — before any ad is loaded, Spatia shows Google\'s UMP consent form. Your choice there controls whether AdMob may use your data for personalised ads. You can change it later from the consent options in the app',
              '<strong>iOS App Tracking Transparency</strong> — on iOS, the system tracking prompt is shown before ads are initialised. If you decline, ads are non-personalised',
              '<strong>What AdMob receives</strong> — advertising identifiers and device/ad-interaction signals, per Google\'s policies. It does not receive your Spatia account details, your projects, or your AI briefs',
              '<strong>Removing ads</strong> — Basic and Premium subscribers see no ads at all',
            ]} />

            <Divider />

            {/* 7. Data Storage */}
            <SectionHeading id="data-storage" icon={Lock}>7. Data Storage &amp; Security</SectionHeading>
            <BulletList items={[
              '<strong>On-device storage</strong> — your projects, settings, credits and session tokens are kept in the app\'s private MMKV store. It is sandboxed by the operating system and not readable by other apps on your device',
              '<strong>Encryption in transit</strong> — every request between the app and our servers uses HTTPS with TLS',
              '<strong>Access control</strong> — all account endpoints require a valid JWT access token. Tokens expire and are refreshed automatically, and are revoked on logout or account deletion',
              '<strong>Password handling</strong> — passwords are transmitted over HTTPS and hashed on our server. We cannot read your password, and nobody at Spatia can tell you what it is',
              '<strong>Payments</strong> — payment credentials never touch our servers or your device storage; Google Play handles the entire transaction',
              '<strong>Honest limitation</strong> — no method of transmission or storage is perfectly secure. We take reasonable measures to protect your data, but cannot guarantee absolute security',
            ]} />

            <Divider />

            {/* 8. Data Retention */}
            <SectionHeading id="data-retention" icon={Clock}>8. Data Retention</SectionHeading>
            <BulletList items={[
              '<strong>Account data</strong> — retained while your account is active. When you request deletion (in the app or via our <a href="/delete-account" class="text-spatia-accent hover:underline">Delete Account page</a>), your account is deactivated immediately and your data is permanently erased from our servers within <strong>30 days</strong>',
              '<strong>Projects &amp; AI briefs</strong> — deleted with your account. Projects that only ever existed on your device are gone as soon as you delete them or uninstall the app',
              '<strong>On-device data</strong> — wiped immediately when you delete your account from inside the app, and removed entirely when you uninstall',
              '<strong>Push tokens</strong> — removed from our server when you log out or delete your account',
              '<strong>Purchase &amp; billing records</strong> — may be kept longer where tax, accounting or consumer-protection law requires it, and are held independently by Google Play as part of your purchase history',
            ]} />

            <Divider />

            {/* 9. User Rights */}
            <SectionHeading id="user-rights" icon={UserCheck}>9. Your Rights &amp; Controls</SectionHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              You have the right to access, correct, delete, and restrict the processing of your personal data, and to
              object to it. In the app, that looks like this:
            </p>
            <BulletList items={[
              '<strong>Access</strong> — view your profile, projects, credit balance and export history at any time in the app',
              '<strong>Update</strong> — change your name, profile details and password from Settings → Profile',
              '<strong>Delete your account</strong> — Settings → Delete Account (type-to-confirm), or use our <a href="/delete-account" class="text-spatia-accent hover:underline">Delete Account page</a>',
              '<strong>Keep a copy of your work</strong> — export any design as a PNG, a dimensioned PDF or an OBJ 3D model before you delete',
              '<strong>Ad consent</strong> — change your personalised-ads choice at any time through the consent options in the app, or the system tracking setting on iOS',
              '<strong>Notifications</strong> — turn push notifications off at any time in your device\'s system notification settings',
              '<strong>Storage</strong> — remove downloaded 3D models, thumbnails and plan images from Settings → Offline resources',
              '<strong>Complain</strong> — if you are in the EU/EEA or UK, you may lodge a complaint with your local data protection authority',
            ]} />
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              To exercise any right that is not available in the app, email us at{' '}
              <a href="mailto:basitkhokhar957@gmail.com" className="text-spatia-accent hover:underline">basitkhokhar957@gmail.com</a>{' '}
              from your registered address. We respond within 30 days.
            </p>

            <Divider />

            {/* 10. Children */}
            <SectionHeading id="childrens-privacy" icon={Baby}>10. Children&apos;s Privacy</SectionHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              Spatia is a general-audience design tool intended for users aged <strong className="text-spatia-ink">13 and over</strong>
              {' '}(16 and over where GDPR sets that age), and it is not directed at children. It contains rewarded advertising
              and in-app purchases, which is why we do not target it at a younger audience.
            </p>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              We do not knowingly collect personal information from children below those ages. If you believe a child has
              given us personal data, contact us at{' '}
              <a href="mailto:basitkhokhar957@gmail.com" className="text-spatia-accent hover:underline">basitkhokhar957@gmail.com</a>{' '}
              and we will delete it promptly.
            </p>

            <Divider />

            {/* 11. In-App Purchases */}
            <SectionHeading id="in-app-purchases" icon={CreditCard}>11. Purchases &amp; Subscriptions</SectionHeading>
            <BulletList items={[
              'Spatia is free to download and use. Exports and some premium catalog items cost <strong>credits</strong>, which you can earn free by watching rewarded ads (up to 5 per day) or receive with a subscription',
              'Paid plans are billed through <strong>Google Play Billing</strong>. We never receive or store your card, bank or billing address details',
              'Your plan tier, expiry date and licence key are stored on our server and cached on your device so the app knows what to unlock for you',
              'Subscriptions renew automatically until cancelled. Manage or cancel yours in the Google Play Store → Subscriptions',
              'Refunds are handled under Google Play\'s refund policy',
            ]} />

            <Divider />

            {/* 12. Notifications */}
            <SectionHeading id="notifications" icon={Bell}>12. Push Notifications</SectionHeading>
            <BulletList items={[
              'After you sign in, Spatia asks for notification permission and — if you grant it — registers a Firebase Cloud Messaging token for your device with our server',
              'We use it to send you notifications about your account, your subscription and important app updates',
              'If you decline the permission, no token is registered and no notifications are sent',
              'The app also shows a progress notification while offline resources are downloading, so you can see the transfer continuing in the background',
              'You can turn notifications off at any time in your device\'s system settings. Your token is removed from our server when you log out or delete your account',
            ]} />

            <Divider />

            {/* 13. Policy Changes */}
            <SectionHeading id="policy-changes" icon={RefreshCw}>13. Changes to This Policy</SectionHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              We may update this Privacy Policy as the app, our services or the law change. When we make a significant
              change, we will update the "Last updated" date at the top of this page and, where the change materially
              affects you, notify you in the app or by push notification.
            </p>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-4">
              The current version is always available at this public URL, without a login. Continuing to use Spatia after
              a change is posted means you accept the revised policy.
            </p>
            <p className="text-spatia-ink2 text-sm leading-relaxed">
              We recommend reviewing this page from time to time.
            </p>

            <Divider />

            {/* 14. Contact */}
            <SectionHeading id="contact" icon={Mail}>14. Contact Information</SectionHeading>
            <p className="text-spatia-ink2 text-sm leading-relaxed mb-5">
              If you have questions, concerns or requests about this Privacy Policy or how your data is handled,
              please get in touch:
            </p>

            <div className="bg-spatia-surface2 rounded-2xl border border-spatia-line p-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-spatia-accentSoft flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-4 h-4 text-spatia-accentPress" />
                </div>
                <div>
                  <p className="text-xs text-spatia-ink3 font-medium uppercase tracking-wide mb-0.5">Developer / Owner</p>
                  <p className="text-spatia-ink font-semibold">Basit Khokhar</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-spatia-accentSoft flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-spatia-accentPress" />
                </div>
                <div>
                  <p className="text-xs text-spatia-ink3 font-medium uppercase tracking-wide mb-0.5">Support Email</p>
                  <a href="mailto:basitkhokhar957@gmail.com" className="text-spatia-accentPress font-semibold hover:underline">
                    basitkhokhar957@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-spatia-accentSoft flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-4 h-4 text-spatia-accentPress" />
                </div>
                <div>
                  <p className="text-xs text-spatia-ink3 font-medium uppercase tracking-wide mb-0.5">App Package</p>
                  <p className="text-spatia-ink2 font-mono text-xs">com.spatia3dspacedesigner.app</p>
                </div>
              </div>

              <div className="pt-3 border-t border-spatia-line">
                <p className="text-spatia-ink3 text-xs">
                  This privacy policy is publicly accessible without a login and complies with the Google Play Developer
                  Program Policies, Apple App Store guidelines and GDPR requirements.
                </p>
              </div>
            </div>

          </div>
        </article>
      </div>

      <Footer />
    </div>
  )
}
