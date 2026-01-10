import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Promotions from "./pages/Promotions";
import Careers from "./pages/Careers";
import Policy from "./pages/Policy";
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/communityguidelines" element={<CommunnityGuidelines />} />
          <Route path="/securityadvisory" element={<SecurityAdvisory />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
