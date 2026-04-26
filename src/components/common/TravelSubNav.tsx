import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const links = [
  { to: "/travel", label: "Logistics" },
  { to: "/travel/venue", label: "Venue & Accommodation" },
  { to: "/travel/faqs", label: "Travel FAQs" },
];

const TravelSubNav = () => {
  const { pathname } = useLocation();

  return (
    <div className="-mt-8 mb-12 flex justify-center">
      <nav className="flex flex-wrap justify-center gap-1 rounded-full border border-forest-light/30 bg-card p-1 shadow-forest">
        {links.map((link) => {
          const active = pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-semibold transition-smooth",
                active
                  ? "bg-forest-primary text-white shadow-forest"
                  : "text-forest-primary/80 hover:bg-forest-mist/60",
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default TravelSubNav;
