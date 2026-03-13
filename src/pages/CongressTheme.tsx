import { Button } from "@/components/ui/button";
import PageIntro from "@/components/common/PageIntro";
import { BadgeCheck, Globe, Handshake, Lightbulb, Shield, Sprout, Stethoscope, RadioTower, ThermometerSun, Mountain } from "lucide-react";
import { CONGRESS_THEME } from "@/constants/site";
import { goToPath } from "@/lib/navigation";

const streams = [
  {
    title: "Ranger Role and Recognition",
    description:
      "Enhancing the recognition and professional standing of rangers worldwide, ensuring their vital contribution to conservation is valued and supported.",
    icon: BadgeCheck,
  },
  {
    title: "Rangers for 30x30 Framework",
    description:
      "Aligning the ranger profession with the global 30x30 target to protect 30% of the planet by 2030, and defining the role rangers play in achieving this goal.",
    icon: Globe,
  },
  {
    title: "Inclusive Workforce",
    description:
      "Promoting diversity, equity, and inclusion within the ranger profession, addressing gender balance, indigenous representation, and ensuring all voices are heard.",
    icon: Handshake,
  },
  {
    title: "Ranger Representation",
    description:
      "Strengthening ranger advocacy, union representation, and collective voice to improve working conditions, welfare, and professional standards globally.",
    icon: Shield,
  },
  {
    title: "Open Stream: High Impact Contributions",
    description:
      "A platform for high-impact presentations on any topic relevant to the ranger profession that falls outside the other thematic streams.",
    icon: Lightbulb,
  },
];

const objectives = [
  {
    title: "Ranger Recognition & 30x30",
    description:
      "Enhance recognition of the ranger profession and align with the global 30x30 Framework to protect 30% of the planet by 2030.",
  },
  {
    title: "Ranger Experiences",
    description:
      "Showcase ranger experiences, challenges, and contributions from all seven IRF regions worldwide.",
  },
  {
    title: "Ranger Solutions",
    description:
      "Develop practical solutions for regional and global conservation challenges through collaboration and knowledge sharing.",
  },
  {
    title: "Ranger Declaration",
    description:
      "Produce the Iguazu Declaration - a landmark statement emphasizing the role of rangers in nature conservation.",
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
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background py-24">
      <div className="container mx-auto px-4">
        <PageIntro
          eyebrow="Congress Theme"
          title={CONGRESS_THEME}
          description="Explore the central theme of the 11th IRF World Ranger Congress and the key streams shaping discussion and action."
        />

        <div className="mx-auto mb-14 max-w-4xl rounded-3xl border border-forest-light/30 bg-card/95 p-8 shadow-forest md:p-10">
          <h2 className="mb-4 text-2xl font-bold text-forest-deep md:text-3xl">"{CONGRESS_THEME}"</h2>
          <p className="leading-relaxed text-forest-primary">
            The theme of the 11th IRF World Ranger Congress focuses on improving working conditions, providing better
            equipment and training, and empowering rangers to play their vital role in biodiversity protection and
            building a sustainable future. Rangers protect over 15% of the Earth&apos;s land surface and 8% of our
            oceans - yet their contributions are often undervalued and their needs overlooked.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep md:text-4xl">Thematic Streams</h2>
          <div className="space-y-4">
            {streams.map((stream) => (
              <article
                key={stream.title}
                className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest md:p-8"
              >
                <div className="mb-3 flex items-center gap-3">
                  <stream.icon className="h-6 w-6 text-forest-primary" />
                  <h3 className="text-xl font-bold text-forest-deep">{stream.title}</h3>
                </div>
                <p className="text-forest-primary">{stream.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep md:text-4xl">Congress Objectives</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((objective) => (
              <article
                key={objective.title}
                className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest"
              >
                <h3 className="mb-2 text-lg font-bold text-forest-deep">{objective.title}</h3>
                <p className="text-sm leading-relaxed text-forest-primary">{objective.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep md:text-4xl">Discussion Topics</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest"
              >
                <topic.icon className="mb-3 h-7 w-7 text-forest-primary" />
                <h3 className="mb-2 text-lg font-bold text-forest-deep">{topic.title}</h3>
                <p className="text-sm leading-relaxed text-forest-primary">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl rounded-3xl border border-forest-light/30 bg-card/95 p-10 text-center shadow-forest">
          <h2 className="mb-4 text-3xl font-bold text-forest-deep">Share Your Experience</h2>
          <p className="mb-8 text-forest-primary">
            Submit an expression of interest to present at the 11th IRF World Ranger Congress.
          </p>
          <Button
            size="lg"
            className="forest-gradient text-white"
            onClick={() => goToPath("/submit")}
          >
            Submit Expression of Interest
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CongressTheme;
