"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-2xl mx-auto px-4 h-12 flex items-center">
        {/* Back — visibile solo fuori dalla home */}
        <div className="w-8 flex-shrink-0">
          {!isHome && (
            <Link
              href="/"
              className="flex items-center justify-center w-8 h-8 -ml-1 text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              <ChevronLeft size={18} />
            </Link>
          )}
        </div>

        {/* Brand sempre centrato */}
        <div className="flex-1 text-center">
          <span className="text-zinc-700 font-medium text-sm tracking-tight">
            Londra 2026
          </span>
        </div>

        {/* Spazio bilanciamento destra */}
        <div className="w-8 flex-shrink-0" />
      </div>
    </header>
  );
}
