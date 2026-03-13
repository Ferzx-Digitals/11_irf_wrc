import { useMemo, useState } from "react";
import { ChevronDown, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageIntro from "@/components/common/PageIntro";
import { CONTACT_EMAIL, CONGRESS_THEME } from "@/constants/site";
import { goToMail, goToPath } from "@/lib/navigation";

type FaqCategory = "registration" | "accommodation" | "general" | "payment" | "sponsorship";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: FaqCategory;
  button_text?: string;
  button_href?: string;
}

const categories: Array<{ id: FaqCategory | "all"; label: string }> = [
  { id: "all", label: "All Questions" },
  { id: "registration", label: "Registration" },
  { id: "accommodation", label: "Accommodation" },
  { id: "general", label: "General" },
  { id: "payment", label: "Payment" },
  { id: "sponsorship", label: "Sponsorship" },
];

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "How do I register for the Congress?",
    answer:
      "Visit the website and navigate to the Registration section. Complete the registration form and proceed with payment via Mercado Pago (Argentina) or PayPal (international).",
    category: "registration",
  },
  {
    id: 2,
    question: "What is the registration cost?",
    answer:
      "$395 USD per person. Registration is open from 20 February 2026 until 31 March 2027. There is a cap of 75 delegates per region and 150 for the host region, with a total maximum of 600 attendees.",
    category: "registration",
  },
  {
    id: 3,
    question: "Are there any discounts available?",
    answer: "No, there is a single standard fee of $395 USD for all participants to ensure fairness and equality.",
    category: "registration",
  },
  {
    id: 4,
    question: "What is the cancellation policy?",
    answer:
      "Up to 6 months before the congress (October 2026): 80% refund. Up to 4 months before (December 2026): 50% refund. Within 2 months of the congress (February 2027): no refund.",
    category: "registration",
  },
  {
    id: 5,
    question: "Do I need to be a ranger to attend?",
    answer:
      "No. The congress is open to conservation professionals, wildlife experts, researchers, policymakers, NGO representatives, and community members passionate about conservation.",
    category: "general",
  },
  {
    id: 6,
    question: "How do I apply for a visa to Argentina?",
    answer:
      "Check your visa requirements through the Argentine visa portal. Many nationalities can obtain an electronic travel authorization (AVE) online.",
    category: "general",
  },
  {
    id: 7,
    question: "What languages will be used at the Congress?",
    answer:
      "The primary language is English. Simultaneous translation to French and Spanish will be provided during plenary sessions. Volunteer translators may assist during workshops and field trips.",
    category: "general",
  },
  {
    id: 8,
    question: "Is there funding available for speakers?",
    answer:
      'Yes. Expressions of Interest forms are available for delegates seeking funding support: <a href="https://forms.gle/MTJmr4A3Nogk8GhV8" target="_blank" rel="noopener">English</a>, <a href="https://forms.gle/MGVH2c7QQtg9Cvtk9" target="_blank" rel="noopener">Spanish</a>, <a href="https://forms.gle/FGjVWNEqAmNVs55g7" target="_blank" rel="noopener">French</a>.',
    category: "sponsorship",
  },
  {
    id: 9,
    question: "Can my spouse or partner attend?",
    answer: "Yes. Spouses and partners pay the same $395 registration fee and take a registration spot.",
    category: "registration",
  },
  {
    id: 10,
    question: "What does the registration with accommodation include?",
    answer:
      "Transport to and from the airport, welcome pack, full congress access, simultaneous translations at plenaries, coffee and tea service, lunch, field trips, hotel room (18-24 April 2027), breakfast, dinner, and evening function access.",
    category: "accommodation",
  },
  {
    id: 11,
    question: "Where will accommodation be?",
    answer:
      "The main accommodation is at Hotel Amerian Portal del Iguazu, a 5-star hotel with 117 rooms, located at Av. Tres Fronteras 780. Dates: 18-24 April 2027.",
    category: "accommodation",
  },
  {
    id: 12,
    question: "What activities are available for non-attending spouses?",
    answer:
      "Puerto Iguazu offers numerous attractions including Iguazu Falls, bird parks, gemstone mines, and Jesuit missions. Tourist information will be available at the venue.",
    category: "general",
  },
  {
    id: 13,
    question: "Where can I find more information?",
    answer:
      "Visit the WRC website, IRF website, and follow us on Facebook, Instagram, LinkedIn, and SIGUNARA social media channels.",
    category: "general",
  },
  {
    id: 14,
    question: "Are there limitations to registrations?",
    answer:
      "Yes. Maximum 600 total attendees, 75 per region, and 150 for the host region (Argentina). Registration is individual and personal, non-transferable.",
    category: "registration",
  },
  {
    id: 15,
    question: "What payment methods are accepted?",
    answer:
      "Argentina: Mercado Pago (ARS) or bank transfer. International: PayPal (USD). We advise avoiding American Express and Mastercard due to high fees. Bank transfer is recommended for South American delegates.",
    category: "payment",
  },
  {
    id: 16,
    question: "Can I volunteer at the Congress?",
    answer:
      "Yes! We are accepting volunteers, especially multilingual individuals. Contact wrc@internationalrangers.org for more information.",
    category: "general",
  },
  {
    id: 17,
    question: "How does sponsorship work?",
    answer:
      'Sponsorship follows a tiered approach: Platinum, Gold, Silver, and Bronze. Download the sponsorship prospectus: <a href="https://tinyurl.com/3tpck2mu" target="_blank" rel="noopener">English</a>, <a href="https://tinyurl.com/2s9jyz6d" target="_blank" rel="noopener">Spanish</a>, <a href="https://tinyurl.com/mr3em86r" target="_blank" rel="noopener">French</a>.',
    category: "sponsorship",
  },
  {
    id: 18,
    question: "Can my partner stay at the hotel without attending the congress?",
    answer: "Yes. Partners can book accommodation separately at the congress hotel.",
    category: "accommodation",
  },
  {
    id: 19,
    question: "Can my partner attend the congress with me?",
    answer:
      "Yes. Your partner pays the same $395 registration fee and can book accommodation together with you.",
    category: "registration",
  },
  {
    id: 20,
    question: "Can I get a private room?",
    answer: "Private room options are being arranged. Contact us for more details and availability.",
    category: "accommodation",
  },
  {
    id: 21,
    question: "Can I attend without staying at the congress hotel?",
    answer:
      "Yes, but breakfast and dinner at the venue will not be included. Evening function attendance would need to be booked separately.",
    category: "accommodation",
  },
  {
    id: 22,
    question: "Can I stay at alternative accommodation?",
    answer:
      "Yes, alternative accommodation is available in Puerto Iguazu. However, transport and meals would be at your own expense.",
    category: "accommodation",
  },
  {
    id: 23,
    question: "Who is the IRF?",
    answer:
      "The International Ranger Federation is a worldwide, non-profit membership-based organisation established in 1992, representing rangers across 50+ countries on 6 continents and 7 regions.",
    category: "general",
  },
  {
    id: 24,
    question: "Who is SIGUNARA?",
    answer:
      "The Syndicate of National Rangers of Argentina Republic (SIGUNARA), established in 1990, is Argentina's National Rangers union recognized by the National Government.",
    category: "general",
  },
  {
    id: 25,
    question: "What is the best payment method?",
    answer:
      "We advise avoiding American Express and Mastercard due to high international fees. Bank transfer is recommended for South American delegates.",
    category: "payment",
  },
  {
    id: 26,
    question: "Are donation coupons available?",
    answer: "Donation options are being finalized. Please check back for updates.",
    category: "sponsorship",
  },
  {
    id: 27,
    question: "What is the World Ranger Congress?",
    answer:
      "The WRC is an initiative of the International Ranger Federation, co-hosted with a local ranger association, held every 3-4 years in a different global region.",
    category: "general",
  },
  {
    id: 28,
    question: "What are the congress details?",
    answer:
      "The 11th IRF World Ranger Congress takes place in Puerto Iguazu, Misiones, Argentina from 19-23 April 2027, with up to 600 rangers and conservation professionals.",
    category: "general",
  },
  {
    id: 29,
    question: "What is the congress theme?",
    answer:
      `"${CONGRESS_THEME}" — focusing on improved working conditions, better equipment and training, and empowering rangers for biodiversity protection.`,
    category: "general",
  },
  {
    id: 30,
    question: "What are the congress objectives?",
    answer:
      "Skills development, knowledge sharing, building partnerships, and finding strategic conservation ways through four key pillars: Ranger Recognition & 30x30, Ranger Experiences, Ranger Solutions, and the Ranger Declaration.",
    category: "general",
  },
  {
    id: 31,
    question: "Is there an investment opportunity?",
    answer:
      'Yes. Sponsorship tiers are available: Platinum, Gold, Silver, and Bronze. Download the sponsorship prospectus: <a href="https://tinyurl.com/3tpck2mu" target="_blank" rel="noopener">English</a>, <a href="https://tinyurl.com/2s9jyz6d" target="_blank" rel="noopener">Spanish</a>, <a href="https://tinyurl.com/mr3em86r" target="_blank" rel="noopener">French</a>.',
    category: "sponsorship",
  },
  {
    id: 32,
    question: "How can I sponsor a ranger?",
    answer:
      'Fill out the Sponsor a Ranger form: <a href="https://forms.gle/bYpTj2FcLtTkxsPb9" target="_blank" rel="noopener">English</a>, <a href="https://forms.gle/L7Ep5gy3X34wV9yq5" target="_blank" rel="noopener">Spanish</a>, <a href="https://forms.gle/uUXRXC3qZE8A5QzT9" target="_blank" rel="noopener">French</a>. The estimated cost per ranger is: Registration $395, Travel ~$1,000, Accommodation ~$650.',
    category: "sponsorship",
  },
];

const Faq = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategory | "all">("all");

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return faqItems.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const searchable = `${item.question} ${item.answer}`.toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || searchable.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background py-24">
      <img
        src="/images/home/22.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-32 h-[560px] w-auto opacity-15"
      />

      <div className="container relative z-10 mx-auto px-4">
        <PageIntro
          eyebrow="Support"
          title="How Can We Help You?"
          description="Find answers to the most common questions about the Congress."
        />

        <div className="mx-auto mb-8 max-w-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-forest-primary/60" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search questions..."
              className="w-full rounded-xl border border-forest-light/40 bg-card px-12 py-4 text-forest-deep shadow-forest outline-none focus:ring-2 focus:ring-forest-primary/30"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => {
            const active = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-smooth ${
                  active
                    ? "bg-forest-primary text-white"
                    : "bg-card text-forest-primary/80 hover:bg-forest-mist"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="columns-1 gap-4 md:columns-2">
          {filteredItems.map((item) => (
            <details
              key={item.id}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-forest-light/40 bg-card shadow-forest group"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-semibold text-forest-deep hover:bg-forest-mist/40">
                <span className="pr-4">{item.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-forest-primary/70 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div
                className="px-5 pb-4 text-sm leading-relaxed text-forest-primary [&_a]:font-semibold [&_a]:text-forest-primary [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
              {item.button_text && item.button_href && (
                <div className="px-5 pb-4">
                  <a
                    href={item.button_href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-forest-primary px-4 py-2 text-sm font-semibold text-white hover:bg-forest-deep"
                  >
                    {item.button_text}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              )}
            </details>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="rounded-xl border border-forest-light/30 bg-card py-12 text-center">
            <p className="text-lg text-forest-primary">No questions match your search.</p>
            <p className="mt-2 text-sm text-forest-primary/70">Try different keywords or browse by category.</p>
          </div>
        )}

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-forest-light/30 bg-card/95 p-10 text-center shadow-forest">
          <h2 className="mb-4 text-3xl font-bold text-forest-deep">Still have questions?</h2>
          <p className="mb-6 text-forest-primary">
            Can&apos;t find what you&apos;re looking for? Reach out to our team directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="forest-gradient text-white" onClick={() => goToPath("/contact")}>
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => goToMail(CONTACT_EMAIL)}
            >
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
