import PageIntro from "@/components/common/PageIntro";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const galleryItems = [
  { title: "Atlantic Forest Landscapes", image: "/images/footer_background.png" },
  { title: "Ranger Field Operations", image: "/images/organizer_1.png" },
  { title: "Community Collaboration", image: "/images/organizer_2.png" },
  { title: "Wildlife Protection", image: "/images/toucan.png" },
  { title: "Congress Moments", image: "/images/logo_1.png" },
  { title: "Host Region Highlights", image: "/images/footer_background.png" },
];

const Gallery = () => {
  const { ref, isVisible } = useRevealOnScroll<HTMLElement>();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-background via-forest-mist/30 to-background py-24"
    >
      <div className="container mx-auto px-4">
        <PageIntro
          eyebrow="Visual Story"
          title="Gallery"
          description="Snapshots of the congress spirit, host landscape, and ranger community."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <figure
              key={`${item.title}-${index}`}
              className={`overflow-hidden rounded-3xl border border-forest-light/30 bg-card/95 shadow-forest ${
                isVisible ? "animate-fade-up" : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="h-56 bg-forest-mist">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-5 text-lg font-semibold text-forest-deep">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
