import { Stamp } from "lucide-react";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import TravelSubNav from "@/components/common/TravelSubNav";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { airlines, transportOptions, VISA_PORTAL_URL } from "@/content/travel";
import { openExternal } from "@/lib/navigation";

const Travel = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <PageHeroBanner
        imageSrc="/images/images/titles/travel.jpg"
        title="Plan Your Travel"
        subtitle="Getting to Puerto Iguazu, Argentina — your gateway to the Triple Frontier"
        overlayClassName="bg-black/55"
      />

      <div className="container mx-auto px-4">
        <TravelSubNav />

        {/* Visa Information */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="rounded-3xl border border-sky-blue/30 bg-sky-light/40 p-8 shadow-forest md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-blue/20 text-sky-blue">
                <Stamp className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h2 className="mb-3 text-2xl font-bold text-forest-deep md:text-3xl">
                  Visa Information
                </h2>
                <p className="mb-5 text-forest-primary">
                  Many nationalities can enter Argentina visa-free or obtain an electronic
                  travel authorization (AVE) online. Check the Argentine visa portal for your
                  nationality and start your process early.
                </p>
                <div className="flex justify-start md:justify-end">
                  <Button
                    className="forest-gradient text-white"
                    onClick={() => openExternal(VISA_PORTAL_URL)}
                  >
                    Argentine Visa Portal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Getting to Puerto Iguazu — tabbed */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep">
            Getting to Puerto Iguazu
          </h2>
          <Tabs defaultValue={transportOptions[0].id} className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="flex h-auto flex-wrap justify-center gap-1 rounded-full bg-card p-1 shadow-forest">
                {transportOptions.map((option) => (
                  <TabsTrigger
                    key={option.id}
                    value={option.id}
                    className="rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:bg-forest-primary data-[state=active]:text-white"
                  >
                    <span className="mr-1.5 text-base" aria-hidden="true">
                      {option.icon}
                    </span>
                    {option.shortLabel}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {transportOptions.map((option) => (
              <TabsContent key={option.id} value={option.id} className="mt-0">
                <div className="mx-auto max-w-3xl rounded-2xl border border-forest-light/30 bg-card/95 p-8 shadow-forest">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">
                      {option.icon}
                    </span>
                    <h3 className="text-xl font-bold text-forest-deep">{option.title}</h3>
                  </div>
                  <p className="mb-3 leading-relaxed text-forest-primary">
                    {option.description}
                  </p>
                  <p className="text-sm font-semibold text-earth-brown">{option.details}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Airlines */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep">
            Airlines Serving Iguazu
          </h2>
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6">
            {airlines.map((airline) => (
              <article
                key={airline.name}
                className="w-full max-w-xs rounded-2xl border border-forest-light/30 bg-card/95 p-6 text-center shadow-forest transition-smooth hover:-translate-y-1 hover:shadow-floating sm:w-64"
              >
                <img
                  src={airline.logo}
                  alt={airline.name}
                  className="mx-auto mb-4 h-16 w-16 object-contain"
                />
                <p className="mb-4 font-semibold text-forest-deep">{airline.name}</p>
                <Button variant="outline" size="sm" onClick={() => openExternal(airline.url)}>
                  Visit Website
                </Button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
