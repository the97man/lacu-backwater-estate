import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  const isHomeActive = location.pathname === "/" && location.hash === "";

  const isVillasActive =
    location.pathname === "/" && location.hash === "#villas";

  const isOurStoryActive =
    location.pathname === "/" && location.hash === "#our-story";

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          to="/"
          className="brand"
          onClick={close}
          aria-label="LAKŌ Backwater Estate home"
        >
          <span className="brand-mark">LAKŌ</span>
          <span className="brand-sub">BACKWATER ESTATE</span>
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {/* Welcome */}
          <Link
            to="/"
            onClick={close}
            className={isHomeActive ? "active" : ""}
            aria-current={isHomeActive ? "page" : undefined}
          >
            Welcome
          </Link>

          {/* Our Story */}
          <Link
            to="/#our-story"
            onClick={close}
            className={isOurStoryActive ? "active" : ""}
            aria-current={isOurStoryActive ? "location" : undefined}
          >
            Our Story
          </Link>

          {/* The Villas */}
          <Link
            to="/#villas"
            onClick={close}
            className={isVillasActive ? "active" : ""}
            aria-current={isVillasActive ? "location" : undefined}
          >
            The Villas
          </Link>

          {/* Tourism */}
          <NavLink to="/RespTour" onClick={close}>
            Tourism
          </NavLink>

          {/* Experiences */}
          <NavLink to="/experiences" onClick={close}>
            Experiences
          </NavLink>

          {/* Enquire */}
          <Link to="/booking" className="nav-cta" onClick={close}>
            Enquire <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
