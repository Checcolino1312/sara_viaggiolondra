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
    <main className="min-h-screen bg-white pt-12 pb-20">
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-6 animate-in">
        <p className="text-zinc-400 text-xs mb-2 tabular-nums">18 – 22 apr 2026</p>
        <h1 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-1">Londra</h1>
        {daysLeft !== null && daysLeft > 0 && (
          <p className="text-zinc-500 text-sm">
            {daysLeft} {daysLeft === 1 ? "giorno" : "giorni"} al viaggio
          </p>
        )}
        {daysLeft === 0 && <p className="text-zinc-500 text-sm">Oggi si parte.</p>}
        {daysLeft !== null && daysLeft < 0 && (
          <p className="text-zinc-400 text-sm">Aprile 2026</p>
        )}
      </div>

      <div className="max-w-2xl mx-auto px-4 space-y-8">
        {/* Voli e hotel */}
        <section className="animate-in" style={{ animationDelay: "60ms" }}>
          <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-2">Viaggio</p>
          <div className="divide-y divide-zinc-100 border border-zinc-200 rounded-xl overflow-hidden">

            <div className="px-4 py-3 bg-zinc-50">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-700 text-sm">Andata</span>
                <span className="text-zinc-400 text-xs tabular-nums">
                  {flightOut.departureTime} → {flightOut.arrivalTime}
                </span>
              </div>
              <div className="flex justify-between items-baseline mt-0.5">
                <p className="text-zinc-400 text-xs">18 apr · Stansted</p>
                {flightOut.flightNumber && (
                  <p className="text-zinc-400 text-xs tabular-nums">{flightOut.flightNumber}</p>
                )}
              </div>
            </div>

            <div className="px-4 py-3 bg-zinc-50">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-700 text-sm">Ritorno</span>
                <span className="text-zinc-400 text-xs tabular-nums">{flightReturn.departureTime}</span>
              </div>
              <div className="flex justify-between items-baseline mt-0.5">
                <p className="text-zinc-400 text-xs">22 apr · Stansted → Roma</p>
                {flightReturn.flightNumber && (
                  <p className="text-zinc-400 text-xs tabular-nums">{flightReturn.flightNumber}</p>
                )}
              </div>
            </div>

            <div className="px-4 py-3 bg-zinc-50">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-zinc-700 text-sm">{hotel.name}</span>
                  <p className="text-zinc-400 text-xs mt-0.5">{hotel.address}</p>
                  {hotel.bookingRef && (
                    <p className="text-zinc-400 text-xs mt-0.5 tabular-nums">Ref: {hotel.bookingRef}</p>
                  )}
                  <p className="text-zinc-300 text-xs mt-0.5">{hotel.nearestMetro}</p>
                </div>
                <a
                  href={mapsUrl(hotel.coords.lat, hotel.coords.lng)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-zinc-700 transition-colors mt-0.5"
                >
                  <MapPin size={14} />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Giorni */}
        <section className="animate-in" style={{ animationDelay: "120ms" }}>
          <p className="text-zinc-400 text-[11px] uppercase tracking-wider mb-2">Itinerario</p>
          <div className="space-y-1">
            {days.map((day, i) => (
              <Link
                key={day.id}
                href={`/day/${day.id}`}
                className="flex items-center gap-3 px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl hover:bg-zinc-100 hover:border-zinc-300 transition-all group animate-in"
                style={{ animationDelay: `${(i + 2) * 50}ms` }}
              >
                <span className="text-zinc-300 text-xs tabular-nums w-4 flex-shrink-0">{day.id}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-zinc-800 text-sm font-medium truncate">{day.title}</p>
                  <p className="text-zinc-400 text-xs truncate mt-0.5">
                    {day.date} · {day.activities.length} tappe
                  </p>
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
