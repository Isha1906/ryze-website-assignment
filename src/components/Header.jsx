import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <h2 className="logo">Ryze </h2>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <a href="/">Home</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <button className="cta btn btn-outline">Book a Demo</button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span/>
          <span/>
          <span/>
        </button>
      </div>

      {/* Mobile Nav */}
      
        <div className={`nav-mobile ${open ? 'open':''}`}>
          <a href="/" onClick={() => setOpen(false)}>Home</a>
          <a href="/features" onClick={() => setOpen(false)}>Features</a>
          <a href="/pricing" onClick={() => setOpen(false)}>Pricing</a>
          <button className="cta mobile-cta" onClick={()=>setOpen(false)}>Book a Demo</button>
        </div>
      
    </header>
  );
}
