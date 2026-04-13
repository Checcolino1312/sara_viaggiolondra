"use client";

import { useEffect, useState } from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";
import {
  hotel,
  transferIn,
  transferOut,
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
      className={`w-full flex items-center gap-3 px-4 py-3 border-b border-zinc-100 last:border-0 text-left transition-colors hover:bg-zinc-50 ${
        checked ? "opacity-50" : ""
      }`}
    >
      <span
        className={`w-4 h-4 flex-shrink-0 rounded border flex items-center justify-center transition-colors ${
          checked ? "border-zinc-400 bg-zinc-200" : "border-zinc-300"
        }`}
      >
        {checked && (
          <span className="block w-1.5 h-1.5 rounded-sm bg-zinc-600" />
        )}
      </span>

      <div className="flex-1 min-w-0">
        <p className={`text-sm ${checked ? "line-through text-zinc-400" : "text-zinc-700"}`}>
          {item.label}
        </p>
        {item.detail && (
          <p className="text-zinc-400 text-xs mt-0.5">{item.detail}</p>
        )}
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
    <main className="min-h-screen bg-white pt-12 pb-20">
      <div className="max-w-2xl mx-auto px-4 pt-6 space-y-8">

        {/* Hotel */}
        <section className="animate-in" style={{ animationDelay: "40ms" }}>
          <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-2">Hotel</p>
          <div className="border border-zinc-200 rounded-xl px-4 py-3 bg-zinc-50">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-zinc-800 text-sm font-medium">{hotel.name}</p>
                <p className="text-zinc-500 text-xs mt-0.5">{hotel.address}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Phone size={10} className="text-zinc-400" />
                  <a href={`tel:${hotel.phone}`} className="text-zinc-400 text-xs hover:text-zinc-700 transition-colors">
                    {hotel.phone}
                  </a>
                </div>
                <p className="text-zinc-300 text-xs mt-0.5">{hotel.nearestMetro}</p>
              </div>
              <a
                href={mapsUrl(hotel.coords.lat, hotel.coords.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                <MapPin size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* Transfer andata */}
        <section className="animate-in" style={{ animationDelay: "80ms" }}>
          <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-2">Transfer andata — 18 apr</p>
          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            {transferIn.map((s, i) => (
              <div key={i} className="flex gap-3 px-4 py-3 border-b border-zinc-100 last:border-0 bg-zinc-50">
                <span className="text-zinc-300 text-[11px] tabular-nums w-3 flex-shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="text-zinc-700 text-sm">{s.step}</p>
                  {s.detail && <p className="text-zinc-400 text-xs mt-0.5">{s.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transfer ritorno */}
        <section className="animate-in" style={{ animationDelay: "120ms" }}>
          <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-2">Transfer ritorno — 22 apr</p>
          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            {transferOut.map((s, i) => (
              <div key={i} className="flex gap-3 px-4 py-3 border-b border-zinc-100 last:border-0 bg-zinc-50">
                <span className="text-zinc-300 text-[11px] tabular-nums w-3 flex-shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="text-zinc-700 text-sm">{s.step}</p>
                  {s.detail && <p className="text-zinc-400 text-xs mt-0.5">{s.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Checklist */}
        <section className="animate-in" style={{ animationDelay: "160ms" }}>
          <div className="flex items-center justify-between mb-2">
            <p className="text-zinc-400 text-[11px] uppercase tracking-wider">Da prenotare</p>
            {mounted && (
              <span className="text-zinc-400 text-xs tabular-nums">
                {completedCount}/{bookingItems.length}
              </span>
            )}
          </div>
          <div className="border border-zinc-200 rounded-xl overflow-hidden bg-white">
            {bookingItems.map((item) => (
              <ChecklistItem
                key={item.id}
                item={item}
                checked={mounted ? !!checked[item.id] : false}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </section>

        {/* Note utili */}
        <section className="animate-in" style={{ animationDelay: "200ms" }}>
          <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-2">Note utili</p>
          <div className="border border-zinc-200 rounded-xl overflow-hidden">
            {tips.map((tip, i) => (
              <div key={i} className="px-4 py-3 border-b border-zinc-100 last:border-0 bg-zinc-50">
                <p className="text-zinc-700 text-sm font-medium">{tip.title}</p>
                <p className="text-zinc-400 text-xs mt-0.5 leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
