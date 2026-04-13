"use client";

import { MapPin } from "lucide-react";
import { Activity } from "@/data/itinerary";
import Badge from "./Badge";
import { mapsUrl } from "@/lib/utils";

interface Props {
  activity: Activity;
  index: number;
  isLast: boolean;
}

export default function ActivityCard({ activity, index, isLast }: Props) {
  const isSpecial = activity.special;

  return (
    <div
      className="relative flex gap-3 animate-in"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      {/* Timeline col */}
      <div className="flex flex-col items-center pt-1 flex-shrink-0 w-6">
        <div
          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
            isSpecial ? "bg-zinc-600 ring-2 ring-zinc-200" : "bg-zinc-300"
          }`}
        />
        {!isLast && (
          <div className="w-px flex-1 bg-zinc-200 mt-1.5" style={{ minHeight: "2rem" }} />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 min-w-0 ${isLast ? "pb-2" : "pb-4"}`}>
        <p className="text-[11px] text-zinc-400 font-mono mb-1.5 leading-none">{activity.time}</p>

        <div
          className={`rounded-xl border shadow-sm overflow-hidden ${
            isSpecial ? "border-zinc-300 bg-white" : "border-zinc-200 bg-white"
          }`}
        >
          {/* Card header */}
          <div className="px-4 pt-3.5 pb-3">
            <div className="flex items-start justify-between gap-3">
              <h3 className={`font-medium text-sm leading-snug ${isSpecial ? "text-zinc-900" : "text-zinc-800"}`}>
                {activity.name}
              </h3>
              {activity.badges.length > 0 && (
                <div className="flex flex-wrap gap-1 flex-shrink-0 pt-px">
                  {activity.badges.map((badge) => (
                    <Badge key={badge} type={badge} />
                  ))}
                </div>
              )}
            </div>

            {activity.notes && (
              <p className="text-zinc-500 text-xs leading-relaxed mt-2">{activity.notes}</p>
            )}
          </div>

          {/* Card footer */}
          {activity.coords && (
            <div className="px-4 py-2 border-t border-zinc-100 bg-zinc-50/60">
              <a
                href={mapsUrl(activity.coords)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-zinc-700 transition-colors"
              >
                <MapPin size={11} />
                Apri in Maps
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
