"use client"
import { Phone, Mail, MapPin, Instagram, MessageCircle, Clock } from "lucide-react";
import Link from "next/link";


export default function ContactPage() {
  return (
    <>
      <div
        className="px-4 md:px-10 lg:px-20 py-16 relative overflow-hidden
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
      after:z-[-1]"
      >
        <div className="relative z-10 max-w-6xl mx-auto text-white">

          {/* Heading */}
          <h1 className="text-center text-3xl md:text-4xl font-bold mb-6">
            Get in <span className="text-[var(--primery)]">Touch</span>
          </h1>

          <p className="text-center max-w-2xl mx-auto text-gray-300 mb-14">
            Connect with Reya AV for professional audio-visual, LED wall,
            acoustic and integrated AV solutions across Bengaluru and beyond.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Office Address",
                text: (
                  <>
                    Reya AV <br />
                    Bengaluru, Karnataka 560038
                  </>
                ),
                icon: MapPin,
                href: "https://maps.google.com/?q=Reya+AV+Bengaluru+560038",
                external: true,
              },
              {
                title: "Call Us",
                text: "+91 84471 17195",
                icon: Phone,
                href: "tel:+918447117195",
              },
              {
                title: "Email",
                text: "info@example.com",
                icon: Mail,
                href: "mailto:info@example.com",
              },
              {
                title: "WhatsApp",
                text: "Chat with us instantly",
                icon: MessageCircle,
                href: "https://wa.me/918447117195",
                external: true,
              },
              {
                title: "Instagram",
                text: "Follow us on Instagram",
                icon: Instagram,
                href: "https://instagram.com/yourusername",
                external: true,
              },
              {
                title: "Working Hours",
                text: (
                  <>
                    Mon – Sat <br />
                    10:00 AM – 7:00 PM
                  </>
                ),
                icon: Clock,
                href: null, // No link
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const Wrapper = item.href ? "a" : "div";

              return (
                <Wrapper
                  key={index}
                  href={item.href || undefined}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden
        bg-white/10 backdrop-blur-xl border border-white/20
        rounded-2xl p-6 shadow-xl
        transition-all duration-300
        md:hover:-translate-y-2 
        cursor-pointer block"
                >
                  {/* Professional Calm Gradient Hover */}
                  <div
                    className="absolute inset-0 
          bg-gradient-to-br 
          from-[var(--primery)]/20
          via-black/5
          to-transparent 
          translate-y-full 
          group-hover:translate-y-0 
          transition-transform duration-500 ease-out"
                  />

                  {/* Content */}
                  <Icon
                    className="relative z-10 text-[var(--primery)] mb-4 
          group-hover:text-white transition-colors duration-300"
                    size={28}
                  />

                  <h3
                    className="relative z-10 text-lg font-semibold mb-2 
          group-hover:text-[var(--primery)] transition-colors duration-300"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="relative z-10 text-gray-300 text-sm leading-relaxed
          group-hover:text-white/80 transition-colors duration-300"
                  >
                    {item.text}
                  </p>
                </Wrapper>
              );
            })}

          </div>
        </div>
      </div>
      <section className="CTA relative px-6 md:px-12 lg:px-24 py-16 mt-20 overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-black
  before:z-[-1]

  after:content-[''] after:absolute after:-bottom-32 after:-left-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-10
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]
  text-white scroll-fade"
      >
        <div className="max-w-6xl mx-auto">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 
      rounded-2xl p-10 md:p-16 text-center
      shadow-[0_20px_60px_rgba(0,0,0,0.5)]
      transition-all duration-500 hover:shadow-[0_25px_80px_rgba(0,0,0,0.7)]">

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-semibold leading-tight">
              Ready to Elevate Your
              <span className="text-[var(--primery)]"> Audio • Visual • Lighting </span>
              Experience?
            </h2>

            {/* Subtext */}
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              From concept to installation and long-term AMC support,
              we design and deliver intelligent AV solutions tailored
              for hospitality, corporate, retail, and commercial spaces.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">

              <Link onClick={() =>
                window.scrollTo({ top: 170, behavior: "smooth" })
              }
                href="/contact"
                className="btn-primary flex items-center"

              >
                Get a Free Consultation
              </Link>

              <Link
                href="/projects"
                className="btn-secondary "
              >
                View Our Projects
              </Link>

            </div>

          </div>

        </div>
      </section>
    </>

  );
}
