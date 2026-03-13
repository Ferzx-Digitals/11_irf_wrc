import { BadgeCheck, CalendarRange, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import InfoCard from "@/components/common/InfoCard";
import PageIntro from "@/components/common/PageIntro";
import { CONTACT_EMAIL } from "@/constants/site";
import { goToMail } from "@/lib/navigation";

const Tickets = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background py-24">
      <div className="container mx-auto px-4">
        <PageIntro
          eyebrow="Participation"
          title="Tickets and Registration"
          description="Registration details will open in phases. Share your interest now to receive the official launch notice."
        />

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <InfoCard
            icon={CalendarRange}
            title="Registration Waves"
            description="Early, standard, and partner allocations will be announced ahead of the event."
          />
          <InfoCard
            icon={BadgeCheck}
            title="Delegate Access"
            description="Program attendance, thematic sessions, and networking opportunities."
          />
          <InfoCard
            icon={Mail}
            title="Priority Updates"
            description="Receive ticket release alerts and practical travel information."
          />
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-forest-light/40 bg-card/95 p-10 text-center shadow-forest">
          <h2 className="mb-4 text-3xl font-bold text-forest-deep">Register Interest</h2>
          <p className="mb-8 text-lg text-forest-primary">
            Contact the organizing team to join the early notification list.
          </p>
          <Button
            size="lg"
            className="forest-gradient px-10 text-primary-foreground shadow-forest hover:scale-105 transition-bounce"
            onClick={() => goToMail(CONTACT_EMAIL, "WRC 2027 Ticket Interest")}
          >
            Email Registration Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
