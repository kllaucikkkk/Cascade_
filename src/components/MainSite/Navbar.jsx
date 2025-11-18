// src/components/MainSite/Navbar.jsx
import "../../styles/MainSite/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-root" aria-label="Główne menu">
      <div className="nav-bar">
        <button
          type="button"
          className="nav-home-btn"
          aria-label="Strona główna"
        >
          <svg width="20" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 13h2v8H3zm4-8h2V3H7zm10 0h2V3h-2zm7 8h2v8h-2zM12 6L2 13h3v8h6v-6h2v6h6v-8h3z"
              fill="white"
            />
          </svg>
        </button>

        <div className="nav-inline-links">
          <button type="button" className="nav-inline-btn">
            Osobiste
          </button>
          <a href="/firmowe" className="nav-inline-link">
            Firmowe
          </a>
          <button type="button" className="nav-inline-btn">
            O nas
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
