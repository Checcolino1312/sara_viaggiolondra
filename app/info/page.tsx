"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import {
  hotel,
  transferIn,
  transferInTotal,
  transferOut,
  transferOutTotal,
  bookingItems,
  tips,
  BookingItem,
} from "@/data/itinerary";
import { mapsUrl } from "@/lib/utils";
import Footer from "@/components/Footer";

const STORAGE_KEY = "londra2026_bookings";

function loadChecked(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveChecked(state: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ChecklistItem({
  item,
  checked,
  onToggle,
}: {
  item: BookingItem;
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-3 px-4 py-3.5 border-b border-zinc-100 last:border-0 text-left transition-colors hover:bg-zinc-50 ${
        checked ? "opacity-50" : ""
      }`}
    >
      <span
        className={`w-4 h-4 flex-shrink-0 rounded border flex items-center justify-center transition-colors ${
          checked ? "border-zinc-400 bg-zinc-200" : "border-zinc-300"
        }`}
      >
        {checked && <span className="block w-1.5 h-1.5 rounded-sm bg-zinc-600" />}
      </span>

      <div className="flex-1 min-w-0">
        <p className={`text-sm ${checked ? "line-through text-zinc-400" : "text-zinc-700"}`}>
          {item.label}
        </p>
        {item.detail && <p className="text-zinc-400 text-xs mt-0.5">{item.detail}</p>}
      </div>

      {item.url && !checked && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-zinc-400 hover:text-zinc-700 transition-colors flex-shrink-0"
        >
          <ExternalLink size={13} />
        </a>
      )}
    </button>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-3">{children}</p>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

export default function InfoPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setChecked(loadChecked());
    setMounted(true);
  }, []);

  const toggle = (id: string) => {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    saveChecked(next);
  };

  const completedCount = bookingItems.filter((b) => checked[b.id]).length;

  return (
    <main className="min-h-screen bg-[#fafafa] pt-12 pb-20">
      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-6">

        {/* Hotel */}
        <section className="animate-in" style={{ animationDelay: "40ms" }}>
          <SectionLabel>Hotel</SectionLabel>
          <Card>
            <div className="px-4 py-4 flex justify-between items-start gap-3">
              <div className="min-w-0">
                <p className="text-zinc-900 text-sm font-semibold">{hotel.name}</p>
                <p className="text-zinc-500 text-xs mt-1">{hotel.address}</p>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <Phone size={10} className="text-zinc-400 flex-shrink-0" />
                  <a href={`tel:${hotel.phone}`} className="text-zinc-500 text-xs hover:text-zinc-800 transition-colors">
                    {hotel.phone}
                  </a>
                </div>
                {hotel.bookingRef && (
                  <p className="text-zinc-400 text-xs mt-1 tabular-nums">Ref: {hotel.bookingRef}</p>
                )}
                <p className="text-zinc-300 text-xs mt-1">{hotel.nearestMetro}</p>
              </div>
              <a
                href={mapsUrl(hotel.coords.lat, hotel.coords.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-700 transition-colors flex-shrink-0"
              >
                <MapPin size={16} />
              </a>
            </div>
          </Card>
        </section>

        {/* Transfer andata */}
        <section className="animate-in" style={{ animationDelay: "80ms" }}>
          <div className="flex items-baseline justify-between mb-3">
            <SectionLabel>Transfer andata — 18 apr</SectionLabel>
            <p className="text-zinc-400 text-[11px] mb-3">{transferInTotal}</p>
          </div>
          <Card>
            {transferIn.map((s, i) => (
              <div key={i} className="flex gap-3 px-4 py-3.5 border-b border-zinc-100 last:border-0">
                <span className="text-zinc-300 text-xs tabular-nums w-4 flex-shrink-0 mt-px">{i + 1}</span>
                <div>
                  <p className="text-zinc-700 text-sm">{s.step}</p>
                  {s.detail && <p className="text-zinc-400 text-xs mt-0.5">{s.detail}</p>}
                </div>
              </div>
            ))}
          </Card>
        </section>

        {/* Transfer ritorno */}
        <section className="animate-in" style={{ animationDelay: "110ms" }}>
          <div className="flex items-baseline justify-between mb-3">
            <SectionLabel>Transfer ritorno — 22 apr</SectionLabel>
            <p className="text-zinc-400 text-[11px] mb-3">{transferOutTotal}</p>
          </div>
          <Card>
            {transferOut.map((s, i) => (
              <div key={i} className="flex gap-3 px-4 py-3.5 border-b border-zinc-100 last:border-0">
                <span className="text-zinc-300 text-xs tabular-nums w-4 flex-shrink-0 mt-px">{i + 1}</span>
                <div>
                  <p className="text-zinc-700 text-sm">{s.step}</p>
                  {s.detail && <p className="text-zinc-400 text-xs mt-0.5">{s.detail}</p>}
                </div>
              </div>
            ))}
          </Card>
        </section>

        {/* Checklist */}
        <section className="animate-in" style={{ animationDelay: "140ms" }}>
          <div className="flex items-center justify-between mb-3">
            <SectionLabel>Da prenotare</SectionLabel>
            {mounted && (
              <span className="text-zinc-400 text-xs tabular-nums mb-3">
                {completedCount}/{bookingItems.length}
              </span>
            )}
          </div>
          <Card>
            {bookingItems.map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                checked={mounted ? !!checked[item.id] : false}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </Card>
        </section>

        {/* Note utili */}
        <section className="animate-in" style={{ animationDelay: "170ms" }}>
          <SectionLabel>Note utili</SectionLabel>
          <Card>
            {tips.map((tip, i) => (
              <div key={i} className="px-4 py-3.5 border-b border-zinc-100 last:border-0">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-zinc-800 text-sm font-medium">{tip.title}</p>
                  {tip.url && (
                    <a
                      href={tip.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-700 transition-colors text-xs flex items-center gap-1 flex-shrink-0"
                    >
                      {tip.urlLabel ?? "Link"}
                      <ExternalLink size={11} />
                    </a>
                  )}
                </div>
                <p className="text-zinc-500 text-xs mt-1 leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </Card>
        </section>

        <Footer />
      </div>
    </main>
  );
}
