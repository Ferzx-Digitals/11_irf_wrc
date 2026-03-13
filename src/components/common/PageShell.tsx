import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageShellProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

const PageShell = ({ children, className, contentClassName }: PageShellProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-gradient-to-b from-forest-mist/40 via-background to-background pb-24",
        className,
      )}
    >
      <div className={cn("container mx-auto px-4", contentClassName)}>{children}</div>
    </section>
  );
};

export default PageShell;
