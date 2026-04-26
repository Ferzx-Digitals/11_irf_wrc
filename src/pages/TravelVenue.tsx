import { Bus, Check, MapPin, Phone, Plane } from "lucide-react";
import PageHeroBanner from "@/components/common/PageHeroBanner";
import TravelSubNav from "@/components/common/TravelSubNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { VENUE } from "@/constants/site";
import {
  additionalHotels,
  basicPackageItems,
  bookingContacts,
  featuredHotels,
  paidTours,
  taxInfo,
} from "@/content/travel";
import { openExternal } from "@/lib/navigation";

const stars = (count: number) => "⭐".repeat(count);

const TravelVenue = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24">
      <PageHeroBanner
        imageSrc="/images/images/titles/venue.jpg"
        title="Venue & Accommodation"
        subtitle="World-class facilities at the heart of the Triple Frontier"
        overlayClassName="bg-black/55"
      />

      <div className="container mx-auto px-4">
        <TravelSubNav />

        {/* Congress Venue + Map */}
        <div className="mx-auto mb-16 grid max-w-6xl items-stretch gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-forest-light/30 bg-card/95 p-8 shadow-forest">
            <h2 className="mb-3 text-2xl font-bold text-forest-deep">Congress Venue</h2>
            <h3 className="mb-4 text-lg font-semibold text-forest-primary">{VENUE.name}</h3>
            <p className="leading-relaxed text-forest-primary">
              The congress venue is located in Puerto Iguazu, Misiones, Argentina, near Iguazu
              Falls and the Atlantic Forest, with facilities for plenary sessions, workshops, and
              cultural events.
            </p>
            <p className="mt-3 text-sm text-forest-primary/80">
              {VENUE.city}, {VENUE.state}, {VENUE.country}
            </p>
          </article>
          <div className="overflow-hidden rounded-2xl border border-forest-light/30 shadow-forest">
            <iframe
              title="Congress Venue Map"
              src={VENUE.mapEmbed}
              className="h-full min-h-[340px] w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Accommodation Update (Amerian partnership) */}
        <section className="relative mx-auto mb-16 max-w-6xl overflow-hidden rounded-3xl border border-forest-light/30 bg-gradient-to-br from-forest-mist/50 to-background shadow-forest">
          <img
            src="/images/images/home/14.png"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-full w-auto object-contain opacity-20"
          />
          <div className="relative p-8 md:p-10">
            <span className="mb-4 inline-flex rounded-full bg-forest-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Accommodation Update
            </span>

            <p className="mb-4 text-forest-primary">
              We are excited to welcome you to the 11th IRF World Ranger Congress in beautiful
              Iguazu, Argentina!
            </p>
            <p className="mb-4 text-forest-primary">
              We have partnered with the AMERIAN PORTAL DEL IGUAZU HOTEL situated right next to
              the Iguazu Convention Centre where the congress will be taking place.
            </p>

            <ul className="mb-6 space-y-2 text-forest-primary">
              <li>🏨 The Amerian Portal del Iguazu Hotel has given all congress participants 13% discount on the daily room rate.</li>
              <li>💰 The standard rate is USD 130 + VAT per room, per night, and applies to single or double rooms.</li>
              <li>🛏️ Triple rooms are not available. An extra bed can be added at USD 60 + VAT per night.</li>
              <li>
                ✉️ Bookings:{" "}
                <a
                  href="mailto:reservasiguazu@amerian.com"
                  className="font-semibold text-forest-primary underline underline-offset-2"
                >
                  reservasiguazu@amerian.com
                </a>
              </li>
            </ul>

            <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="mb-2 font-semibold text-amber-900">🔔 Important to Note</p>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>Registration for the Congress must be completed and paid via the official WRC website.</li>
                <li>Accommodation is to be booked directly by each participant with their preferred establishment.</li>
              </ul>
            </div>

            <p className="font-semibold text-forest-deep">
              We look forward to welcoming rangers from around the world to an unforgettable Congress in Iguazu! 🌎
            </p>
          </div>
        </section>

        {/* Featured Hotels */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep">Featured Hotels</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredHotels.map((hotel) => (
              <article
                key={hotel.name}
                className="flex flex-col rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest"
              >
                <h3 className="mb-1 text-lg font-bold text-forest-deep">{hotel.name}</h3>
                <p className="mb-1 text-sm text-earth-brown">
                  {stars(hotel.stars)} · {hotel.rooms} rooms
                </p>
                <p className="mb-4 text-sm text-forest-primary">{hotel.address}</p>

                <ul className="mb-4 space-y-1.5">
                  {hotel.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-forest-primary"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {hotel.rate && (
                  <div className="mb-4 rounded-lg bg-forest-mist/70 px-3 py-2 text-sm font-semibold text-forest-deep">
                    Rate: {hotel.rate}
                  </div>
                )}

                {(hotel.rateNotes?.length || hotel.services?.length) && (
                  <Accordion type="multiple" className="mb-4">
                    {hotel.rateNotes && hotel.rateNotes.length > 0 && (
                      <AccordionItem
                        value="rate-notes"
                        className="rounded-lg border border-forest-light/30"
                      >
                        <AccordionTrigger className="px-3 py-2 text-sm font-semibold text-forest-deep hover:no-underline">
                          Rate details
                        </AccordionTrigger>
                        <AccordionContent className="px-3 pb-3">
                          <ul className="space-y-1 text-xs text-forest-primary">
                            {hotel.rateNotes.map((note) => (
                              <li key={note}>· {note}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                    {hotel.services && hotel.services.length > 0 && (
                      <AccordionItem
                        value="services"
                        className="mt-2 rounded-lg border border-forest-light/30"
                      >
                        <AccordionTrigger className="px-3 py-2 text-sm font-semibold text-forest-deep hover:no-underline">
                          Services included
                        </AccordionTrigger>
                        <AccordionContent className="px-3 pb-3">
                          <ul className="space-y-1 text-xs text-forest-primary">
                            {hotel.services.map((service) => (
                              <li key={service} className="flex items-start gap-1.5">
                                <Check className="mt-0.5 h-3 w-3 shrink-0 text-forest-primary" />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    )}
                  </Accordion>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto"
                  onClick={() => openExternal(hotel.mapUrl)}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
              </article>
            ))}
          </div>
        </div>

        {/* Additional Hotels */}
        <div className="mb-16">
          <h2 className="mb-6 text-center text-3xl font-bold text-forest-deep">
            Additional Hotels
          </h2>
          <div className="overflow-hidden rounded-2xl border border-forest-light/30 bg-card/95 shadow-forest">
            <table className="w-full">
              <thead>
                <tr className="bg-forest-mist/70 text-left">
                  <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Hotel
                  </th>
                  <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Stars
                  </th>
                  <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Rooms
                  </th>
                  <th className="px-6 py-3 text-sm font-bold uppercase tracking-wide text-forest-deep">
                    Location
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalHotels.map((hotel, index) => (
                  <tr
                    key={hotel.name}
                    className={index % 2 === 0 ? "bg-card" : "bg-forest-mist/20"}
                  >
                    <td className="px-6 py-3 text-sm font-semibold text-forest-deep">
                      {hotel.name}
                    </td>
                    <td className="px-6 py-3 text-sm text-earth-brown">{stars(hotel.stars)}</td>
                    <td className="px-6 py-3 text-sm text-forest-primary">{hotel.rooms}</td>
                    <td className="px-6 py-3 text-sm text-forest-primary">{hotel.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tour Packages */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep">Tour Packages</h2>

          <div className="mb-10 rounded-2xl border border-forest-light/40 bg-forest-mist/40 p-8 shadow-forest">
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex rounded-full bg-forest-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Included
              </span>
              <h3 className="text-xl font-bold text-forest-deep">Basic Package</h3>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {basicPackageItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-forest-primary">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-forest-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="mb-6 text-center text-2xl font-bold text-forest-deep">Optional Tours</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paidTours.map((tour) => (
              <article
                key={tour.name}
                className="flex flex-col rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest"
              >
                <h4 className="mb-2 text-base font-bold text-forest-deep">{tour.name}</h4>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-forest-primary">
                  {tour.description}
                </p>
                <span className="inline-flex w-fit rounded-full bg-forest-mist/70 px-3 py-1 text-xs font-bold text-forest-deep">
                  USD ${tour.price}
                </span>
              </article>
            ))}
          </div>
        </div>

        {/* Transfers */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep">Transfers</h2>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            <article className="flex flex-col items-center rounded-2xl border border-forest-light/30 bg-card/95 p-8 text-center shadow-forest">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-mist/60 text-forest-primary">
                <Plane className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-forest-deep">Airport Transfers</h3>
              <p className="mb-3 text-sm text-forest-primary">
                Transport to and from Cataratas del Iguazu Airport (IGR) is included for
                congress delegates staying at partner hotels.
              </p>
              <span className="inline-flex rounded-full bg-forest-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Included
              </span>
            </article>
            <article className="flex flex-col items-center rounded-2xl border border-forest-light/30 bg-card/95 p-8 text-center shadow-forest">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-mist/60 text-forest-primary">
                <Bus className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-forest-deep">Brazilian Side Transfers</h3>
              <p className="mb-3 text-sm text-forest-primary">
                Optional transfers from Foz do Iguaçu Airport (IGU) across the international
                bridge to Puerto Iguazu.
              </p>
              <span className="inline-flex rounded-full bg-earth-brown/15 px-3 py-1 text-xs font-bold text-earth-brown">
                USD $25 / person
              </span>
            </article>
          </div>
        </div>

        {/* Tax Information */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep">
            Tax Information
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {taxInfo.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-bold text-forest-deep">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-forest-primary">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Booking & Contact */}
        <div>
          <h2 className="mb-8 text-center text-3xl font-bold text-forest-deep">
            Booking & Contact
          </h2>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {bookingContacts.map((contact) => (
              <article
                key={contact.name}
                className="rounded-2xl border border-forest-light/30 bg-card/95 p-6 shadow-forest"
              >
                <h3 className="mb-2 text-lg font-bold text-forest-deep">{contact.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-forest-primary">
                  {contact.description}
                </p>
                <div className="space-y-2 text-sm">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 font-semibold text-forest-primary hover:underline"
                  >
                    ✉️ {contact.email}
                  </a>
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-2 font-semibold text-forest-primary hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      {contact.phone}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelVenue;
