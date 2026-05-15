import { Button } from "@/components/ui/button";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import { BadgeCheck, Globe, Handshake, Lightbulb, Shield, Sprout, Stethoscope, RadioTower, ThermometerSun, Mountain } from "lucide-react";
import { CONGRESS_THEME } from "@/constants/site";

const themeImagePath = (file: string) => `/images/images/congress-theme/${file}`;
const homeImagePath = (file: string) => `/images/images/home/${file}`;

const streams = [
  {
    title: "Ranger Role and Recognition",
    description:
      "Enhancing the recognition and professional standing of rangers worldwide, ensuring their vital contribution to conservation is valued and supported.",
    icon: BadgeCheck,
    image: "ranger-recognition.jpg",
  },
  {
    title: "Rangers for 30x30 Framework",
    description:
      "Aligning the ranger profession with the global 30x30 target to protect 30% of the planet by 2030, and defining the role rangers play in achieving this goal.",
    icon: Globe,
    image: "community-engagement-and-partnerships.jpg",
  },
  {
    title: "Inclusive Workforce",
    description:
      "Promoting diversity, equity, and inclusion within the ranger profession, addressing gender balance, indigenous representation, and ensuring all voices are heard.",
    icon: Handshake,
    image: "inclusive-and-representative-workforce.jpg",
  },
  {
    title: "Ranger Representation",
    description:
      "Strengthening ranger advocacy, union representation, and collective voice to improve working conditions, welfare, and professional standards globally.",
    icon: Shield,
    image: "welfare-and-working-conditions.jpg",
  },
  {
    title: "Open Stream: High Impact Contributions",
    description:
      "A platform for high-impact presentations on any topic relevant to the ranger profession that falls outside the other thematic streams.",
    icon: Lightbulb,
    image: "capacity-building-and-training.jpg",
  },
];

const objectives = [
  {
    title: "Ranger Recognition & 30x30",
    description:
      "Enhance recognition of the ranger profession and align with the global 30x30 Framework to protect 30% of the planet by 2030.",
    image: "ranger-recognition.jpg",
  },
  {
    title: "Ranger Experiences",
    description:
      "Showcase ranger experiences, challenges, and contributions from all seven IRF regions worldwide.",
    image: "ranger-experiences.jpg",
  },
  {
    title: "Ranger Solutions",
    description:
      "Develop practical solutions for regional and global conservation challenges through collaboration and knowledge sharing.",
    image: "ranger-solutions.jpg",
  },
  {
    title: "Ranger Declaration",
    description:
      "Produce the Iguazu Declaration - a landmark statement emphasizing the role of rangers in nature conservation.",
    image: "ranger-declaration.jpg",
  },
];

const topics = [
  {
    title: "Indigenous Peoples & Rangers",
    description: "Bridging traditional knowledge with modern conservation practices.",
    icon: Mountain,
  },
  {
    title: "One Health Approach",
    description: "Connecting human, animal, and environmental health through ranger work.",
    icon: Stethoscope,
  },
  {
    title: "Youth Involvement",
    description: "Engaging the next generation in conservation and the ranger profession.",
    icon: Sprout,
  },
  {
    title: "Technology & Innovation",
    description: "Leveraging modern tools for monitoring, enforcement, and communication.",
    icon: RadioTower,
  },
  {
    title: "Climate Resilience",
    description: "Adapting ranger strategies to address climate change impacts on protected areas.",
    icon: ThermometerSun,
  },
];

const CongressTheme = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background">
      <PageHeroBanner
        imageSrc={themeImagePath("Banner.jpg")}
        title="Congress Theme"
        subtitle={CONGRESS_THEME}
        overlayClassName="bg-gradient-to-r from-black/15 via-black/5 to-transparent"
      />

      <div className="relative overflow-hidden pb-24">
        <img
          src={homeImagePath("15.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-80 w-auto object-contain opacity-[0.2] md:h-[440px]"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <img
          src={homeImagePath("10.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 top-[48%] h-56 w-auto object-contain opacity-[0.2] md:left-0 md:h-72"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <img
          src={homeImagePath("10.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 bottom-[20rem] h-56 w-auto object-contain opacity-[0.34] md:right-0 md:h-72"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <img
          src={homeImagePath("25.png")}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-0 h-52 w-auto object-contain opacity-[0.22] md:h-64"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto mb-14 max-w-4xl rounded-3xl border border-forest-light/30 bg-card/95 p-8 shadow-forest md:p-10">
        <h2 className="mb-4 text-center text-2xl font-bold text-forest-deep md:text-3xl">"{CONGRESS_THEME}"</h2>
        <p className="leading-relaxed text-forest-primary">
          The theme of the 11th IRF World Ranger Congress focuses on improving working conditions, providing better
          equipment and training, and empowering rangers to play their vital role in biodiversity protection and
          building a sustainable future. Rangers protect over 15% of the Earth&apos;s land surface and 8% of our
          oceans - yet their contributions are often undervalued and their needs overlooked.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-forest-deep md:text-4xl">Thematic Streams</h2>
        <div className="space-y-12">
          {streams.map((stream, index) => (
            <article
              key={stream.title}
              className={`mx-auto flex max-w-5xl flex-col items-center gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="w-full overflow-hidden rounded-2xl shadow-forest md:w-2/5">
                <img
                  src={themeImagePath(stream.image)}
                  alt={stream.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="mb-3 flex items-center gap-3">
                  <stream.icon className="h-7 w-7 text-forest-primary" />
                  <h3 className="text-2xl font-bold text-forest-deep">{stream.title}</h3>
                </div>
                <p className="text-base leading-relaxed text-forest-primary">{stream.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-forest-deep md:text-4xl">Congress Objectives</h2>
        <div className="group/scroller relative -mx-4 overflow-hidden px-4 pb-4">
          <div className="flex w-max animate-marquee gap-5 group-hover/scroller:[animation-play-state:paused]">
            {[...objectives, ...objectives].map((objective, index) => (
              <article
                key={`${objective.title}-${index}`}
                className="group relative h-[320px] w-[280px] shrink-0 overflow-hidden rounded-2xl shadow-forest transition-all duration-300 hover:scale-[1.02] hover:shadow-xl sm:w-[320px] md:w-[360px]"
              >
                <img
                  src={themeImagePath(objective.image)}
                  alt={objective.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/10" />
                <div className="relative flex h-full flex-col justify-end p-5 text-white">
                  <h3 className="text-lg font-bold drop-shadow-md">{objective.title}</h3>
                  <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-white/90">{objective.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep md:text-4xl">Discussion Topics</h2>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-5">
          {topics.map((topic) => (
            <article
              key={topic.title}
              className="flex min-h-[240px] w-full flex-col rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[calc(50%-0.875rem)] lg:w-[calc(28%-0.5rem)]"
            >
              <topic.icon className="mb-4 h-8 w-8 text-forest-primary" />
              <h3 className="mb-2 text-lg font-bold text-forest-deep">{topic.title}</h3>
              <p className="text-sm leading-relaxed text-forest-primary">{topic.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-forest-deep to-forest-primary p-10 text-center text-white shadow-forest">
        <h2 className="mb-4 text-3xl font-bold">Share Your Experience</h2>
        <p className="mb-8 text-white/85">
          Submit an expression of interest to present at the 11th IRF World Ranger Congress.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="cursor-not-allowed bg-white/85 text-forest-deep hover:bg-white/85"
          disabled
        >
          EOI is closed
        </Button>
      </div>
      </div>
      </div>
    </section>
  );
};

export default CongressTheme;
