import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import CTAButton from "@/components/ui/CTAButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Log 404 error for debugging (removed console.error for production)
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl font-light text-accent-bronze mb-4">404</h1>
        <p className="text-xl text-foreground-secondary mb-8 font-light">
          Diese Seite existiert nicht.
        </p>
        <CTAButton
          as="a"
          href="/"
          label="Zur Startseite"
          ariaLabel="Zurück zur Startseite von Tatts by Vali"
        />
      </div>
    </div>
  );
};

export default NotFound;
