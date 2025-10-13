/**
 * Centralized Type Definitions
 * All shared types for the application
 */

// ============================================
// Style/Service Types
// ============================================
export type Style = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ariaLabel: string;
};

// ============================================
// Testimonial Types
// ============================================
export type Testimonial = {
  quote: string;
  author: string;
};

// ============================================
// Gallery Item Types
// ============================================
export type GalleryItem = {
  key: string;
  webp: string;
  fallback: string;
  alt: string;
};

// ============================================
// Contact Form Types
// ============================================
export type ContactFormData = {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
  honeypot: string;
};

export type ContactFormErrors = {
  name?: string;
  email?: string;
  message?: string;
  privacy?: string;
};

export type FormState = "idle" | "loading" | "success" | "error";

// ============================================
// Image Types
// ============================================
export type ImageProps = {
  webp?: string;
  jpg?: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
};

// ============================================
// Section Props
// ============================================
export type SectionProps = {
  id?: string;
  className?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

