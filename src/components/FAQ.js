"use client";

import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Why is Reya AV preferred for hospitality projects?",
      a: "Reya AV is preferred for hospitality projects due to its deep industry experience, hospitality-focused approach, and ability to deliver reliable, high-performance audio-visual systems tailored for pubs, breweries, restaurants, cafés, and gyms."
    },
    {
      q: "How much experience does Reya AV bring to the industry?",
      a: "Backed by over two decades of experience in the audio industry, Reya AV combines technical expertise with real-world execution gained from live events and large-scale installations."
    },
    {
      q: "What makes Reya AV a pioneer in entertainment systems?",
      a: "Reya AV was among the first to introduce permanent entertainment systems for hospitality venues, offering restaurateurs an affordable, long-term solution for sound, visuals, and lighting."
    },
    {
      q: "Does Reya AV handle large-scale and celebrity events?",
      a: "Yes, Reya AV has executed large audience events and managed shows for celebrities such as Bipasha Basu, Yana Gupta, and many others."
    },
    {
      q: "Which segments does Reya AV specialize in?",
      a: "Reya AV specializes in pubs, breweries, restaurants, cafés, gyms, and large hospitality and commercial spaces, delivering solutions with uncompromising quality."
    }
  ];

  return (
    <section
      className="px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-right-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-10
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]
  text-white"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-white">

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                className="
                  bg-white/10 backdrop-blur-lg
                  border border-white/20
                  rounded-xl p-6
                  cursor-pointer
                  transition duration-300
                "
                onClick={() =>
                  setActiveIndex(isActive ? null : i)
                }
              >
                {/* QUESTION */}
                <div className="flex justify-between items-center">
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300
                      ${isActive ? "text-[var(--primery)]" : "text-white"}
                    `}
                  >
                    {faq.q}
                  </h3>

                  <span
                    className={`text-2xl text-[var(--primery)] transition-transform duration-300
                      ${isActive ? "rotate-45 text-[var(--primery)]" : "rotate-0"}
                    `}
                  >
                    +
                  </span>
                </div>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
