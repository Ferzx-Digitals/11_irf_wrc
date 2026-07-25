import { ArrowUpRight } from "lucide-react";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { congressActivities } from "@/content/congress/program";
import { volunteerParks, VOLUNTEER_PROGRAM_INFO } from "@/content/travel";

const columns = ["Start Time", "Finish Time", "Session Duration", "Session / Activity", "Description"];

const ProgramScheduleModal = () => {
  const thClass = "border border-forest-deep/30 bg-forest-mist px-3 py-2 text-left text-xs font-bold text-forest-deep";
  const tdClass = "border border-forest-deep/20 px-3 py-2 text-xs text-forest-deep";
  const mealClass = "bg-gold-warm/35 font-semibold";
  const plenaryClass = "bg-forest-mist/70 font-semibold";
  const workshopClass = "bg-rose-100 font-semibold";
  const meetingClass = "bg-purple-100 font-semibold";
  const fieldClass = "bg-forest-primary/15 font-semibold";
  const freeClass = "bg-sky-light/45 font-semibold";
  const registrationClass = "bg-earth-brown/10 font-semibold";

  const ColumnHeader = () => (
    <tr>
      {columns.map((column) => (
        <th key={column} className={thClass}>
          {column}
        </th>
      ))}
    </tr>
  );

  const DayHeader = ({ children }: { children: string }) => (
    <tr>
      <td colSpan={5} className="border border-forest-deep/30 bg-sky-blue/40 px-3 py-2 text-center text-sm font-bold uppercase text-forest-deep">
        {children}
      </td>
    </tr>
  );

  const EmptyTimeCells = () => (
    <>
      <td className={`${tdClass} text-forest-primary/55`}>TBC</td>
      <td className={`${tdClass} text-forest-primary/55`}>TBC</td>
      <td className={`${tdClass} text-forest-primary/55`}>TBC</td>
    </>
  );

  const SpanActivityRow = ({ label, className }: { label: string; className: string }) => (
    <tr>
      <EmptyTimeCells />
      <td colSpan={2} className={`${tdClass} ${className} text-center`}>
        {label}
      </td>
    </tr>
  );

  const NestedActivityRow = ({ label, cells, className }: { label: string; cells: string[]; className: string }) => (
    <tr>
      <EmptyTimeCells />
      <td colSpan={2} className={`${tdClass} ${className} p-0`}>
        <div className="border-b border-forest-deep/20 px-3 py-2 text-center font-semibold">{label}</div>
        <div className="grid" style={{ gridTemplateColumns: `repeat(${cells.length}, minmax(0, 1fr))` }}>
          {cells.map((cell) => (
            <div key={cell} className="border-r border-forest-deep/20 px-2 py-2 text-center text-[11px] last:border-r-0">
              {cell}
            </div>
          ))}
        </div>
      </td>
    </tr>
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="forest-gradient h-12 rounded-full px-7 text-white shadow-forest transition-smooth hover:-translate-y-0.5 hover:shadow-floating">
          View Planned Schedule
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] w-[calc(100vw-2rem)] max-w-6xl overflow-hidden p-0">
        <DialogHeader className="px-6 pb-2 pt-6">
          <DialogTitle className="text-2xl text-forest-deep">Congress Schedule</DialogTitle>
          <DialogDescription>
            11th IRF World Ranger Congress program, 19-23 April 2027. Exact times are TBC where not listed.
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[72vh] overflow-auto px-6 pb-6">
          <table className="min-w-[980px] border-collapse bg-card text-left shadow-forest">
            <colgroup>
              <col className="w-[110px]" />
              <col className="w-[110px]" />
              <col className="w-[150px]" />
              <col className="w-[220px]" />
              <col className="w-[520px]" />
            </colgroup>
            <tbody>
              <tr>
                <td rowSpan={2} className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-3 text-center text-sm font-bold text-forest-deep">
                  19-23 April 2027
                </td>
                <td colSpan={4} className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-2 text-center text-sm font-bold uppercase text-forest-deep">
                  11th IRF World Ranger Congress - Program
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="border border-forest-deep/30 bg-forest-primary/25 px-3 py-2 text-center text-sm font-semibold text-forest-deep">
                  "Recognizing Rangers: Advancing the profession to safeguard our future"
                </td>
              </tr>

              <DayHeader>Day 1: Monday 19 April 2027</DayHeader>
              <ColumnHeader />
              <tr>
                <EmptyTimeCells />
                <td className={`${tdClass} ${registrationClass}`}>Registration</td>
                <td className={`${tdClass} ${registrationClass}`}>Registration will be open all day for participants arriving at different times of the day.</td>
              </tr>
              <tr>
                <EmptyTimeCells />
                <td colSpan={2} className={`${tdClass} ${fieldClass} text-center`}>Moonlight Tour to Iguazu</td>
              </tr>

              <DayHeader>Day 2: Tuesday 20 April 2027</DayHeader>
              <ColumnHeader />
              <SpanActivityRow label="Coffee break" className={mealClass} />
              <SpanActivityRow label="Plenary 1" className={plenaryClass} />
              <SpanActivityRow label="Plenary 2" className={plenaryClass} />
              <SpanActivityRow label="Lunch break" className={mealClass} />
              <NestedActivityRow
                label="Workshops"
                cells={["Workshop 1", "Workshop 2", "Workshop 3", "Workshop 4", "Workshop 5", "Workshop 6"]}
                className={workshopClass}
              />
              <SpanActivityRow label="Coffee break" className={mealClass} />
              <NestedActivityRow
                label="6 x Regional Meetings"
                cells={[
                  "Regional Meeting 1\nOceania",
                  "Regional Meeting 2\nEurope",
                  "Regional Meeting 3\nNorth America",
                  "Regional Meeting 4\nAsia",
                  "Regional Meeting 5\nAfrica",
                  "Regional Meeting 6\nCentral and South America",
                ]}
                className={`${meetingClass} whitespace-pre-line`}
              />
              <tr><td colSpan={5} className={`${tdClass} ${freeClass} text-center`}>Evening free</td></tr>

              <DayHeader>Day 3: Wednesday 21 April 2027</DayHeader>
              <ColumnHeader />
              <SpanActivityRow label="Breakfast" className={mealClass} />
              <SpanActivityRow label="Coffee break" className={mealClass} />
              <SpanActivityRow label="Plenary 3" className={plenaryClass} />
              <SpanActivityRow label="Plenary 4" className={plenaryClass} />
              <SpanActivityRow label="Plenary 5" className={plenaryClass} />
              <SpanActivityRow label="Lunch break" className={mealClass} />
              <NestedActivityRow
                label="Workshops"
                cells={["Workshop 7", "Workshop 8", "Workshop 9", "Workshop 10", "Workshop 11", "Workshop 12"]}
                className={workshopClass}
              />
              <SpanActivityRow label="Coffee break" className={mealClass} />

              <DayHeader>Day 4: Thursday 22 April 2027</DayHeader>
              <ColumnHeader />
              <SpanActivityRow label="Breakfast" className={mealClass} />
              <SpanActivityRow label="Field trips (Iguazu Falls)" className={fieldClass} />
              <tr><td colSpan={5} className={`${tdClass} ${freeClass} text-center`}>Evening free</td></tr>

              <DayHeader>Day 5: Friday 23 April 2027</DayHeader>
              <ColumnHeader />
              <tr><td className={tdClass}>07:00</td><td className={tdClass}>08:00</td><td className={tdClass}>60 mins</td><td className={tdClass} /><td className={`${tdClass} ${mealClass} text-center`}>Breakfast</td></tr>
              <tr><td className={tdClass}>08:00</td><td className={tdClass}>08:15</td><td className={tdClass}>15 min</td><td className={tdClass} /><td className={tdClass} /></tr>
              <SpanActivityRow label="Plenary 6" className={plenaryClass} />
              <SpanActivityRow label="Coffee break" className={mealClass} />
              <SpanActivityRow label="Lunch break" className={mealClass} />
            </tbody>
          </table>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const AboutEvents = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <PageHeroBanner
        imageSrc="/images/images/congress-events/Banner.jpg"
        title="Congress Events"
        subtitle="Five days of learning, collaboration, and celebration"
        sectionClassName="mb-20 h-[340px] md:h-[420px]"
        overlayClassName="bg-gradient-to-r from-black/10 via-black/5 to-transparent"
      />

      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-center text-3xl font-bold text-forest-deep">What to Expect</h2>
        <div className="group relative -mx-4 overflow-hidden px-4 pb-4">
          <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {[...congressActivities, ...congressActivities].map((activity, index) => (
              <article
                key={`${activity.title}-${index}`}
                className="flex w-[320px] shrink-0 flex-col overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest sm:w-[420px] md:w-[480px] lg:w-[520px]"
              >
                <img
                  src={`/images/images/congress-introduction/${encodeURIComponent(activity.image)}`}
                  alt={activity.title}
                  className="h-72 w-full object-cover sm:h-80 md:h-96"
                />
                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-forest-deep">{activity.title}</h3>
                  <p className="text-base text-forest-primary">{activity.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Volunteer in an Argentine National Park */}
        <div className="mt-16">
          <h2 className="mb-4 text-center text-3xl font-bold text-forest-deep">
            Volunteer in an Argentine National Park
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-center text-forest-primary">
            {VOLUNTEER_PROGRAM_INFO.intro}
          </p>
          <div className="overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest">
            <table className="w-full">
              <thead>
                <tr className="bg-forest-mist/70 text-left">
                  <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Park
                  </th>
                  <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Contact
                  </th>
                </tr>
              </thead>
              <tbody>
                {volunteerParks.map((park, index) => (
                  <tr
                    key={park.name}
                    className={index % 2 === 0 ? "bg-card" : "bg-forest-mist/20"}
                  >
                    <td className="px-6 py-3 text-sm font-semibold text-forest-deep">
                      {park.url ? (
                        <a
                          href={park.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 underline decoration-dashed underline-offset-4"
                        >
                          {park.name}
                          <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                        </a>
                      ) : (
                        park.name
                      )}
                    </td>
                    <td className="px-6 py-3 text-sm text-forest-primary">
                      {park.emails.map((email, i) => (
                        <span key={email}>
                          {i > 0 && " / "}
                          <a href={`mailto:${email}`} className="font-semibold hover:underline">
                            {email}
                          </a>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvents;
