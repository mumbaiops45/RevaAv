"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import FAQSection from "@/components/FAQ";







export default function AboutClient() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {/* ABOUT INTRO CONTENT */}
      <div className="intro px-4 md:px-10 lg:px-30 pt-10 md:pt-15 relative overflow-hidden
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
  after:z-[-1]">

        <h1 className="text-center text-2xl md:text-3xl font-bold mb-10 md:mb-15">
          About <span className="text-[var(--primery)]">Us</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-start gap-8 relative">

          {/* TE my-15XT SECTION */}
          <div className="intro_disc flex flex-col gap-3 items-start
      w-full md:w-[60vw] md:pr-7">

            <h2 className="relative pb-3 text-lg md:text-xl lg:text-2xl
        after:content-[''] after:absolute
        after:bg-[var(--primery)]
        after:h-1 after:w-1/3 after:left-0 after:bottom-0">
              Two Decades of Hospitality Audio-Visual Leadership{" "}
              <strong className="text-[var(--primery)]">Reya AV</strong>
            </h2>

            <p>
              <strong>Reya AV</strong> is a leading
              <strong> audio-video integration company based in Bangalore</strong>,
              established in <strong>2017</strong> by industry expert
              <strong> Akash Gupta</strong>. Formerly known as
              <strong> Auto Entertainment Inc.</strong>, the journey began in
              <strong> 2005</strong> with professional audio solutions.
              Backed by <strong>two decades of hands-on experience</strong>,
              Reya AV pioneered permanent entertainment systems for
              hospitality venues, delivering affordable, high-quality
              <strong> sound, visual, and lighting solutions</strong>.
            </p>
          </div>

          {/* IMAGE SECTION */}
          <div className="w-full md:w-auto flex justify-center">

            <Image
              src="/4.jpg"
              alt="Reya AV audio visual LED lighting integrator"
              width={600}
              height={400}
              className={`
          rounded-xl w-[80vw] md:w-[40vw] h-auto
          transition-all duration-[1500ms] ease-in
          ${show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
        `}
            />

          </div>

        </div>
      </div>


      {/* SPECIALITIES CARDS SECTION (UNCHANGED) */}

      <div className="
relative
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
        <h2 className="text-center text-lg md:text-xl lg:text-2xl font-semibold relative pb-3 pt-7
      after:content-[''] after:absolute
      after:bg-[var(--primery)]
      after:h-[3px]
      after:w-2/3 md:after:w-1/3 lg:after:w-1/5
      after:left-1/2 after:-translate-x-1/2 after:bottom-0">
         What Sets Us <strong className="text-[var(--primery)]">
             Apart
          </strong>
        </h2>

        <section className="1 flex flex-col md:flex-row items-center justify-start gap-6 px-4 md:px-10 lg:px-20 py-10 my-15 md:my-0 relative"
        >

          {/* Static Heading Card */}
          <div
            className="
    w-full md:w-5/12 rounded-xl pt-5 pb-15 px-6 md:py-15 md:px-20

    bg-white/10 backdrop-blur-lg
    border border-[var(--primery)]
    rounded-xl shadow-lg
    transition duration-300
    flex items-start md:items-center justify-center
  "
          >
            <h3
              className="text-white relative pb-3
      after:content-[''] after:absolute after:bg-[var(--primery)]
      after:h-1 after:w-full after:left-0 after:bottom-0"
            >
              Two Decades of Industry Experience
            </h3>
          </div>

          {/* Sliding Paragraph Card */}
          <div
            className=" md:w-1/2 w-[80vw] 
    md:absolute md:left-100 lg:left-120 absolute top-35 md:top-auto 
    bg-white/15 backdrop-blur-lg
    border border-white/35
    rounded-xl p-6 md:p-8 shadow-lg
    hover:border-[var(--primery)]
    transition duration-300 hover:translate-y-1
    animate-slideInRight40
    flex items-center justify-center"
          >
            <p>
              Backed by over 20 years in the audio industry, Reya AV brings deep
              technical knowledge and real-world execution expertise to every
              project.
            </p>
          </div>
        </section>

        <section className="2 flex flex-col md:flex-row items-center justify-start gap-6 px-4 md:px-10 lg:px-20 py-10 my-15 md:my-0 relative"
        >
          {/* Static Heading Card */}
          <div
            className="
    w-full md:w-5/12 rounded-xl pt-5 pb-15 px-6 md:py-15 md:px-20

    bg-white/10 backdrop-blur-lg
    border border-[var(--primery)]
    rounded-xl shadow-lg
    transition duration-300
    flex items-start md:items-center justify-center
  "
          >
            <h3
              className="text-white relative pb-3
      after:content-[''] after:absolute after:bg-[var(--primery)]
      after:h-1 after:w-full after:left-0 after:bottom-0"
            >
              Hospitality-Focused Expertise
            </h3>
          </div>

          {/* Sliding Paragraph Card */}
          <div
            className=" md:w-1/2 w-[80vw] 
    md:absolute md:left-100 lg:left-120 absolute top-35 md:top-auto
    bg-white/15 backdrop-blur-lg
    border border-white/35
    rounded-xl p-6 md:p-8 shadow-lg
    hover:border-[var(--primery)]
    transition duration-300 hover:translate-y-1
    animate-slideInRight40
    flex items-center justify-center"
          >
            <p>
              Preferred by pubs, breweries, restaurants, cafés, and gyms, Reya AV understands the unique demands of hospitality environments.
            </p>
          </div>
        </section>

        <section className="3 flex flex-col md:flex-row items-center justify-start gap-6 px-4 md:px-10 lg:px-20 py-10 my-15 md:my-0 relative"
        >
          {/* Static Heading Card */}
          <div
            className="
    w-full md:w-5/12 rounded-xl pt-5 pb-15 px-6 md:py-15 md:px-20

    bg-white/10 backdrop-blur-lg
    border border-[var(--primery)]
    rounded-xl shadow-lg
    transition duration-300
    flex items-start md:items-center justify-center
  "
          >
            <h3
              className="text-white relative pb-3
      after:content-[''] after:absolute after:bg-[var(--primery)]
      after:h-1 after:w-full after:left-0 after:bottom-0"
            >
              From Passion to Large-Scale Execution
            </h3>
          </div>

          {/* Sliding Paragraph Card */}
          <div
            className=" md:w-1/2 w-[80vw] 
    md:absolute md:left-100 lg:left-120 absolute top-35 md:top-auto
    bg-white/15 backdrop-blur-lg
    border border-white/35
    rounded-xl p-6 md:p-8 shadow-lg
    hover:border-[var(--primery)]
    transition duration-300 hover:translate-y-1
    animate-slideInRight40
    flex items-center justify-center"
          >
            <p>
              What began as a passion for music in the 1990s evolved into executing exclusive events, private parties, and large audience shows.
            </p>
          </div>
        </section>

        <section className="4 flex flex-col md:flex-row items-center justify-start gap-6 px-4 md:px-10 lg:px-20 py-10 my-15 md:my-0 relative"
        >
          {/* Static Heading Card */}
          <div
            className="
    w-full md:w-5/12 rounded-xl pt-5 pb-15 px-6 md:py-15 md:px-20

    bg-white/10 backdrop-blur-lg
    border border-[var(--primery)]
    rounded-xl shadow-lg
    transition duration-300
    flex items-start md:items-center justify-center
  "
          >
            <h3
              className="text-white relative pb-3
      after:content-[''] after:absolute after:bg-[var(--primery)]
      after:h-1 after:w-full after:left-0 after:bottom-0"
            >
              Celebrity & High-Profile Event Experience
            </h3>
          </div>

          {/* Sliding Paragraph Card */}
          <div
            className=" md:w-1/2 w-[80vw] 
    md:absolute md:left-100 lg:left-120 absolute top-35 md:top-auto
    bg-white/15 backdrop-blur-lg
    border border-white/35
    rounded-xl p-6 md:p-8 shadow-lg
    hover:border-[var(--primery)]
    transition duration-300 hover:translate-y-1
    animate-slideInRight40
    flex items-center justify-center"
          >
            <p>
              Extensive experience managing large-scale events for celebrities like Bipasha Basu, Yana Gupta, and other prominent names.
            </p>
          </div>
        </section>

        <section className="5 flex flex-col md:flex-row items-center justify-start gap-6 px-4 md:px-10 lg:px-20 py-10 my-15 md:my-0 relative"
        >
          {/* Static Heading Card */}
          <div
            className="
    w-full md:w-5/12 rounded-xl pt-5 pb-15 px-6 md:py-15 md:px-20

    bg-white/10 backdrop-blur-lg
    border border-[var(--primery)]
    rounded-xl shadow-lg
    transition duration-300
    flex items-start md:items-center justify-center
  "
          >
            <h3
              className="text-white relative pb-3
      after:content-[''] after:absolute after:bg-[var(--primery)]
      after:h-1 after:w-full after:left-0 after:bottom-0"
            >
              Pioneer of Permanent Entertainment Systems
            </h3>
          </div>

          {/* Sliding Paragraph Card */}
          <div
            className=" md:w-1/2 w-[80vw] 
    md:absolute md:left-100 lg:left-120 absolute top-35 md:top-auto
    bg-white/15 backdrop-blur-lg
    border border-white/35
    rounded-xl p-6 md:p-8 shadow-lg
    hover:border-[var(--primery)]
    transition duration-300 hover:translate-y-1
    animate-slideInRight40
    flex items-center justify-center"
          >
            <p>
              Among the first to introduce permanent entertainment systems for hospitality venues, delivering affordable and long-term solutions.
            </p>
          </div>
        </section>

        <section className="6 flex flex-col md:flex-row items-center justify-start gap-6 px-4 md:px-10 lg:px-20 py-10 my-15 md:my-0 relative"
        >
          {/* Static Heading Card */}
          <div
            className="
    w-full md:w-5/12 rounded-xl pt-5 pb-15 px-6 md:py-15 md:px-20

    bg-white/10 backdrop-blur-lg
    border border-[var(--primery)]
    rounded-xl shadow-lg
    transition duration-300
    flex items-start md:items-center justify-center
  "
          >
            <h3
              className="text-white relative pb-3
      after:content-[''] after:absolute after:bg-[var(--primery)]
      after:h-1 after:w-full after:left-0 after:bottom-0"
            >
              Uncompromising Quality & Innovation
            </h3>
          </div>

          {/* Sliding Paragraph Card */}
          <div
            className=" md:w-1/2 w-[80vw] 
    md:absolute md:left-100 lg:left-120 absolute top-35 md:top-auto
    bg-white/15 backdrop-blur-lg
    border border-white/35
    rounded-xl p-6 md:p-8 shadow-lg
    hover:border-[var(--primery)]
    transition duration-300 hover:translate-y-1
    animate-slideInRight40
    flex items-center justify-center"
          >
            <p>
              Collaborations with premium European brands and a strict no-compromise approach to quality set Reya AV apart as a true industry pioneer.
            </p>
          </div>
        </section>
      </div>
      <FAQSection />



    </>
  );
}
