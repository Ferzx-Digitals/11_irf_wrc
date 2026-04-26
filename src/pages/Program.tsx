import { Clock, Download, MapPin } from "lucide-react";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  congressActivities,
  congressSchedule,
  fieldTrips,
  touristAttractions,
} from "@/content/congress/program";

const countryBadge = (country: "Argentina" | "Brazil") =>
  country === "Argentina"
    ? "bg-sky-blue/20 text-sky-blue"
    : "bg-forest-light/30 text-forest-deep";

const Program = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <PageHeroBanner
        imageSrc="/images/images/congress-program/Banner.jpg"
        title="Congress Program"
        subtitle="Five days of learning, collaboration, and celebration"
        overlayClassName="bg-black/65"
      />

      <div className="container mx-auto px-4">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-10 flex justify-center">
            <TabsList className="flex h-auto flex-wrap justify-center gap-1 rounded-full bg-card p-1 shadow-forest">
              <TabsTrigger
                value="overview"
                className="rounded-full px-5 py-2 text-sm font-semibold data-[state=active]:bg-forest-primary data-[state=active]:text-white"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="schedule"
                className="rounded-full px-5 py-2 text-sm font-semibold data-[state=active]:bg-forest-primary data-[state=active]:text-white"
              >
                Detailed Schedule
              </TabsTrigger>
              <TabsTrigger
                value="activities"
                className="rounded-full px-5 py-2 text-sm font-semibold data-[state=active]:bg-forest-primary data-[state=active]:text-white"
              >
                Activities
              </TabsTrigger>
              <TabsTrigger
                value="field-trips"
                className="rounded-full px-5 py-2 text-sm font-semibold data-[state=active]:bg-forest-primary data-[state=active]:text-white"
              >
                Field Trips
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview */}
          <TabsContent value="overview" className="mt-0">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center text-2xl font-bold text-forest-deep">
                Program Overview
              </h2>
              <div className="overflow-hidden rounded-2xl border border-forest-light/30 bg-card shadow-forest">
                <div className="grid grid-cols-[1fr_2fr]">
                  <div className="bg-forest-mist/70 px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Day
                  </div>
                  <div className="bg-forest-mist/70 px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Events
                  </div>
                  {congressSchedule.map((row, index) => {
                    const stripe = index % 2 === 0 ? "bg-card" : "bg-forest-mist/20";
                    return (
                      <div key={row.day} className="contents">
                        <div
                          className={`px-6 py-4 text-sm font-semibold text-forest-deep ${stripe}`}
                        >
                          {row.day}
                        </div>
                        <div className={`px-6 py-4 text-sm text-forest-primary ${stripe}`}>
                          {row.events}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-6 text-center">
                <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-forest-light/40 bg-card px-4 py-2 text-sm font-semibold text-forest-primary/70">
                  <Download className="h-4 w-4" />
                  Download Full Program (PDF) — Coming Soon
                </span>
              </div>
            </div>
          </TabsContent>

          {/* Detailed Schedule */}
          <TabsContent value="schedule" className="mt-0">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 text-center text-2xl font-bold text-forest-deep">
                Detailed Schedule
              </h2>
              <div className="space-y-4">
                {congressSchedule.map((day) => (
                  <div
                    key={day.day}
                    className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 text-center shadow-forest"
                  >
                    <h3 className="mb-3 text-lg font-bold text-forest-deep">{day.day}</h3>
                    <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                      {day.events.split(", ").map((event) => (
                        <li
                          key={event}
                          className="flex items-center gap-2 text-sm text-forest-primary"
                        >
                          <span className="h-2 w-2 shrink-0 rounded-full bg-forest-primary" />
                          {event}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-xs italic text-forest-primary/60">
                      Detailed times to be announced.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Activities */}
          <TabsContent value="activities" className="mt-0">
            <h2 className="mb-6 text-center text-2xl font-bold text-forest-deep">
              Congress Activities
            </h2>
            <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {congressActivities.map((activity) => (
                <article
                  key={activity.title}
                  className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating"
                >
                  <img
                    src={`/images/images/congress-introduction/${encodeURIComponent(activity.image)}`}
                    alt={activity.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="mb-1.5 text-base font-bold">{activity.title}</h3>
                    <p className="mb-2 text-xs leading-relaxed text-white/90">
                      {activity.description}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                      {activity.count}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </TabsContent>

          {/* Field Trips */}
          <TabsContent value="field-trips" className="mt-0">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-3 text-center text-2xl font-bold text-forest-deep">Field Trips</h2>
              <p className="mx-auto mb-10 max-w-3xl text-center text-forest-primary">
                Discover the natural wonders surrounding the congress venue. Field trips run on
                Monday 21 April.
              </p>

              <div className="mx-auto mb-16 max-w-md">
                {fieldTrips.map((trip) => (
                  <article
                    key={trip.name}
                    className="overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest transition-smooth hover:shadow-floating"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={`/images/images/congress-events/${encodeURIComponent(trip.image)}`}
                        alt={trip.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <span
                        className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${countryBadge(trip.country)}`}
                      >
                        {trip.country}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-forest-deep">{trip.name}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-forest-primary">
                        {trip.description}
                      </p>
                      <div className="flex items-center justify-between border-t border-forest-light/30 pt-3 text-sm">
                        <span className="inline-flex items-center gap-1.5 text-forest-primary/80">
                          <Clock className="h-4 w-4" />
                          {trip.duration}
                        </span>
                        <span className="font-semibold text-forest-deep">USD ${trip.price}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <h3 className="mb-3 text-2xl font-bold text-forest-deep">
                Other Tourist Attractions
              </h3>
              <p className="mb-8 max-w-3xl text-forest-primary">
                Extend your stay and explore the region. These attractions are available
                independently and not included in the congress program.
              </p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {touristAttractions.map((place) => (
                  <article
                    key={place.name}
                    className="overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest transition-smooth hover:shadow-floating"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={`/images/images/congress-events/${encodeURIComponent(place.image)}`}
                        alt={place.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <span
                        className={`mb-3 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${countryBadge(place.country)}`}
                      >
                        <MapPin className="h-3 w-3" />
                        {place.country}
                      </span>
                      <h4 className="mb-2 text-base font-bold text-forest-deep">{place.name}</h4>
                      <p className="text-sm leading-relaxed text-forest-primary">
                        {place.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Program;
