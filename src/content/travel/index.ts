export interface TransportOption {
  id: string;
  title: string;
  shortLabel: string;
  icon: string;
  description: string;
  details: string;
}

export interface Airline {
  name: string;
  logo: string;
  url: string;
}

export interface FeaturedHotel {
  name: string;
  stars: number;
  rooms: number;
  address: string;
  features: string[];
  mapUrl: string;
  rate?: string;
  rateNotes?: string[];
  services?: string[];
}

export interface AdditionalHotel {
  name: string;
  stars: number;
  rooms: number;
  location: string;
}

export interface PaidTour {
  name: string;
  price: number;
  description: string;
}

export interface TaxInfoItem {
  title: string;
  description: string;
  icon: string;
}

export interface BookingContact {
  name: string;
  email: string;
  phone?: string;
  description: string;
}

export interface WeatherInfo {
  label: string;
  value: string;
  icon: string;
}

export interface PracticalQA {
  question: string;
  answer: string;
}

export interface EmergencyNumber {
  service: string;
  number: string;
}

export interface VolunteerPark {
  name: string;
  emails: string[];
  url?: string;
}

export const VISA_PORTAL_URL =
  "https://www.migraciones.gob.ar/accesible/indexdnm.php?visas";

export const transportOptions: TransportOption[] = [
  {
    id: "air-igr",
    title: "By Air — Cataratas del Iguazu Airport (IGR)",
    shortLabel: "By Air",
    icon: "✈️",
    description:
      "The closest airport is Aeropuerto Internacional Cataratas del Iguazú (IGR), located approximately 20 km from Puerto Iguazu city center. Multiple daily flights from Buenos Aires (1h 50min).",
    details: "Airlines: Aerolineas Argentinas, Flybondi, JetSMART",
  },
  {
    id: "air-igu",
    title: "Via Brazil — Foz do Iguaçu Airport (IGU)",
    shortLabel: "Via Brazil",
    icon: "🛫",
    description:
      "Foz do Iguaçu International Airport (IGU) on the Brazilian side is another option. Located 30–45 minutes by taxi from Puerto Iguazu across the international bridge.",
    details: "International connections via Sao Paulo and Rio de Janeiro",
  },
  {
    id: "bus",
    title: "By Bus",
    shortLabel: "By Bus",
    icon: "🚌",
    description:
      "Long-distance bus services from Buenos Aires to Puerto Iguazu. Journey takes approximately 18–20 hours. Multiple bus companies operate this route with varying levels of comfort.",
    details: "Companies: Via Bariloche, Crucero del Norte, Rio Uruguay",
  },
  {
    id: "car",
    title: "By Car",
    shortLabel: "By Car",
    icon: "🚗",
    description:
      "Drive from Buenos Aires via National Route 12. Total distance approximately 1,300 km (16–18 hours). Well-maintained highway through Misiones province.",
    details:
      "Route: Buenos Aires → Zarate → Parana → Posadas → Puerto Iguazu",
  },
  {
    id: "paraguay",
    title: "Via Paraguay",
    shortLabel: "Via Paraguay",
    icon: "🌉",
    description:
      "Cross from Ciudad del Este (Paraguay) through the Friendship Bridge to Foz do Iguaçu (Brazil), then cross to Puerto Iguazu (Argentina). Triple Frontier crossing.",
    details: "Border crossings open 24/7 — bring a valid passport",
  },
];

export const airlines: Airline[] = [
  {
    name: "Aerolineas Argentinas",
    logo: "/images/images/airlines/aerolineas-argentinas.png",
    url: "https://www.aerolineas.com.ar",
  },
  {
    name: "Flybondi",
    logo: "/images/images/airlines/flybondi.png",
    url: "https://www.flybondi.com",
  },
  {
    name: "JetSMART",
    logo: "/images/images/airlines/jetsmart.png",
    url: "https://www.jetsmart.com",
  },
];

export const featuredHotels: FeaturedHotel[] = [
  {
    name: "Hotel Amerian Portal del Iguazu",
    stars: 5,
    rooms: 117,
    address: "Av. Tres Fronteras 780, Puerto Iguazu",
    features: [
      "2 Restaurants",
      "2 Bars",
      "Spa & Wellness",
      "Triple Frontier Views",
      "Congress Venue Hotel",
    ],
    mapUrl: "https://maps.app.goo.gl/6RD7UotVJshHRrfr8",
    rate: "USD 130 + VAT",
    rateNotes: [
      "Rates are expressed in US Dollars.",
      "Rates are per room, per night.",
      "Check-in: 2:00 PM — Check-out: 11:00 AM.",
      "Net rates.",
    ],
    services: [
      "Buffet breakfast",
      "Wi-Fi Internet access",
      "Access to the outdoor pool with waterfall, bars, solarium, and jacuzzi",
      "Access to the heated indoor pool with jacuzzi",
      "Access to Yvy Maraý Spa sauna",
      "Tennis and soccer courts",
      "Recreation area",
      "Business Center",
    ],
  },
  {
    name: "Iguazu Grand Resort Spa & Casino",
    stars: 5,
    rooms: 122,
    address: "Ruta 12 Km 1640, Puerto Iguazu",
    features: ["Casino", "Full Spa", "Pool & Gardens", "Golf Course", "River Views"],
    mapUrl: "https://maps.app.goo.gl/iguazugrand",
  },
  {
    name: "Loi Suites Iguazu Hotel",
    stars: 5,
    rooms: 162,
    address: "Selva Iryapu S/N, Puerto Iguazu",
    features: ["Rainforest Setting", "Infinity Pool", "Spa", "Nature Trails", "Eco-Luxury"],
    mapUrl: "https://maps.app.goo.gl/loisuites",
  },
];

export const additionalHotels: AdditionalHotel[] = [
  { name: "Mercure Iguazu Hotel Iru", stars: 5, rooms: 134, location: "Ruta 12, Puerto Iguazu" },
  { name: "Panoramic Grand Iguazu", stars: 4, rooms: 97, location: "Paraguay 372, Puerto Iguazu" },
  { name: "Saint George Hotel", stars: 3, rooms: 60, location: "Av. Cordoba 148, Puerto Iguazu" },
  { name: "Hotel Jardin de Iguazu", stars: 3, rooms: 60, location: "Av. Cordoba 441, Puerto Iguazu" },
  { name: "Jasy Hotel", stars: 2, rooms: 39, location: "San Lorenzo 154, Puerto Iguazu" },
];

export const basicPackageItems: string[] = [
  "Iguazu Falls — Argentine Side",
  "Hito Tres Fronteras (Triple Frontier Landmark)",
  "Puerto Iguazu City Tour",
  "Aripuca Park Visit",
];

export const paidTours: PaidTour[] = [
  {
    name: "Iguazu Falls — Brazilian Side",
    price: 45,
    description: "Full-day excursion to the Brazilian side of the falls with panoramic views.",
  },
  {
    name: "Bird Park (Parque das Aves)",
    price: 20,
    description: "Walk-through aviary with over 1,400 birds of 150 species.",
  },
  {
    name: "Iguazu Falls + Bird Park Combo",
    price: 55,
    description: "Combined visit to Brazilian falls and Bird Park in one day.",
  },
  {
    name: "Itaipu Dam",
    price: 45,
    description:
      "Visit the world's largest hydroelectric dam on the Brazil-Paraguay border.",
  },
  {
    name: "Moonlight Walk — Iguazu Falls",
    price: 50,
    description: "Guided night walk to see the falls illuminated by moonlight.",
  },
  {
    name: "Wanda Mines",
    price: 35,
    description: "Semi-precious gemstone mines with guided underground tours.",
  },
];

export const taxInfo: TaxInfoItem[] = [
  {
    title: "VAT Refund for Tourists",
    description:
      "Foreign tourists staying at registered hotels in Argentina can request a VAT (IVA) refund of 21% on accommodation. Ask for the refund form at hotel checkout and process it at the airport before departure.",
    icon: "🧾",
  },
  {
    title: "Reciprocity Fee",
    description:
      "Citizens of certain countries (e.g. Australia, Canada) may need to pay a reciprocity fee before traveling to Argentina. Check the Argentine immigration website for current requirements applicable to your nationality.",
    icon: "📋",
  },
];

export const bookingContacts: BookingContact[] = [
  {
    name: "Plan A (Transportation & Transfers)",
    email: "malena@plan-aeventos.com",
    phone: "+54 9 3518 59-6103",
    description: "Malena will assist attendees with all transportation and transfer inquiries on behalf of Plan A.",
  },
  {
    name: "IRF Congress Office",
    email: "wrc@internationalrangers.org",
    description: "General congress inquiries and registration support.",
  },
];

export const weatherInfo: WeatherInfo[] = [
  { label: "Temperature", value: "17–28°C (63–82°F)", icon: "🌡️" },
  { label: "Rainfall", value: "150–200mm / 10–12 rainy days", icon: "🌧️" },
  { label: "Cloudiness", value: "40–50%", icon: "☁️" },
  { label: "Sunrise / Sunset", value: "~6:00–6:20 / ~6:00–6:10", icon: "🌅" },
  { label: "Humidity", value: "70–75%", icon: "💧" },
  { label: "Wind", value: "10–15 km/h", icon: "💨" },
];

export const practicalInfo: PracticalQA[] = [
  {
    question: "What currency is used in Argentina?",
    answer:
      "The official currency is the Argentine Peso (ARS). US Dollars and Brazilian Reais are commonly accepted in tourist areas of Puerto Iguazu. ATMs are available but may have withdrawal limits. We recommend bringing USD cash as backup.",
  },
  {
    question: "How can I get a SIM card or mobile data?",
    answer:
      "Argentine mobile carriers include Claro, Movistar, and Personal. Prepaid SIM cards can be purchased at the airport or local shops. Wi-Fi is available at most hotels and the congress venue.",
  },
  {
    question: "What should I pack?",
    answer:
      "Light, breathable clothing for warm weather. A rain jacket or umbrella (April can be rainy). Comfortable walking shoes for field trips. Insect repellent. Sunscreen and a hat. A light sweater for air-conditioned venues.",
  },
  {
    question: "Is tap water safe to drink?",
    answer:
      "Tap water in Puerto Iguazu is generally safe but bottled water is readily available and recommended for visitors. The hotel and venue will provide water stations.",
  },
  {
    question: "What electrical plugs are used?",
    answer:
      "Argentina uses Type C and Type I plugs with 220V / 50Hz. Bring a universal adapter. Most hotels provide adapters on request.",
  },
  {
    question: "What language is spoken?",
    answer:
      "Spanish is the primary language. English is spoken at tourist venues, hotels, and at the congress. The congress will provide simultaneous translation in English, Spanish, and French during plenary sessions.",
  },
];

export const emergencyNumbers: EmergencyNumber[] = [
  { service: "Emergency (Police / Fire / Ambulance)", number: "911" },
  { service: "Tourist Police", number: "+54 3757 420016" },
  { service: "Hospital SAMIC Iguazu", number: "+54 3757 420288" },
  { service: "Taxi Puerto Iguazu", number: "+54 3757 422008" },
  { service: "Argentine Tourist Info", number: "0800-555-0016" },
  { service: "Bus Terminal", number: "+54 3757 423006" },
];

export const VOLUNTEER_PROGRAM_INFO = {
  intro:
    "Extend your trip beyond the congress: Argentina's national park administration (APN) welcomes volunteers, from 1 week up to 3 months, starting 24 April 2027. Lodging and insurance are provided by the park — volunteers cover their own food. Contact the park directly to apply.",
};

export const volunteerParks: VolunteerPark[] = [
  {
    name: "Los Cardones",
    emails: ["Edaher@apn.gob.ar", "loscardones@apn.gob.ar"],
    url: "https://www.argentina.gob.ar/parquesnacionales/region-noroeste/parque-nacional-los-cardones",
  },
  {
    name: "Talampaya",
    emails: ["Talampaya@apn.gob.ar"],
    url: "https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-talampaya",
  },
  {
    name: "El Leoncito",
    emails: ["Snazar@apn.gob.ar", "elleoncito@apn.gob.ar"],
    url: "https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-el-leoncito",
  },
  {
    name: "Quebrada del Condorito",
    emails: ["Quebradadelcondorito@apn.gob.ar", "nvallejo@apn.gob.ar"],
    url: "https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-quebrada-del-condorito",
  },
  {
    name: "Sierra de las Quijadas",
    emails: ["Arudy@apn.gob.ar", "sierradelasquijadas@apn.gob.ar"],
    url: "https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-sierra-de-las-quijadas",
  },
  {
    name: "Pre-Delta",
    emails: ["Predelta@apn.gob.ar"],
    url: "https://www.argentina.gob.ar/parquesnacionales/centro/parque-nacional-pre-delta",
  },
  {
    name: "Campos del Tuyu",
    emails: ["Ljuber@apn.gob.ar", "camposdeltuyu@apn.gob.ar"],
  },
  {
    name: "Patagonia",
    emails: ["voluntariospatagonia@apn.gob.ar", "ninsaurralde@apn.gob.ar"],
    url: "https://www.argentina.gob.ar/parquesnacionales/patagonia-austral/parque-nacional-patagonia",
  },
];
