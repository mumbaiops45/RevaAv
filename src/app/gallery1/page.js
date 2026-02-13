"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GallerySection() {
  const [loaded, setLoaded] = useState(false);
  const [gridArea, setGridArea] = useState("");

  useEffect(() => {
    setLoaded(true);

    const updateGrid = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        // DESKTOP
        setGridArea(`
          "a a b b c c"
          "a a d e e e"
          "f f d g g g"
          "h i i g g g"
          "h j j j k k"
        `);
      } else if (width >= 768) {
        // TABLET
        setGridArea(`
          "a a b"
          "c d d"
          "e e f"
          "g h i"
          "j k k"
        `);
      } else {
        // MOBILE
        setGridArea(`
          "a"
          "b"
          "c"
          "d"
          "e"
          "f"
          "g"
          "h"
          "i"
          "j"
          "k"
        `);
      }
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);

    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const images = [
    { area: "a", src: "/g1.webp" },
    { area: "b", src: "/g2.jpg" },
    { area: "c", src: "/g3.webp" },
    { area: "d", src: "/g4.png" },
    { area: "e", src: "/g5.avif" },
    { area: "f", src: "/g6.png" },
    { area: "g", src: "/g7.jpg" },
    { area: "h", src: "/g8.webp" },
    { area: "i", src: "/g9.jpg" },
    { area: "j", src: "/g1.webp" },
    { area: "k", src: "/g11.avif" },
  ];

  return (
    <section
      className="relative px-6 md:px-10 lg:px-20 pt-12 md:pt-16
      before:content-[''] before:absolute before:inset-0
      before:bg-[url('/service.webp')] before:bg-cover before:bg-center before:z-[-1]
      after:content-[''] after:absolute after:inset-0
      after:bg-black/80 after:z-[-1]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <h1 className="text-center text-2xl md:text-3xl font-bold mb-10 text-white">
          Our <span className="text-[var(--primery)]">Gallery</span>
        </h1>

        {/* RESPONSIVE GRID */}
        
        <div
          className="
            grid gap-6 mt-10
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            auto-rows-[180px] md:auto-rows-[200px]
          "
          style={{ gridTemplateAreas: gridArea }}
        >
          {images.map((img, i) => (
            <GalleryItem
              key={i}
              area={img.area}
              src={img.src}
              loaded={loaded}
              delay={i * 80}
            />
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="text-center mt-20 text-white">
          <h2 className="text-xl md:text-2xl font-semibold">
            Ready to Transform Your Space?
          </h2>

          <p className="text-gray-300 mt-3">
            Contact our experts for professional AV, LED, and lighting solutions.
          </p>

          <Link href="/contact" className="btn-primary mt-6 inline-block">
            CONTACT US
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ area, src, loaded, delay }) {
  return (
    <div
      style={{
        gridArea: area,
        transitionDelay: `${delay}ms`,
      }}
      className={`
        relative min-h-[180px] md:min-h-[200px]
        overflow-hidden rounded-xl
        bg-white/10 backdrop-blur-lg border border-white/20
        shadow-lg hover:border-[var(--primery)]
        transition-all duration-[800ms] ease-out
        ${loaded ? "scale-100 opacity-100" : "scale-50 opacity-0"}
      `}
    >
      <Image
        src={src}
        alt="Reya AV project gallery"
        fill
        sizes="(max-width:768px) 100vw,
               (max-width:1200px) 50vw,
               33vw"
        className="object-cover hover:scale-110 transition duration-500"
      />
    </div>
  );
}
