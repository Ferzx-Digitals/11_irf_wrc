import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { CongressHistory } from "@/content/home/types";

interface HistoryTimelineProps {
  title: string;
  congresses: CongressHistory[];
}

const TOOLTIP_WIDTH = 224;
const FALLBACK_HEIGHT = 210;

const HistoryTimeline = ({ title, congresses }: HistoryTimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [lastIndex, setLastIndex] = useState(0);
  const [position, setPosition] = useState({ left: -1000, top: -1000 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (hoveredIndex === null) return;
    const item = itemRefs.current[hoveredIndex];
    const tooltip = tooltipRef.current;
    if (!item || !tooltip) return;
    const circle = item.querySelector<HTMLElement>("[data-timeline-emoji]");
    if (!circle) return;
    const rect = circle.getBoundingClientRect();
    const tipW = tooltip.offsetWidth || TOOLTIP_WIDTH;
    const tipH = tooltip.offsetHeight || FALLBACK_HEIGHT;
    const left = Math.max(
      8,
      Math.min(rect.left + rect.width / 2 - tipW / 2, window.innerWidth - tipW - 8),
    );
    const top = rect.top - tipH - 8;
    setPosition({ left, top });
  }, [hoveredIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => setHoveredIndex(null);
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollByAmount = (delta: number) => {
    containerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setLastIndex(index);
  };

  const tipCongress = congresses[hoveredIndex ?? lastIndex];
  const isVisible = hoveredIndex !== null;

  return (
    <div className="relative py-16 md:py-20">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-center text-3xl font-bold text-forest-deep md:text-4xl">{title}</h2>

        <div aria-hidden="true" className="mb-10 flex items-center justify-center gap-2">
          <div className="h-px w-12 bg-forest-light/60" />
          <svg viewBox="0 0 20 20" className="h-5 w-5 text-forest-primary" fill="none" stroke="currentColor" strokeWidth={1.2}>
            <path d="M10 2 Q15 8 15 13 Q14 17 10 19 Q6 17 5 13 Q5 8 10 2Z" />
          </svg>
          <div className="h-px w-12 bg-forest-light/60" />
        </div>

        <div className="relative">
          <div className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
            <button
              type="button"
              onClick={() => scrollByAmount(-280)}
              aria-label="Scroll left"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-forest-deep shadow-md transition-colors hover:bg-forest-mist/70"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                />
              </svg>
            </button>
          </div>
          <div className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 md:flex">
            <button
              type="button"
              onClick={() => scrollByAmount(280)}
              aria-label="Scroll right"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-forest-deep shadow-md transition-colors hover:bg-forest-mist/70"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                />
              </svg>
            </button>
          </div>

          <div
            ref={containerRef}
            className="-mx-4 overflow-x-auto px-4 pb-6 [scrollbar-color:hsl(var(--forest-light))_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-forest-light [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:h-1"
          >
            <div className="flex min-w-max items-start gap-0 pt-4">
              {congresses.map((c, i) => (
                <div
                  key={`${c.edition}-${c.year}`}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex min-w-32 cursor-pointer flex-col items-center px-4 md:min-w-36 md:px-5"
                >
                  <div
                    data-timeline-emoji
                    className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-forest-light bg-white text-2xl shadow-md transition-all duration-200 hover:scale-110 hover:border-forest-primary hover:shadow-lg md:h-16 md:w-16 md:text-3xl"
                  >
                    {c.emoji}
                  </div>
                  <div className="h-6 w-px bg-forest-light" />
                  <div className="z-10 h-4 w-4 rounded-full border-2 border-white bg-forest-primary shadow-sm" />
                  <div className="mt-3 w-28 text-center md:w-32">
                    <p className="text-sm font-bold text-forest-deep">{c.year}</p>
                    <p className="mt-0.5 text-xs leading-tight text-foreground/60">{c.location}</p>
                    <p className="text-xs text-foreground/45">
                      {c.flag} {c.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {mounted &&
        tipCongress &&
        createPortal(
          <div
            ref={tooltipRef}
            aria-hidden="true"
            className="pointer-events-none fixed z-[9999] transition-[opacity,transform] duration-200 ease-out"
            style={{
              left: position.left,
              top: position.top,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-8px)",
            }}
          >
            <div
              className="w-56 overflow-hidden rounded-xl shadow-2xl"
              style={{ background: tipCongress.color }}
            >
              <div
                className="flex h-32 items-center justify-center"
                style={
                  tipCongress.image
                    ? { background: `url(${tipCongress.image}) center/cover no-repeat` }
                    : { background: `linear-gradient(135deg, ${tipCongress.color}, ${tipCongress.color}cc)` }
                }
              >
                {!tipCongress.image && <span className="text-6xl">{tipCongress.emoji}</span>}
              </div>
              <div className="p-3 text-white">
                <p className="text-sm font-bold">{tipCongress.edition} WRC</p>
                <p className="text-xs opacity-80">
                  {tipCongress.location}, {tipCongress.country}
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-xs opacity-60">{tipCongress.year}</p>
                  {tipCongress.credit && (
                    <p className="text-[10px] opacity-50">📷 {tipCongress.credit}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="-mt-1.5 h-3 w-3 rotate-45"
                style={{ background: tipCongress.color }}
              />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default HistoryTimeline;
