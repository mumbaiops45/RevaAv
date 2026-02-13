import Link from "next/link";

export default function Example() {
  return (
    <div
      className="relative flex flex-col items-center justify-center
      text-sm max-md:px-4 py-20 text-white

      before:content-[''] before:absolute before:inset-0
      before:bg-[url('/service.webp')] before:bg-cover before:bg-center before:z-[-1]

      after:content-[''] after:absolute after:inset-0
      after:bg-black/80 after:z-[-1]"
    >
      <h1 className="text-4xl md:text-5xl font-bold">
        404 <span className="text-[var(--primery)]">Not Found</span>
      </h1>

      <div className="h-px w-80 rounded bg-gradient-to-r from-gray-400 to-gray-800 my-5 md:my-7"></div>

      <p className="md:text-xl text-gray-300 max-w-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="group flex items-center gap-1
        bg-[var(--primery)] hover:opacity-90
        px-7 py-2.5 rounded-full mt-10 font-medium
        active:scale-95 transition-all"
      >
        Back to Home
        <svg
          className="group-hover:translate-x-0.5 transition"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
