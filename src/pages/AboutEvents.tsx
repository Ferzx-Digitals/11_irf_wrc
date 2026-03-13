import PageHeroBanner from "@/components/common/PageHeroBanner";
import PageShell from "@/components/common/PageShell";
import { congressActivities, congressSchedule } from "@/content/congress/program";

const AboutEvents = () => {
  return (
    <PageShell>
      <PageHeroBanner
        imageSrc="/images/images/congress-events/Banner.jpg"
        title="Congress Events"
        subtitle="Five days of learning, collaboration, and celebration"
        overlayClassName="bg-gradient-to-r from-black/75 via-black/55 to-black/30"
      />

        <div className="mx-auto mb-10 max-w-4xl">
          <p className="text-lg text-forest-primary">
            Discover the events and activities at the 11th IRF World Ranger Congress.
          </p>
        </div>

        <div className="mb-12 space-y-3">
          {congressSchedule.map((item) => (
            <article key={item.day} className="border-l-4 border-forest-primary/70 pl-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-earth-brown">{item.day}</p>
              <p className="leading-relaxed text-forest-primary">{item.events}</p>
            </article>
          ))}
        </div>

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">What to Expect</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {congressActivities.map((activity) => (
            <article key={activity.title} className="overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest">
              <img
                src={`/images/images/congress-introduction/${encodeURIComponent(activity.image)}`}
                alt={activity.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-forest-deep">{activity.title}</h3>
                <p className="text-forest-primary">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
    </PageShell>
  );
};

export default AboutEvents;
