"use client";

import Image from "next/image";
import Link from "next/link";

export default function AnnualAMCPage() {
  return (
    <>
      {/* INTRO / WHAT WE DELIVER */}
      <section
        className="relative px-10 pt-15 pb-5
        before:content-[''] before:absolute before:inset-0
        before:bg-[url('/annual-amc-hero-placeholder.jpg')] before:bg-cover before:bg-center
        after:content-[''] after:absolute after:inset-0
        after:bg-black/80"
      >
        <div className="flex flex-col justify-center items-center relative z-10 max-w-5xl mx-auto text-white space-y-6">
          <div className="relative z-10 max-w-6xl mx-auto px-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Reliable{" "}
              <span className="text-[var(--primery)]">
                Annual Maintenance Contracts (AMC)
              </span>
            </h1>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Reya AV offers{" "}
            <strong className="text-white">
              comprehensive Annual Maintenance Contracts (AMC)
            </strong>{" "}
            designed to keep your audio, visual, LED, acoustic, and lighting
            systems operating at peak performance.
            Our AMC services focus on{" "}
            <strong className="text-white">
              preventive maintenance, quick response, and system reliability
            </strong>.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Backed by{" "}
            <strong className="text-white">
              two decades of industry experience
            </strong>,
            our maintenance approach minimizes downtime, extends equipment life,
            and ensures uninterrupted guest experiences across hospitality and
            commercial spaces.
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
                title: "Preventive Maintenance",
                text: "Scheduled system checks to identify and resolve issues before they impact performance."
              },
              {
                title: "Quick Response & Support",
                text: "Prompt technical assistance to minimize downtime and operational disruption."
              },
              {
                title: "System Health Monitoring",
                text: "Continuous evaluation of system performance for long-term reliability."
              },
              {
                title: "Firmware & Configuration Updates",
                text: "Regular updates to keep systems optimized, secure, and compatible."
              },
              {
                title: "Spare Parts & Repairs",
                text: "Efficient handling of repairs and replacement components as per AMC scope."
              },
              {
                title: "Expert Technical Assistance",
                text: "Support from trained professionals with deep understanding of AV systems."
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
            AMC Coverage for{" "}
            <span className="text-[var(--primery)]">
              Hospitality & Commercial Spaces
            </span>
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
            <li>• Hotels & Banquet Halls</li>
            <li>• Pubs & Breweries</li>
            <li>• Restaurants & Cafés</li>
            <li>• Gyms & Wellness Spaces</li>
            <li>• Corporate & Event Venues</li>
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
            Keep Your Systems Performing at Their Best
          </h2>
          <p className="text-gray-300 mb-8">
            Speak with our experts to customize an AMC plan that ensures
            reliability, longevity, and peace of mind for your AV systems.
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
