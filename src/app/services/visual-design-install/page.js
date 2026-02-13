"use client";

import Image from "next/image";
import Link from "next/link";

export default function VisualDesignInstallPage() {
  return (
    <>
      {/* INTRO / WHAT WE DELIVER */}
      <section
        className="relative px-10 pt-15 pb-5
        before:content-[''] before:absolute before:inset-0
        before:bg-[url('/visual-design-hero-placeholder.jpg')] before:bg-cover before:bg-center
        after:content-[''] after:absolute after:inset-0
        after:bg-black/80"
      >
        <div className="flex flex-col justify-center items-center relative z-10 max-w-5xl mx-auto text-white space-y-6">
          <div className="relative z-10 max-w-6xl mx-auto px-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="text-[var(--primery)]">Visual Design & Installation</span>
            </h1>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Reya AV delivers <strong className="text-white">integrated visual design and installation solutions</strong>
            tailored for hospitality and commercial environments.
            Our visual systems are designed to deliver
            <strong className="text-white"> clarity, reliability, and seamless performance</strong>
            across diverse applications.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Backed by <strong className="text-white">two decades of audio-visual industry experience</strong>,
            our solutions ensure optimal viewing angles, consistent brightness,
            and smooth integration with audio, lighting, and control systems.
          </p>
        </div>
      </section>

      {/* SPECIALITY CARDS */}
      <section
        className="relative px-10 py-20
        before:content-[''] before:absolute before:inset-0
        before:bg-[url('/service.webp')] before:bg-cover before:bg-center
        after:content-[''] after:absolute after:inset-0
        after:bg-black/80"
      >
        <div className="relative z-10 max-w-6xl mx-auto text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Custom Visual System Design",
                text: "Tailored visual system layouts based on space requirements and viewing conditions."
              },
              {
                title: "Display & Projection Solutions",
                text: "Professional displays and projection systems designed for clarity and consistent performance."
              },
              {
                title: "Video Distribution & Switching",
                text: "Reliable video distribution systems for smooth content delivery across multiple displays."
              },
              {
                title: "Control & Automation Integration",
                text: "User-friendly control systems enabling seamless operation of visual environments."
              },
              {
                title: "Hospitality-Focused Visual Design",
                text: "Visual solutions designed to complement interior aesthetics and guest experience."
              },
              {
                title: "Precision Installation & Support",
                text: "Expert installation backed by long-term technical support and maintenance."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-white/10 backdrop-blur-lg
                  border border-white/20
                  rounded-xl p-8 shadow-lg
                  hover:border-[var(--primery)]
                  transition-all duration-300 ease-out
                "
              >
                <h3
                  className="text-[var(--primery)] relative pb-3 mb-3 text-lg font-semibold
                  after:content-[''] after:absolute
                  after:bg-[var(--primery)] after:h-1 after:w-full
                  after:left-0 after:bottom-0"
                >
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section
        className="relative px-10 py-20
        before:content-[''] before:absolute before:inset-0
        before:bg-[url('/service.webp')] before:bg-cover before:bg-center
        after:content-[''] after:absolute after:inset-0
        after:bg-black/80"
      >
        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <h2 className="relative pb-3 text-lg md:text-xl lg:text-2xl
        after:content-[''] after:absolute
        after:bg-[var(--primery)]
        after:h-1 after:w-1/3 after:left-0 after:bottom-0 text-3xl font-bold mb-8">
            Visual Solutions for <span className="text-[var(--primery)]">Hospitality Spaces</span>
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <li>• Hotels & Banquet Halls</li>
            <li>• Pubs & Breweries</li>
            <li>• Restaurants & Cafés</li>
            <li>• Corporate & Conference Spaces</li>
            <li>• Event & Entertainment Venues</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative px-10 py-20
        before:content-[''] before:absolute before:inset-0
        before:bg-[url('/service.webp')] before:bg-cover before:bg-center
        after:content-[''] after:absolute after:inset-0
        after:bg-black/80"
      >
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Upgrade Your Space with Seamless Visual Systems
          </h2>
          <p className="text-gray-300 mb-8">
            Speak with our experts to design and install a visual solution
            that enhances engagement and operational efficiency.
          </p>

          <Link href="/contact" className="btn-primary inline-block">
            <button type="button">
              Discuss Your Requirement
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
