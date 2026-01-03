import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">
        {/* ABOUT */}
        <div>
          <h3 className="text-xl font-serif text-[#d6a85a] mb-4">
            Delight Tent & Caterer
          </h3>
          <p className="text-sm leading-6">
            We specialize in wedding events, birthday decor, corporate
            functions and premium catering services. Our focus is on
            quality, creativity and flawless execution to make every
            celebration memorable.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-lg font-serif text-[#d6a85a] mb-4">
            Contact Details
          </h4>

          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#d6a85a]" />
              <span>
                Plot No. 362, Abhay Khand 3,<br />
                Near San Francis School,<br />
                Indirapuram, Ghaziabad, U.P.
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#d6a85a]" />
              <a href="tel:+919971789706" className="hover:text-white">
                +91 99717 89706
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#d6a85a]" />
              <a href="tel:+919873448600" className="hover:text-white">
                +91 98734 48600
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#d6a85a]" />
              <a
                href="mailto:info@delighttentandcaterer.in"
                className="hover:text-white"
              >
                info@delighttentandcaterer.in
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-lg font-serif text-[#d6a85a] mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-[#d6a85a] rounded-full hover:bg-[#d6a85a] hover:text-black transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/delight_tent_caterer?igsh=MTF2NGJ1dW1ydXNnbw=="
              className="w-10 h-10 flex items-center justify-center border border-[#d6a85a] rounded-full hover:bg-[#d6a85a] hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/919971789706"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-[#d6a85a] rounded-full hover:bg-[#d6a85a] hover:text-black transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Delight Tent & Caterer. All Rights Reserved.
      </div>
    </footer>
  );
}
