"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const pathname = usePathname();

  const linkStyle = (path) =>
    `transition duration-200 ${pathname === path
      ? "text-[var(--primery)]"
      : "text-white hover:text-[var(--primery)]"
    }`;

  const services = [
    { name: "LED Wall Solution", path: "/services/led-wall-solution" },
    { name: "Audio Design Install", path: "/services/audio-design-install" },
    { name: "Acoustic Design Install", path: "/services/acoustic-design-install" },
    { name: "Visual Design Install", path: "/services/visual-design-install" },
    { name: "Lighting Design Install", path: "/services/lighting-design-install" },
    { name: "Annual AMC", path: "/services/annual-amc" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/">LOGO</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          <li><Link className={linkStyle("/")} href="/">Home</Link></li>
          <li><Link className={linkStyle("/about")} href="/about">About</Link></li>

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <Link
              href="/services"
              className={`${pathname.startsWith("/services")
                ? "text-[var(--primery)]"
                : "text-white hover:text-[var(--primery)]"
                } transition duration-200 flex items-center gap-1`}
            >
              Services
              <span className={`text-sm ${serviceOpen ? "text-[var(--primery)]" : ""}`}>
                ▼
              </span>
            </Link>

            {serviceOpen && (
              <ul className="absolute top-6 left-0 w-72 bg-black/70 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl">
                {services.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.path}
                      className={`block px-5 py-3 transition ${pathname === item.path
                          ? "text-[var(--primery)]"
                          : "text-white hover:text-[var(--primery)] hover:bg-white/5"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link className={linkStyle("/products")} href="/products">Our Products</Link></li>
          <li><Link className={linkStyle("/projects")} href="/projects">Our Projects</Link></li>
          <li><Link className={linkStyle("/gallery")} href="/gallery">Gallery</Link></li>
          <li><Link className={linkStyle("/contact")} href="/contact">Contact Us</Link></li>
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl transition"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed w-[70vw] h-screen right-0 md:hidden px-6 pb-4 bg-black/60 backdrop-blur-md border-t border-white/10 overflow-y-auto">

          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Our Projects", path: "/projects" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact Us", path: "/contact" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 border-b border-white/10 transition ${pathname === item.path
                  ? "text-[var(--primery)]"
                  : "text-white hover:text-[var(--primery)]"
                }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Services */}
          <div className="mt-4">
            <p className="text-white font-semibold mb-2">Services</p>
            {services.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 pl-4 transition ${pathname === item.path
                    ? "text-[var(--primery)]"
                    : "text-white hover:text-[var(--primery)]"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
