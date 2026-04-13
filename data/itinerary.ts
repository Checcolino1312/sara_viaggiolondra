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
  activities: Activity[];
}

export interface HotelInfo {
  name: string;
  address: string;
  phone: string;
  bookingRef?: string;
  coords: { lat: number; lng: number };
  nearestMetro: string;
}

export interface FlightInfo {
  flightNumber?: string;
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
  url?: string;
  urlLabel?: string;
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
export const transferInTotal = "~1h 20min porta a porta";

export const transferOut: TransferStep[] = [
  { step: "Sveglia", detail: "5:30" },
  { step: "A piedi → Gloucester Road", detail: "~5 min" },
  { step: "Circle Line · Gloucester Road → Liverpool Street", detail: "~25 min, partire entro le 6:30" },
  { step: "Stansted Express · Liverpool Street → Stansted", detail: "treno ~7:00, ~47 min" },
  { step: "Arrivo Stansted", detail: "~7:47" },
  { step: "Volo 10:30 · Stansted → Roma", detail: "" },
];
export const transferOutTotal = "~1h 20min porta a porta";

export const bookingItems: BookingItem[] = [
  { id: "sky-garden", label: "Sky Garden", detail: "gratuito — skygarden.london", url: "https://skygarden.london" },
  { id: "london-eye", label: "London Eye", detail: "~£30 — londoneye.com", url: "https://www.londoneye.com" },
  { id: "tower-of-london", label: "Tower of London", detail: "~£33 — hrp.org.uk", url: "https://www.hrp.org.uk/tower-of-london" },
  { id: "stansted-express-out", label: "Stansted Express (andata)", detail: "stanstedexpress.com", url: "https://www.stanstedexpress.com" },
  { id: "stansted-express-return", label: "Stansted Express (ritorno)", detail: "stanstedexpress.com", url: "https://www.stanstedexpress.com" },
];

export const tips: Tip[] = [
  {
    title: "Oyster / Contactless",
    body: "Usa la carta contactless direttamente — le tariffe giornaliere sono capped automaticamente, non serve acquistare una Oyster. In alternativa si può comprare online.",
    url: "https://tfl.gov.uk/fares/how-to-pay-and-where-to-buy-tickets-and-oyster/pay-as-you-go/contactless-and-mobile-pay",
    urlLabel: "Info TfL",
  },
  {
    title: "Sky Garden",
    body: "Prenotare prima possibile su skygarden.london — è gratuito ma i posti si esauriscono con settimane di anticipo.",
    url: "https://skygarden.london",
    urlLabel: "Prenota",
  },
  {
    title: "London Eye",
    body: "Conviene prenotare online per saltare la coda in loco.",
    url: "https://www.londoneye.com",
    urlLabel: "Prenota",
  },
  {
    title: "Tower of London",
    body: "Prenota online su hrp.org.uk, ~£33.",
    url: "https://www.hrp.org.uk/tower-of-london",
    urlLabel: "Prenota",
  },
  {
    title: "Musei gratuiti",
    body: "Natural History Museum, British Museum e Sky Garden non richiedono biglietto.",
  },
  {
    title: "App utili",
    body: "Citymapper per orientarsi (meglio di Google Maps per i mezzi). TfL Go per orari metro in tempo reale.",
    url: "https://citymapper.com",
    urlLabel: "Citymapper",
  },
  {
    title: "Meteo",
    body: "Aprile: 10–16 °C, spesso nuvoloso. Porta uno strato impermeabile.",
  },
  {
    title: "Fuso orario",
    body: "Londra è 1 ora indietro rispetto all'Italia (BST, UTC+1). Ricordalo soprattutto all'arrivo.",
  },
];

export const days: DayItinerary[] = [
  {
    id: 1,
    date: "Sabato 18 Aprile",
    shortDate: "Sab 18",
    title: "Arrivo",
    subtitle: "Stansted — Hotel — Natural History Museum",
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
        notes: "~47 min · £19–23. Il treno parte dal piano -1 dell'aeroporto, sotto il terminal.",
      },
      {
        time: "~14:00",
        name: "Circle Line → Gloucester Road",
        badges: [],
        notes: "~25 min. Poi 5 minuti a piedi fino all'hotel.",
      },
      {
        time: "~14:30",
        name: "Check-in — Exhibition Court Hotel",
        badges: [],
        coords: { lat: 51.4939, lng: -0.1897 },
        notes: "25 Collingham Pl, SW5 0QF. Se la stanza non è pronta si può lasciare il bagaglio.",
      },
      {
        time: "15:00–17:30",
        name: "Natural History Museum",
        badges: ["free"],
        coords: { lat: 51.4967, lng: -0.1764 },
        notes: "A 5 minuti dall'hotel. Chiude alle 17:50. Consiglio: sala dei dinosauri al piano terra e la balena blu.",
      },
      {
        time: "17:30–19:00",
        name: "Hyde Park / Kensington Gardens",
        badges: ["free"],
        coords: { lat: 51.5074, lng: -0.1641 },
        notes: "Ingresso principale da Kensington High St. I due parchi sono contigui — Kensington Gardens è la parte ovest.",
      },
      {
        time: "19:30",
        name: "Cena — Earl's Court",
        badges: [],
        coords: { lat: 51.4908, lng: -0.1937 },
        notes: "Zona ricca di ristoranti. Old Brompton Road ha buone opzioni per tutti i gusti.",
      },
    ],
  },
  {
    id: 2,
    date: "Domenica 19 Aprile",
    shortDate: "Dom 19",
    title: "Westminster & Soho",
    subtitle: "Buckingham Palace — Big Ben — Berwick Street — Covent Garden",
    activities: [
      {
        time: "9:00",
        name: "Buckingham Palace",
        badges: [],
        coords: { lat: 51.5014, lng: -0.1419 },
        notes: "Il Cambio della Guardia si svolge in genere alle 11:00 i giorni pari. Controlla la disponibilità su householddivision.org.uk.",
      },
      {
        time: "10:30",
        name: "Big Ben & Westminster",
        badges: [],
        coords: { lat: 51.5007, lng: -0.1246 },
        notes: "Houses of Parliament e Westminster Abbey (esterno). Westminster Bridge è il posto migliore per la foto del Big Ben.",
      },
      {
        time: "11:30",
        name: "London Eye",
        badges: ["bookRequired"],
        coords: { lat: 51.5032, lng: -0.1195 },
        notes: "~£30. Ogni giro dura ~30 min. Prenota online per evitare code.",
      },
      {
        time: "13:00",
        name: "Pranzo — South Bank",
        badges: [],
        coords: { lat: 51.5065, lng: -0.1123 },
        notes: "Borough Market è chiuso la domenica, ma lungo il Tamigi ci sono diversi chioschi e ristoranti informali.",
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
        notes: "Copertina di Morning Glory (1995). Il punto esatto è davanti al n. 23, vicino a Sister Ray Records. La strada è pedonale e ha ancora diversi negozi di dischi indipendenti.",
      },
      {
        time: "16:00",
        name: "Covent Garden",
        badges: [],
        coords: { lat: 51.5117, lng: -0.1240 },
        notes: "La piazza centrale ospita spesso musicisti e performer di strada. Il mercato coperto ha negozi e caffè.",
      },
      {
        time: "18:00",
        name: "Cena — Soho",
        badges: [],
        coords: { lat: 51.5136, lng: -0.1340 },
        notes: "Wardour St e Old Compton St hanno buona densità di ristoranti. Prenota se vuoi un posto specifico.",
      },
    ],
  },
  {
    id: 3,
    date: "Lunedì 20 Aprile",
    shortDate: "Lun 20",
    title: "City & Camden",
    subtitle: "Tower of London — Sky Garden — British Museum — Camden",
    activities: [
      {
        time: "10:00–12:00",
        name: "Tower of London",
        badges: ["bookRequired"],
        coords: { lat: 51.5081, lng: -0.0759 },
        notes: "~£33. Prenota su hrp.org.uk. Apre alle 10:00 il lunedì. Da non perdere: i Gioielli della Corona al Waterloo Block.",
      },
      {
        time: "12:15",
        name: "Tower Bridge",
        badges: ["free"],
        coords: { lat: 51.5055, lng: -0.0754 },
        notes: "Attraversamento a piedi gratuito. La passerella in vetro è a pagamento (~£12) ma non indispensabile.",
      },
      {
        time: "13:00",
        name: "Pranzo — Tower Hill",
        badges: [],
        coords: { lat: 51.5099, lng: -0.0760 },
        notes: "The Libertador e Minories sono opzioni rapide nelle vicinanze.",
      },
      {
        time: "13:45",
        name: "Sky Garden",
        badges: ["free", "bookRequired"],
        coords: { lat: 51.5112, lng: -0.0835 },
        notes: "20 Fenchurch St. Vista 360° al 35° piano, gratuita. Prenota su skygarden.london — i posti si esauriscono settimane prima.",
      },
      {
        time: "15:00–17:00",
        name: "British Museum",
        badges: ["free"],
        coords: { lat: 51.5194, lng: -0.1270 },
        notes: "Chiude alle 17:00. Priorità: Rosetta Stone (Sala 4), mummie egizie (Sala 63), Elgin Marbles (Sala 18).",
      },
      {
        time: "18:00–20:00",
        name: "Camden Town / Camden Lock",
        badges: [],
        coords: { lat: 51.5412, lng: -0.1462 },
        notes: "Il mercato coperto apre fino alle 18:00 circa nei giorni feriali. Stables Market rimane aperto più a lungo. Buono per la cena con street food internazionale.",
      },
    ],
  },
  {
    id: 4,
    date: "Martedì 21 Aprile",
    shortDate: "Mar 21",
    title: "Notting Hill & Beatles",
    subtitle: "Portobello Road — Abbey Road — Borough Market",
    activities: [
      {
        time: "9:00–11:00",
        name: "Portobello Road / Notting Hill",
        badges: [],
        coords: { lat: 51.5143, lng: -0.2039 },
        notes: "Il mercato dell'antiquariato si svolge il sabato. Il martedì ci sono comunque i banchi di frutta, verdura e abbigliamento. Le case colorate sono su Lancaster Road e dintorni.",
      },
      {
        time: "11:00–12:00",
        name: "Abbey Road Crossing",
        badges: [],
        coords: { lat: 51.5321, lng: -0.1773 },
        special: true,
        notes: "Metro: St. John's Wood (Jubilee Line). Le strisce pedonali sono a 50m dall'uscita della metro. Il negozio Abbey Road Studios è al n. 3.",
      },
      {
        time: "12:30–14:00",
        name: "Borough Market",
        badges: [],
        coords: { lat: 51.5056, lng: -0.0905 },
        notes: "Aperto mar–sab, 10:00–17:00. Chiuso domenica e lunedì. Ottimo per il pranzo: ci sono banchi di ogni tipo.",
      },
      {
        time: "14:30–16:30",
        name: "Oxford Street / Regent Street",
        badges: [],
        coords: { lat: 51.5152, lng: -0.1422 },
        notes: "Regent Street è più piacevole di Oxford Street per architettura e negozi. Carnaby Street è a due passi.",
      },
      {
        time: "16:30",
        name: "South Bank",
        badges: [],
        coords: { lat: 51.5065, lng: -0.1123 },
        notes: "La passeggiata da Westminster Bridge a London Bridge è circa 3 km lungo il fiume.",
      },
      {
        time: "19:00",
        name: "Cena",
        badges: [],
        coords: { lat: 51.5065, lng: -0.1123 },
        notes: "Zona South Bank o Borough: The Anchor, Flat Iron Square, o Maltby Street Market se ancora aperto.",
      },
      {
        time: "21:00",
        name: "Rientro in hotel",
        badges: [],
        coords: { lat: 51.4939, lng: -0.1897 },
        notes: "Sveglia alle 5:30. Prepara la valigia stanotte.",
      },
    ],
  },
  {
    id: 5,
    date: "Mercoledì 22 Aprile",
    shortDate: "Mer 22",
    title: "Partenza",
    subtitle: "Gloucester Road → Liverpool Street → Stansted",
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
        notes: "~5 minuti a piedi. Prima uscita disponibile della Circle Line verso est.",
      },
      {
        time: "6:30",
        name: "Circle Line → Liverpool Street",
        badges: [],
        notes: "~25 min. Partire entro le 6:30 per prendere il treno delle 7:00.",
      },
      {
        time: "~7:00",
        name: "Stansted Express → Stansted",
        badges: [],
        notes: "~47 min. Il treno parte dal binario 1 di Liverpool Street.",
      },
      {
        time: "~7:47",
        name: "Arrivo Stansted",
        badges: [],
        notes: "Check-in online se non fatto. Security può richiedere 30–45 min nei giorni feriali.",
      },
      {
        time: "10:30",
        name: "Volo Stansted → Roma",
        badges: [],
      },
    ],
  },
];
