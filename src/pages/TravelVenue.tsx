import PageHeroBanner from "@/components/common/PageHeroBanner";
import PageShell from "@/components/common/PageShell";
import PageIntro from "@/components/common/PageIntro";
import { CONTACT_EMAIL, VENUE } from "@/constants/site";

const featuredHotels = [
  {
    name: "Hotel Amerian Portal del Iguazu",
    stars: 5,
    rooms: 117,
    address: "Av. Tres Fronteras 780, Puerto Iguazu",
    rate: "USD 130 + VAT",
  },
  {
    name: "Iguazu Grand Resort Spa & Casino",
    stars: 5,
    rooms: 122,
    address: "Ruta 12 Km 1640, Puerto Iguazu",
    rate: "N/A",
  },
  {
    name: "Loi Suites Iguazu Hotel",
    stars: 5,
    rooms: 162,
    address: "Selva Iryapu S/N, Puerto Iguazu",
    rate: "N/A",
  },
];

const paidTours = [
  "Iguazu Falls - Brazilian Side (USD 45)",
  "Bird Park / Parque das Aves (USD 20)",
  "Iguazu Falls + Bird Park Combo (USD 55)",
  "Itaipu Dam (USD 45)",
  "Moonlight Walk - Iguazu Falls (USD 50)",
  "Wanda Mines (USD 35)",
];

const TravelVenue = () => {
  return (
    <PageShell>
      <PageHeroBanner
        imageSrc="/images/images/titles/venue.jpg"
        title="Venue & Accommodation"
        subtitle="World-class facilities at the heart of the Triple Frontier"
        overlayClassName="bg-black/55"
      />

        <PageIntro
          eyebrow="Plan Travel"
          title="Venue and Accommodation"
          description="Congress venue, hotel options, tour packages, and practical booking information."
        />

        <div className="mb-12 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl border border-forest-light/30 bg-card/95 p-8 shadow-forest">
            <h2 className="mb-3 text-2xl font-bold text-forest-deep">Congress Venue</h2>
            <h3 className="mb-3 text-lg font-semibold text-forest-primary">{VENUE.name}</h3>
            <p className="text-forest-primary">
              The congress venue is located in Puerto Iguazu, Misiones, Argentina, near Iguazu Falls and the
              Atlantic Forest, with facilities for plenary sessions, workshops, and cultural events.
            </p>
          </article>
          <div className="overflow-hidden rounded-2xl border border-forest-light/30 shadow-forest">
            <iframe
              title="Congress Venue Map"
              src={VENUE.mapEmbed}
              className="h-[340px] w-full"
              loading="lazy"
            />
          </div>
        </div>

        <section className="relative mb-12 overflow-hidden rounded-3xl border border-forest-light/30 bg-gradient-to-br from-forest-mist/50 to-background shadow-forest">
          <img
            src="/images/images/home/14.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-auto opacity-20 object-contain"
          />
          <div className="relative p-8 md:p-10">
            <h3 className="mb-4 text-2xl font-bold text-forest-deep">Accommodation Update</h3>

            <p className="mb-4 text-forest-primary">
              We are excited to welcome you to the 11th IRF World Ranger Congress in beautiful Iguazu, Argentina!
            </p>
            <p className="mb-4 text-forest-primary">
              When it comes to accommodation, we have great news to share.
            </p>
            <p className="mb-4 text-forest-primary">
              We have partnered with the AMERIAN PORTAL DEL IGUAZU HOTEL situated right next to the Iguazu Convention
              Centre where the congress will be taking place.
            </p>

            <ul className="mb-5 space-y-2 text-forest-primary">
              <li>🏨 The Amerian Portal del Iguazu Hotel has given all congress participants 13% discount on the daily room rate.</li>
              <li>💰 The standard rate is USD 130 + VAT per room, per night, and applies to single or double rooms.</li>
              <li>🛏️ Triple rooms are not available. An extra bed can be added to the room at an additional cost of USD 60 + VAT per night.</li>
              <li>
                ✉️ You can make your booking directly with them at{" "}
                <a
                  href="mailto:reservasiguazu@amerian.com"
                  className="font-semibold text-forest-primary underline underline-offset-2"
                >
                  reservasiguazu@amerian.com
                </a>.
              </li>
            </ul>

            <p className="mb-4 text-forest-primary">
              We also have a great selection of suggested hotels below to choose from.
            </p>

            <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="mb-2 font-semibold text-amber-900">🔔 Important to Note</p>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>Registration for the Congress must be completed and paid via the official WRC website.</li>
                <li>Accommodation is to be booked directly by each participant with their preferred establishment.</li>
              </ul>
            </div>

            <p className="mb-4 text-forest-primary">
              This approach allows you to plan your stay in a way that works best for your budget, travel schedule,
              and comfort level - while still enjoying the convenience of being close to the Congress activities.
            </p>
            <p className="font-semibold text-forest-deep">
              We look forward to welcoming rangers from around the world to an unforgettable Congress in Iguazu! 🌎
            </p>
          </div>
        </section>

        <h2 className="mb-6 text-3xl font-bold text-forest-deep">Featured Hotels</h2>
        <div className="mb-12 grid gap-5 md:grid-cols-3">
          {featuredHotels.map((hotel) => (
            <article key={hotel.name} className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest">
              <h3 className="mb-1 text-lg font-bold text-forest-deep">{hotel.name}</h3>
              <p className="mb-1 text-sm text-earth-brown">
                {"⭐".repeat(hotel.stars)} • {hotel.rooms} rooms
              </p>
              <p className="mb-1 text-sm text-forest-primary">{hotel.address}</p>
              <p className="text-sm font-semibold text-forest-primary">Rate: {hotel.rate}</p>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-forest-light/30 bg-card/95 p-8 shadow-forest">
          <h2 className="mb-3 text-2xl font-bold text-forest-deep">Tour Packages</h2>
          <p className="mb-4 text-forest-primary">Optional tours available at additional cost:</p>
          <ul className="grid gap-2 md:grid-cols-2">
            {paidTours.map((tour) => (
              <li key={tour} className="text-forest-primary">
                - {tour}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest">
            <h3 className="mb-2 text-xl font-bold text-forest-deep">Booking & Contact</h3>
            <p className="text-forest-primary">Full Service EVT (Official Travel Agency)</p>
            <p className="text-forest-primary">Email: fullserviceevt@gmail.com</p>
            <p className="text-forest-primary">Phone: +54 3757 423721</p>
          </article>
          <article className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest">
            <h3 className="mb-2 text-xl font-bold text-forest-deep">IRF Congress Office</h3>
            <p className="text-forest-primary">General congress inquiries and registration support.</p>
            <p className="mt-2 text-forest-primary">Email: {CONTACT_EMAIL}</p>
          </article>
        </div>
    </PageShell>
  );
};

export default TravelVenue;
