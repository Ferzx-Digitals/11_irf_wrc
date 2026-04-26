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
    </PageShell>
  );
};

export default AboutEvents;
