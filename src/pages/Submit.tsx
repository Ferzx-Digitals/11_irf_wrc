import { CalendarX, CheckCircle2, Globe, Handshake, LockKeyhole, Mic, Microscope } from "lucide-react";
import PageIntro from "@/components/common/PageIntro";

const sessionTypes = [
  {
    title: "Plenary Talks",
    description:
      "Main stage presentations by prominent conservation experts. Sessions address inclusive workforce, welfare of rangers, professional conduct, and capacity building.",
    duration: "20-30 minutes",
    icon: Mic,
  },
  {
    title: "Concurrent Workshops",
    description:
      "Thematic workshops on equity & equality, indigenous peoples, one health, youth involvement, technology, and more. Interactive, hands-on sessions.",
    duration: "60-90 minutes",
    icon: Microscope,
  },
];

const formFields = [
  "Full name",
  "Organization / Agency",
  "Country",
  "IRF Region",
  "Email address",
  "Presentation title",
  "Session type preference (Plenary / Workshop)",
  "Thematic stream alignment",
  "Abstract (300 words maximum)",
  "Brief biography",
  "Any technical requirements",
];

const thematicStreams = [
  "Ranger Role and Recognition",
  "Rangers for 30x30 Framework",
  "Inclusive Workforce",
  "Ranger Representation",
  "Open Stream: High Impact Contributions",
];

const Submit = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background py-24">
      <div className="container mx-auto px-4">
        <PageIntro
          eyebrow="Call For Contributions"
          title="Submit your expression of interest"
          description="Share your experiences, research, and insights at the World Ranger Congress."
        />

        <aside className="mx-auto mb-14 max-w-5xl overflow-hidden rounded-3xl border border-forest-light/30 bg-card/95 shadow-forest">
          <div className="h-2 bg-gradient-to-r from-forest-primary via-gold-warm to-earth-warm" />
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-earth-warm/40 bg-earth-light/30 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-earth-brown">
                <CalendarX className="h-4 w-4" />
                Closed for review
              </div>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
                SUBMISSION OF INTEREST IS NOW CLOSED
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-forest-primary md:text-lg">
                Thank you to everyone who shared an expression of interest. New submissions are no longer being
                accepted, and received proposals are moving through the congress review process.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-forest-light/30 bg-forest-mist/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-brown">Closed date</p>
                  <p className="mt-1 text-lg font-bold text-forest-deep">30 April 2026</p>
                </div>
                <div className="rounded-2xl border border-forest-light/30 bg-forest-mist/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-brown">Next update</p>
                  <p className="mt-1 text-lg font-bold text-forest-deep">30 June 2026</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden bg-forest-deep">
              <img
                src="/images/images/submit/Banner.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep/95 via-forest-deep/65 to-earth-brown/30" />
              <div className="relative flex h-full items-center justify-center p-8">
                <div className="w-full max-w-[300px] rounded-3xl border-2 border-white/45 bg-white/15 p-8 text-center text-white shadow-floating backdrop-blur-sm">
                  <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-forest-deep">
                    <LockKeyhole className="h-10 w-10" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">Status</p>
                  <p className="mt-2 text-4xl font-bold uppercase">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div className="mx-auto mb-14 max-w-4xl rounded-3xl border border-forest-light/30 bg-card/90 p-8 shadow-forest md:p-10">
          <h2 className="mb-4 text-2xl font-bold text-forest-deep md:text-3xl">
            Expression of Interest Guidelines
          </h2>
          <div className="space-y-4 text-forest-primary">
            <p>
              The 11th IRF World Ranger Congress invited rangers, conservation professionals, researchers, and
              community leaders to submit expressions of interest to present at the congress. Presentations were
              welcomed where they aligned with the thematic streams and contributed to advancing the ranger profession.
            </p>
            <p>
              Submissions were accepted in <strong>English, Spanish, and French</strong>. All expressions of interest
              are being reviewed by the Congress Program Committee, and selected speakers will be notified.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-2">
          {sessionTypes.map((session) => (
            <article
              key={session.title}
              className="rounded-2xl border border-forest-light/30 bg-card/95 p-8 shadow-forest transition-smooth"
            >
              <session.icon className="mb-4 h-9 w-9 text-forest-primary" />
              <h3 className="mb-2 text-2xl font-bold text-forest-deep">{session.title}</h3>
              <p className="mb-4 text-forest-primary">{session.description}</p>
              <p className="text-sm font-semibold uppercase tracking-wide text-earth-brown">
                Duration: {session.duration}
              </p>
            </article>
          ))}
        </div>

        <div className="mb-14 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-forest-light/30 bg-card/95 p-8 shadow-forest">
            <h3 className="mb-3 text-2xl font-bold text-forest-deep">Information Requested</h3>
            <p className="mb-4 text-forest-primary">Applicants were asked to provide the following information:</p>
            <ul className="space-y-2">
              {formFields.map((field) => (
                <li key={field} className="flex items-start gap-3 text-forest-primary">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-primary" />
                  <span>{field}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-forest-light/30 bg-card/95 p-8 shadow-forest">
            <h3 className="mb-3 text-2xl font-bold text-forest-deep">Thematic Streams</h3>
            <p className="mb-4 text-forest-primary">Expressions of interest were aligned with one of these themes:</p>
            <div className="space-y-3">
              {thematicStreams.map((stream, index) => (
                <div key={stream} className="flex items-center gap-3 rounded-lg bg-forest-mist/80 p-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-primary text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-forest-deep">{stream}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mx-auto mb-12 max-w-4xl rounded-3xl border border-forest-light/30 bg-card/95 p-10 text-center shadow-forest">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest-mist text-forest-deep">
            <LockKeyhole className="h-7 w-7" />
          </div>
          <h2 className="mb-3 text-3xl font-bold text-forest-deep">Expression of Interest Review</h2>
          <p className="text-forest-primary">
            The submission forms are now closed in English, Spanish, and French. The Congress Program Committee is
            reviewing received expressions of interest and will notify selected speakers by 30 June 2026.
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-4xl rounded-3xl border border-forest-light/30 bg-card/95 p-10 text-center shadow-forest">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Handshake className="h-5 w-5 text-forest-primary" />
            <h2 className="text-2xl font-bold text-forest-deep">Need Funding Support?</h2>
          </div>
          <p className="mb-6 text-forest-primary">
            Funding expressions of interest are also closed while received applications are reviewed.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-forest-light/40 bg-forest-mist/70 px-5 py-3 text-sm font-semibold text-forest-deep">
            <LockKeyhole className="h-4 w-4" />
            Funding EOI forms closed
          </div>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-earth-brown/30 bg-earth-brown px-6 py-5 text-center text-white shadow-forest">
          <p className="text-lg font-bold">Submission Deadline: Close of business on the 30th of April 2026</p>
          <p className="mt-1 text-sm text-white/85">Applicants will be notified by the 30th of June 2026.</p>
          <div className="mt-4 inline-flex items-center gap-2 text-white/90">
            <Globe className="h-4 w-4" />
            <span className="text-sm">Forms available in English, Spanish, and French</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Submit;
