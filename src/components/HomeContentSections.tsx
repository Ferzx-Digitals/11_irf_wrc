import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ExternalLink, MapPin, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import HistoryTimeline from "@/components/HistoryTimeline";
import { getHomeContent } from "@/content/home";
import { defaultLocale } from "@/i18n/locales";

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

const HomeContentSections = () => {
  const content = getHomeContent(defaultLocale);
  const congressDate = new Date("2027-04-19T09:00:00-03:00").getTime();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const distance = Math.max(0, congressDate - now);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(intervalId);
  }, [congressDate]);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/50 to-background py-24">
        <img
          src={content.iguazu.mapBackground}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain object-left opacity-20"
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-5xl font-bold text-forest-deep md:text-6xl">{content.iguazu.title}</h3>
              <p className="mt-2 text-3xl font-semibold text-forest-primary">{content.iguazu.subtitle}</p>
              {content.iguazu.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-lg leading-relaxed text-foreground/80">
                  {paragraph}
                </p>
              ))}
              <Link to="/about" className="mt-8 inline-flex">
                <Button className="forest-gradient text-primary-foreground">Learn More</Button>
              </Link>
            </div>
            <div className="rounded-3xl p-2">
              <img
                src={content.iguazu.mapIllustration}
                alt="Illustrated map of Iguazu region"
                className="h-full w-full object-contain"
                onError={(event) => { event.currentTarget.src = "/placeholder.svg"; }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24" style={{ backgroundColor: "#dce9dc" }}>
        <div className="absolute left-4 top-20 h-24 w-24 rounded-full bg-forest-light/25" />
        <div className="absolute right-24 top-52 h-24 w-24 rounded-full bg-forest-light/20" />
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <div className="relative mb-4 inline-flex items-center justify-center gap-3 md:gap-5">
                <div className="h-[3px] w-10 rounded-full bg-forest-primary md:w-16" />
                <img
                  src="/images/toucan.png"
                  alt="Bird"
                  className="absolute -left-6 -top-14 h-16 w-16 object-contain md:-left-8 md:-top-16 md:h-20 md:w-20"
                  onError={(event) => {
                    event.currentTarget.src = "/placeholder.svg";
                  }}
                />
                <h2 className="text-4xl font-bold text-forest-deep md:text-6xl">
                  11th IRF World Ranger Congress
                </h2>
                <div className="h-[3px] w-10 rounded-full bg-forest-primary md:w-16" />
              </div>
              <p className="mx-auto mt-4 max-w-3xl text-2xl italic text-forest-primary">"{content.welcome.theme}"</p>
              <p className="mx-auto mt-6 max-w-4xl text-lg text-foreground/80">{content.welcome.description}</p>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-2">
              <div className="space-y-7 px-4 py-2">
                <article>
                  <div className="mb-1 flex items-center gap-3">
                    <CalendarDays className="h-8 w-8 text-forest-primary" />
                    <h4 className="text-4xl font-bold text-forest-deep">{content.congressInfo.dateValue}</h4>
                  </div>
                  <p className="pl-11 text-lg text-forest-primary">{content.congressInfo.checkin}</p>
                </article>

                <article>
                  <div className="mb-1 flex items-center gap-3">
                    <MapPin className="h-8 w-8 text-earth-brown" />
                    <h4 className="text-2xl font-bold text-forest-deep">{content.congressInfo.venueValue}</h4>
                  </div>
                  <p className="pl-11 text-lg text-forest-primary">{content.congressInfo.venueLocation}</p>
                </article>

                <article>
                  <div className="mb-1 flex items-center gap-3">
                    <Trees className="h-8 w-8 text-forest-primary" />
                    <h4 className="text-2xl font-semibold text-forest-deep">{content.congressInfo.settingValue}</h4>
                  </div>
                  <p className="pl-11 text-base text-forest-primary/90">{content.congressInfo.settingDescription}</p>
                </article>
              </div>

              <div className="relative pt-6 lg:pt-12">
                <div className="relative z-10 overflow-hidden rounded-2xl border border-forest-light/30 shadow-earth bg-white/70">
                  <iframe
                    title="Congress venue map"
                    src={content.congressInfo.mapEmbed}
                    className="h-[340px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-background via-forest-mist/20 to-background py-24">
        <img
          src="/images/home/24.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 top-2 h-40 w-auto -scale-x-100 rotate-[-12deg] object-contain brightness-0 opacity-[0.12] md:left-8 md:top-6 md:h-52"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <img
          src="/images/home/22.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-2 h-[520px] w-auto brightness-0 opacity-[0.12] md:-right-10 md:-top-6 md:h-[640px]"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <h3 className="mb-10 text-center text-4xl font-bold text-forest-deep">IRF Regions</h3>
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] [scrollbar-color:hsl(var(--forest-primary)/0.5)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-forest-primary/40 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-2">
            {content.regions.map((region) => (
              <article
                key={region.title}
                className="group relative h-64 w-72 flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating sm:w-80 lg:w-96"
              >
                <img
                  src={region.coverUrl}
                  alt={region.title}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <h4 className="text-2xl font-semibold text-white">{region.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest-mist/30">
        <HistoryTimeline title={content.history.title} congresses={content.history.congresses} />
      </section>

      <section className="bg-forest-deep py-20 text-white">
        <div className="container mx-auto px-4">
          <h3 className="mb-10 text-center text-4xl font-bold">{content.president.title}</h3>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row">
            <img
              src={content.president.image}
              alt={content.president.name}
              className="h-36 w-36 rounded-full object-cover ring-4 ring-forest-light/40"
            />
            <div>
              <blockquote className="text-lg italic text-white/90">"{content.president.quote}"</blockquote>
              <p className="mt-4 text-xl font-semibold">{content.president.name}</p>
              <p className="text-sm text-forest-light">{content.president.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-background py-24">
        <img
          src="/images/home/14.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -left-14 bottom-[-2rem] h-[260px] w-auto object-contain brightness-0 opacity-[0.14] md:left-0 md:bottom-[-3.5rem] md:h-[360px]"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <img
          src="/images/toucan.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-6 top-6 h-48 w-auto rotate-12 object-contain opacity-10 md:right-10 md:top-8 md:h-64"
          onError={(event) => { event.currentTarget.style.display = "none"; }}
        />
        <div className="container relative z-10 mx-auto px-4">
          <h3 className="mb-10 text-center text-4xl font-bold text-forest-deep">{content.organizers.title}</h3>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:grid-rows-[auto_1fr]">
            {content.organizers.items.map((org) => (
              <article key={org.shortName} className="group overflow-hidden rounded-3xl border border-forest-light/30 bg-card/95 shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating md:row-span-2 md:grid md:grid-rows-subgrid">
                <div className="relative border-b border-forest-light/20 bg-gradient-to-r from-forest-mist/70 to-background px-7 py-6">
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-forest-primary/10" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex items-center gap-3">
                      <img src={org.logo} alt={org.shortName} className="h-16 w-16 rounded-xl bg-white p-2 shadow-earth" />
                      <div>
                        <h4 className="text-xl font-semibold leading-tight text-forest-deep">{org.name}</h4>
                        <p className="mt-1 text-xs uppercase tracking-wide text-earth-brown">Founded {org.founded}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-7 py-6">
                  <p className="text-sm leading-relaxed text-foreground/80">{org.description}</p>
                  <a href={org.website} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-primary">
                    Visit website <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-5xl">
            <h4 className="mb-6 text-center text-2xl font-bold text-forest-deep">
              {content.partners.title}
            </h4>
            <div className="grid gap-4 sm:grid-cols-3">
              {content.partners.items.map((partner) => (
                <article
                  key={partner.name}
                  className="flex min-h-36 items-center justify-center rounded-2xl border border-forest-light/30 bg-forest-deep p-6 shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 w-full object-contain"
                    onError={(event) => { event.currentTarget.src = "/placeholder.svg"; }}
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-forest-mist/25 py-24">
        <div className="container mx-auto px-4">
          <h3 className="mb-10 text-center text-4xl font-bold text-forest-deep">{content.team.title}</h3>
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto py-4 [-webkit-overflow-scrolling:touch] [scrollbar-color:hsl(var(--forest-primary)/0.5)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-forest-primary/40 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-2">
            {content.team.members.map((member) => (
              <article
                key={`${member.name}-${member.role}`}
                className="group relative h-80 w-60 flex-shrink-0 snap-start overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating sm:w-64 lg:w-72"
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                    style={{ objectPosition: member.imagePosition ?? "center" }}
                    onError={(event) => { event.currentTarget.src = "/placeholder.svg"; }}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-forest-mist text-5xl font-bold text-forest-primary transition-smooth group-hover:scale-105">
                    {getInitials(member.name)}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
                <div className="absolute inset-x-3 bottom-3 p-3 text-center">
                  <h4 className="text-base font-semibold text-white">{member.name}</h4>
                  <p className="text-sm text-white/90">{member.role}</p>
                  <p className="mt-2 inline-flex rounded-full bg-gold-warm/85 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-forest-deep">
                    {member.org}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden earth-gradient py-20">
        <div className="absolute inset-0">
          <div className="absolute -left-16 top-8 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute left-1/3 top-16 h-56 w-56 rounded-full bg-white/8" />
          <div className="absolute right-20 top-24 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute bottom-4 left-1/4 h-28 w-28 rounded-full bg-white/8" />
          <div className="absolute bottom-12 right-8 h-36 w-36 rounded-full bg-white/10" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto mb-6 max-w-4xl text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-white">Congress Starts In</h3>
          </div>

          <div className="mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center text-white shadow-earth">
              <p className="text-3xl font-bold">{countdown.days}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/85">Days</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center text-white shadow-earth">
              <p className="text-3xl font-bold">{countdown.hours}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/85">Hours</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center text-white shadow-earth">
              <p className="text-3xl font-bold">{countdown.minutes}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/85">Minutes</p>
            </div>
            <div className="rounded-xl border border-white/20 bg-white/10 p-4 text-center text-white shadow-earth">
              <p className="text-3xl font-bold">{countdown.seconds}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/85">Seconds</p>
            </div>
          </div>

          <div className="mx-auto max-w-5xl rounded-3xl border border-white/60 bg-white/95 p-10 text-center shadow-floating md:p-12">
            <h3 className="text-4xl font-bold text-forest-deep">Ready to Join?</h3>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-forest-primary">
              Be part of the global ranger community. Register for the 11th IRF World Ranger Congress in Puerto Iguazu, Argentina.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="forest-gradient px-8 text-primary-foreground shadow-forest hover:scale-105 transition-bounce">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-forest-primary text-forest-primary hover:bg-forest-mist px-8">
                  Submit a Proposal
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContentSections;
