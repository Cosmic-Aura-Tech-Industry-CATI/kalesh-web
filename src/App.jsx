import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Paid_Promotions from "./pages/Paid_Promotions";
import Careers from "./pages/Careers";
import Policy from "./pages/Policy";
import Terms_Conditions from "./pages/Terms_Conditions";
import Features from "./pages/Features";

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
          <Route path="/terms_conditions" element={<Terms_Conditions />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
