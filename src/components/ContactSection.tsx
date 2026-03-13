import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import { useWindowScrollY } from "@/hooks/useWindowScrollY";
import { Handshake, Mail, MapPin, Newspaper, Send } from "lucide-react";
import { CONTACT_EMAIL, VENUE } from "@/constants/site";

const SPONSORSHIP_PROSPECTUS = "https://tinyurl.com/3tpck2mu";
const CONTACT_FORM_SUBMIT_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfCOCyNQAADG5KIr1xuEHoZ52cmSQ49lqhXXcglhCkSyvgcgA/formResponse";
const CONTACT_FORM_ENTRY_IDS = {
  name: "entry.161644429",
  email: "entry.1094874600",
  subject: "entry.296963116",
  message: "entry.39967172",
};

const ContactSection = () => {
  const scrollY = useWindowScrollY();
  const { ref: sectionRef, isVisible } = useRevealOnScroll<HTMLElement>(0.15);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = new URLSearchParams();

    payload.append(CONTACT_FORM_ENTRY_IDS.name, String(data.get("name") ?? ""));
    payload.append(CONTACT_FORM_ENTRY_IDS.email, String(data.get("email") ?? ""));
    payload.append(CONTACT_FORM_ENTRY_IDS.subject, String(data.get("subject") ?? ""));
    payload.append(CONTACT_FORM_ENTRY_IDS.message, String(data.get("message") ?? ""));

    try {
      await fetch(CONTACT_FORM_SUBMIT_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
      setStatus({ message: "Message sent successfully! We'll get back to you soon.", isError: false });
      form.reset();
    } catch {
      setStatus({ message: "Something went wrong. Please try again or email us directly.", isError: true });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 earth-gradient">
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 h-40 w-40 rounded-full bg-forest-light opacity-10"
          style={{ transform: `translateY(${scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})` }}
        />
        <div
          className="absolute bottom-20 right-20 h-32 w-32 rounded-full bg-gold-warm opacity-15"
          style={{ transform: `translateX(${scrollY * -0.05}px) rotate(${scrollY * 0.02}deg)` }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className={`mb-16 text-center ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-20"}`}>
            <h1 className="text-4xl font-bold text-white md:text-6xl">Contact Us</h1>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-white/85">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>

          <div className="mb-16 grid gap-12 lg:grid-cols-2">
            <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-20"}`}>
              <h2 className="mb-6 text-2xl font-bold text-white">Send Us a Message</h2>

              {status && (
                <div className={`mb-5 rounded-lg p-4 ${status.isError ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/90">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full rounded-lg border border-white/20 bg-white/95 px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-forest-primary/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/90">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-white/20 bg-white/95 px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-forest-primary/30"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1 block text-sm font-medium text-white/90">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-white/20 bg-white/95 px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-forest-primary/30"
                  >
                    <option>General Inquiry</option>
                    <option>Registration</option>
                    <option>Sponsorship</option>
                    <option>Press &amp; Media</option>
                    <option>Volunteering</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/90">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="How can we help you?"
                    className="w-full resize-y rounded-lg border border-white/20 bg-white/95 px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-forest-primary/30"
                  />
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="forest-gradient px-8 text-white shadow-forest">
                  <Send className="mr-2 h-5 w-5" />
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0 translate-x-20"}`}>
              <h2 className="mb-6 text-2xl font-bold text-white">Get in Touch</h2>

              <div className="mb-8 space-y-4 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white hover:underline">{CONTACT_EMAIL}</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Venue</p>
                    <p className="font-semibold text-white">{VENUE.name}</p>
                    <p className="text-sm text-white/80">{VENUE.city}, {VENUE.state}, {VENUE.country}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <article className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-bold text-white">General Inquiries</h3>
                      <p className="mb-2 text-sm text-white/80">Questions about the congress, registration, or logistics.</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-semibold text-white hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <Handshake className="mt-1 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-bold text-white">Sponsorship</h3>
                      <p className="mb-2 text-sm text-white/80">Interested in sponsoring the congress? Get the sponsorship prospectus.</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-semibold text-white hover:underline">{CONTACT_EMAIL}</a>
                        <a href={SPONSORSHIP_PROSPECTUS} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:underline">
                          Download Prospectus →
                        </a>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                  <div className="flex items-start gap-3">
                    <Newspaper className="mt-1 h-5 w-5 text-white" />
                    <div>
                      <h3 className="font-bold text-white">Press &amp; Media</h3>
                      <p className="mb-2 text-sm text-white/80">Media inquiries, press accreditation, and interview requests.</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-semibold text-white hover:underline">{CONTACT_EMAIL}</a>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className={`${isVisible ? "animate-fade-up" : "opacity-0 translate-y-20"}`}>
            <h2 className="mb-6 text-center text-3xl font-bold text-white">Find Us</h2>
            <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-floating backdrop-blur">
              <iframe
                title="Congress Venue Location"
                src={VENUE.mapEmbed}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;