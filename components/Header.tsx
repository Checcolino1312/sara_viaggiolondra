"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { days } from "@/data/itinerary";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isInfo = pathname === "/info";

  const dayMatch = pathname.match(/\/day\/(\d+)/);
  const currentDayId = dayMatch ? parseInt(dayMatch[1]) : null;
  const currentDay = currentDayId ? days.find((d) => d.id === currentDayId) : null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
      <div className="max-w-2xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="w-8">
          {!isHome && (
            <Link
              href="/"
              className="flex items-center justify-center w-7 h-7 text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              <ChevronLeft size={18} />
            </Link>
          )}
        </div>

        <div className="flex-1 text-center">
          {isHome ? (
            <span className="text-zinc-800 font-semibold text-sm tracking-tight">
              Londra — Aprile 2026
            </span>
          ) : isInfo ? (
            <span className="text-zinc-800 font-semibold text-sm">Info</span>
          ) : currentDay ? (
            <span className="text-zinc-800 font-semibold text-sm">{currentDay.title}</span>
          ) : null}
        </div>

        <div className="w-8 flex justify-end">
          {currentDayId && (
            <span className="text-[11px] text-zinc-400 tabular-nums">
              {currentDayId}/5
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
