import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  to?: string;
  highlight?: boolean;
  children?: Array<{ label: string; to: string }>;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  {
    label: "About",
    children: [
      { to: "/about", label: "Congress Introduction" },
      { to: "/about/events", label: "Congress Events" },
    ],
  },
  { to: "/submit", label: "Submit" },
  { to: "/faq", label: "FAQ" },
  { to: "/congress-theme", label: "Congress Theme" },
  {
    label: "Plan Travel",
    children: [
      { to: "/travel", label: "Logistics" },
      { to: "/travel/venue", label: "Venue & Accommodation" },
      { to: "/travel/faqs", label: "Travel FAQs" },
    ],
  },
  { to: "/program", label: "Program" },
  { to: "/press", label: "Press" },
  { to: "/contact", label: "Contact Us" },
  { to: "/register", label: "Register Now", highlight: true },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<Record<string, boolean>>({});
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const connectedToHero = isHome && !scrolled;

  const isPathActive = useMemo(
    () => (path: string) => location.pathname === path || location.pathname.startsWith(`${path}/`),
    [location.pathname],
  );

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "text-sm md:text-base transition-smooth",
      connectedToHero
        ? isActive
          ? "text-white font-semibold"
          : "text-white/85 hover:text-white"
        : isActive
          ? "text-forest-primary font-semibold"
          : "text-forest-deep/80 hover:text-forest-primary",
    );

  const desktopTextClass = (active: boolean) =>
    cn(
      "text-sm md:text-base transition-smooth",
      connectedToHero
        ? active
          ? "text-white font-semibold"
          : "text-white/85 hover:text-white"
        : active
          ? "text-forest-primary font-semibold"
          : "text-forest-deep/80 hover:text-forest-primary",
    );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-smooth",
        connectedToHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-forest-light/30 bg-background/92 backdrop-blur-md",
      )}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className={cn(
              "inline-flex items-center transition-smooth",
              connectedToHero ? "opacity-0 pointer-events-none" : "opacity-100",
            )}
          >
            <img
              src="/images/logos/wrc.png"
              alt="WRC logo"
              className="h-10 w-10 object-contain"
              onError={(event) => {
                event.currentTarget.src = "/placeholder.svg";
              }}
            />
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-6 lg:flex transition-smooth",
              connectedToHero ? "rounded-full bg-black/28 px-5 py-2 backdrop-blur-sm" : "",
            )}
          >
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <button type="button" className={cn("inline-flex items-center gap-1", desktopTextClass(item.children.some((child) => isPathActive(child.to))))}>
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                  <div className="invisible absolute left-0 top-full z-20 min-w-[220px] translate-y-1 rounded-lg border border-forest-light/30 bg-card p-1 opacity-0 shadow-forest transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        end
                        className={() =>
                          cn(
                            "block rounded-md px-3 py-2 text-sm transition-smooth",
                            location.pathname === child.to
                              ? "bg-forest-mist text-forest-primary font-semibold"
                              : "text-forest-deep/80 hover:bg-forest-mist/70",
                          )
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to!}
                  className={({ isActive }) =>
                    cn(
                      navLinkClass({ isActive }),
                      item.highlight &&
                        (connectedToHero
                          ? "rounded-full border border-white/50 px-3 py-1 text-white hover:bg-white/10"
                          : "rounded-full border border-forest-primary px-3 py-1 text-forest-primary hover:bg-forest-mist"),
                    )
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <Button
            variant="outline"
            size="icon"
            className={cn(
              "lg:hidden",
              connectedToHero
                ? "border-white/40 bg-black/15 text-white hover:bg-black/30"
                : "border-forest-primary/40 text-forest-primary",
            )}
            aria-label="Toggle navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {open && (
          <nav
            className={cn(
              "mt-3 grid gap-2 border-t pt-3 lg:hidden",
              connectedToHero ? "border-white/25 bg-black/25 rounded-lg px-3 pb-3" : "border-forest-light/30",
            )}
          >
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="space-y-1">
                  <button
                    type="button"
                    className={cn("flex w-full items-center justify-between py-1.5", desktopTextClass(item.children.some((child) => isPathActive(child.to))))}
                    onClick={() =>
                      setMobileDropdowns((current) => ({ ...current, [item.label]: !current[item.label] }))
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileDropdowns[item.label] ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  {mobileDropdowns[item.label] && (
                    <div className="ml-3 grid gap-1 border-l border-white/25 pl-3">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          to={child.to}
                          end
                          className={cn(
                            navLinkClass({ isActive: location.pathname === child.to }),
                            location.pathname === child.to ? "font-semibold" : "",
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to!}
                  className={cn(navLinkClass({ isActive: isPathActive(item.to!) }), item.highlight ? "font-semibold" : "")}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
