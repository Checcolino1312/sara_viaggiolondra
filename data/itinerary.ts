export type ActivityBadge = "free" | "bookRequired";

export interface Activity {
  time: string;
  name: string;
  notes?: string;
  badges: ActivityBadge[];
  coords?: { lat: number; lng: number };
  special?: boolean;
}

export interface DayItinerary {
  id: number;
  date: string;
  shortDate: string;
  title: string;
  subtitle: string;
  narrative: string;
  activities: Activity[];
}

export interface HotelInfo {
  name: string;
  address: string;
  phone: string;
  coords: { lat: number; lng: number };
  nearestMetro: string;
}

export interface FlightInfo {
  departureTime: string;
  arrivalTime: string;
}

export interface TransferStep {
  step: string;
  detail?: string;
}

export interface BookingItem {
  id: string;
  label: string;
  detail?: string;
  url?: string;
}

export interface Tip {
  title: string;
  body: string;
}

export const hotel: HotelInfo = {
  name: "Exhibition Court Hotel 4",
  address: "25 Collingham Pl, London SW5 0QF",
  phone: "+44 20 7370 2414",
  coords: { lat: 51.4939, lng: -0.1897 },
  nearestMetro: "Gloucester Road (Circle, District, Piccadilly)",
};

export const flightOut: FlightInfo = {
  departureTime: "10:40",
  arrivalTime: "12:20 BST",
};

export const flightReturn: FlightInfo = {
  departureTime: "10:30",
  arrivalTime: "",
};

export const transferIn: TransferStep[] = [
  { step: "Stansted Express → Liverpool Street", detail: "~47 min · £19–23" },
  { step: "Circle Line · Liverpool Street → Gloucester Road", detail: "~25 min" },
  { step: "A piedi → Hotel", detail: "~5 min" },
];

export const transferOut: TransferStep[] = [
  { step: "Sveglia", detail: "5:30" },
  { step: "A piedi → Gloucester Road", detail: "~5 min" },
  { step: "Circle Line · Gloucester Road → Liverpool Street", detail: "~25 min, partire entro le 6:30" },
  { step: "Stansted Express · Liverpool Street → Stansted", detail: "treno ~7:00, ~47 min" },
  { step: "Arrivo Stansted", detail: "~7:47" },
  { step: "Volo 10:30 · Stansted → Roma", detail: "" },
];

export const bookingItems: BookingItem[] = [
  { id: "sky-garden", label: "Sky Garden", detail: "gratuito — skygarden.london", url: "https://skygarden.london" },
  { id: "london-eye", label: "London Eye", detail: "~£30 — londoneye.com", url: "https://www.londoneye.com" },
  { id: "tower-of-london", label: "Tower of London", detail: "~£33 — hrp.org.uk", url: "https://www.hrp.org.uk/tower-of-london" },
  { id: "stansted-express-out", label: "Stansted Express (andata)", detail: "stanstedexpress.com", url: "https://www.stanstedexpress.com" },
  { id: "stansted-express-return", label: "Stansted Express (ritorno)", detail: "stanstedexpress.com", url: "https://www.stanstedexpress.com" },
];

export const tips: Tip[] = [
  { title: "Oyster / Contactless", body: "Usa la carta contactless per metro e bus. Le tariffe giornaliere sono capped automaticamente." },
  { title: "Sky Garden", body: "Prenotare prima possibile su skygarden.london — è gratuito ma i posti si esauriscono." },
  { title: "London Eye", body: "Conviene prenotare online (londoneye.com) per saltare la coda." },
  { title: "Tower of London", body: "Prenota online su hrp.org.uk, ~£33." },
  { title: "Musei gratuiti", body: "Natural History Museum, British Museum e Sky Garden sono tutti gratuiti." },
  { title: "App", body: "Citymapper per orientarsi. TfL Go per orari metro in tempo reale." },
  { title: "Meteo", body: "Aprile: 10–16 °C. Porta uno strato impermeabile." },
  { title: "Fuso orario", body: "Londra è 1 ora indietro rispetto all'Italia (BST, UTC+1)." },
];

export const days: DayItinerary[] = [
  {
    id: 1,
    date: "Sabato 18 Aprile",
    shortDate: "Sab 18",
    title: "Arrivo",
    subtitle: "Stansted — Hotel — Natural History Museum",
    narrative: "Stansted Express fino a Liverpool Street, poi Circle Line fino all'hotel. Pomeriggio libero nella zona.",
    activities: [
      {
        time: "12:20",
        name: "Atterraggio a Stansted",
        badges: [],
        notes: "Orario UK: BST, 1 ora indietro rispetto all'Italia.",
      },
      {
        time: "~13:10",
        name: "Stansted Express → Liverpool Street",
        badges: [],
        notes: "~47 min · £19–23.",
      },
      {
        time: "~14:00",
        name: "Circle Line → Gloucester Road",
        badges: [],
        notes: "~25 min. 5 minuti a piedi fino all'hotel.",
      },
      {
        time: "~14:30",
        name: "Check-in — Exhibition Court Hotel",
        badges: [],
        coords: { lat: 51.4939, lng: -0.1897 },
        notes: "25 Collingham Pl, SW5 0QF.",
      },
      {
        time: "15:00–17:30",
        name: "Natural History Museum",
        badges: ["free"],
        coords: { lat: 51.4967, lng: -0.1764 },
        notes: "A 5 minuti dall'hotel. Chiude alle 17:50.",
      },
      {
        time: "17:30–19:00",
        name: "Hyde Park / Kensington Gardens",
        badges: ["free"],
        coords: { lat: 51.5074, lng: -0.1641 },
      },
      {
        time: "19:30",
        name: "Cena — Earl's Court",
        badges: [],
      },
    ],
  },
  {
    id: 2,
    date: "Domenica 19 Aprile",
    shortDate: "Dom 19",
    title: "Westminster & Soho",
    subtitle: "Buckingham Palace — Big Ben — Berwick Street — Covent Garden",
    narrative: "Westminster al mattino, poi South Bank e West End nel pomeriggio. Berwick Street è la copertina di Morning Glory.",
    activities: [
      {
        time: "9:00",
        name: "Buckingham Palace",
        badges: [],
        coords: { lat: 51.5014, lng: -0.1419 },
        notes: "Cambio della Guardia: controlla gli orari sul sito ufficiale.",
      },
      {
        time: "10:30",
        name: "Big Ben & Westminster",
        badges: [],
        coords: { lat: 51.5007, lng: -0.1246 },
        notes: "Houses of Parliament, Westminster Abbey (esterno).",
      },
      {
        time: "11:30",
        name: "London Eye",
        badges: ["bookRequired"],
        coords: { lat: 51.5032, lng: -0.1195 },
        notes: "~£30. Prenota online.",
      },
      {
        time: "13:00",
        name: "Pranzo — South Bank",
        badges: [],
        coords: { lat: 51.5074, lng: -0.1123 },
      },
      {
        time: "14:30",
        name: "Piccadilly Circus",
        badges: [],
        coords: { lat: 51.5099, lng: -0.1343 },
      },
      {
        time: "15:00",
        name: "Berwick Street",
        badges: [],
        coords: { lat: 51.5145, lng: -0.1357 },
        special: true,
        notes: "Copertina di Morning Glory (1995). Il punto esatto è vicino a Sister Ray Records, al 23 di Berwick Street.",
      },
      {
        time: "16:00",
        name: "Covent Garden",
        badges: [],
        coords: { lat: 51.5117, lng: -0.1240 },
      },
      {
        time: "18:00",
        name: "Cena — Soho",
        badges: [],
      },
    ],
  },
  {
    id: 3,
    date: "Lunedì 20 Aprile",
    shortDate: "Lun 20",
    title: "City & Camden",
    subtitle: "Tower of London — Sky Garden — British Museum — Camden",
    narrative: "Tower of London al mattino, poi Sky Garden e British Museum. Sera a Camden.",
    activities: [
      {
        time: "10:00–12:00",
        name: "Tower of London",
        badges: ["bookRequired"],
        coords: { lat: 51.5081, lng: -0.0759 },
        notes: "~£33. Prenota su hrp.org.uk. Apre alle 10:00 il lunedì.",
      },
      {
        time: "12:15",
        name: "Tower Bridge",
        badges: ["free"],
        coords: { lat: 51.5055, lng: -0.0754 },
        notes: "Attraversamento a piedi gratuito.",
      },
      {
        time: "13:00",
        name: "Pranzo — Tower Hill",
        badges: [],
        coords: { lat: 51.5099, lng: -0.0787 },
      },
      {
        time: "13:45",
        name: "Sky Garden",
        badges: ["free", "bookRequired"],
        coords: { lat: 51.5112, lng: -0.0835 },
        notes: "Vista 360°. Prenota su skygarden.london (gratuito, esaurisce presto).",
      },
      {
        time: "15:00–17:00",
        name: "British Museum",
        badges: ["free"],
        coords: { lat: 51.5194, lng: -0.1270 },
        notes: "Chiude alle 17:00. Consiglio: sezione egizia e Stele di Rosetta.",
      },
      {
        time: "18:00–20:00",
        name: "Camden Town / Camden Lock",
        badges: [],
        coords: { lat: 51.5412, lng: -0.1462 },
        notes: "Mercato e street food. Buono per la cena.",
      },
    ],
  },
  {
    id: 4,
    date: "Martedì 21 Aprile",
    shortDate: "Mar 21",
    title: "Notting Hill & Beatles",
    subtitle: "Portobello Road — Abbey Road — Borough Market",
    narrative: "Portobello al mattino, Abbey Road a metà giornata, Borough Market per pranzo. Pomeriggio libero.",
    activities: [
      {
        time: "9:00–11:00",
        name: "Portobello Road / Notting Hill",
        badges: [],
        coords: { lat: 51.5143, lng: -0.2039 },
        notes: "Mercatino dell'antiquariato. Martedì mattina c'è il mercato.",
      },
      {
        time: "11:00–12:00",
        name: "Abbey Road Crossing",
        badges: [],
        coords: { lat: 51.5321, lng: -0.1773 },
        special: true,
        notes: "Metro: St. John's Wood. Il negozio Abbey Road Studios è accanto.",
      },
      {
        time: "12:30–14:00",
        name: "Borough Market",
        badges: [],
        coords: { lat: 51.5056, lng: -0.0905 },
        notes: "Aperto mar–sab. Chiuso il lunedì.",
      },
      {
        time: "14:30–16:30",
        name: "Oxford Street / Regent Street",
        badges: [],
        coords: { lat: 51.5152, lng: -0.1422 },
      },
      {
        time: "16:30",
        name: "South Bank",
        badges: [],
        coords: { lat: 51.5074, lng: -0.1123 },
      },
      {
        time: "19:00",
        name: "Cena",
        badges: [],
      },
      {
        time: "21:00",
        name: "Rientro in hotel",
        badges: [],
        notes: "Sveglia alle 5:30.",
      },
    ],
  },
  {
    id: 5,
    date: "Mercoledì 22 Aprile",
    shortDate: "Mer 22",
    title: "Partenza",
    subtitle: "Gloucester Road → Liverpool Street → Stansted",
    narrative: "Partenza mattutina. Tutto deve filare liscio — non c'è margine.",
    activities: [
      {
        time: "5:30",
        name: "Sveglia",
        badges: [],
      },
      {
        time: "6:15",
        name: "Check-out → Gloucester Road",
        badges: [],
        coords: { lat: 51.4939, lng: -0.1876 },
        notes: "~5 minuti a piedi.",
      },
      {
        time: "6:30",
        name: "Circle Line → Liverpool Street",
        badges: [],
        notes: "~25 min. Partire entro le 6:30.",
      },
      {
        time: "~7:00",
        name: "Stansted Express",
        badges: [],
        notes: "~47 min.",
      },
      {
        time: "~7:47",
        name: "Arrivo Stansted",
        badges: [],
        notes: "Check-in e sicurezza.",
      },
      {
        time: "10:30",
        name: "Volo Stansted → Roma",
        badges: [],
      },
    ],
  },
];
