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
      className="relative flex gap-4 animate-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 flex-shrink-0 w-2 h-2 mt-1.5 rounded-full ${
            isSpecial ? "bg-zinc-700" : "bg-zinc-300"
          }`}
        />
        {!isLast && (
          <div className="w-px flex-1 min-h-[2rem] bg-zinc-200 mt-1" />
        )}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isLast ? "pb-2" : "pb-5"}`}>
        <p className="text-[11px] text-zinc-400 font-mono mb-1">{activity.time}</p>

        <div
          className={`rounded-lg p-3.5 border ${
            isSpecial
              ? "bg-gradient-to-br from-stone-50 to-zinc-100 border-zinc-300"
              : "bg-gradient-to-br from-white to-zinc-50 border-zinc-200"
          }`}
        >
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-medium text-sm leading-snug text-zinc-800">
              {activity.name}
            </h3>
            {activity.badges.length > 0 && (
              <div className="flex flex-wrap gap-1 flex-shrink-0">
                {activity.badges.map((badge) => (
                  <Badge key={badge} type={badge} />
                ))}
              </div>
            )}
          </div>

          {activity.notes && (
            <p className="text-zinc-500 text-xs leading-relaxed mb-3">{activity.notes}</p>
          )}

          {activity.coords && (
            <a
              href={mapsUrl(activity.coords.lat, activity.coords.lng)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              <MapPin size={11} />
              Maps
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
