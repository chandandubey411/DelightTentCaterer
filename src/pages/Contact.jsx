export default function Contact() {
  return (
    <div className="pt-20 bg-[#f8f3ea] min-h-screen text-gray-800">
      {/* ===== HEADER ===== */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl font-serif mb-2">Contact Us</h1>
        <p className="text-sm text-gray-300">
          Home / <span className="text-[#d6a85a]">Contact</span>
        </p>
      </div>

      {/* ===== CONTACT INFO ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-serif text-[#d6a85a] mb-6">
            Get In Touch
          </h2>

          <p className="text-sm leading-7 mb-6">
            If you are planning a wedding, birthday party, corporate event or
            any special celebration, feel free to contact us. Our team is always
            happy to guide you and help plan your event smoothly.
          </p>

          <ul className="space-y-4 text-sm">
            <li>
              📍 <strong>Address:</strong>
              <br />
              Plot No. 362, Abhay Khand 3,
              <br />
              Near San Francis School,
              <br />
              Indirapuram, Ghaziabad, U.P.
            </li>

            <li>
              📞 <strong>Call:</strong>{" "}
              <a
                href="tel:+919971789706"
                className="text-[#d6a85a] font-medium"
              >
                +91 99717 89706
              </a>
            </li>

            <li>
              📞 <strong>Alternate:</strong>{" "}
              <a
                href="tel:+099717 89706"
                className="text-[#d6a85a] font-medium"
              >
                09971789706
              </a>
            </li>

            <li>
              ✉️ <strong>Email:</strong>{" "}
              <a href="mailto:info@prasvievents.com" className="text-[#d6a85a]">
                info@prasvievents.com
              </a>
            </li>

            <li>
              ⏰ <strong>Working Hours:</strong>
              <br />
              Monday – Sunday : 10:00 AM – 9:00 PM
            </li>
          </ul>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="tel:+099717 89706"
              className="bg-[#d6a85a] text-black px-6 py-3 rounded font-medium hover:bg-yellow-500 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919971789706"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#d6a85a] text-[#d6a85a] px-6 py-3 rounded font-medium hover:bg-[#d6a85a] hover:text-black transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="w-full h-[360px] rounded overflow-hidden shadow">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Abhay%20Khand%203%20Indirapuram%20Ghaziabad&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
