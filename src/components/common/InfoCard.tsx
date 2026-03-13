import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const InfoCard = ({ icon: Icon, title, description }: InfoCardProps) => {
  return (
    <article className="rounded-3xl border border-forest-light/30 bg-card/90 p-8 shadow-forest">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full forest-gradient">
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>
      <h3 className="mb-3 text-2xl font-semibold text-forest-deep">{title}</h3>
      <p className="text-forest-primary">{description}</p>
    </article>
  );
};

export default InfoCard;
