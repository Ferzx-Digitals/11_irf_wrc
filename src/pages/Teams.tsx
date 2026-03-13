import { Globe, ShieldCheck, Users2 } from "lucide-react";
import InfoCard from "@/components/common/InfoCard";
import PageIntro from "@/components/common/PageIntro";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const regionalFocus = [
  "Latin America and Caribbean ranger leadership",
  "African protected area collaboration networks",
  "Asia-Pacific frontline conservation innovation",
  "Europe and North America policy and training exchange",
];

const Teams = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-24">
      <div className="container mx-auto px-4">
        <PageIntro
          eyebrow="People & Partnerships"
          title="Teams and Ranger Networks"
          description="Meet the communities, organizations, and partners driving the congress mission."
        />

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <InfoCard
            icon={Users2}
            title="Ranger Delegations"
            description="National and regional ranger communities bring field-tested insight."
          />
          <InfoCard
            icon={ShieldCheck}
            title="Host Partners"
            description="IRF, SIGUNARA, and partner organizations support program delivery."
          />
          <InfoCard
            icon={Globe}
            title="International Allies"
            description="Conservation institutions and funders amplify long-term impact."
          />
        </div>

        <div className="rounded-3xl border border-forest-light/30 bg-gradient-to-r from-forest-deep/5 to-sky-light/20 p-8 md:p-12">
          <h2 className="mb-6 text-3xl font-bold text-forest-deep">Regional Focus Areas</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {regionalFocus.map((item, index) => (
              <li
                key={item}
                className={`rounded-xl bg-card/80 p-4 text-forest-primary transition-smooth ${
                  isVisible ? "animate-fade-up" : "opacity-0 translate-y-6"
                }`}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Teams;
