import { Routes, Route } from 'react-router-dom'
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
      {/* The app links to /terms-of-service; keep /terms as an alias for the website nav. */}
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/terms-of-service" element={<TermsAndConditions />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
      <Route path="/about" element={<AboutApp />} />
    </Routes>
  )
}
