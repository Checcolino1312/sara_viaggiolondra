export function mapsUrl(place: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${place.trim().replace(/\s+/g, "+")}`;
}

export function countdown(targetDate: Date): number {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
