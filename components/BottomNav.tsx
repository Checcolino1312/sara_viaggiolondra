"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Info } from "lucide-react";
import { days } from "@/data/itinerary";

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-zinc-200">
      {/* Safe area per iPhone */}
      <div className="max-w-2xl mx-auto">
        <div className="flex h-16">
          {days.map((day) => {
            const active = isActive(`/day/${day.id}`);
            const [weekday, dayNum] = day.shortDate.split(" ");
            return (
              <Link
                key={day.id}
                href={`/day/${day.id}`}
                className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${
                  active
                    ? "text-zinc-900"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <span className={`text-[10px] leading-none font-medium ${active ? "text-zinc-500" : "text-zinc-400"}`}>
                  {weekday}
                </span>
                <span className={`text-sm leading-none font-semibold tabular-nums ${active ? "text-zinc-900" : "text-zinc-400"}`}>
                  {dayNum}
                </span>
                {active && (
                  <span className="w-1 h-1 rounded-full bg-zinc-800" />
                )}
                {!active && <span className="w-1 h-1" />}
              </Link>
            );
          })}

          {/* Info tab */}
          <Link
            href="/info"
            className={`flex-1 flex flex-col items-center justify-center gap-1 transition-colors ${
              isActive("/info") ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            <Info size={15} strokeWidth={isActive("/info") ? 2.5 : 1.75} />
            <span className={`text-[10px] leading-none font-medium ${isActive("/info") ? "text-zinc-700" : "text-zinc-400"}`}>
              Info
            </span>
            {isActive("/info") && (
              <span className="w-1 h-1 rounded-full bg-zinc-800" />
            )}
            {!isActive("/info") && <span className="w-1 h-1" />}
          </Link>
        </div>
      </div>
    </nav>
  );
}
