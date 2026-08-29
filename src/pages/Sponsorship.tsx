import {
  BadgeDollarSign,
  Download,
  ExternalLink,
  FileText,
  HandCoins,
  HeartHandshake,
  Languages,
  Users,
} from "lucide-react";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import { Button } from "@/components/ui/button";
import { openExternal } from "@/lib/navigation";

const languages = ["English", "Spanish", "French"] as const;

const sponsors = [
  {
    name: "Kimeco",
    logo: "/images/sponsors/kimeco.png",
    url: "",
  },
] as const;

const commercialFolderDownloads = [
  {
    language: "English",
    label: "EN commercial folder",
    href: "/downloads/wrc-2027-commercial-folder-en.pdf",
  },
  {
    language: "Spanish",
    label: "ES carpeta comercial",
    href: "/downloads/wrc-2027-commercial-folder-es.pdf",
  },
  {
    language: "French",
    label: "FR dossier commercial",
    href: "/downloads/wrc-2027-commercial-folder-fr.pdf",
  },
] as const;

const sponsorshipOptions = [
  {
    title: "Sponsor the congress",
    description:
      "Support the 11th IRF World Ranger Congress and help create a global platform for ranger leadership, knowledge sharing, and conservation action.",
    icon: BadgeDollarSign,
    label: "Congress sponsorship links",
    links: {
      English: "https://tinyurl.com/3tpck2mu",
      Spanish: "https://tinyurl.com/2s9jyz6d",
      French: "https://tinyurl.com/mr3em86r",
    },
  },
  {
    title: "Sponsor a ranger",
    description:
      "Help make attendance possible for rangers who would otherwise face financial barriers to joining the congress in Puerto Iguazu.",
    icon: HeartHandshake,
    label: "Ranger sponsorship links",
    links: {
      English: "https://forms.gle/bYpTj2FcLtTkxsPb9",
      Spanish: "https://forms.gle/L7Ep5gy3X34wV9yq5",
      French: "https://forms.gle/uUXRXC3qZE8A5QzT9",
    },
  },
  {
    title: "Do you need sponsorship?",
    description:
      "Complete the expression of interest form if you need support to attend the congress. Forms are available in English, Spanish, and French.",
    icon: FileText,
    label: "Sponsorship EOI links",
    links: {
      English: "https://forms.gle/MTJmr4A3Nogk8GhV8",
      Spanish: "https://forms.gle/MGVH2c7QQtg9Cvtk9",
      French: "https://forms.gle/FGjVWNEqAmNVs55g7",
    },
  },
];

const impactItems = [
  {
    title: "Ranger participation",
    description: "Expand access for frontline rangers and representatives from every IRF region.",
    icon: Users,
  },
  {
    title: "Shared responsibility",
    description: "Connect partners with practical support for the people protecting protected areas.",
    icon: HandCoins,
  },
  {
    title: "Global access",
    description: "Keep sponsorship materials accessible across the congress languages.",
    icon: Languages,
  },
];

const Sponsorship = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <PageHeroBanner
        imageSrc="/images/images/home/banner-3.jpg"
        title="Sponsorship"
        subtitle="Support rangers, strengthen the congress, and help more voices take part in Puerto Iguazu"
        overlayClassName="bg-gradient-to-r from-black/75 via-black/55 to-black/25"
      />

      <div className="container mx-auto px-4">
        <section className="relative mx-auto mb-16 max-w-6xl overflow-hidden rounded-3xl border border-forest-light/30 bg-card/95 shadow-forest">
          <div className="relative grid gap-8 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-earth-brown">
                Sponsorship Opportunities
              </p>
              <h2 className="text-3xl font-bold leading-tight text-forest-deep md:text-5xl">
                Help bring the global ranger community together
              </h2>
            </div>
            <div className="relative">
              <img
                src="/images/toucan.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-6 h-28 w-28 rotate-12 object-contain opacity-20 md:-right-5 md:-top-8 md:h-36 md:w-36"
              />
              <p className="relative z-10 text-base leading-relaxed text-forest-primary md:pr-16 md:text-lg">
                Sponsors play a direct role in widening access to the congress and supporting the
                people who protect nature every day.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 overflow-hidden rounded-3xl border border-forest-light/30 bg-card/95 shadow-forest">
          <div className="grid gap-8 p-7 md:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl forest-gradient text-white">
                <FileText className="h-7 w-7" />
              </div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-earth-brown">
                Commercial Folder
              </p>
              <h2 className="text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
                Download the sponsorship package
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-forest-primary md:text-base">
                Access the official commercial sponsorship folder in the congress languages and
                share it with partners interested in supporting the 11th IRF World Ranger Congress.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {commercialFolderDownloads.map((download) => (
                <Button
                  key={download.href}
                  asChild
                  variant="outline"
                  className="h-auto justify-between border-forest-light/40 bg-forest-mist/40 px-4 py-4 text-left text-forest-deep hover:bg-forest-mist"
                >
                  <a
                    href={download.href}
                    download
                    aria-label={`Download sponsorship package in ${download.language}`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-forest-deep shadow-sm">
                        <FileText className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold">{download.language}</span>
                        <span className="block truncate text-xs font-semibold uppercase tracking-wide text-forest-primary/75">
                          {download.label}
                        </span>
                      </span>
                    </span>
                    <Download className="h-4 w-4 shrink-0 text-forest-primary" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {sponsorshipOptions.map((option) => (
            <article
              key={option.title}
              className="flex min-h-[430px] flex-col rounded-3xl border border-forest-light/30 bg-card/95 p-7 shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl forest-gradient text-white">
                <option.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-2xl font-bold text-forest-deep">{option.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-forest-primary">
                {option.description}
              </p>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-earth-brown">
                  {option.label}
                </p>
                <div className="grid gap-2">
                  {languages.map((language) => (
                    <Button
                      key={`${option.title}-${language}`}
                      type="button"
                      variant="outline"
                      className="justify-between border-forest-light/40 bg-forest-mist/40 text-forest-deep hover:bg-forest-mist"
                      onClick={() => openExternal(option.links[language])}
                    >
                      <span>{language}</span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-forest-primary/80">
                        Open <ExternalLink className="h-3 w-3" />
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <section className="mb-16 overflow-hidden rounded-3xl border border-forest-light/30 bg-card/95 p-8 shadow-forest md:p-10">
          <div className="mb-8 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-earth-brown">
              Our Sponsors
            </p>
            <h2 className="text-3xl font-bold leading-tight text-forest-deep md:text-4xl">
              Thank you to our supporters
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-forest-primary md:text-base">
              Organizations helping make the 11th IRF World Ranger Congress possible.
            </p>
          </div>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">
            {sponsors.map((sponsor) => {
              const card = (
                <div className="flex h-40 w-56 items-center justify-center rounded-2xl border border-forest-light/30 bg-white p-5 transition-smooth hover:-translate-y-1 hover:shadow-floating">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              );

              return sponsor.url ? (
                <a
                  key={sponsor.name}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={sponsor.name}
                >
                  {card}
                </a>
              ) : (
                <div key={sponsor.name}>{card}</div>
              );
            })}
          </div>
        </section>

        <section className="mb-16 rounded-3xl bg-forest-deep px-6 py-12 text-white shadow-forest md:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Sponsorship makes participation possible</h2>
            <p className="mx-auto mt-4 max-w-3xl text-white/85">
              Every contribution helps the congress remain a meeting place for practical knowledge,
              regional representation, and ranger-led solutions.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            {impactItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-forest-deep">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

      </div>
    </section>
  );
};

export default Sponsorship;
