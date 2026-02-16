"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function GlowSplitSection({
  id,
  heading = "Section Heading",
  highlight = "Reya AV",
  description = "Your section description goes here.",
  image = "/placeholder.jpg",
  rowReverse = false,        // Layout control
  slideDirection = "left",   // "left" | "right"
}) {
  const [visible, setVisible] = useState(false);
  const [inView, setInView] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  /* 🔥 Scroll Animation */
  useEffect(() => {
    const element = divRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  /* 🔥 Mouse Glow */
  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const bounds = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  /* 🎯 Slide Direction Logic */
  const slideFrom =
    slideDirection === "right"
      ? "translate-x-24"
      : "-translate-x-24";

  return (
    <div
      id={id}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`intro relative overflow-hidden
      px-4 md:px-10 lg:px-30 pt-20 md:p-30
      text-white
      transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]
      ${inView ? "opacity-100 translate-x-0" : `opacity-0 ${slideFrom}`}
      `}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primery)]/20 via-[#0b1220] to-transparent -z-10" />

      <div className="absolute -top-32 -left-32 w-[400px] h-[400px]
        bg-[var(--secondary)] opacity-15 blur-[120px] rounded-full -z-10" />

      {/* Glow Effect */}
      {visible && (
        <div
          className="pointer-events-none absolute rounded-full
          blur-xl bg-[var(--primery)]
          w-[800px] h-[800px]
          transition-transform duration-500 ease-out
          opacity-10"
          style={{
            transform: `translate(${position.x - 400}px, ${position.y - 400}px)`,
          }}
        />
      )}

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col md:flex-row items-center gap-8 ${
          rowReverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* TEXT */}
        <div className="flex flex-col items-start gap-5 md:w-3/5">
          <h2
            className="relative pb-3 text-2xl md:text-3xl font-semibold
            after:content-[''] after:absolute after:left-0 after:bottom-0
            after:w-1/3 after:h-[3px] after:bg-[var(--primery)]"
          >
            <span className="text-[var(--primery)]">
              {highlight}
            </span>{" "}
            {heading}
          </h2>

          <p className="text-gray-200 leading-relaxed">
            {description}
          </p>
        </div>

        {/* IMAGE */}
        <div className="md:w-2/5 w-full">
          <Image
            src={image}
            alt={heading}
            width={600}
            height={400}
            className="rounded-xl w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
