import PageHeroBanner from "@/components/common/PageHeroBanner";
import PageShell from "@/components/common/PageShell";
import { Button } from "@/components/ui/button";
import { openExternal } from "@/lib/navigation";

const registrationIncludes = [
  "Full congress access (5 days)",
  "Welcome pack and materials",
  "Simultaneous translations at plenary sessions",
  "Coffee, tea, and lunch during congress days",
  "Field trip participation",
  "Cultural night events",
  "Certificate of Participation",
];

const Register = () => {
  return (
    <PageShell>
      <PageHeroBanner
        imageSrc="/images/images/submit/Banner.jpg"
        title="Register Now"
        subtitle="Secure your place at the 11th IRF World Ranger Congress"
      />

        <p className="mb-6 text-lg text-forest-primary">
          Secure your place at the 11th IRF World Ranger Congress.
        </p>

        <div className="mx-auto mb-10 max-w-lg rounded-3xl border-2 border-forest-light/40 bg-card/95 p-8 text-center shadow-forest">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-earth-brown">Congress Registration</p>
          <div className="mb-3 text-5xl font-bold text-forest-deep">$395</div>
          <p className="mb-6 text-sm text-forest-primary">Single standard fee for all participants.</p>
          <ul className="mb-6 space-y-2 text-left">
            {registrationIncludes.map((item) => (
              <li key={item} className="text-sm text-forest-primary">
                - {item}
              </li>
            ))}
          </ul>
          <p className="mb-6 text-xs text-forest-primary/80">Registration period: 20 February 2026 - 31 March 2027</p>
          <Button
            className="forest-gradient w-full text-white"
            onClick={() => openExternal("https://intercloudy.contilatam.com/2269/world-ranger-congress")}
          >
            Register Now
          </Button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="border-l-4 border-forest-primary/70 pl-4">
            <h3 className="mb-2 text-lg font-bold text-forest-deep">Capacity</h3>
            <p className="text-sm text-forest-primary">Maximum 600 attendees total</p>
            <p className="text-sm text-forest-primary">75 delegates per IRF region</p>
            <p className="text-sm text-forest-primary">150 for host region (Argentina)</p>
          </article>
          <article className="border-l-4 border-forest-primary/70 pl-4">
            <h3 className="mb-2 text-lg font-bold text-forest-deep">Rules</h3>
            <p className="text-sm text-forest-primary">Registration is individual and personal</p>
            <p className="text-sm text-forest-primary">Non-transferable to another person</p>
            <p className="text-sm text-forest-primary">No group registrations</p>
          </article>
          <article className="border-l-4 border-forest-primary/70 pl-4">
            <h3 className="mb-2 text-lg font-bold text-forest-deep">Spouses and Partners</h3>
            <p className="text-sm text-forest-primary">Welcome to attend the congress</p>
            <p className="text-sm text-forest-primary">Same $395 registration fee</p>
            <p className="text-sm text-forest-primary">Can book accommodation together</p>
          </article>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-forest-light/30 bg-card/95 p-8 shadow-forest">
          <h2 className="mb-4 text-2xl font-bold text-forest-deep">Cancellation Policy</h2>
          <div className="space-y-3">
            <div className="rounded-lg bg-green-50 p-4 text-green-800">Up to 6 months before (October 2026): 80% refund</div>
            <div className="rounded-lg bg-yellow-50 p-4 text-yellow-800">Up to 4 months before (December 2026): 50% refund</div>
            <div className="rounded-lg bg-red-50 p-4 text-red-800">Within 2 months (February 2027+): no refund</div>
          </div>
        </div>
    </PageShell>
  );
};

export default Register;
