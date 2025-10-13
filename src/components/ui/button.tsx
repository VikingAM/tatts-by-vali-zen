import React from "react";
import { ArrowRight, Instagram } from "lucide-react";
import clsx from "clsx";

type Variant = "primary" | "outline" | "ghost";
type Icon = "arrow" | "instagram" | "none";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: Icon;
  external?: boolean;
  className?: string;
}

/**
 * Button Component
 * Unified CTA component with consistent styling across the site
 * Supports primary, outline, and ghost variants with optional icons
 */
export function Button({
  href,
  children,
  variant = "primary",
  icon = "none",
  external = false,
  className,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-accent-bronze focus-visible:ring-offset-background";
  
  const variants = {
    primary:
      "bg-accent-bronze text-background hover:bg-accent-bronze/90 border border-accent-bronze",
    outline:
      "border border-accent-bronze text-accent-bronze hover:bg-accent-bronze/10",
    ghost:
      "text-accent-bronze hover:text-accent-bronze/90",
  };

  const IconEl =
    icon === "arrow" ? (
      <ArrowRight size={16} aria-hidden="true" />
    ) : icon === "instagram" ? (
      <Instagram size={16} aria-hidden="true" />
    ) : null;

  // If href is provided, render as anchor
  if (href) {
    const linkProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

    return (
      <a
        href={href}
        className={clsx(base, variants[variant], className)}
        {...linkProps}
        {...(rest as any)}
      >
        {IconEl && icon === "instagram" ? IconEl : null}
        <span>{children}</span>
        {IconEl && icon === "arrow" ? IconEl : null}
      </a>
    );
  }

  // Otherwise render as button
  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...rest}
    >
      {IconEl && icon === "instagram" ? IconEl : null}
      <span>{children}</span>
      {IconEl && icon === "arrow" ? IconEl : null}
    </button>
  );
}
