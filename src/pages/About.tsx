import { BadgeCheck, Flag, Globe2, Users } from "lucide-react";

const activities = [
  "Plenary Talks",
  "Concurrent Workshops",
  "Open Discussions",
  "Cultural Nights",
  "Field Trips",
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <section className="relative mb-20 h-[340px] overflow-hidden md:h-[420px]">
        <img
          src="/images/images/congress-introduction/Banner.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/25" />
        <div className="relative container mx-auto flex h-full items-center px-4">
          <div className="max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">About</p>
            <h1 className="text-4xl font-bold text-white md:text-6xl">About the Congress</h1>
            <p className="mt-4 text-lg text-white/85 md:text-xl">
              Bringing together rangers and conservation professionals from around the world.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-5xl">
          <h2 className="mb-4 border-l-4 border-forest-primary pl-4 text-3xl font-bold text-forest-deep">
            Rangers: Essential Workers for Our Planet
          </h2>
          <p className="mb-3 text-forest-primary">
            Rangers are some of the most essential workers on the planet. They protect and manage the
            world&apos;s protected and conserved areas, covering over 15% of the Earth&apos;s land surface and
            8% of our oceans.
          </p>
          <p className="text-forest-primary">
            Yet their contributions are often undervalued, their working conditions poor, and their needs
            overlooked. The IRF World Ranger Congress is held in a different part of the world every 3-4
            years, bringing together rangers to share experiences, build networks, and advance the profession.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-5xl">
          <h2 className="mb-4 border-l-4 border-forest-primary pl-4 text-3xl font-bold text-forest-deep">
            About the 11th IRF World Ranger Congress
          </h2>
          <p className="mb-3 text-forest-primary">
            For the first time, the World Ranger Congress comes to Argentina, set against the stunning backdrop
            of Iguazu Falls and the Atlantic Forest. This historic event marks a milestone for Latin American
            conservation and ranger communities.
          </p>
          <p className="mb-3 text-forest-primary">
            Puerto Iguazu sits at the Triple Frontier - where Argentina, Brazil, and Paraguay meet - making it a
            symbol of international cooperation in conservation. The congress will produce the Iguazu Declaration,
            a landmark statement emphasizing the role of rangers in nature conservation.
          </p>
          <p className="text-forest-primary">600 delegates from over 50 countries will gather for five days.</p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-3xl border border-forest-light/30 shadow-forest">
            <img
              src="/images/images/congress-introduction/Ranger Experiences.jpg"
              alt="Ranger experiences"
              className="h-64 w-full object-cover"
            />
          </article>
          <article className="overflow-hidden rounded-3xl border border-forest-light/30 shadow-forest">
            <img
              src="/images/images/congress-introduction/Ranger Declaration.jpg"
              alt="Ranger declaration"
              className="h-64 w-full object-cover"
            />
          </article>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: BadgeCheck,
              title: "Congress Theme",
              description: "Recognising Rangers: Advancing the profession to safeguard our future.",
            },
            {
              icon: Globe2,
              title: "Global Gathering",
              description: "Rangers and partners from all seven IRF regions and over 50 countries.",
            },
            {
              icon: Flag,
              title: "Iguazu Declaration",
              description: "A landmark statement strengthening ranger recognition and conservation leadership.",
            },
            {
              icon: Users,
              title: "Activities",
              description: activities.join(", "),
            },
          ].map((item) => (
            <article key={item.title} className="border-t border-forest-light/40 pt-4">
              <item.icon className="mb-2 h-5 w-5 text-forest-primary" />
              <h3 className="mb-1 text-lg font-semibold text-forest-deep">{item.title}</h3>
              <p className="text-sm text-forest-primary">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
