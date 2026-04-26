import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, CONGRESS_THEME } from "@/constants/site";
import { goToMail, openExternal } from "@/lib/navigation";

const pressConference = {
  date: "Tuesday 20 April 2027",
  time: "12:00 - 13:00",
  location: "Hotel Amerian Portal del Iguazu",
  note: "Remote attendance link will be provided to accredited journalists.",
};

const pressReleases = [
  {
    title: "11th IRF World Ranger Congress Announced",
    date: "February 2026",
    summary:
      "The International Ranger Federation announces the 11th World Ranger Congress will be held in Argentina.",
  },
  {
    title: "Registration Opens for WRC 2027",
    date: "February 2026",
    summary:
      "Online registration is now open for rangers and conservation professionals worldwide.",
  },
  {
    title: "Congress Theme Revealed",
    date: "March 2026",
    summary: `"${CONGRESS_THEME}" — the theme for the 11th WRC.`,
  },
  {
    title: "Call for Expressions of Interest",
    date: "April 2026",
    summary:
      "Speakers and workshop leaders are invited to submit expressions of interest in English, Spanish, or French.",
  },
];

const pressKits = [
  { label: "Press Kit (English)" },
  { label: "Press Kit (Espanol)" },
  { label: "Press Kit (Francais)" },
];

const galleryImages = Array.from({ length: 17 }, (_, i) => i + 1);
const GALLERY_DOWNLOAD_URL =
  "https://drive.google.com/file/d/1_AasAaggm90wPfQ66F0U0GkjS8fNP-_Z/view?usp=share_link";

const organizers = [
  {
    name: "International Ranger Federation",
    shortName: "IRF",
    logo: "/images/logos/irf.png",
    website: "https://www.internationalrangers.org",
    description:
      "A worldwide, non-profit membership-based organisation established in 1992, representing rangers across 50+ countries on 6 continents.",
  },
  {
    name: "Syndicate of National Rangers of Argentina Republic",
    shortName: "SIGUNARA",
    logo: "/images/logos/sigunara.png",
    website: "https://www.sigunara.org",
    description:
      "The National Rangers union of Argentina, established in 1990 and recognized by the National Government.",
  },
];

const pressFaqs = [
  {
    question: "Who are rangers?",
    answer:
      "Rangers are some of the most essential workers on the planet. They protect and manage the world's protected and conserved areas, covering over 15% of the Earth's land surface and 8% of our oceans. There are an estimated 286,000 rangers worldwide.",
  },
  {
    question: "Why are rangers important for protected areas?",
    answer:
      "Rangers are the frontline defenders of biodiversity. They conduct patrols, monitor wildlife, combat poaching, manage human-wildlife conflict, engage with communities, fight wildfires, and educate visitors. Without rangers, protected areas would face severe degradation.",
  },
  {
    question: "Why do rangers need more resources?",
    answer:
      "Despite their critical role, rangers often work in poor conditions with inadequate pay, limited equipment, insufficient training, and lack of legal protections. Many face daily dangers including armed poachers, wildlife attacks, and extreme weather.",
  },
  {
    question: "What are the main challenges rangers face?",
    answer:
      "Key challenges include inadequate funding, poor working conditions, lack of professional recognition, limited career progression, insufficient training, exposure to violence and trauma, and the growing impacts of climate change on protected areas.",
  },
  {
    question: "What is the goal of the World Ranger Congress?",
    answer:
      "The WRC brings together rangers from around the world to share experiences, build networks, develop solutions, and advance the ranger profession. Each congress produces a declaration addressing key issues facing rangers globally.",
  },
  {
    question: "Why is the WRC important for the 30x30 Framework?",
    answer:
      "The Global Biodiversity Framework aims to protect 30% of the planet by 2030. Rangers are essential to achieving this target. The WRC helps build the capacity and recognition needed for rangers to fulfill this expanded role.",
  },
  {
    question: "What will be the output of the 11th WRC?",
    answer:
      "The 11th WRC will produce the Iguazu Declaration — a landmark statement emphasizing the role of rangers in nature conservation. It will also generate recommendations, action plans, and strengthened partnerships for ranger communities worldwide.",
  },
];

const PhotoGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {galleryImages.map((i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 first:pl-0 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div className="aspect-square overflow-hidden rounded-2xl border border-forest-light/30 bg-forest-mist shadow-forest">
                <img
                  src={`/images/images/photo_gallery/${i}.jpg`}
                  alt={`Congress photo ${i}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          aria-label="Previous photo"
          disabled={!canPrev}
          onClick={() => emblaApi?.scrollPrev()}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Next photo"
          disabled={!canNext}
          onClick={() => emblaApi?.scrollNext()}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Press = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <PageHeroBanner
        imageSrc="/images/images/titles/press.jpg"
        title="Press & Media"
        subtitle="Media resources and press information for the 11th IRF WRC"
        overlayClassName="bg-black/65"
      />

      <div className="container mx-auto px-4">
        {/* Press Conference */}
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-forest-deep">Press Conference</h2>
          <div className="rounded-2xl border border-forest-light/40 bg-card/95 p-8 shadow-forest">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-primary/70">
                  Date
                </p>
                <p className="mt-1 text-lg font-bold text-forest-deep">{pressConference.date}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-primary/70">
                  Time
                </p>
                <p className="mt-1 text-lg font-bold text-forest-deep">{pressConference.time}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-primary/70">
                  Location
                </p>
                <p className="mt-1 text-lg font-bold text-forest-deep">{pressConference.location}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-primary/70">
                  Remote Access
                </p>
                <p className="mt-1 text-sm text-forest-primary">{pressConference.note}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Press Kit */}
        <div className="mb-16 rounded-3xl border border-forest-light/30 bg-forest-mist/30 p-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-forest-deep">Press Kit</h2>
          <p className="mx-auto mb-8 max-w-2xl text-forest-primary">
            Download the official press kit with logos, photos, and background information.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {pressKits.map((kit) => (
              <span
                key={kit.label}
                className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-forest-light/40 bg-card px-5 py-2.5 text-sm font-semibold text-forest-primary/70"
              >
                {kit.label} — Coming Soon
              </span>
            ))}
          </div>
        </div>

        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-forest-deep">Press Releases</h2>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
            {pressReleases.map((release) => (
              <article
                key={release.title}
                className="flex flex-col rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest"
              >
                <p className="mb-2 text-sm font-semibold text-earth-brown">{release.date}</p>
                <h3 className="mb-2 text-lg font-bold text-forest-deep">{release.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-forest-primary">
                  {release.summary}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    EN
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    ES
                  </Button>
                  <Button variant="outline" size="sm" disabled>
                    FR
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h2 className="mb-3 text-center text-3xl font-bold text-forest-deep">Photo Gallery</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-forest-primary">
            High-resolution photos available for editorial use.
          </p>
          <PhotoGallery />
          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="forest-gradient text-white"
              onClick={() => openExternal(GALLERY_DOWNLOAD_URL)}
            >
              <Download className="mr-2 h-4 w-4" />
              Download All Photos
            </Button>
          </div>
        </div>

        {/* Ranger Explainers */}
        <div className="mb-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-forest-deep">Who Are Rangers?</h2>
            <p className="leading-relaxed text-forest-primary">
              Rangers are some of the most essential workers on the planet. There are an estimated
              286,000 rangers worldwide who protect and manage protected and conserved areas. They
              patrol vast territories, monitor wildlife populations, combat illegal activities,
              manage human-wildlife conflict, educate visitors, and engage with local communities.
              Despite their critical role, rangers often face poor working conditions, inadequate
              pay, and insufficient recognition.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-forest-deep">Why Are Rangers Important?</h2>
            <p className="leading-relaxed text-forest-primary">
              Rangers are the frontline defenders of biodiversity. They protect over 15% of the
              Earth's land surface and 8% of our oceans. As the world works toward the 30x30
              Framework — protecting 30% of the planet by 2030 — the role of rangers becomes even
              more critical. Without well-trained, well-equipped, and well-supported rangers,
              conservation goals cannot be achieved. Investing in rangers is investing in the future
              of our planet.
            </p>
          </div>
        </div>

        {/* Press FAQs */}
        <div className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-forest-deep">Press FAQs</h2>
          <div className="mx-auto grid max-w-6xl gap-x-6 md:grid-cols-2">
            <Accordion type="multiple" className="space-y-3">
              {pressFaqs.slice(0, 4).map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`left-${i}`}
                  className="overflow-hidden rounded-xl border border-forest-light/40 bg-card px-5 shadow-forest"
                >
                  <AccordionTrigger className="text-left font-semibold text-forest-deep hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-forest-primary leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="multiple" className="space-y-3">
              {pressFaqs.slice(4).map((faq, i) => (
                <AccordionItem
                  key={faq.question}
                  value={`right-${i}`}
                  className="overflow-hidden rounded-xl border border-forest-light/40 bg-card px-5 shadow-forest"
                >
                  <AccordionTrigger className="text-left font-semibold text-forest-deep hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-forest-primary leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Organizers */}
        <div className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-forest-deep">Organizers</h2>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {organizers.map((org) => (
              <div
                key={org.shortName}
                className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 text-center shadow-forest"
              >
                <img
                  src={org.logo}
                  alt={org.shortName}
                  className="mx-auto mb-4 h-24 w-auto object-contain"
                />
                <h3 className="mb-2 text-lg font-bold text-forest-deep">{org.name}</h3>
                <p className="mb-3 text-sm leading-relaxed text-forest-primary">
                  {org.description}
                </p>
                <a
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-forest-primary hover:underline"
                >
                  Visit Website &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Press Contact */}
        <div className="mx-auto max-w-3xl rounded-3xl border border-forest-light/30 bg-card/95 p-10 text-center shadow-forest">
          <h2 className="mb-3 text-2xl font-bold text-forest-deep">Press Contact</h2>
          <p className="mb-5 text-forest-primary">
            For media inquiries, interview requests, and press accreditation:
          </p>
          <Button variant="outline" size="lg" onClick={() => goToMail(CONTACT_EMAIL)}>
            {CONTACT_EMAIL}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Press;
