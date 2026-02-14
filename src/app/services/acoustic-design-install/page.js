"use client";

import Image from "next/image";
import Link from "next/link";

export default function AcousticDesignInstallPage() {
  return (
    <>
      <div className="px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-0
  after:w-full after:h-full
  after:bg-[var(--primery)]
  after:opacity-20
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]">
        {/* INTRO / WHAT WE DELIVER */}
        <section
          className=""
        >
          <div className="flex flex-col justify-center items-center relative z-10 max-w-5xl mx-auto text-white space-y-6">
            <div className="relative z-10 max-w-6xl mx-auto px-10 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Professional <span className="text-[var(--primery)]">Acoustic Design & Installation</span>
              </h1>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Reya AV delivers <strong className="text-white">scientifically designed acoustic solutions</strong>
              that control reverberation, reduce noise, and improve overall listening comfort.
              Our approach combines <strong className="text-white">acoustic analysis,
                material selection, and precision installation</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Backed by <strong className="text-white">two decades of industry experience</strong>,
              our acoustic designs ensure optimal sound performance while maintaining
              the visual aesthetics of hospitality interiors.
            </p>
          </div>
        </section>

        {/* SPECIALITY CARDS */}
        <section
          className="pt-15"
        >
          <div className="relative z-10 max-w-6xl mx-auto text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {[
                {
                  title: "Acoustic Analysis & Assessment",
                  text: "Detailed evaluation of space acoustics to identify noise issues and reverberation challenges."
                },
                {
                  title: "Customized Acoustic Design",
                  text: "Tailored acoustic treatment plans designed specifically for each space and usage."
                },
                {
                  title: "Sound Absorption Solutions",
                  text: "High-quality absorptive materials to reduce echo and improve speech and music clarity."
                },
                {
                  title: "Noise Control & Isolation",
                  text: "Effective solutions to control sound spill and external noise intrusion."
                },
                {
                  title: "Aesthetic Acoustic Treatments",
                  text: "Acoustic solutions that blend seamlessly with interior design and ambience."
                },
                {
                  title: "Precision Installation & Support",
                  text: "Accurate installation backed by long-term performance support and maintenance."
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
          className="pt-15"
        >
          <div className="relative z-10 max-w-5xl mx-auto text-white">
            <h2 className="relative pb-3 text-lg md:text-xl lg:text-2xl
        after:content-[''] after:absolute
        after:bg-[var(--primery)]
        after:h-1 after:w-1/3 after:left-0 after:bottom-0 text-3xl font-bold mb-8">
              Acoustic Solutions for <span className="text-[var(--primery)]">Hospitality Spaces</span>
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300">
              <li>• Restaurants & Cafés</li>
              <li>• Pubs & Breweries</li>
              <li>• Hotels & Banquet Halls</li>
              <li>• Gyms & Fitness Studios</li>
              <li>• Corporate & Conference Spaces</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section
          className="pt-15"
        >
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Improve Sound Comfort in Your Space
            </h2>
            <p className="text-gray-300 mb-8">
              Speak with our experts to design an acoustic solution that enhances
              clarity, comfort, and overall guest experience.
            </p>

            <Link href="/contact" className="btn-primary inline-block">
              <button type="button">
                Discuss Your Requirement
              </button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
