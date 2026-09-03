import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsAndConditions from './pages/TermsAndConditions.jsx'
import AboutApp from './pages/AboutApp.jsx'
import DeleteAccount from './pages/DeleteAccount.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      {/* Multiple external links (app store listings, in-app links, website nav) point to different aliases for the same page. */}
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/terms-of-service" element={<TermsAndConditions />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/about" element={<AboutApp />} />
      {/* Any unmatched path falls back to Home instead of rendering blank. */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
