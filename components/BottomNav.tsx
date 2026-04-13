"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { days } from "@/data/itinerary";

export default function BottomNav() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#fafafa]/95 backdrop-blur-sm border-t border-zinc-200">
      <div className="max-w-2xl mx-auto">
        <div className="flex h-14">
          {days.map((day) => {
            const active = isActive(`/day/${day.id}`);
            return (
              <Link
                key={day.id}
                href={`/day/${day.id}`}
                className={`flex-1 relative flex flex-col items-center justify-center gap-0.5 transition-colors ${
                  active ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {active && (
                  <span className="absolute top-0 left-2 right-2 h-px bg-zinc-800" />
                )}
                <span className={`text-xs tabular-nums leading-none font-medium ${active ? "" : ""}`}>
                  {day.id}
                </span>
                <span className="text-[10px] leading-none text-current opacity-70">
                  {day.shortDate.split(" ")[1]}
                </span>
              </Link>
            );
          })}

          <Link
            href="/info"
            className={`flex-1 relative flex flex-col items-center justify-center transition-colors ${
              isActive("/info") ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-600"
            }`}
          >
            {isActive("/info") && (
              <span className="absolute top-0 left-2 right-2 h-px bg-zinc-800" />
            )}
            <span className="text-[11px] font-medium leading-none">info</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
