import { CheckCircle2, Globe, Handshake, Mic, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const links = {
  speakerFormEN: "https://forms.gle/RrtDG25QgkR74G7XA",
  speakerFormES: "https://forms.gle/UqKG7UiEYSnyUbTX8",
  speakerFormFR: "https://forms.gle/35CoibZnsHGJ1dfi8",
  fundingEoiEN: "https://forms.gle/MTJmr4A3Nogk8GhV8",
  fundingEoiES: "https://forms.gle/MGVH2c7QQtg9Cvtk9",
  fundingEoiFR: "https://forms.gle/FGjVWNEqAmNVs55g7",
};

const Submit = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background py-24">
      <div className="container mx-auto px-4">
        <PageIntro
          eyebrow="Call For Contributions"
          title="Submit Your Interest"
          description="Share your experiences, research, and insights at the World Ranger Congress."
        />

        <div className="mx-auto mb-14 max-w-4xl rounded-3xl border border-forest-light/30 bg-card/90 p-8 shadow-forest md:p-10">
          <h2 className="mb-4 text-2xl font-bold text-forest-deep md:text-3xl">
            Expression of Interest Guidelines
          </h2>
          <div className="space-y-4 text-forest-primary">
            <p>
              The 11th IRF World Ranger Congress invites rangers, conservation professionals, researchers, and
              community leaders to submit expressions of interest to present at the congress. We welcome presentations
              that align with our thematic streams and contribute to advancing the ranger profession.
            </p>
            <p>
              Submissions are accepted in <strong>English, Spanish, and French</strong>. All expressions of interest
              will be reviewed by the Congress Program Committee. Selected speakers will be notified.
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
            <h3 className="mb-3 text-2xl font-bold text-forest-deep">What You'll Need</h3>
            <p className="mb-4 text-forest-primary">Prepare the following information before starting your submission:</p>
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
            <p className="mb-4 text-forest-primary">Your submission should align with one of these themes:</p>
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
          <h2 className="mb-3 text-3xl font-bold text-forest-deep">Submit Your Expression of Interest</h2>
          <p className="mb-8 text-forest-primary">
            Choose your preferred language to access the submission form via Google Forms.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="forest-gradient text-white" onClick={() => window.open(links.speakerFormEN, "_blank", "noopener,noreferrer")}>
              English Form
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open(links.speakerFormES, "_blank", "noopener,noreferrer")}>
              Formulario en Espanol
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open(links.speakerFormFR, "_blank", "noopener,noreferrer")}>
              Formulaire en Francais
            </Button>
          </div>
        </div>

        <div className="mx-auto mb-8 max-w-4xl rounded-3xl border border-forest-light/30 bg-card/95 p-10 text-center shadow-forest">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Handshake className="h-5 w-5 text-forest-primary" />
            <h2 className="text-2xl font-bold text-forest-deep">Need Funding Support?</h2>
          </div>
          <p className="mb-6 text-forest-primary">
            Delegates and speakers seeking financial support to attend the congress can submit an Expression of Interest for funding.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="forest-gradient text-white" onClick={() => window.open(links.fundingEoiEN, "_blank", "noopener,noreferrer")}>
              Apply for Funding (EN)
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open(links.fundingEoiES, "_blank", "noopener,noreferrer")}>
              Solicitar Financiamiento (ES)
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.open(links.fundingEoiFR, "_blank", "noopener,noreferrer")}>
              Demander un Financement (FR)
            </Button>
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
