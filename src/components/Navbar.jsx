import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from '../assets/logo.png'

const galleryItems = [
  { label: "Birthday Decor", slug: "birthday-decor" },
  { label: "Mehndi Event", slug: "mehndi-event" },
  { label: "Cocktail", slug: "cocktail" },
  { label: "Marriage", slug: "marriage" },
  { label: "Corporate Events", slug: "corporate-events" },
  { label: "Stage Performance", slug: "stage-performance" },
  { label: "Live Band", slug: "live-band" },
  { label: "Dance Troupe", slug: "dance-troupe" },
  { label: "Bride Groom Entry", slug: "bride-groom-entry" },
  { label: "Catering & Decoration", slug: "catering-decoration" },
  { label: "Decoration", slug: "decoration" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setGalleryOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20 text-[#d6a85a]">
          {/* LOGO */}
          <Link to="/" onClick={closeAll}>
            <img src={logo} alt="Logo" className="h-16" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium relative">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/services" className="hover:text-white">Services</Link>

            {/* GALLERY */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setGalleryOpen((v) => !v)}
                className="flex items-center gap-1 hover:text-white"
              >
                Gallery <ChevronDown size={16} />
              </button>

              {galleryOpen && (
                <div
                  className="absolute top-full left-[-300px] mt-3 w-[700px]
                             bg-black border border-[#d6a85a]
                             shadow-xl z-[999] pointer-events-auto"
                >
                  <ul className="grid grid-cols-2">
                    {galleryItems.map((item) => (
                      <li
                        key={item.slug}
                        className="px-6 py-3 border-b border-[#d6a85a]/40
                                   hover:bg-[#d6a85a] hover:text-black transition"
                      >
                        <Link
                          to={`/gallery/${item.slug}`}
                          onClick={closeAll}
                          className="block w-full h-full"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link to="/catering" className="hover:text-white">Catering</Link>
            <Link to="/enquiry" className="hover:text-white">Enquiry</Link>
            <Link to="/contact" className="hover:text-white">Contact Us</Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black text-[#d6a85a] px-6 pb-6">
          <Link onClick={closeAll} className="block py-3 border-b" to="/">Home</Link>
          <Link onClick={closeAll} className="block py-3 border-b" to="/about">About Us</Link>
          <Link onClick={closeAll} className="block py-3 border-b" to="/services">Services</Link>

          {/* MOBILE GALLERY */}
          <button
            onClick={() => setGalleryOpen(!galleryOpen)}
            className="w-full flex justify-between items-center py-3 border-b"
          >
            Gallery
            <ChevronDown
              size={18}
              className={`transition ${galleryOpen ? "rotate-180" : ""}`}
            />
          </button>

          {galleryOpen && (
            <div className="pl-4">
              {galleryItems.map((item) => (
                <Link
                  key={item.slug}
                  to={`/gallery/${item.slug}`}
                  onClick={closeAll}
                  className="block py-2 text-sm hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link onClick={closeAll} className="block py-3 border-b" to="/catering">Catering</Link>
          <Link onClick={closeAll} className="block py-3 border-b" to="/enquiry">Enquiry</Link>
          <Link onClick={closeAll} className="block py-3" to="/contact">Contact Us</Link>
        </div>
      )}
    </header>
  );
}
