"use client";

export default function ScrollToTop() {
  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className="fixed bottom-12 right-6 bg-[var(--primery)]
      w-12 h-12
      text-white px-3 py-3 rounded-full z-50 cursor-pointer hover:scale-[1.1]"
    >
      ↑
    </button>
  );
}
