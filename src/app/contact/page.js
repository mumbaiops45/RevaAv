import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div
      className="px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-0
  after:w-full after:h-[400px]
  after:bg-[var(--primery)]
  after:opacity-20
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]
"
    >
      <div className="relative z-10 max-w-7xl mx-auto text-white">

        {/* Heading */}
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">
          Contact <span className="text-[var(--primery)]">Us</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center max-w-2xl mx-auto text-gray-300 mb-12">
          Get in touch for professional audio-visual, LED, acoustic,
          lighting and integrated AV solutions. Our team is ready
          to assist you.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Contact Details */}
          <div className="
            bg-white/10 backdrop-blur-xl border border-white/20
            rounded-2xl p-6 md:p-8 shadow-xl
          ">
            <h3 className="text-[var(--primery)] text-lg font-semibold mb-6">
              Contact Details
            </h3>

            <div className="space-y-5 text-gray-300">

              <p className="flex items-center gap-3">
                <MapPin className="text-[var(--primery)] stroke-[1.5]" />
                Reya AV <br />
                Bengaluru, Karnataka 560038
              </p>

              <p className="flex items-center gap-3">
                <Phone className="text-[var(--primery)] stroke-[1.5]" />
                <a
                  href="tel:+918447117195"
                  className="hover:text-[var(--primery)] transition"
                >
                  +91 84471 17195
                </a>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="text-[var(--primery)] stroke-[1.5]" />
                <a
                  href="mailto:info@example.com"
                  className="hover:text-[var(--primery)] transition"
                >
                  info@example.com
                </a>
              </p>


              <p className="flex items-center gap-3">
                <MessageCircle className="text-[var(--primery)] stroke-[1.5]" />
                <a
                  href="https://wa.me/918447117195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primery)] transition"
                >
                  WhatsApp Chat
                </a>
              </p>


              <p className="flex items-center gap-3">
                <Instagram className="text-[var(--primery)] stroke-[1.5]" />
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primery)] transition"
                >
                  Instagram
                </a>
              </p>

              <p className="flex items-center gap-3">
                <MapPin className="text-[var(--primery)] stroke-[1.5]" />
                <a
                  href="https://maps.google.com/?q=Reya+AV+Bengaluru+560038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primery)] transition"
                >
                  Google Map Location
                </a>
              </p>


            </div>
          </div>

          {/* Contact Form */}
          <div className="
            bg-white/10 backdrop-blur-xl border border-white/20
            rounded-2xl p-6 md:p-8 shadow-xl
          ">
            <h3 className="text-[var(--primery)] text-lg font-semibold mb-6">
              Send Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-black/40
                border border-white/20 outline-none
                focus:border-[var(--primery)]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-black/40
                border border-white/20 outline-none
                focus:border-[var(--primery)]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded-lg bg-black/40
                border border-white/20 outline-none
                focus:border-[var(--primery)]"
              />

              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded-lg bg-black/40
                border border-white/20 outline-none
                focus:border-[var(--primery)]"
              ></textarea>

              <button
                type="submit"
                className="bg-[var(--primery)] px-8 py-3 rounded-lg
                text-white hover:opacity-90 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
