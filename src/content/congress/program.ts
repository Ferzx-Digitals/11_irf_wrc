export interface CongressScheduleDay {
  day: string;
  events: string;
  items: CongressScheduleItem[];
}

export interface CongressScheduleItem {
  title: string;
  type: "meal" | "plenary" | "workshop" | "meeting" | "field" | "free" | "registration";
  detail?: string;
}

export interface CongressActivity {
  title: string;
  image: string;
  description: string;
  count: string;
}

export interface FieldTrip {
  name: string;
  description: string;
  duration: string;
  price: number;
  country: "Argentina" | "Brazil";
  image: string;
}

export interface TouristAttraction {
  name: string;
  description: string;
  country: "Argentina" | "Brazil";
  image: string;
}

export const congressSchedule: CongressScheduleDay[] = [
  {
    day: "Day 1: Monday 19 April 2027",
    events: "Registration open all day, Moonlight Tour to Iguazu",
    items: [
      {
        title: "Registration",
        type: "registration",
        detail: "Registration will be open all day for participants arriving at different times of the day.",
      },
      { title: "Moonlight Tour to Iguazu", type: "field" },
    ],
  },
  {
    day: "Day 2: Tuesday 20 April 2027",
    events: "Welcome, Flag ceremony, Plenary 1 & 2, Workshops 1-6, Regional meetings, Evening free",
    items: [
      { title: "Welcome", type: "registration" },
      { title: "Flag ceremony", type: "registration" },
      { title: "Coffee break", type: "meal" },
      { title: "Plenary 1", type: "plenary" },
      { title: "Plenary 2", type: "plenary" },
      { title: "Lunch break", type: "meal" },
      { title: "Workshops", type: "workshop", detail: "Workshop 1, Workshop 2, Workshop 3, Workshop 4, Workshop 5, Workshop 6." },
      { title: "Coffee break", type: "meal" },
      {
        title: "6 x Regional Meetings",
        type: "meeting",
        detail: "Oceania, Europe, North America, Asia, Africa, Central and South America.",
      },
      { title: "Evening free", type: "free" },
    ],
  },
  {
    day: "Day 3: Wednesday 21 April 2027",
    events: "IRF AGM, Plenaries 3-5, Workshops 7-12, IRF Awards ceremony",
    items: [
      { title: "IRF AGM", type: "meeting" },
      { title: "Breakfast", type: "meal" },
      { title: "Coffee break", type: "meal" },
      { title: "Plenary 3", type: "plenary" },
      { title: "Plenary 4", type: "plenary" },
      { title: "Plenary 5", type: "plenary" },
      { title: "Lunch break", type: "meal" },
      { title: "Workshops", type: "workshop", detail: "Workshop 7, Workshop 8, Workshop 9, Workshop 10, Workshop 11, Workshop 12." },
      { title: "Coffee break", type: "meal" },
      { title: "IRF Awards ceremony", type: "meeting" },
    ],
  },
  {
    day: "Day 4: Thursday 22 April 2027",
    events: "Field trips, Auction / Badge Swap, Cultural evening",
    items: [
      { title: "Breakfast", type: "meal" },
      { title: "Field trips", type: "field", detail: "Iguazu Falls." },
      { title: "Auction / Badge Swap", type: "meeting" },
      { title: "Cultural evening", type: "free" },
    ],
  },
  {
    day: "Day 5: Friday 23 April 2027",
    events: "IRF Board elections & announcement, 12th WRC announcement, Puerto Iguazu Declaration",
    items: [
      { title: "Breakfast", type: "meal", detail: "07:00-08:00." },
      { title: "IRF Board elections & announcement", type: "meeting" },
      { title: "12th WRC announcement", type: "registration" },
      { title: "Puerto Iguazu Declaration", type: "registration" },
    ],
  },
];

export const congressActivities: CongressActivity[] = [
  {
    title: "Plenary Talks",
    image: "Plenary Talks.jpg",
    description:
      "Sessions by prominent conservation experts addressing inclusive workforce, ranger welfare, conduct, and capacity building.",
    count: "8 sessions",
  },
  {
    title: "Concurrent Workshops",
    image: "Concurrent Workshops.jpg",
    description:
      "Thematic workshops on equity & equality, indigenous people, one health, youth involvement, and more.",
    count: "20+ workshops",
  },
  {
    title: "Open Discussions",
    image: "Open Discussions.jpg",
    description:
      "Informal platforms for Indigenous Peoples, female rangers, youth leaders, volunteers, and retired rangers.",
    count: "6 forums",
  },
  {
    title: "Cultural Nights",
    image: "Cultural Nights.jpg",
    description:
      "Evening entertainment featuring music, art, and cultural expressions from ranger communities worldwide.",
    count: "2 evenings",
  },
  {
    title: "Field Trips",
    image: "Field Trips.jpg",
    description:
      "Excursions to Iguazu National Park, including Devil's Throat walkways and surrounding attractions.",
    count: "Full day",
  },
];

export const fieldTrips: FieldTrip[] = [
  {
    name: "Devil's Throat Walkways",
    description:
      "Walk along 2,200 metres of footbridges to the iconic Devil's Throat viewpoint at Iguazu Falls. The fully accessible trail takes approximately 2 hours, accessed via the Ecological Train of the Jungle to Garganta del Diablo Station. Witness the massive river plunging into the gorge, with mist visible from over 7 km away.",
    duration: "~2 hours (round trip)",
    price: 16,
    country: "Argentina",
    image: "Iguazu National Park.jpg",
  },
];

export const touristAttractions: TouristAttraction[] = [
  {
    name: "Iguazu National Park (Full Park)",
    description:
      "Explore the stunning Iguazu Falls and surrounding subtropical rainforest, a UNESCO World Heritage Site.",
    country: "Argentina",
    image: "Iguazu National Park.jpg",
  },
  {
    name: "Guira Oga Wildlife Rescue",
    description:
      "Visit a wildlife rehabilitation center dedicated to rescuing and caring for injured native animals.",
    country: "Argentina",
    image: "Guira Oga Wildlife Rescue.jpg",
  },
  {
    name: "Minas de Wanda",
    description:
      "Discover the famous semi-precious gemstone mines of Wanda, known for amethyst and quartz crystals.",
    country: "Argentina",
    image: "Minas de Wanda.jpg",
  },
  {
    name: "Jesuitical Missions",
    description:
      "Full-day excursion to the historic Jesuit missions, a UNESCO World Heritage Site showcasing colonial-era history.",
    country: "Argentina",
    image: "Jesuitical Missions.jpg",
  },
  {
    name: "Parque Nacional Do Iguaçu",
    description:
      "Experience the Brazilian side of Iguazu Falls with panoramic views of the Devil's Throat.",
    country: "Brazil",
    image: "Parque Nacional Do.jpg",
  },
  {
    name: "Parque Das Aves",
    description:
      "Walk through aviaries housing over 1,300 birds of 130 species in the Atlantic Forest.",
    country: "Brazil",
    image: "Parque Das Aves.jpg",
  },
];
