import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Paid_Promotions from "./pages/Paid_Promotions";
import Careers from "./pages/Careers";
import Policy from "./pages/Policy";
<<<<<<< HEAD
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CommunnityGuidelines from "./pages/CommunityGuidelines";
import SecurityAdvisory from "./pages/SecurityAdvisory";
=======
import Terms_Conditions from "./pages/Terms_Conditions";
import Features from "./pages/Features";
>>>>>>> 104b0142b5ff4703624578e287119c432dc5dff5

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
          <Route path="/paid_promotions" element={<Paid_Promotions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/policy" element={<Policy />} />
<<<<<<< HEAD
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/communityguidelines" element={<CommunnityGuidelines />} />
          <Route path="/securityadvisory" element={<SecurityAdvisory />} />
=======
          <Route path="/terms_conditions" element={<Terms_Conditions />} />
          <Route path="/features" element={<Features />} />
>>>>>>> 104b0142b5ff4703624578e287119c432dc5dff5
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
