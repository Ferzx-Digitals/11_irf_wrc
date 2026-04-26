import { Phone } from "lucide-react";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import TravelSubNav from "@/components/common/TravelSubNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { emergencyNumbers, practicalInfo, weatherInfo } from "@/content/travel";

const TravelFaqs = () => {
  const leftQAs = practicalInfo.slice(0, 3);
  const rightQAs = practicalInfo.slice(3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <PageHeroBanner
        imageSrc="/images/images/titles/travel-faq.jpg"
        title="Travel FAQs"
        subtitle="Practical information for your trip to Puerto Iguazu"
        overlayClassName="bg-black/55"
        align="right"
        mirrored
      />

      <div className="container mx-auto px-4">
        <TravelSubNav />

        {/* Weather */}
        <div className="mb-16">
          <h2 className="mb-3 text-center text-3xl font-bold text-forest-deep">
            Weather in April
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-forest-primary">
            Puerto Iguazu in April is warm and subtropical with occasional rain showers.
          </p>
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {weatherInfo.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-forest-light/30 bg-card/95 p-5 text-center shadow-forest"
              >
                <span className="mb-2 inline-block text-3xl" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-earth-brown">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-forest-deep">{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Practical Information */}
        <div className="mb-16">
          <h2 className="mb-10 text-center text-3xl font-bold text-forest-deep">
            Practical Information
          </h2>
          <div className="mx-auto grid max-w-6xl gap-x-6 md:grid-cols-2">
            <Accordion type="multiple" className="space-y-3">
              {leftQAs.map((qa, i) => (
                <AccordionItem
                  key={qa.question}
                  value={`left-${i}`}
                  className="overflow-hidden rounded-xl border border-forest-light/40 bg-card px-5 shadow-forest"
                >
                  <AccordionTrigger className="text-left font-semibold text-forest-deep hover:no-underline">
                    {qa.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-forest-primary">
                    {qa.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="multiple" className="space-y-3">
              {rightQAs.map((qa, i) => (
                <AccordionItem
                  key={qa.question}
                  value={`right-${i}`}
                  className="overflow-hidden rounded-xl border border-forest-light/40 bg-card px-5 shadow-forest"
                >
                  <AccordionTrigger className="text-left font-semibold text-forest-deep hover:no-underline">
                    {qa.question}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-forest-primary">
                    {qa.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep">
            Useful Phone Numbers
          </h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest">
            <table className="w-full">
              <thead>
                <tr className="bg-forest-mist/70 text-left">
                  <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Service
                  </th>
                  <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Number
                  </th>
                </tr>
              </thead>
              <tbody>
                {emergencyNumbers.map((item, index) => (
                  <tr
                    key={item.service}
                    className={index % 2 === 0 ? "bg-card" : "bg-forest-mist/20"}
                  >
                    <td className="px-6 py-3 text-sm text-forest-primary">{item.service}</td>
                    <td className="px-6 py-3 text-sm font-semibold text-forest-deep">
                      <a
                        href={`tel:${item.number.replace(/[^\d+]/g, "")}`}
                        className="inline-flex items-center gap-2 hover:underline"
                      >
                        <Phone className="h-3.5 w-3.5 text-forest-primary" />
                        {item.number}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelFaqs;
