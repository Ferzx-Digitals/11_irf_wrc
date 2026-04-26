export interface CongressScheduleDay {
  day: string;
  events: string;
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
  { day: "Friday 18 April", events: "Arrival & Registration, Welcome Reception" },
  { day: "Saturday 19 April", events: "Opening Ceremony, Plenary Sessions, Cultural Night" },
  { day: "Sunday 20 April", events: "Plenary Sessions, Concurrent Workshops, Press Conference" },
  { day: "Monday 21 April", events: "Field Trips (Full Day)" },
  { day: "Tuesday 22 April", events: "Plenary Sessions, Open Discussions, Cultural Night" },
  { day: "Wednesday 23 April", events: "Closing Ceremony, Iguazu Declaration, Farewell" },
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
