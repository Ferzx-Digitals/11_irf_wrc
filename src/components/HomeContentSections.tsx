import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CalendarDays, ExternalLink, MapPin, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getHomeContent } from "@/content/home";
import { defaultLocale } from "@/i18n/locales";

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
              <Link to="/teams" className="mt-8 inline-flex">
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

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <h3 className="mb-10 text-center text-4xl font-bold text-forest-deep">IRF Regions</h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.regions.map((region) => (
              <article
                key={region.title}
                className="group relative h-64 overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating"
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

      <section className="bg-forest-mist/30 py-24">
        <div className="container mx-auto px-4">
          <h3 className="mb-10 text-center text-4xl font-bold text-forest-deep">{content.history.title}</h3>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {content.history.congresses.map((item) => (
              <article key={`${item.edition}-${item.year}`} className="rounded-2xl border border-forest-light/30 bg-card/90 p-5 shadow-forest">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-forest-deep px-2.5 py-1 text-xs font-semibold text-white">{item.edition}</span>
                  <span className="text-sm font-semibold text-earth-brown">{item.year}</span>
                </div>
                <p className="text-lg font-semibold text-forest-deep">{item.location}</p>
                <p className="mt-1 text-sm text-foreground/70">{item.country}</p>
                <div className="mt-4 h-1 w-full rounded-full bg-gradient-to-r from-forest-primary/30 via-gold-warm/40 to-forest-primary/20" />
              </article>
            ))}
          </div>
        </div>
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

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <h3 className="mb-10 text-center text-4xl font-bold text-forest-deep">{content.organizers.title}</h3>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {content.organizers.items.map((org) => (
              <article key={org.shortName} className="group overflow-hidden rounded-3xl border border-forest-light/30 bg-card/95 shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating">
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
        </div>
      </section>

      <section className="bg-forest-mist/25 py-24">
        <div className="container mx-auto px-4">
          <h3 className="mb-10 text-center text-4xl font-bold text-forest-deep">{content.team.title}</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.team.members.map((member) => (
              <article
                key={`${member.name}-${member.role}`}
                className="group relative h-80 overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating"
              >
                <img
                  src={member.image ?? "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  onError={(event) => { event.currentTarget.src = "/placeholder.svg"; }}
                />
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
              <Link to="/tickets">
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
