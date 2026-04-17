export type ActivityBadge = "free" | "bookRequired";

export interface Activity {
  time: string;
  name: string;
  notes?: string;
  badges: ActivityBadge[];
  coords?: string;
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
  coords: string;
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
  coords: "Exhibition Court Hotel 25 Collingham Place London",
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
  {
    step: "Circle Line · Gloucester Road → Liverpool Street",
    detail: "~25 min, partire entro le 6:30",
  },
  {
    step: "Stansted Express · Liverpool Street → Stansted",
    detail: "treno ~7:00, ~47 min",
  },
  { step: "Arrivo Stansted", detail: "~7:47" },
  { step: "Volo 10:30 · Stansted → Roma", detail: "" },
];
export const transferOutTotal = "~1h 20min porta a porta";

export const bookingItems: BookingItem[] = [
  {
    id: "horizon-22",
    label: "Horizon 22",
    detail: "gratuito — prenotato mar 21 h16:00",
    url: "https://horizon22.co.uk",
  },
  {
    id: "tower-of-london",
    label: "Tower of London",
    detail: "~£33 — hrp.org.uk",
    url: "https://www.hrp.org.uk/tower-of-london",
  },
  {
    id: "stansted-express-out",
    label: "Stansted Express (andata)",
    detail: "stanstedexpress.com",
    url: "https://www.stanstedexpress.com",
  },
  {
    id: "stansted-express-return",
    label: "Stansted Express (ritorno)",
    detail: "stanstedexpress.com",
    url: "https://www.stanstedexpress.com",
  },
];

export const tips: Tip[] = [
  {
    title: "Oyster / Contactless",
    body: "Usa la carta contactless direttamente — le tariffe giornaliere sono capped automaticamente, non serve acquistare una Oyster.",
    url: "https://tfl.gov.uk/fares/how-to-pay-and-where-to-buy-tickets-and-oyster/pay-as-you-go/contactless-and-mobile-pay",
    urlLabel: "Info TfL",
  },
  {
    title: "Horizon 22",
    body: "Biglietti prenotati per martedì 21 alle 16:00. È il viewpoint gratuito più alto di Londra (58° piano, 22 Bishopsgate). Chiude alle 18:00 nei giorni feriali.",
    url: "https://horizon22.co.uk",
    urlLabel: "Sito",
  },
  {
    title: "National Gallery",
    body: "Gratuita, Trafalgar Square. Chiude alle 18:00 (venerdì alle 21:00). Non serve prenotare.",
    url: "https://www.nationalgallery.org.uk",
    urlLabel: "Sito",
  },
  {
    title: "Tower of London",
    body: "Prenota online su hrp.org.uk, ~£33.",
    url: "https://www.hrp.org.uk/tower-of-london",
    urlLabel: "Prenota",
  },
  {
    title: "Musei gratuiti",
    body: "Natural History Museum, British Museum, National Gallery, Tate Modern e Horizon 22 sono tutti gratuiti. Solo Horizon 22 richiede prenotazione.",
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
        coords: "Exhibition Court Hotel 25 Collingham Place London",
        notes: "25 Collingham Pl, SW5 0QF. Se la stanza non è pronta si può lasciare il bagaglio.",
      },
      {
        time: "15:00–17:30",
        name: "Natural History Museum",
        badges: ["free"],
        coords: "Natural History Museum London",
        notes: "A 5 minuti dall'hotel. Chiude alle 17:50. Consiglio: sala dei dinosauri al piano terra e la balena blu.",
      },
      {
        time: "17:30–19:00",
        name: "Hyde Park / Kensington Gardens",
        badges: ["free"],
        coords: "Hyde Park London",
        notes: "Ingresso principale da Kensington High St. I due parchi sono contigui — Kensington Gardens è la parte ovest.",
      },
      {
        time: "19:30",
        name: "Cena — Earl's Court",
        badges: [],
        coords: "Old Brompton Road Earl's Court London",
        notes: "Zona ricca di ristoranti. Old Brompton Road ha buone opzioni per tutti i gusti.",
      },
    ],
  },
  {
    id: 2,
    date: "Domenica 19 Aprile",
    shortDate: "Dom 19",
    title: "Westminster & Soho",
    subtitle: "Buckingham Palace — National Gallery — Chinatown — Berwick Street — Covent Garden",
    activities: [
      {
        time: "9:00",
        name: "Buckingham Palace",
        badges: [],
        coords: "Buckingham Palace London",
        notes: "Il Cambio della Guardia si svolge in genere alle 11:00 i giorni pari. Controlla la disponibilità su householddivision.org.uk.",
      },
      {
        time: "10:30",
        name: "Big Ben & Westminster",
        badges: [],
        coords: "Big Ben Westminster London",
        notes: "Houses of Parliament e Westminster Abbey (esterno). Westminster Bridge è il posto migliore per la foto del Big Ben.",
      },
      {
        time: "11:30–13:00",
        name: "🖼️ National Gallery",
        badges: ["free"],
        coords: "National Gallery Trafalgar Square London",
        notes: "Trafalgar Square. Van Gogh (Girasoli), Monet (Ninfee), Leonardo (Vergine delle Rocce), Caravaggio (Cena in Emmaus). Gratuita, non serve prenotare. A 5 min a piedi da Chinatown.",
      },
      {
        time: "13:00",
        name: "🥟 Chinatown — food tour",
        badges: [],
        coords: "Chinatown London Gerrard Street",
        notes: "Tour gastronomico! Bun House (bao), Bunsik (corndog coreano), Beijing Dumpling, pancake al mango. Tutto su Gerrard St e dintorni, a 2 min da Piccadilly Circus.",
      },
      {
        time: "14:30",
        name: "Piccadilly Circus",
        badges: [],
        coords: "Piccadilly Circus London",
      },
      {
        time: "15:00",
        name: "Berwick Street",
        badges: [],
        coords: "Berwick Street Soho London",
        special: true,
        notes: "Copertina di Morning Glory (1995). Il punto esatto è davanti al n. 23, vicino a Sister Ray Records. La strada è pedonale e ha ancora diversi negozi di dischi indipendenti.",
      },
      {
        time: "15:30",
        name: "🍪 Crème — cookies",
        badges: [],
        coords: "Creme 4 D'Arblay Street Soho London",
        notes: "Mega cookies gooey stile NYC! 4 D'Arblay St — letteralmente 1 minuto da Berwick Street. Da provare: miso white chocolate e milk chocolate chip.",
      },
      {
        time: "16:00",
        name: "Covent Garden",
        badges: [],
        coords: "Covent Garden London",
        notes: "Artisti di strada e mercato coperto. Qui fai tappa a 🍪 Ben's Cookies (nel mercato) e 🍵 JENKI Matcha (50a Long Acre) per un matcha whisked-to-order.",
      },
      {
        time: "18:00",
        name: "Cena — Soho",
        badges: [],
        coords: "Wardour Street Soho London",
        notes: "Wardour St e Old Compton St hanno buona densità di ristoranti. Prenota se vuoi un posto specifico.",
      },
    ],
  },
  {
    id: 3,
    date: "Lunedì 20 Aprile",
    shortDate: "Lun 20",
    title: "City & Camden",
    subtitle: "Camden & Amy Winehouse — Tower of London — British Museum",
    activities: [
      {
        time: "9:30–11:30",
        name: "🍟 Camden Town / Camden Lock",
        badges: [],
        coords: "Camden Lock Market London",
        notes: "Street food tour! Funky Chips, Yorkshire Burrito, Teoshi Sushi Burger, Malaysia Street Food. Il mercato coperto apre dalle 10:00. Stables Market è il più caratteristico.",
      },
      {
        time: "11:30",
        name: "Statua di Amy Winehouse",
        badges: ["free"],
        coords: "Amy Winehouse statue Camden Market London",
        special: true,
        notes: "Statua in bronzo nel cuore di Camden Market, Chalk Farm Road. Tributo a una delle voci più iconiche di Camden.",
      },
      {
        time: "11:45",
        name: "Murale di Amy Winehouse",
        badges: ["free"],
        coords: "Amy Winehouse mural Hawley Arms Camden London",
        special: true,
        notes: "2 Castlehaven Rd — dipinto sul retro del pub The Hawley Arms, il locale preferito di Amy. A pochi passi dalla statua.",
      },
      {
        time: "13:00–15:00",
        name: "Tower of London",
        badges: ["bookRequired"],
        coords: "Tower of London",
        notes: "~£33. Prenota su hrp.org.uk. Da non perdere: i Gioielli della Corona al Waterloo Block.",
      },
      {
        time: "15:00",
        name: "Tower Bridge",
        badges: ["free"],
        coords: "Tower Bridge London",
        notes: "Attraversamento a piedi gratuito. La passerella in vetro è a pagamento (~£12) ma non indispensabile.",
      },
      {
        time: "15:30–17:00",
        name: "British Museum",
        badges: ["free"],
        coords: "British Museum London",
        notes: "Chiude alle 17:00, last entry 16:30. Priorità: Rosetta Stone (Sala 4), mummie egizie (Sala 63), Elgin Marbles (Sala 18).",
      },
      {
        time: "18:30",
        name: "Cena",
        badges: [],
        coords: "Bloomsbury London",
        notes: "Zona Bloomsbury o Covent Garden, a pochi minuti dal British Museum.",
      },
    ],
  },
  {
    id: 4,
    date: "Martedì 21 Aprile",
    shortDate: "Mar 21",
    title: "Notting Hill & Beatles",
    subtitle: "Portobello Road — Abbey Road — Borough Market — Tate Modern — Horizon 22",
    activities: [
      {
        time: "9:00–11:00",
        name: "Portobello Road / Notting Hill",
        badges: [],
        coords: "Portobello Road Market London",
        notes: "Il mercato dell'antiquariato si svolge il sabato. Il martedì ci sono comunque i banchi di frutta, verdura e abbigliamento. Le case colorate sono su Lancaster Road e dintorni.",
      },
      {
        time: "11:00–12:00",
        name: "Abbey Road Crossing",
        badges: [],
        coords: "Abbey Road zebra crossing London",
        special: true,
        notes: "Metro: St. John's Wood (Jubilee Line). Le strisce pedonali sono a 50m dall'uscita della metro. Il negozio Abbey Road Studios è al n. 3.",
      },
      {
        time: "12:30–14:00",
        name: "Borough Market + 🍵 JENKI Matcha",
        badges: [],
        coords: "Borough Market London",
        notes: "Aperto mar–sab, 10:00–17:00. Pranzo gourmet con street food di ogni tipo. Passa da JENKI Matcha per un matcha fresco (sede Borough Market).",
      },
      {
        time: "14:00–15:30",
        name: "🎨 Tate Modern",
        badges: ["free"],
        coords: "Tate Modern London",
        notes: "Arte contemporanea e moderna sulla South Bank. Gratuita! A 5 min a piedi da Borough Market attraversando il Millennium Bridge. Turbine Hall è imperdibile.",
      },
      {
        time: "16:00",
        name: "Horizon 22",
        badges: ["free", "bookRequired"],
        coords: "Horizon 22 Bishopsgate London",
        special: true,
        notes: "22 Bishopsgate, 58° piano — il viewpoint gratuito più alto di Londra! Biglietti prenotati per le 16:00. Vista spettacolare con la luce del tardo pomeriggio. Chiude alle 18:00. ~15 min a piedi dalla Tate.",
      },
      {
        time: "17:30",
        name: "Shopping + ☕ Blank Street Coffee + 🍔 Shake Shack",
        badges: [],
        coords: "Regent Street London",
        notes: "~20 min di metro dalla City (Central Line o Circle). Blank Street Coffee per il matcha al cioccolato bianco (varie sedi zona Regent St). Shake Shack per un burger. Carnaby Street è a due passi.",
      },
      {
        time: "19:30",
        name: "Ultima cena londinese",
        badges: [],
        coords: "South Bank London",
        notes: "Passeggiata serale lungo il South Bank come saluto a Londra. Zona South Bank o Borough: The Anchor, Flat Iron Square.",
      },
      {
        time: "21:00",
        name: "Rientro in hotel",
        badges: [],
        coords: "Exhibition Court Hotel 25 Collingham Place London",
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
        coords: "Gloucester Road tube station London",
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
