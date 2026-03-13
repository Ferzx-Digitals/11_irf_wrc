import PageHeroBanner from "@/components/common/PageHeroBanner";
import PageShell from "@/components/common/PageShell";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONGRESS_THEME } from "@/constants/site";
import { goToMail } from "@/lib/navigation";

const pressReleases = [
  {
    title: "11th IRF World Ranger Congress Announced",
    date: "February 2026",
    summary: "The International Ranger Federation announces the 11th World Ranger Congress will be held in Argentina.",
  },
  {
    title: "Registration Opens for WRC 2027",
    date: "February 2026",
    summary: "Online registration is now open for rangers and conservation professionals worldwide.",
  },
  {
    title: "Congress Theme Revealed",
    date: "March 2026",
    summary: `"${CONGRESS_THEME}."`,
  },
];

const pressFaqs = [
  {
    question: "Who are rangers?",
    answer:
      "Rangers are frontline conservation workers who protect biodiversity, manage protected areas, and support communities.",
  },
  {
    question: "Why are rangers important for 30x30?",
    answer:
      "Rangers are essential to achieving the global target to protect 30% of the planet by 2030.",
  },
  {
    question: "What is the output of the 11th WRC?",
    answer:
      "The congress will produce the Iguazu Declaration and practical recommendations for ranger communities worldwide.",
  },
];

const Press = () => {
  return (
    <PageShell>
      <PageHeroBanner
        imageSrc="/images/images/titles/press.jpg"
        title="Press & Media"
        subtitle="Media resources and press information for the 11th IRF WRC"
        overlayClassName="bg-black/65"
      />

        <p className="mb-6 text-lg text-forest-primary">
          Media resources and information for the 11th IRF World Ranger Congress.
        </p>

        <div className="mx-auto mb-10 max-w-4xl border-l-4 border-forest-primary pl-6">
          <h2 className="mb-4 text-2xl font-bold text-forest-deep">Press Conference</h2>
          <p className="text-forest-primary">Date: Tuesday 20 April 2027</p>
          <p className="text-forest-primary">Time: 12:00 - 13:00</p>
          <p className="text-forest-primary">Location: Hotel Amerian Portal del Iguazu</p>
          <p className="mt-2 text-sm text-forest-primary/80">
            Remote attendance link will be provided to accredited journalists.
          </p>
        </div>

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">Press Releases</h2>
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          {pressReleases.map((release) => (
            <article key={release.title} className="border-b border-forest-light/40 pb-5">
              <p className="mb-1 text-sm font-semibold text-earth-brown">{release.date}</p>
              <h3 className="mb-2 text-lg font-bold text-forest-deep">{release.title}</h3>
              <p className="text-forest-primary">{release.summary}</p>
            </article>
          ))}
        </div>

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">Photo Gallery</h2>
        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <img
              key={item}
              src={`/images/images/photo_gallery/${item}.jpg`}
              alt={`Gallery ${item}`}
              className="h-40 w-full rounded-xl border border-forest-light/30 object-cover shadow-forest"
            />
          ))}
        </div>

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">Press FAQs</h2>
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          {pressFaqs.map((faq) => (
            <details key={faq.question} className="border-b border-forest-light/40 pb-4">
              <summary className="cursor-pointer font-semibold text-forest-deep">{faq.question}</summary>
              <p className="mt-3 text-forest-primary">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="rounded-2xl border border-forest-light/30 bg-card/95 p-8 text-center shadow-forest">
          <h2 className="mb-3 text-2xl font-bold text-forest-deep">Press Contact</h2>
          <p className="mb-4 text-forest-primary">
            For media inquiries, interview requests, and press accreditation:
          </p>
          <Button variant="outline" onClick={() => goToMail(CONTACT_EMAIL)}>
            {CONTACT_EMAIL}
          </Button>
        </div>
    </PageShell>
  );
};

export default Press;
