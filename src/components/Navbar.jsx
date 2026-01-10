import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand d-flex align-items-center mx-4" to="/">
        <img src="/kalesh_navbar_logo.png" alt="logo" height="45" className="me-2" />
        
      </Link>

      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#menu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="menu">
        <ul className="navbar-nav ms-auto gap-1 mx-4">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/careers">
              Careers
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/privacy">
              Privacy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/promotions">
              Promotions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
