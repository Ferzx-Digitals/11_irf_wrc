import { CalendarDays, Compass, Megaphone, Users } from "lucide-react";
import PageIntro from "@/components/common/PageIntro";
import InfoCard from "@/components/common/InfoCard";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const scheduleItems = [
  {
    day: "Day 1",
    title: "Arrival & Opening Ceremony",
    details: "Welcome delegates, regional introductions, and opening keynote.",
  },
  {
    day: "Day 2",
    title: "Ranger Safety & Leadership",
    details: "Workshops on frontline safety, leadership, and policy collaboration.",
  },
  {
    day: "Day 3",
    title: "Conservation in Action",
    details: "Field-led sessions on biodiversity protection and community partnerships.",
  },
  {
    day: "Day 4",
    title: "Regional Collaboration Forums",
    details: "Cross-country strategy labs and shared commitments for 2027-2030.",
  },
  {
    day: "Day 5",
    title: "Global Ranger Declaration",
    details: "Action commitments, closing ceremony, and next-host handover.",
  },
];

const Schedule = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-forest-mist via-background to-background py-24"
    >
      <div className="container mx-auto px-4">
        <PageIntro
          eyebrow="Event Program"
          title="Congress Schedule"
          description="A five-day flow designed to connect rangers, strengthen conservation practice, and shape a shared global agenda."
        />

        <div className="mb-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard
            icon={CalendarDays}
            title="5 Days"
            description="Structured sessions blending plenaries, workshops, and nature-led learning."
          />
          <InfoCard
            icon={Users}
            title="Global Delegates"
            description="Rangers, partners, and conservation leaders from multiple regions."
          />
          <InfoCard
            icon={Compass}
            title="Field Perspective"
            description="Practical discussions grounded in real ranger experience."
          />
          <InfoCard
            icon={Megaphone}
            title="Shared Voice"
            description="Collective outcomes to support ranger communities worldwide."
          />
        </div>

        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <article
              key={item.day}
              className={`rounded-2xl border border-forest-light/30 bg-card/90 p-6 shadow-forest transition-smooth ${
                isVisible ? "animate-fade-up" : "opacity-0 translate-y-6"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-earth-brown">{item.day}</p>
              <h3 className="mb-2 text-2xl font-bold text-forest-deep">{item.title}</h3>
              <p className="text-forest-primary">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
