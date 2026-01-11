import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Paid_Promotions from "./pages/Paid_Promotions";
import Careers from "./pages/Careers";
import Features from "./pages/Features";

import Policy from "./pages/Policy";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CommunnityGuidelines from "./pages/CommunityGuidelines";
import SecurityAdvisory from "./pages/SecurityAdvisory";

function App() {
  // 🔥 FIX MOBILE 100vh ISSUE (GLOBAL)
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  return (
    <div className="app-layout">
      <Navbar />

      {/* MAIN CONTENT */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/paid_promotions" element={<Paid_Promotions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/features" element={<Features />} />

          <Route path="/policy" element={<Policy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route
            path="/communityguidelines"
            element={<CommunnityGuidelines />}
          />
          <Route path="/securityadvisory" element={<SecurityAdvisory />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
