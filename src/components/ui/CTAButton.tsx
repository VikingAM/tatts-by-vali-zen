import React from "react";

type Size = "sm" | "md";

type Props = (React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>) & {
  as?: "button" | "a";
  href?: string;
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  ariaLabel?: string;
  size?: Size;
};

export default function CTAButton({
  as = "button",
  href,
  label,
  iconLeft,
  iconRight,
  ariaLabel,
  size = "md",
  className = "",
  ...rest
}: Props) {
  const base = "inline-flex items-center gap-2 rounded-md border border-accent-bronze " +
               "md:hover:text-accent-bronze md:hover:border-accent-bronze md:hover:bg-accent-bronze/10 " +
               "md:hover:shadow-[0_0_8px_rgba(164,107,62,0.5)] " +
               "active:scale-[0.98] active:bg-accent-bronze/20 active:shadow-[0_0_12px_rgba(164,107,62,0.7)] " +
               "transition-smooth " +
               "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-bronze " +
               "focus-visible:ring-offset-1 focus-visible:ring-offset-background";
  const sizing = size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2";
  const cls = `${base} ${sizing} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} aria-label={ariaLabel || label} className={cls} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {iconLeft}{label}{iconRight}
      </a>
    );
  }
  return (
        <button 
          aria-label={ariaLabel || label} 
          className={`cta-button ${cls}`}
          type="button"
          {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
      {iconLeft}{label}{iconRight}
    </button>
  );
}
