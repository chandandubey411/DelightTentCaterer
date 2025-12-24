import { useState } from "react";

export default function Enquiry() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "d2b26a78-5c3a-4abb-8cca-c6ec813d0424"); // 🔑 replace

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Thank you! Your enquiry has been sent successfully.");
        e.target.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="pt-20 bg-[#f8f3ea] min-h-screen text-gray-800">
      {/* ===== PAGE HEADER ===== */}
      <div className="bg-black text-white py-16 text-center">
        <h1 className="text-4xl font-serif mb-2">Enquiry</h1>
        <p className="text-sm text-gray-300">
          Home / <span className="text-[#d6a85a]">Enquiry</span>
        </p>
      </div>

      {/* ===== FORM SECTION ===== */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white rounded shadow-lg p-8">
          <h2 className="text-2xl font-serif text-[#d6a85a] mb-6 text-center">
            Get In Touch With Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot (spam protection) */}
            <input type="checkbox" name="botcheck" className="hidden" />

            {/* NAME */}
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#d6a85a]"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#d6a85a]"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#d6a85a]"
              />
            </div>

            {/* EVENT TYPE */}
            <div>
              <label className="block text-sm mb-1">Event Type</label>
              <select
                name="event"
                required
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#d6a85a]"
              >
                <option value="">Select Event</option>
                <option>Birthday Party</option>
                <option>Wedding</option>
                <option>Corporate Event</option>
                <option>Mehndi / Cocktail</option>
                <option>Other</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#d6a85a]"
              ></textarea>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-[#d6a85a] text-black py-3 rounded font-medium hover:bg-yellow-500 transition"
            >
              Send Enquiry
            </button>

            {/* STATUS MESSAGE */}
            {status && (
              <p className="text-center text-sm mt-4 text-green-600">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
