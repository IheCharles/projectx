import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header" id="top">
      <div className="container nav-wrap">
        <a href="#top" className="logo">
          Reta<span>WholeSale YAKYIK</span>
        </a>
        <nav>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            <li>
              <a href="#top" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="btn btn-sm"
                onClick={closeMenu}
                style={{ color: "#fff" }}
              >
                Contact Us
              </a>
            </li>
          </ul>
          <button
            className={`mobile-menu-toggle${menuOpen ? " active" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
