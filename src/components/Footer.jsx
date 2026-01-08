import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="kalesh-footer">
      <div className="footer-links">
        <Link to="/careers">Careers</Link>
        <Link to="/privacy">Privacy</Link>
      </div>

      <p>© 2026 Kalesh</p>
    </footer>
  );
}

export default Footer;
