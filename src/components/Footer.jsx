import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="kalesh-footer">
      <div className="container-fluid px-5 py-5">
        <div className="row">
          {/* COLUMN 1 : LOGO + BRAND */}
          <div className="col-md-3 mb-4">
            <div className="footer-brand">
              <img src="/kalesh_navbar_logo.png" alt="Kalesh Logo" />
            </div>

            <button className="coming-soon-btn">Coming Soon</button>
          </div>

          {/* COLUMN 2 : WHAT WE DO */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">What We Do</h5>
            <ul className="footer-list">
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/communityguidelines">Community Guidelines</Link>
              </li>
              <li>
                <Link to="/promotion">For Paid Promotion</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 : WHO WE ARE */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Who We Are</h5>
            <ul className="footer-list">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4 : NEED HELP */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Need Help</h5>
            <ul className="footer-list">
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/securityadvisory">Security Advisory</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              {/* COLUMN 1: COPYRIGHT */}
              <div className="col-md-4 text-center text-md-start mb-2 mb-md-0">
                © 2026 Kalesh
              </div>

              {/* COLUMN 2: TERMS & PRIVACY */}
              <div className="col-md-4 text-center mb-2 mb-md-0">
                <Link to="/termsandconditions">Terms & Conditions</Link>
                
              </div>

              {/* COLUMN 3: SOCIAL ICONS */}
              <div className="col-md-4 text-center text-md-end footer-socials ">
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
