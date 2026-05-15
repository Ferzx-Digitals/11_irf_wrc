import PageIntro from "@/components/common/PageIntro";
import { getHomeContent } from "@/content/home";
import { defaultLocale } from "@/i18n/locales";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { cn } from "@/lib/utils";

const orgStyles: Record<string, { badge: string; avatar: string; accent: string }> = {
  IRF: {
    badge: "border-forest-primary/25 bg-forest-mist text-forest-primary",
    avatar: "bg-forest-mist text-forest-primary",
    accent: "bg-forest-primary",
  },
  SIGUNARA: {
    badge: "border-sky-blue/25 bg-sky-light text-forest-deep",
    avatar: "bg-sky-light text-forest-deep",
    accent: "bg-sky-blue",
  },
  FLG: {
    badge: "border-earth-brown/25 bg-earth-brown/10 text-earth-brown",
    avatar: "bg-earth-brown/10 text-earth-brown",
    accent: "bg-earth-brown",
  },
  "Plan A": {
    badge: "border-gold-warm/35 bg-gold-warm/15 text-forest-deep",
    avatar: "bg-gold-warm/20 text-forest-deep",
    accent: "bg-gold-warm",
  },
};

const defaultOrgStyle = {
  badge: "border-muted bg-muted text-muted-foreground",
  avatar: "bg-muted text-muted-foreground",
  accent: "bg-muted-foreground",
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const Teams = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();
  const teamMembers = getHomeContent(defaultLocale).team.members;
  const organizationStats = Array.from(
    teamMembers.reduce((stats, member) => {
      stats.set(member.org, (stats.get(member.org) ?? 0) + 1);
      return stats;
    }, new Map<string, number>()),
  );

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-forest-mist/35 via-background to-background py-24">
      <div className="container mx-auto px-4">
        <PageIntro
          eyebrow="People & Partnerships"
          title="Meet the Team"
          description="Meet the IRF, SIGUNARA, FLG, and Plan A team members supporting the 11th IRF World Ranger Congress."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {organizationStats.map(([org, count]) => {
            const style = orgStyles[org] ?? defaultOrgStyle;

            return (
              <article key={org} className="rounded-lg border border-forest-light/30 bg-card/90 p-5 shadow-forest">
                <div className={cn("mb-4 h-1 w-12 rounded-full", style.accent)} />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-primary">{org}</p>
                <p className="mt-2 text-3xl font-bold text-forest-deep">{count}</p>
                <p className="text-sm text-foreground/70">{count === 1 ? "Team member" : "Team members"}</p>
              </article>
            );
          })}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => {
            const style = orgStyles[member.org] ?? defaultOrgStyle;

            return (
              <article
                key={`${member.name}-${member.org}`}
                className={cn(
                  "overflow-hidden rounded-lg border border-forest-light/30 bg-card shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating",
                  isVisible ? "animate-fade-up" : "opacity-0 translate-y-6",
                )}
                style={{ animationDelay: `${Math.min(index, 7) * 0.06}s` }}
              >
                <div className={cn("flex aspect-[4/5] items-center justify-center overflow-hidden", style.avatar)}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-smooth hover:scale-105"
                      style={{ objectPosition: member.imagePosition ?? "center" }}
                      onError={(event) => {
                        event.currentTarget.src = "/placeholder.svg";
                      }}
                    />
                  ) : (
                    <span className="text-5xl font-bold">{getInitials(member.name)}</span>
                  )}
                </div>

                <div className="p-5">
                  <div className={cn("mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold", style.badge)}>
                    {member.org}
                  </div>
                  <h2 className="text-xl font-bold leading-tight text-forest-deep">{member.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-forest-primary">{member.role}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;
