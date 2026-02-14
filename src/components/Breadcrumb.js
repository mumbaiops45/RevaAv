"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  // Remove first empty string from split
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="absolute top-20 left-0 flex flex-wrap items-center space-x-2 text-sm text-gray-500 font-medium bg-white py-2 px-4 border border-gray-200 rounded-lg">
      
      {/* Home Link */}
      <Link href="/" className="hover:text-indigo-500">
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");

        // Convert dash to space and capitalize
        const formatted =
          segment.replace(/-/g, " ")
                 .replace(/\b\w/g, char => char.toUpperCase());

        return (
          <div key={href} className="flex items-center space-x-2">
            <span>/</span>
            <Link
              href={href}
              className={index === pathSegments.length - 1
                ? "text-indigo-500"
                : "hover:text-indigo-500"}
            >
              {formatted}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
