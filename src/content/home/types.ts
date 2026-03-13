export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  banner: string;
}

export interface Organizer {
  name: string;
  shortName: string;
  founded: number;
  website: string;
  description: string;
  logo: string;
}

export interface TeamMember {
  name: string;
  role: string;
  org: string;
  image?: string;
}

export interface Region {
  title: string;
  description: string;
  coverUrl: string;
}

export interface CongressHistory {
  edition: string;
  year: number;
  location: string;
  country: string;
  emoji: string;
}

export interface HomeContent {
  heroSlides: HeroSlide[];
  welcome: {
    title: string;
    theme: string;
    description: string;
  };
  iguazu: {
    title: string;
    subtitle: string;
    paragraphs: string[];
    mapBackground: string;
    mapIllustration: string;
  };
  congressInfo: {
    title: string;
    locationTitle: string;
    venueLabel: string;
    venueValue: string;
    venueLocation: string;
    settingLabel: string;
    settingValue: string;
    settingDescription: string;
    dateLabel: string;
    dateValue: string;
    checkin: string;
    mapEmbed: string;
  };
  regions: Region[];
  history: {
    title: string;
    congresses: CongressHistory[];
  };
  president: {
    title: string;
    quote: string;
    name: string;
    role: string;
    image: string;
  };
  organizers: {
    title: string;
    items: Organizer[];
  };
  team: {
    title: string;
    members: TeamMember[];
  };
  register: {
    title: string;
    description: string;
    registerLabel: string;
    submitLabel: string;
  };
}
