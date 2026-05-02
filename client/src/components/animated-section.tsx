import { useInView } from "@/hooks/use-in-view";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: string;
  delay?: 100 | 200 | 300 | 400 | 500;
  id?: string;
  "data-testid"?: string;
}

export function AnimatedSection({
  children,
  className = "",
  as: Tag = "div",
  delay,
  id,
  "data-testid": testId,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useInView();
  const delayClass = delay ? ` delay-${delay}` : "";
  const visibilityClass = isVisible ? " is-visible" : "";
  const props: Record<string, unknown> = {
    ref,
    id,
    className: `${className} fade-in-up${delayClass}${visibilityClass}`,
    "data-testid": testId,
  };

  const El = Tag as React.ElementType;
  return <El {...props}>{children}</El>;
}
