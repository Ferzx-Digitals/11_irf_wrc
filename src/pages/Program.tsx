import PageHeroBanner from "@/components/common/PageHeroBanner";
import PageShell from "@/components/common/PageShell";
import { congressActivities, congressSchedule } from "@/content/congress/program";

const Program = () => {
  return (
    <PageShell>
      <PageHeroBanner
        imageSrc="/images/images/congress-program/Banner.jpg"
        title="Congress Program"
        subtitle="Five days of learning, collaboration, and celebration"
      />

        <p className="mb-6 text-lg text-forest-primary">
          Five days of learning, collaboration, and celebration.
        </p>

        <div className="overflow-hidden border-y border-forest-light/30 bg-transparent">
          <table className="w-full">
            <thead>
              <tr className="bg-forest-mist/80">
                <th className="px-6 py-3 text-left text-sm font-semibold text-forest-deep">Day</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-forest-deep">Events</th>
              </tr>
            </thead>
            <tbody>
              {congressSchedule.map((row) => (
                <tr key={row.day} className="border-t border-forest-light/20">
                  <td className="px-6 py-4 text-sm font-semibold text-forest-deep">{row.day}</td>
                  <td className="px-6 py-4 text-sm text-forest-primary">{row.events}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mb-6 mt-12 text-3xl font-bold text-forest-deep">Congress Activities</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {congressActivities.map((activity) => (
            <article key={activity.title} className="overflow-hidden border border-forest-light/30 bg-transparent">
              <img
                src={`/images/images/congress-introduction/${encodeURIComponent(activity.image)}`}
                alt={activity.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-forest-deep">{activity.title}</h3>
              </div>
            </article>
          ))}
        </div>
    </PageShell>
  );
};

export default Program;
