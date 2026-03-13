import PageHeroBanner from "@/components/common/PageHeroBanner";
import PageShell from "@/components/common/PageShell";

const weatherInfo = [
  { label: "Temperature", value: "17-28C (63-82F)" },
  { label: "Rainfall", value: "150-200mm / 10-12 rainy days" },
  { label: "Cloudiness", value: "40-50%" },
  { label: "Sunrise / Sunset", value: "~6:00-6:20 / ~6:00-6:10" },
  { label: "Humidity", value: "70-75%" },
  { label: "Wind", value: "10-15 km/h" },
];

const practicalInfo = [
  {
    question: "What currency is used in Argentina?",
    answer:
      "The official currency is the Argentine Peso (ARS). USD and BRL are commonly accepted in tourist areas. Bring USD cash as backup.",
  },
  {
    question: "How can I get a SIM card or mobile data?",
    answer:
      "Local carriers include Claro, Movistar, and Personal. Prepaid SIMs can be purchased at the airport and local shops.",
  },
  {
    question: "What should I pack?",
    answer:
      "Light clothing, rain jacket/umbrella, comfortable walking shoes, insect repellent, sunscreen, and a light sweater.",
  },
  {
    question: "What electrical plugs are used?",
    answer: "Argentina uses Type C and Type I plugs with 220V / 50Hz. Bring a universal adapter.",
  },
];

const emergencyNumbers = [
  { service: "Emergency (Police/Fire/Ambulance)", number: "911" },
  { service: "Tourist Police", number: "+54 3757 420016" },
  { service: "Hospital SAMIC Iguazu", number: "+54 3757 420288" },
  { service: "Taxi Puerto Iguazu", number: "+54 3757 422008" },
];

const TravelFaqs = () => {
  return (
    <PageShell>
      <PageHeroBanner
        imageSrc="/images/images/titles/travel-faq.jpg"
        title="Travel FAQs"
        subtitle="Practical information for your trip to Puerto Iguazu"
        overlayClassName="bg-black/50"
        align="right"
        mirrored
      />

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">Weather in April</h2>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {weatherInfo.map((item) => (
            <article key={item.label} className="border-l-2 border-forest-primary/70 pl-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-earth-brown">{item.label}</p>
              <p className="mt-1 text-forest-primary">{item.value}</p>
            </article>
          ))}
        </div>

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">Practical Information</h2>
        <div className="mb-12 grid gap-5 md:grid-cols-2">
          {practicalInfo.map((item) => (
            <details key={item.question} className="border-b border-forest-light/40 pb-4">
              <summary className="cursor-pointer font-semibold text-forest-deep">{item.question}</summary>
              <p className="mt-3 text-forest-primary">{item.answer}</p>
            </details>
          ))}
        </div>

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">Useful Phone Numbers</h2>
        <div className="overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest">
          <table className="w-full">
            <thead>
              <tr className="bg-forest-mist/80 text-left">
                <th className="px-6 py-3 text-sm font-semibold text-forest-deep">Service</th>
                <th className="px-6 py-3 text-sm font-semibold text-forest-deep">Number</th>
              </tr>
            </thead>
            <tbody>
              {emergencyNumbers.map((item) => (
                <tr key={item.service} className="border-t border-forest-light/20">
                  <td className="px-6 py-3 text-sm text-forest-primary">{item.service}</td>
                  <td className="px-6 py-3 text-sm font-semibold text-forest-deep">{item.number}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </PageShell>
  );
};

export default TravelFaqs;
