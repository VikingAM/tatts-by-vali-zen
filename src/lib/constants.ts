/**
 * Design System Constants
 * Centralized styling tokens for consistent UI across all sections
 */

// ============================================
// Section Spacing
// ============================================
export const SECTION_PADDING = "pt-28 md:pt-36 pb-24 md:pb-32";
export const SECTION_SCROLL_MARGIN = "scroll-mt-28 md:scroll-mt-36";

// ============================================
// Typography - Eyebrow (Small uppercase text above titles)
// ============================================
export const EYEBROW_STYLE = "text-[12px] tracking-[0.18em] uppercase text-accent-bronze/80 mb-2";
export const EYEBROW_RESPONSIVE = "text-[12px] tracking-[0.18em] uppercase text-accent-bronze/80 mb-2 text-center md:text-left";

// ============================================
// Typography - Section Titles (H2)
// ============================================
export const H2_STYLE = "text-[clamp(32px,3.5vw,44px)] font-light text-foreground tracking-[0.01em] leading-tight mt-2 mb-4";
export const H2_RESPONSIVE = "text-[clamp(32px,3.5vw,44px)] font-light text-foreground tracking-[0.01em] leading-tight mt-2 mb-4 text-center md:text-left";

// ============================================
// Bronze Divider (Horizontal line under titles)
// ============================================
export const BRONZE_DIVIDER = "h-[2px] w-16 bg-accent-bronze/90 mb-8";
export const BRONZE_DIVIDER_RESPONSIVE = "h-[2px] w-16 bg-accent-bronze/90 mb-8 mx-auto md:mx-0";

// ============================================
// Typography - Body/Intro Text
// ============================================
export const INTRO_TEXT = "text-[15px] md:text-[16px] text-foreground-secondary font-light leading-[1.9] max-w-[65ch]";
export const INTRO_TEXT_RESPONSIVE = "text-[15px] md:text-[16px] text-foreground-secondary font-light leading-[1.9] max-w-[65ch] text-center md:text-left";

// ============================================
// Card Styling
// ============================================
export const CARD_BASE = "overflow-hidden rounded-[14px] ring-1 ring-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]";
export const CARD_HOVER = "hover:shadow-[0_15px_40px_rgba(0,0,0,0.45)] hover:scale-[1.01]";
export const CARD_TRANSITION = "transition-all duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)]";

// ============================================
// Animation Settings
// ============================================
export const ANIMATION_FADE_IN = "opacity-100 translate-y-0";
export const ANIMATION_FADE_OUT = "opacity-0 translate-y-3";
export const ANIMATION_EASING = "cubic-bezier(0.22, 0.61, 0.36, 1)";

// ============================================
// IntersectionObserver Settings
// ============================================
export const OBSERVER_CONFIG = {
  root: null,
  rootMargin: "0px 0px -10% 0px",
  threshold: 0.2,
};

// ============================================
// Container Widths
// ============================================
export const CONTAINER_DEFAULT = "container mx-auto max-w-6xl xl:max-w-7xl px-6";
export const CONTAINER_NARROW = "container mx-auto max-w-6xl px-6";

// ============================================
// Gradient Overlays
// ============================================
export const SECTION_TOP_GRADIENT = "pointer-events-none absolute inset-x-0 -top-16 h-16 bg-gradient-to-b from-black/40 to-transparent";

