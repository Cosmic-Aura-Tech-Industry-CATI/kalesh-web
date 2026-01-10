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
              <li>Features</li>
              <li>Security</li>
              <li>For Paid Promotion</li>
            </ul>
          </div>

          {/* COLUMN 3 : WHO WE ARE */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Who We Are</h5>
            <ul className="footer-list">
              <li>About Us</li>
              <li>Careers</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* COLUMN 4 : NEED HELP */}
          <div className="col-md-3 mb-4">
            <h5 className="footer-title">Need Help</h5>
            <ul className="footer-list">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Security Advisory</li>
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
                <a href="/privacy">Terms & Privacy Policy</a>
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
