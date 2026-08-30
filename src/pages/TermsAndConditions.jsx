import { Link } from 'react-router-dom'
import { ScrollText, ArrowLeft, ChevronRight } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-bold text-spatia-ink mb-4 pb-3 border-b border-spatia-lineSoft">{title}</h2>
      {children}
    </div>
  )
}

function Para({ children }) {
  return <p className="text-spatia-ink2 text-sm leading-relaxed mb-3">{children}</p>
}

function Bullet({ items }) {
  return (
    <ul className="space-y-2 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-spatia-ink2 text-sm leading-relaxed">
          <ChevronRight className="w-3.5 h-3.5 text-spatia-accentDeep mt-1 flex-shrink-0" />
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </ul>
  )
}

export default function TermsAndConditions() {
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-spatia-accent300 to-spatia-accentDeep flex items-center justify-center shadow-lg shadow-spatia-accentSoft flex-shrink-0">
              <ScrollText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-display text-4xl font-bold text-spatia-ink mb-1">Terms &amp; Conditions</h1>
              <p className="text-spatia-ink2 text-sm">
                <strong className="text-spatia-ink">App:</strong> Spatia: 3D Space Designer &nbsp;·&nbsp;
                <strong className="text-spatia-ink">Effective Date:</strong> August 30, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-spatia-surface rounded-2xl border border-spatia-line shadow-sm p-8 md:p-12">

          <Para>
            Please read these Terms and Conditions carefully before using Spatia: 3D Space Designer.
            By downloading, installing or using Spatia, you agree to be bound by these terms. If you do not agree,
            please do not use the app.
          </Para>

          <Section title="1. Acceptance of Terms">
            <Para>
              By creating an account or using Spatia, you confirm that you are at least 13 years old (16 where GDPR
              requires it), and that if you are under 18 you have your parent or guardian&apos;s permission to use the app
              and to make any purchase.
            </Para>
            <Para>
              These Terms form an agreement between you and Basit Khokhar, the developer of Spatia.
            </Para>
          </Section>

          <Section title="2. Licence to Use">
            <Para>
              We grant you a limited, non-exclusive, non-transferable, revocable licence to use Spatia for your own
              personal or business design work, in line with these Terms.
            </Para>
            <Bullet items={[
              'You may not copy, modify, redistribute or resell the app or any part of it',
              'You may not reverse engineer, decompile or attempt to extract the source code, models or catalog assets',
              'You may not use the app for any unlawful purpose, or to design anything intended to cause harm',
              'You may not abuse the credit system — including using automation, emulators or modified clients to farm rewarded ads, or interfering with ad delivery or purchase verification',
              'You may not attempt to disrupt, overload or gain unauthorised access to our servers or the AI generation service',
            ]} />
          </Section>

          <Section title="3. Your Account">
            <Para>You are responsible for:</Para>
            <Bullet items={[
              'Keeping your account credentials confidential — do not share your password',
              'All activity that happens under your account',
              'Giving accurate registration information and keeping it up to date',
              'Notifying us promptly at basitkhokhar957@gmail.com if you believe your account has been accessed without your permission',
            ]} />
            <Para>
              One person, one account. Creating multiple accounts to obtain extra free credits is a breach of these Terms.
            </Para>
          </Section>

          <Section title="4. Your Content">
            <Para>
              Your designs are yours. You retain all ownership of the floor plans, layouts and projects you create in
              Spatia, and you are free to use, publish and sell work based on them.
            </Para>
            <Para>
              You grant us only the limited permission we need to run the service: to store your designs, transmit them
              between your device and your account, and — where you use the AI designer — process your brief so a plan
              can be generated and returned to you. We do not claim ownership of your designs and we do not sell them.
            </Para>
            <Para>
              Furniture models, textures, catalog artwork and templates supplied with the app remain the property of us
              or our licensors, and are licensed to you only for use inside your Spatia designs and their exports.
            </Para>
          </Section>

          <Section title="5. Credits, Rewarded Ads & Virtual Items">
            <Bullet items={[
              'Credits are a <strong>virtual in-app currency</strong>. They have no cash value, are not money, and are not redeemable for cash or any equivalent',
              'You receive a starting balance when you create an account, and can earn more free credits by choosing to watch rewarded ads — up to <strong>5 per day</strong>',
              'Credits are spent on exports (PNG, PDF and 3D model files) and on unlocking premium catalog items. Costs are shown before you confirm',
              'Credits and unlocked items are tied to your account. They are <strong>non-transferable</strong> between accounts, cannot be sold or gifted, and are <strong>not refundable</strong>',
              'Any unused credits and unlocked items are permanently lost when your account is deleted, whether you delete it or we do',
              'We may adjust credit costs, the starting balance, the daily ad limit and the earn rate at any time as the app develops. Changes apply going forward and do not remove credits you already hold',
              'Ads are supplied by Google AdMob and their content is not controlled by us. Rewarded ads are always optional — nothing in the app requires you to watch one',
              'If a rewarded ad fails to load or complete, no credit is granted. This is normal and not a fault of your account',
            ]} />
          </Section>

          <Section title="6. Subscriptions & Payments">
            <Bullet items={[
              'Spatia is free to download. Optional paid plans remove ads and unlock premium items and downloads',
              'All subscriptions are sold and billed through <strong>Google Play Billing</strong>. We never receive or store your card or bank details',
              'Subscriptions <strong>renew automatically</strong> at the end of each period until you cancel. Cancel any time in Google Play Store → Subscriptions — cancelling stops the next renewal and does not refund the current period',
              'Refunds are governed by Google Play&apos;s refund policy. We cannot issue refunds for purchases made through Google Play directly',
              'Prices, plan names and plan benefits may change. The current plans are always those shown on the Credits &amp; Plans screen in the app',
              'Premium benefits are available only while your plan is active. When it lapses, the app returns to the free tier — your designs are not deleted',
            ]} />
          </Section>

          <Section title="7. AI-Generated Designs">
            <Para>
              Spatia can generate a floor plan from a brief you provide, using a third-party AI model. You should
              understand what that output is, and what it is not.
            </Para>
            <Bullet items={[
              'AI-generated plans are <strong>design suggestions and visualisations only</strong>. They are not architectural, engineering, structural, electrical or plumbing drawings',
              'They are <strong>not a substitute for a licensed architect, engineer or surveyor</strong>, and must not be submitted as construction documents or used to build from directly',
              'We make no guarantee that any generated plan complies with building codes, zoning rules, fire safety regulations, accessibility requirements or planning permission in your jurisdiction',
              'Dimensions, structural feasibility, load-bearing implications and service routing are not verified. <strong>Always have a qualified professional review any design before construction</strong>',
              'AI output is probabilistic. The same brief can produce different results, and results may contain mistakes or impractical layouts. Generating a design consumes credits whether or not you like the outcome',
              'You are responsible for the briefs you submit, and must not submit content that is unlawful or that infringes someone else&apos;s rights',
            ]} />
          </Section>

          <Section title="8. Cost Estimates">
            <Para>
              The construction cost estimate is an approximate indication based on the area, storeys and finish level you
              enter, and on generic rates. It is not a quotation, a valuation or a bill of quantities, and actual costs
              vary widely by location, materials, labour rates and time. Do not rely on it for budgeting, financing or
              contracting decisions without a proper quote from a builder or quantity surveyor.
            </Para>
          </Section>

          <Section title="9. Service Availability">
            <Para>
              You can design and view your saved projects on your device without a connection. Features that depend on
              our servers — sign-in, AI generation, the live catalog, purchase verification and rewarded ads — need an
              internet connection and may be unavailable during maintenance, outages, or upstream failures at a provider
              we depend on.
            </Para>
            <Para>
              We may modify, suspend or discontinue any feature at any time. We aim to give reasonable notice of a
              material removal, but cannot guarantee it.
            </Para>
          </Section>

          <Section title="10. Intellectual Property">
            <Para>
              Spatia — including its name, logo, design system, interface, code, bundled 3D models, textures and catalog
              content — is the intellectual property of Basit Khokhar or its licensors, and is protected by copyright and
              other laws. Nothing in these Terms transfers any of it to you beyond the licence in Section 2.
            </Para>
          </Section>

          <Section title="11. Disclaimer & Limitation of Liability">
            <Para>
              Spatia is provided <strong className="text-spatia-ink">&quot;as is&quot;</strong> and{' '}
              <strong className="text-spatia-ink">&quot;as available&quot;</strong>, without warranties of any kind, express or
              implied, including fitness for a particular purpose, accuracy, or uninterrupted availability.
            </Para>
            <Para>
              To the fullest extent permitted by law, we are not liable for any indirect, incidental, special or
              consequential damages, or for loss of data, loss of profit, business interruption, construction costs, or
              any decision you make on the basis of a design, AI output or cost estimate produced in the app. Our total
              liability for any claim is limited to the amount you paid us in the 12 months before the claim arose.
            </Para>
            <Para>
              Nothing in these Terms excludes liability that cannot lawfully be excluded, including for death or personal
              injury caused by negligence, or for fraud. Some jurisdictions do not allow certain exclusions, so parts of
              this section may not apply to you.
            </Para>
          </Section>

          <Section title="12. Termination">
            <Para>
              We may suspend or terminate your account if you breach these Terms — in particular for credit or ad abuse,
              attempts to circumvent purchase verification, or unlawful use.
            </Para>
            <Para>
              You may delete your account at any time from{' '}
              <strong className="text-spatia-ink">Settings → Delete Account</strong> in the app (type{' '}
              <code className="bg-spatia-surface2 px-1 rounded text-xs">DELETE</code> to confirm), or through our{' '}
              <Link to="/delete-account" className="text-spatia-accent hover:underline">Delete Account page</Link>.
              Deletion is permanent: your projects, credits and unlocked items are erased within 30 days and cannot be
              restored. Export anything you want to keep first.
            </Para>
          </Section>

          <Section title="13. Changes to Terms">
            <Para>
              We may update these Terms as the app changes. The effective date at the top of this page shows when they
              were last revised, and significant changes will be communicated in the app. Continuing to use Spatia after
              a change means you accept the revised Terms.
            </Para>
          </Section>

          <Section title="14. Contact">
            <Para>
              Questions about these Terms? Email{' '}
              <a href="mailto:basitkhokhar957@gmail.com" className="text-spatia-accent hover:underline">basitkhokhar957@gmail.com</a>.
              For how we handle your data, see our{' '}
              <Link to="/privacy-policy" className="text-spatia-accent hover:underline">Privacy Policy</Link>.
            </Para>
          </Section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
