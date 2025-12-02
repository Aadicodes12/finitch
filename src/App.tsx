import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useIsMobile } from "./hooks/use-mobile";
import React from "react";

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();

  React.useEffect(() => {
    const preventTouchScroll = (e: TouchEvent) => {
      e.preventDefault();
    };

    if (isMobile) {
      // Disable touch scrolling on mobile
      document.body.addEventListener("touchmove", preventTouchScroll, { passive: false });
    } else {
      // Enable touch scrolling on desktop/tablet
      document.body.removeEventListener("touchmove", preventTouchScroll);
    }

    // Cleanup event listener on component unmount or isMobile change
    return () => {
      document.body.removeEventListener("touchmove", preventTouchScroll);
    };
  }, [isMobile]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;