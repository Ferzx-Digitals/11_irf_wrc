import { cn } from "@/lib/utils";

interface PageHeroBannerProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  overlayClassName?: string;
  containerClassName?: string;
  align?: "left" | "right";
  mirrored?: boolean;
}

const PageHeroBanner = ({
  title,
  subtitle,
  imageSrc,
  imageAlt = "",
  overlayClassName,
  containerClassName,
  align = "left",
  mirrored = false,
}: PageHeroBannerProps) => {
  return (
    <section className="relative mb-16 h-[340px] overflow-hidden md:h-[420px]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className={cn("absolute inset-0 h-full w-full object-cover", mirrored && "-scale-x-100")}
      />
      <div className={cn("absolute inset-0 bg-black/60", overlayClassName)} />
      <div
        className={cn(
          "relative container mx-auto flex h-full items-center px-4",
          align === "right" && "justify-end text-right",
          containerClassName,
        )}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white md:text-6xl">{title}</h1>
          <p className="mt-4 text-xl text-white/85">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default PageHeroBanner;
