import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { days } from "@/data/itinerary";
import ActivityCard from "@/components/ActivityCard";
import Footer from "@/components/Footer";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return days.map((d) => ({ id: String(d.id) }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const day = days.find((d) => d.id === parseInt(id));
  if (!day) return { title: "Non trovato" };
  return {
    title: `${day.date} — Londra 2026`,
    description: day.narrative,
  };
}

export default async function DayPage({ params }: Props) {
  const { id } = await params;
  const dayId = parseInt(id);
  const day = days.find((d) => d.id === dayId);
  if (!day) notFound();

  const prevDay = days.find((d) => d.id === dayId - 1);
  const nextDay = days.find((d) => d.id === dayId + 1);

  return (
    <main className="min-h-screen bg-white pt-12 pb-20">
      {/* Day header */}
      <div className="max-w-2xl mx-auto px-4 pt-6 pb-4 animate-in">
        <p className="text-zinc-400 text-xs mb-1">{day.date}</p>
        <h1 className="text-xl font-semibold text-zinc-900 mb-2">{day.title}</h1>
        <p className="text-zinc-500 text-sm leading-relaxed">{day.narrative}</p>
      </div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto px-4 pt-2">
        {day.activities.map((activity, index) => (
          <ActivityCard
            key={`${activity.time}-${activity.name}`}
            activity={activity}
            index={index}
            isLast={index === day.activities.length - 1}
          />
        ))}
      </div>

      {/* Prev / Next */}
      <div className="max-w-2xl mx-auto px-4 mt-8">
        <div className="flex gap-2">
          {prevDay ? (
            <Link
              href={`/day/${prevDay.id}`}
              className="flex-1 flex items-center gap-2 px-3 py-3 border border-zinc-200 rounded-xl hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 transition-all group"
            >
              <ArrowLeft size={14} className="text-zinc-400 group-hover:text-zinc-600 transition-colors flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-zinc-400 text-[10px]">precedente</p>
                <p className="text-zinc-700 text-sm truncate">{prevDay.title}</p>
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {nextDay ? (
            <Link
              href={`/day/${nextDay.id}`}
              className="flex-1 flex items-center justify-end gap-2 px-3 py-3 border border-zinc-200 rounded-xl hover:border-zinc-300 bg-zinc-50 hover:bg-zinc-100 transition-all group text-right"
            >
              <div className="min-w-0">
                <p className="text-zinc-400 text-[10px]">successivo</p>
                <p className="text-zinc-700 text-sm truncate">{nextDay.title}</p>
              </div>
              <ArrowRight size={14} className="text-zinc-400 group-hover:text-zinc-600 transition-colors flex-shrink-0" />
            </Link>
          ) : <div className="flex-1" />}
        </div>
      </div>

      <Footer />
    </main>
  );
}
