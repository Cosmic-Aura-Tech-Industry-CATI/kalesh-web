import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Promotions from "./pages/Promotions";
import PaidPromotions from "./pages/PaidPromotions";
import Careers from "./pages/Careers";
import Features from "./pages/Features";
import ContactUs from "./pages/ContactUs";
import HelpCenter from "./pages/HelpCenter";

import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CommunnityGuidelines from "./pages/CommunityGuidelines";
import SecurityAdvisory from "./pages/SecurityAdvisory";



function App() {
  return (
    <div className="app-layout">
      <Navbar />

      {/* MAIN CONTENT */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/paidpromotions" element={<PaidPromotions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/communityguidelines" element={<CommunnityGuidelines />} />
          <Route path="/securityadvisory" element={<SecurityAdvisory />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/helpcenter" element={<HelpCenter />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
