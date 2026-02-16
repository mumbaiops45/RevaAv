"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from "react";
import { ShieldCheck, Layers, Landmark, Mic2, Handshake, Settings } from "lucide-react";
import FAQSection from '@/components/FAQ';
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";



const services = [
  {

    icon: <ShieldCheck
      className="mb-7
    w-14 h-14
    text-white
    transition-all duration-300 ease-out
    hover:scale-110
    hover:drop-shadow-[0_0_12px_var(--primery)]
  "
    />,
    title: "20+ Years Experience",
    desc: "Over two decades of proven expertise in the audio-visual industry.",
  },
  {
    icon: <Layers
      className="mb-7
    w-14 h-14
    text-white
    transition-all duration-300 ease-out
    hover:scale-110
    hover:drop-shadow-[0_0_12px_var(--primery)]
  "
    />
    ,
    title: "End-to-End AV Solutions",
    desc: "Complete AV, LED & lighting solutions from design to delivery.",
  },
  {
    icon: <Landmark
      className="mb-7
    w-14 h-14
    text-white
    transition-all duration-300 ease-out
    hover:scale-110
    hover:drop-shadow-[0_0_12px_var(--primery)]
  "
    />

    ,
    title: "Hospitality & Commercial",
    desc: "Specialized solutions for hotels, offices, and commercial spaces.",
  },
  {
    icon: <Mic2
      className="mb-7
    w-14 h-14
    text-white
    transition-all duration-300 ease-out
    hover:scale-110
    hover:drop-shadow-[0_0_12px_var(--primery)]
  "
    />
    ,
    title: "Audio & Acoustic Experts",
    desc: "Professional audio, acoustic, and visual system integration.",
  },
  {
    icon: <Handshake
      className="mb-7
    w-14 h-14
    text-white
    transition-all duration-300 ease-out
    hover:scale-110
    hover:drop-shadow-[0_0_12px_var(--primery)]
  "
    />
    ,
    title: "Global Brand Partners",
    desc: "Premium products from trusted global-standard brands.",
  },
  {
    icon: <Settings
      className="mb-7
    w-14 h-14
    text-white
    transition-all duration-300 ease-out
    hover:scale-110
    hover:drop-shadow-[0_0_12px_var(--primery)]
  "
    />
    ,
    title: "Installation & AMC",
    desc: "Reliable installation with long-term AMC and technical support.",
  },
];




const Home = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };


  return (
    <div>
      <div
        className="
        -mt-14
        flex justify-center items-center
        relative h-[95vh]
        before:content-['']
        before:absolute before:inset-0
        before:bg-[url('/hero1.png')]
        before:bg-cover before:bg-center

        after:content-['']
        after:absolute after:inset-0
        after:bg-black/70
      "
      >

        <div className="relative z-10 flex flex-col gap-6 h-full w-full justify-center items-start p-[15%]">
          <h1 className="font-bold text-4xl">
            Audio • Visual • Lighting • Design • Installation • AMC Support
          </h1>

          <p>
            Reya AV delivers professional LED wall solutions that enhance visual impact
            and elevate customer experience across hospitality, corporate, and
            entertainment spaces.
          </p>

          <button
            className="btn-primary
            "
          >
            Send Enquiry
          </button>
        </div>
      </div>
      <div className="intro px-4 md:px-10 lg:px-15 pt-10 md:pt-15 md:pb-10 relative overflow-hidden
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-white/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-right-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-20
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]

  bg-[#0b1220]
  text-white
  scroll-fade">


        <div className="flex flex-col md:flex-row items-center gap-8 relative z-50">

          {/* TEXT */}
          <div className="intro_disc flex flex-col gap-4 items-start
      w-full md:w-[60vw] md:pr-7">

            <h2 className="relative pb-3 text-lg md:text-xl lg:text-2xl
        after:content-[''] after:absolute
        after:bg-[var(--primery)]
        after:h-1 after:w-1/3 after:left-0 after:bottom-0">

              <span className="text-[var(--primery)]">Reya AV</span>
              {" "}Leading Audio-Visual, LED & Lighting System Integrators in Bangalore
            </h2>

            <p className="text-sm md:text-base">
              Welcome to <strong>Reya AV</strong>, a leading
              <strong> audio-visual, LED, acoustic, and lighting system integrator
                in Bangalore</strong>.
              Founded in 2017 by <strong>Akash Gupta</strong>, we bring over
              <strong> 20 years of industry experience</strong> to deliver
              end-to-end AV, LED, acoustic, and lighting solutions with reliable
              <strong> AMC support</strong>—creating immersive experiences for
              hospitality and commercial spaces.
            </p>

            <Link href="/about" className="btn-primary">
              KNOW MORE
            </Link>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-auto flex justify-center">
            <Image
              src="/home.webp"
              alt="Reya AV audio visual LED lighting integrator"
              width={600}
              height={400}
              className="rounded-xl w-[80vw] md:w-[30vw] h-auto"
            />
          </div>

        </div>
      </div>
      <div className="Services px-4 md:px-10 lg:px-15 pt-10 md:pt-15 md:pb-10 relative 
before:content-[''] before:absolute before:inset-0
before:bg-gradient-to-tr
before:from-transparent
before:via-[#111827]
before:to-[var(--primery)]/15
before:z-[-1]

after:content-[''] after:absolute after:-bottom-40 after:-left-40
after:w-[450px] after:h-[450px]
after:bg-[var(--secondary)]
after:opacity-10
after:blur-[150px]
after:rounded-full
after:z-[-1]

bg-[#111827]
text-white

">

        <div className="relative z-20">

          <h2 className="text-center relative pb-3
      after:content-[''] after:absolute
      after:bg-[var(--primery)] after:h-1 after:w-1/5
      after:left-1/2 after:-translate-x-1/2 after:bottom-0">
            Our <strong className="text-[var(--primery)]">Services</strong>
          </h2>

          <p className="text-center mt-6">
            Delivering end-to-end audio-visual, LED, acoustic, and lighting solutions
            designed for performance, reliability, and impact.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-8">

            {/* CARD 1 */}
            <div className="relative
    min-h-[260px]
    flex flex-col justify-between
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade">

              <div className='flex flex-col items-start'>
                <h3 className="text-[var(--primery)] relative pb-3
        after:content-[''] after:absolute after:bg-[var(--primery)]
        after:h-1 after:w-full after:left-0 after:bottom-0">
                  LED Wall Solution
                </h3>

                <p className="mt-3">
                  High-performance LED display systems designed to deliver
                  stunning visuals and maximum impact.
                </p>
              </div>
              <div className='flex items-start'>
                <Link href="/services/led-wall-solution" className="btn-primary mt-4">
                  KNOW MORE
                </Link>
              </div>

            </div>

            {/* CARD 2 */}
            <div className="relative min-h-[260px]
    flex flex-col justify-between
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade">

              <div className='flex flex-col items-start'>
                <h3 className="text-[var(--primery)] relative pb-3
        after:content-[''] after:absolute after:bg-[var(--primery)]
        after:h-1 after:w-full after:left-0 after:bottom-0">
                  Audio Design Install
                </h3>

                <p className="mt-3">
                  Professional audio system design and installation
                  for hospitality and commercial spaces.
                </p>
              </div>
              <div className='flex items-start'>
                <Link href="/services/audio-design-install" className="btn-primary mt-4">
                  KNOW MORE
                </Link>
              </div>

            </div>

            {/* CARD 3 */}
            <div className="relative min-h-[260px]
    flex flex-col justify-between
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade">

              <div className='flex flex-col items-start'>
                <h3 className="text-[var(--primery)] relative pb-3
        after:content-[''] after:absolute after:bg-[var(--primery)]
        after:h-1 after:w-full after:left-0 after:bottom-0">
                  Acoustic Design Install
                </h3>

                <p className="mt-3">
                  Acoustic treatment solutions that enhance sound
                  clarity and comfort.
                </p>
              </div>
              <div className='flex items-start'>
                <Link href="/services/acoustic-design-install" className="btn-primary mt-4">
                  KNOW MORE
                </Link>
              </div>

            </div>

            {/* CARD 4 */}
            <div className="relative min-h-[260px]
    flex flex-col justify-between
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade">

              <div className='flex flex-col items-start'>
                <h3 className="text-[var(--primery)] relative pb-3
        after:content-[''] after:absolute after:bg-[var(--primery)]
        after:h-1 after:w-full after:left-0 after:bottom-0">
                  Visual Design Install
                </h3>

                <p className="mt-3">
                  Integrated visual systems for seamless performance
                  and engagement.
                </p>
              </div>
              <div className='flex items-start'>
                <Link href="/services/visual-design-install" className="btn-primary mt-4">
                  KNOW MORE
                </Link>
              </div>

            </div>

            {/* CARD 5 */}
            <div className="relative min-h-[260px]
    flex flex-col justify-between
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade">

              <div className='flex flex-col items-start'>
                <h3 className="text-[var(--primery)] relative pb-3
        after:content-[''] after:absolute after:bg-[var(--primery)]
        after:h-1 after:w-full after:left-0 after:bottom-0">
                  Lighting Design Install
                </h3>

                <p className="mt-3">
                  Intelligent lighting design that enhances ambience
                  and experience.
                </p>
              </div>
              <div className='flex items-start'>
                <Link href="/services/lighting-design-install" className="btn-primary mt-4">
                  KNOW MORE
                </Link>
              </div>

            </div>

            {/* CARD 6 */}
            <div className="relative min-h-[260px]
    flex flex-col justify-between
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade">

              <div className='flex flex-col items-start'>
                <h3 className="text-[var(--primery)] relative pb-3
        after:content-[''] after:absolute after:bg-[var(--primery)]
        after:h-1 after:w-full after:left-0 after:bottom-0">
                  Annual AMC
                </h3>

                <p className="mt-3">
                  Annual maintenance contracts ensuring optimal
                  performance and technical support.
                </p>
              </div>
              <div className='flex items-start'>
                <Link href="/services/annual-amc" className="btn-primary mt-4">
                  KNOW MORE
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
      <div className="About flex flex-col md:flex-row-reverse px-4 md:px-10 lg:px-15 pt-10 md:pt-15 md:pb-10 relative
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-right-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-20
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]

  bg-[#0b1220]
  text-white
  scroll-fade">

        <div className="intro_disc flex flex-col gap-4 items-start
    w-full md:w-[60vw] md:pl-7">

          <h2 className="relative pb-3
      after:content-[''] after:absolute
      after:bg-[var(--primery)] after:h-1
      after:w-1/3 after:left-0 after:bottom-0">

            Powering Immersive
            <strong className="text-[var(--primery)]"> Audio-Visual</strong>
            {" "} & {" "}
            <strong className="text-[var(--primery)]">LED</strong>
            {" "}Experiences for Over Two Decades
          </h2>

          <p>
            <strong>Reya AV</strong> is a leading audio-visual system integrator
            delivering LED wall and kiosk solutions, along with audio,
            acoustic, and lighting design and installation. Backed by
            <strong> 20+ years of industry experience</strong>, we provide
            end-to-end AV solutions with reliable AMC support for hospitality,
            commercial, and entertainment spaces—powered by global-standard
            technology through leading European collaborations.
          </p>

          <Link href="/about" className="btn-primary">
            KNOW MORE
          </Link>
        </div>

        <div className="w-full mt-7 md:mt-0 md:w-auto flex justify-center">
          <Image
            src="/1.webp"
            alt="Reya AV audio visual LED lighting integrator"
            width={600}
            height={400}
            className="rounded-xl w-full max-w-md md:w-[30vw]"
          />
        </div>

      </div>
      <div className="choose px-4 md:px-10 lg:px-15 pt-10 md:pt-15 md:pb-10 relative 
before:content-[''] before:absolute before:inset-0
before:bg-gradient-to-tr
before:from-transparent
before:via-[#111827]
before:to-[var(--primery)]/15
before:z-[-1]

after:content-[''] after:absolute after:-bottom-40 after:-left-40
after:w-[450px] after:h-[450px]
after:bg-[var(--secondary)]
after:opacity-10
after:blur-[150px]
after:rounded-full
after:z-[-1]

bg-[#111827]
text-white">

        <div className="relative z-20">

          {/* Heading */}
          <h2 className="text-center relative pb-3 text-xl md:text-2xl font-semibold
      after:content-[''] after:absolute
      after:bg-[var(--primery)] after:h-1 after:w-1/4 md:after:w-1/6
      after:left-1/2 after:-translate-x-1/2 after:bottom-0">
            Why <strong className="text-[var(--primery)]">Choose Us</strong>
          </h2>

          <div className="relative md:mx-10 h-auto">

            {/* LEFT BUTTON */}
            <button
              onClick={scrollLeft}
              className="md:flex absolute md:-left-10 -left-4 md:top-1/2 bottom-0 -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-[var(--primery)]
          shadow-md items-center justify-center"
            >
              &#8249;
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={scrollRight}
              className="md:flex absolute md:-right-10 -right-4 md:top-1/2 bottom-0 -translate-y-1/2 z-20
          w-12 h-12 rounded-full bg-[var(--primery)]
          shadow-md items-center justify-center"
            >
              &#8250;
            </button>

            {/* CAROUSEL */}
            <div
              ref={carouselRef}
              className="Carousel overflow-x-auto py-10
          [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex gap-6 md:gap-9 px-4">

                {services.map((item, index) => (
                  <div
                    key={index}
                    className="
                w-[85vw] md:w-[40vw] lg:w-[25vw]
                min-h-[260px] md:h-[40vh]
                flex flex-col justify-center items-start gap-1 flex-shrink-0
                bg-white/10 backdrop-blur-lg
                border border-white/20 shadow-lg rounded-xl p-6
                hover:border-[var(--primery)]
                transition duration-300 ease hover:translate-y-1"
                  >
                    {item.icon}
                    <h3 className="font-semibold text-lg text-[var(--primery)]">
                      {item.title}
                    </h3>

                    <p className="text-sm mt-2">
                      {item.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="industry-serve px-4 md:px-10 lg:px-15 pt-10 md:pt-15 md:pb-10 relative
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-top-32 after:-left-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-10
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]
  text-white">

        <h2 className="text-center text-xl md:text-2xl font-semibold relative pb-3
    after:content-[''] after:absolute
    after:bg-[var(--primery)] after:h-1
    after:w-1/2 md:after:w-1/4
    after:left-1/2 after:-translate-x-1/2 after:bottom-0">
          Industries <strong className="text-[var(--primery)]">We Serve</strong>
        </h2>

        <div className="
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7
    gap-6 md:gap-10 mt-8
    lg:[grid-template-areas:'box1_box1_box1_box2_box2_box3_box3''box4_box4_box5_box5_box6_box6_box6']
  ">

          {/* BOX 1 */}
          <div className="lg:[grid-area:box1] scroll-slide
      bg-white/10 backdrop-blur-lg border border-white/20
      rounded-xl p-6 shadow-lg
      transition duration-300 hover:translate-y-1 hover:border-[var(--primery)]">
            <h3 className="text-[var(--primery)]">Hospitality Industry</h3>
            <p>
              Audio-visual, lighting, and acoustic solutions designed
              for hotels, resorts, and restaurants.
            </p>
          </div>

          {/* BOX 2 */}
          <div className="lg:[grid-area:box2] scroll-slide
      bg-white/10 backdrop-blur-lg border border-white/20
      rounded-xl p-6 shadow-lg
      transition duration-300 hover:translate-y-1 hover:border-[var(--primery)]">
            <h3 className="text-[var(--primery)]">Corporate Offices</h3>
            <p>
              Smart AV and communication systems that enhance
              collaboration and productivity.
            </p>
          </div>

          {/* BOX 3 */}
          <div className="lg:[grid-area:box3] scroll-slide
      bg-white/10 backdrop-blur-lg border border-white/20
      rounded-xl p-6 shadow-lg
      transition duration-300 hover:translate-y-1 hover:border-[var(--primery)]">
            <h3 className="text-[var(--primery)]">Retail & Showrooms</h3>
            <p>
              Engaging visual and LED display solutions that attract
              customers and boost brand presence.
            </p>
          </div>

          {/* BOX 4 */}
          <div className="lg:[grid-area:box4] scroll-slide
      bg-white/10 backdrop-blur-lg border border-white/20
      rounded-xl p-6 shadow-lg
      transition duration-300 hover:translate-y-1 hover:border-[var(--primery)]">
            <h3 className="text-[var(--primery)]">Educational Institutions</h3>
            <p>
              Interactive audio-visual setups for classrooms,
              auditoriums, and training facilities.
            </p>
          </div>

          {/* BOX 5 */}
          <div className="lg:[grid-area:box5] scroll-slide
      bg-white/10 backdrop-blur-lg border border-white/20
      rounded-xl p-6 shadow-lg
      transition duration-300 hover:translate-y-1 hover:border-[var(--primery)]">
            <h3 className="text-[var(--primery)]">Commercial Spaces</h3>
            <p>
              End-to-end AV and lighting integration for large
              commercial environments.
            </p>
          </div>

          {/* BOX 6 */}
          <div className="lg:[grid-area:box6] scroll-slide
      bg-white/10 backdrop-blur-lg border border-white/20
      rounded-xl p-6 shadow-lg
      transition duration-300 hover:translate-y-1 hover:border-[var(--primery)]">
            <h3 className="text-[var(--primery)]">Event & Entertainment</h3>
            <p>
              High-impact sound, lighting, and display solutions
              for events and entertainment venues.
            </p>
          </div>

        </div>
      </div>
      <div className="Product-serve px-4 md:px-10 lg:px-15 pt-10 md:pt-15 md:pb-10 relative
  before:content-[''] before:absolute before:inset-0
  before:bg-gradient-to-br
  before:from-[var(--primery)]/20
  before:via-[#0b1220]
  before:to-transparent
  before:z-[-1]

  after:content-[''] after:absolute after:-bottom-32 after:-left-32
  after:w-[400px] after:h-[400px]
  after:bg-[var(--secondary)]
  after:opacity-10
  after:blur-[120px]
  after:rounded-full
  after:z-[-1]
  text-white">

        <h2 className="text-center text-xl md:text-2xl font-semibold relative pb-3
    after:content-[''] after:absolute
    after:bg-[var(--primery)] after:h-1
    after:w-1/2 md:after:w-1/4
    after:left-1/2 after:-translate-x-1/2 after:bottom-0">
          Product <strong className="text-[var(--primery)]">We Serve</strong>
        </h2>
        <div className="flex flex-col md:flex-row items-stretch gap-6 max-w-6xl mx-auto mt-10">

          {/* Card 1 */}
          <div
            className="flex flex-col justify-center gap-3
    group w-full md:flex-grow md:w-56 h-[260px] relative overflow-hidden
    transition-all duration-500 md:hover:w-[35vw]
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade"
          >

            {/* Top Circle */}
            <div className="w-30 h-15 bg-[var(--primery)] rounded-2xl absolute -right-2 -top-2">
              <p className="absolute bottom-3 left-5 text-2xl font-bold opacity-100">
                Audio
              </p>
            </div>

            {/* Icon */}
            <div className="w-12 fill-[var(--primery)]">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white">
              Wharfedale Pro
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-6">
              Wharfedale Pro delivers powerful, reliable professional loudspeakers designed for live events, installations, and commercial audio systems with clear and impactful sound.
            </p>

          </div>


          {/* Card 2 */}
          <div
            className="flex flex-col justify-center gap-3
    group w-full md:flex-grow md:w-56 h-[260px] relative overflow-hidden
    transition-all duration-500 md:hover:w-[35vw]
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade"
          >

            {/* Top Circle */}
            <div className="w-30 h-15 bg-[var(--primery)] rounded-2xl absolute -right-2 -top-2">
              <p className="absolute bottom-3 left-5 text-2xl font-bold opacity-100">
                Audio
              </p>
            </div>

            {/* Icon */}
            <div className="w-12 fill-[var(--primery)]">
              <svg viewBox="0 0 24 24">
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Z" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white">
              Wharfedale
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-6">
              Wharfedale is a renowned British audio brand known for its high-fidelity speakers that deliver rich, detailed, and natural sound.
            </p>

          </div>


          {/* Card 3 */}
          <div
            className="flex flex-col justify-center gap-3
    group w-full md:flex-grow md:w-56 h-[260px] relative overflow-hidden
    transition-all duration-500 md:hover:w-[35vw]
    bg-white/10 backdrop-blur-lg border border-white/20
    shadow-lg rounded-xl p-6
    hover:border-[var(--primery)]
    transition duration-300 ease hover:translate-y-1 scroll-fade"
          >

            {/* Top Circle */}
            <div className="w-30 h-15 bg-[var(--primery)] rounded-2xl absolute -right-2 -top-2">
              <p className="absolute bottom-3 left-5 text-2xl font-bold opacity-100">
                Audio
              </p>
            </div>

            {/* Icon */}
            <div className="w-12 fill-[var(--primery)]">
              <svg viewBox="0 0 24 24">
                <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white">
              D.A.S : SOUND WITH SOUL
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-6">
              DAS Audio is a trusted pro audio brand, proudly Made in Spain, delivering powerful, clear, and durable sound systems.
            </p>

          </div>

        </div>


      </div>
      <div className="timonials choose px-4 md:px-10 lg:px-15 pt-10 md:pt-15 md:pb-10 relative 
before:content-[''] before:absolute before:inset-0
before:bg-gradient-to-tr
before:from-transparent
before:via-[#111827]
before:to-[var(--primery)]/15
before:z-[-1]

after:content-[''] after:absolute after:-bottom-40 after:-left-40
after:w-[450px] after:h-[450px]
after:bg-[var(--secondary)]
after:opacity-10
after:blur-[150px]
after:rounded-full
after:z-[-1]

bg-[#111827]
text-white">

        {/* CONTENT WRAPPER */}
        <div className="relative z-10">

          {/* HEADING */}
          <h2 className="text-center text-lg md:text-xl lg:text-2xl font-semibold relative pb-3
      after:content-[''] after:absolute
      after:bg-[var(--primery)]
      after:h-[3px]
      after:w-2/3 md:after:w-1/3 lg:after:w-1/4
      after:left-1/2 after:-translate-x-1/2 after:bottom-0">
            What <strong className="text-[var(--primery)]">
              Our Clients Say
            </strong>
          </h2>

          {/* CAROUSEL */}
          <div className="w-full overflow-hidden py-12 md:py-16 group">

            <div className="flex gap-5 md:gap-6 animate-testimonial
        group-hover:[animation-play-state:paused]">

              {[
                {
                  text: "The audio and LED solutions were exceptional. Crystal-clear sound and stunning visuals.",
                  name: "Hotel Grand Vista"
                },
                {
                  text: "Professional AV installation with excellent acoustic clarity and timely execution.",
                  name: "Orion Corporate Park"
                },
                {
                  text: "Reliable AV integration backed by strong technical support and expertise.",
                  name: "Elite Convention Center"
                },
                {
                  text: "The audio and LED solutions were exceptional. Crystal-clear sound and stunning visuals.",
                  name: "Hotel Grand Vista"
                },
                {
                  text: "Professional AV installation with excellent acoustic clarity and timely execution.",
                  name: "Orion Corporate Park"
                },
                {
                  text: "Reliable AV integration backed by strong technical support and expertise.",
                  name: "Elite Convention Center"
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="
              w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[25vw]
              min-h-[220px] md:h-[40vh]
              flex flex-col justify-center items-start flex-shrink-0
              bg-white/10 backdrop-blur-lg
              border border-white/20 shadow-lg rounded-xl
              p-5 md:p-6
              hover:border-[var(--primery)]
              transition duration-300 ease hover:-translate-y-1
              scroll-fade
            "
                >
                  <p className="text-sm md:text-base leading-relaxed">
                    “{item.text}”
                  </p>

                  <h4 className="mt-4 font-semibold text-[var(--primery)]">
                    — {item.name}
                  </h4>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
      <FAQSection />
      
    </div>
  )
}

export default Home