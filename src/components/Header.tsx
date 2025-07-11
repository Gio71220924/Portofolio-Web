import { useEffect, useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "../style/Header.css";

interface HeaderProps {
  onContactClick: () => void;
}

const Header = ({ onContactClick }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    if (id === "home" || id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "resume", label: "Resume" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <header className={`header-container py-3 border-bottom ${scrolled ? "scrolled" : ""}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="header-logo" onClick={() => scrollToSection("home")}>
          Gio's Portfolio
        </div>

        {/* Hamburger (mobile) */}
        <div
          className={`hamburger-button ${scrolled ? "scrolled" : ""} d-lg-none`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
        </div>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            {sections.map((section) => {
              const isHovered = hoveredLink === section.id;
              const linkClass = scrolled
                ? isHovered
                  ? "header-link hovered-scrolled"
                  : "header-link scrolled"
                : isHovered
                ? "header-link hovered"
                : "header-link";
              return (
                <li key={section.id}>
                  <a
                    className={linkClass}
                    onClick={() => scrollToSection(section.id)}
                    onMouseEnter={() => setHoveredLink(section.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}

            {/* Contact Icon (only visible on mobile hamburger menu) */}
            <li className="d-lg-none mt-3">
              <a
                className="header-link"
                onClick={() => {
                  onContactClick();
                  setMenuOpen(false);
                }}
              >
                <FaRegEnvelope size={22} style={{ marginRight: "8px" }} />
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact icon (desktop only) */}
        <div
          className={`header-icon ${scrolled ? "scrolled" : ""} d-none d-lg-block`}
          onClick={onContactClick}
        >
          <FaRegEnvelope size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
