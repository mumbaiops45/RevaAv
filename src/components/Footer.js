import { MapPin, Phone, Mail } from "lucide-react";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur-md text-white  ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-4">LOGO</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We deliver end-to-end LED, audio, acoustic, visual, and lighting
            solutions with expert design, installation, and long-term support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-[var(--primery)]">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Our Projects", path: "/projects" },
              { name: "Our Products", path: "products" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact Us", path: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  href={link.path}
                  className="text-gray-300 hover:text-[var(--primery)] transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Solutions */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[var(--primery)]">Our Services</h4>
          <ul className="space-y-3">
            {[
              { name: "LED Wall Solution", path: "/services/led-wall-solution" },
              { name: "Audio Design Install", path: "/services/audio-design-install" },
              { name: "Acoustic Design Install", path: "/services/acoustic-design-install" },
              { name: "Visual Design Install", path: "/services/visual-design-install" },
              { name: "Lighting Design Install", path: "/services/lighting-design-install" },
              { name: "Annual AMC", path: "/services/annual-amc" },
            ].map((service, i) => (
              <li key={i}>
                <Link
                  href={service.path}
                  className="text-gray-300 hover:text-[var(--primery)] transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[var(--primery)]">
            Contact Details
          </h4>

          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="text-[var(--primery)] stroke-[1.5]" />
              RR Nagar, Bangalore, India
            </li>

            <li className="flex items-center gap-3">
              <Phone className="text-[var(--primery)] stroke-[1.5]" />
              <a
                href="tel:+918447117195"
                className="hover:text-[var(--primery)] transition"
              >
                +91 84471 17195
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="text-[var(--primery)] stroke-[1.5]" />
              <a
                href="mailto:info@example.com"
                className="hover:text-[var(--primery)] transition"
              >
                info@example.com
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mt-10">

            <a
              href="#"
              className="group p-2 rounded-full border border-white/20 
      hover:bg-[var(--primery)] 
      transition duration-300"
            >
              <Instagram className="w-5 h-5 text-[var(--primery)] group- group-hover:text-black" />
            </a>

            <a
              href="#"
              className="group p-2 rounded-full border border-white/20 
      hover:bg-[var(--primery)] 
      transition duration-300"
            >
              <Facebook className="w-5 h-5 text-[var(--primery)] group-hover:text-black" />
            </a>

            <a
              href="#"
              className="group p-2 rounded-full border border-white/20 
      hover:bg-[var(--primery)] 
      transition duration-300"
            >
              <Linkedin className="w-5 h-5 text-[var(--primery)] group-hover:text-black" />
            </a>

            <a
              href="#"
              className="group p-2 rounded-full border border-white/20 
      hover:bg-[var(--primery)] 
      transition duration-300"
            >
              <Youtube className="w-5 h-5 text-[var(--primery)] group-hover:text-black" />
            </a>

          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between px-18 border-t border-gray-800 py-4 text-sm text-gray-400">
        <div>© {new Date().getFullYear()} All Rights Reserved.</div>
        <div className="flex gap-8">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
