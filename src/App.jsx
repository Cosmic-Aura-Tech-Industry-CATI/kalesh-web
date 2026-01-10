import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Promotions from "./pages/Promotions";
import Careers from "./pages/Careers";
import Policy from "./pages/Policy";
import Terms_Conditions from "./pages/Terms_Conditions";

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
          <Route path="/terms_conditions" element={<Terms_Conditions />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
