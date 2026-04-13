import { ActivityBadge } from "@/data/itinerary";

const badgeConfig: Record<ActivityBadge, { label: string }> = {
  free: { label: "gratuito" },
  bookRequired: { label: "prenota" },
};

export default function Badge({ type }: { type: ActivityBadge }) {
  return (
    <span className="text-[10px] px-1.5 py-0.5 rounded border border-zinc-300 text-zinc-400 leading-none">
      {badgeConfig[type].label}
    </span>
  );
}
