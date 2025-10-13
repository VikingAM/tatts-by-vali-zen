import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Hash-Scroll-Handler Component
const HashScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Wenn die Seite mit einem Hash geladen wird
    const hash = location.hash;
    if (hash) {
      // Warte kurz, bis alle Elemente geladen sind
      const scrollToHash = () => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const nav = document.querySelector('nav');
          const navHeight = nav ? nav.offsetHeight : 0;
          const yRaw = element.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;
          const maxY = document.documentElement.scrollHeight - window.innerHeight;
          const y = Math.max(0, Math.min(yRaw, maxY));
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      // Erste Verzögerung für initiales Laden
      const timer = setTimeout(scrollToHash, 100);

      // Zusätzlicher Check nach weiteren 300ms falls Elemente noch nicht geladen waren
      const fallbackTimer = setTimeout(scrollToHash, 400);

      return () => {
        clearTimeout(timer);
        clearTimeout(fallbackTimer);
      };
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashScrollHandler />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
