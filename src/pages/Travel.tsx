import PageHeroBanner from "@/components/common/PageHeroBanner";
import PageShell from "@/components/common/PageShell";
import { Button } from "@/components/ui/button";
import { openExternal } from "@/lib/navigation";

const transportOptions = [
  {
    title: "By Air - Cataratas del Iguazu Airport (IGR)",
    description:
      "The closest airport is IGR, around 20km from Puerto Iguazu city center. Multiple daily flights from Buenos Aires (about 1h 50min).",
    details: "Airlines: Aerolineas Argentinas, Flybondi, JetSMART",
  },
  {
    title: "Via Brazil - Foz do Iguacu Airport (IGU)",
    description:
      "IGU on the Brazilian side is another option. About 30-45 minutes by taxi from Puerto Iguazu across the international bridge.",
    details: "International connections via Sao Paulo and Rio de Janeiro",
  },
  {
    title: "By Bus",
    description:
      "Long-distance buses from Buenos Aires to Puerto Iguazu. Journey time is approximately 18-20 hours.",
    details: "Companies: Via Bariloche, Crucero del Norte, Rio Uruguay",
  },
  {
    title: "By Car",
    description:
      "Drive from Buenos Aires via National Route 12. Total distance is around 1,300km (about 16-18 hours).",
    details: "Route: Buenos Aires -> Zarate -> Parana -> Posadas -> Puerto Iguazu",
  },
  {
    title: "Via Paraguay",
    description:
      "Cross from Ciudad del Este through the Friendship Bridge to Foz do Iguacu, then cross to Puerto Iguazu.",
    details: "Border crossings open 24/7; bring a valid passport",
  },
];

const Travel = () => {
  return (
    <PageShell>
      <PageHeroBanner
        imageSrc="/images/images/titles/travel.jpg"
        title="Plan Your Travel"
        subtitle="Getting to Puerto Iguazu, Argentina - your gateway to the Triple Frontier"
        overlayClassName="bg-black/55"
      />

        <div className="mx-auto mb-12 grid max-w-5xl items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="mb-4 border-l-4 border-forest-primary pl-4 text-3xl font-bold text-forest-deep">
              Visa Information
            </h2>
            <p className="mb-5 text-forest-primary">
              Many nationalities can enter Argentina visa-free or obtain an electronic travel authorization online.
              Check the Argentine visa portal for your nationality and start your process early.
            </p>
            <Button onClick={() => openExternal("https://www.migraciones.gob.ar/accesible/indexdnm.php?visas")}>
              Argentine Visa Portal
            </Button>
          </div>
          <img src="/images/images/home/18.png" alt="" className="h-56 w-full object-contain opacity-80" />
        </div>

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">Getting to Puerto Iguazu</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {transportOptions.map((option) => (
            <article key={option.title} className="border-b border-forest-light/40 pb-4">
              <h3 className="mb-2 text-lg font-bold text-forest-deep">{option.title}</h3>
              <p className="mb-2 text-forest-primary">{option.description}</p>
              <p className="text-sm text-earth-brown">{option.details}</p>
            </article>
          ))}
        </div>

        <h2 className="mb-6 mt-14 text-3xl font-bold text-forest-deep">Airlines Serving Iguazu</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { name: "Aerolineas Argentinas", logo: "/images/images/airlines/aerolineas-argentinas.png", url: "https://www.aerolineas.com.ar" },
            { name: "Flybondi", logo: "/images/images/airlines/flybondi.png", url: "https://www.flybondi.com" },
            { name: "JetSMART", logo: "/images/images/airlines/jetsmart.png", url: "https://www.jetsmart.com" },
          ].map((airline) => (
            <article key={airline.name} className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 text-center shadow-forest">
              <img src={airline.logo} alt={airline.name} className="mx-auto mb-3 h-14 w-14 object-contain" />
              <p className="mb-3 font-semibold text-forest-deep">{airline.name}</p>
              <Button variant="outline" onClick={() => openExternal(airline.url)}>
                Visit Website
              </Button>
            </article>
          ))}
        </div>
    </PageShell>
  );
};

export default Travel;
