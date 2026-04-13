"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { days, hotel, flightOut, flightReturn } from "@/data/itinerary";
import { countdown, mapsUrl } from "@/lib/utils";
import Footer from "@/components/Footer";

const TRIP_START = new Date("2026-04-18T00:00:00");

export default function HomePage() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    setDaysLeft(countdown(TRIP_START));
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] pt-12 pb-20">
      {/* Hero */}
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-7 animate-in">
        <p className="text-zinc-400 text-xs mb-2 tabular-nums">18 – 22 apr 2026</p>
        <h1 className="text-[28px] font-semibold text-zinc-900 tracking-tight leading-tight mb-1">Londra</h1>
        {daysLeft !== null && daysLeft > 0 && (
          <p className="text-zinc-500 text-sm">{daysLeft} {daysLeft === 1 ? "giorno" : "giorni"} al viaggio</p>
        )}
        {daysLeft === 0 && <p className="text-zinc-500 text-sm">Oggi si parte.</p>}
        {daysLeft !== null && daysLeft < 0 && <p className="text-zinc-400 text-sm">Aprile 2026</p>}
      </div>

      <div className="max-w-2xl mx-auto px-4 space-y-6">

        {/* Voli e hotel */}
        <section className="animate-in" style={{ animationDelay: "60ms" }}>
          <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-3">Viaggio</p>
          <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden divide-y divide-zinc-100">
            <div className="px-4 py-3.5">
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-zinc-800 text-sm font-medium">Andata</span>
                <span className="text-zinc-500 text-xs tabular-nums">{flightOut.departureTime} → {flightOut.arrivalTime}</span>
              </div>
              <div className="flex justify-between items-baseline mt-0.5">
                <p className="text-zinc-400 text-xs">18 apr · Stansted</p>
                {flightOut.flightNumber && <p className="text-zinc-400 text-xs tabular-nums">{flightOut.flightNumber}</p>}
              </div>
            </div>

            <div className="px-4 py-3.5">
              <div className="flex justify-between items-baseline gap-2">
                <span className="text-zinc-800 text-sm font-medium">Ritorno</span>
                <span className="text-zinc-500 text-xs tabular-nums">{flightReturn.departureTime}</span>
              </div>
              <div className="flex justify-between items-baseline mt-0.5">
                <p className="text-zinc-400 text-xs">22 apr · Stansted → Roma</p>
                {flightReturn.flightNumber && <p className="text-zinc-400 text-xs tabular-nums">{flightReturn.flightNumber}</p>}
              </div>
            </div>

            <div className="px-4 py-3.5">
              <div className="flex justify-between items-start gap-3">
                <div className="min-w-0">
                  <p className="text-zinc-800 text-sm font-medium">{hotel.name}</p>
                  <p className="text-zinc-400 text-xs mt-0.5">{hotel.address}</p>
                  {hotel.bookingRef && <p className="text-zinc-400 text-xs mt-0.5 tabular-nums">Ref: {hotel.bookingRef}</p>}
                  <p className="text-zinc-300 text-xs mt-0.5">{hotel.nearestMetro}</p>
                </div>
                <a
                  href={mapsUrl(hotel.coords.lat, hotel.coords.lng)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-700 transition-colors flex-shrink-0 mt-0.5"
                >
                  <MapPin size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Giorni */}
        <section className="animate-in" style={{ animationDelay: "120ms" }}>
          <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-3">Itinerario</p>
          <div className="rounded-xl border border-zinc-200 bg-white shadow-sm overflow-hidden divide-y divide-zinc-100">
            {days.map((day, i) => (
              <Link
                key={day.id}
                href={`/day/${day.id}`}
                className="flex items-center gap-4 px-4 py-3.5 hover:bg-zinc-50 transition-colors group animate-in"
                style={{ animationDelay: `${(i + 2) * 40}ms` }}
              >
                <div className="flex-shrink-0 w-8 text-center">
                  <span className="text-zinc-300 text-xs tabular-nums font-medium">{day.shortDate.split(" ")[0]}</span>
                  <p className="text-zinc-500 text-sm font-semibold tabular-nums leading-none mt-0.5">{day.shortDate.split(" ")[1]}</p>
                </div>
                <div className="w-px h-8 bg-zinc-100 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-800 text-sm font-medium truncate">{day.title}</p>
                  <p className="text-zinc-400 text-xs truncate mt-0.5">{day.subtitle}</p>
                </div>
                <ArrowRight size={14} className="text-zinc-300 group-hover:text-zinc-500 transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
