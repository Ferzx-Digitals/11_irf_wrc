import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Index from "./pages/Index";
import Schedule from "./pages/Schedule";
import Teams from "./pages/Teams";
import Gallery from "./pages/Gallery";
import Tickets from "./pages/Tickets";
import Contact from "./pages/Contact";
import Submit from "./pages/Submit";
import Faq from "./pages/Faq";
import CongressTheme from "./pages/CongressTheme";
import About from "./pages/About";
import AboutEvents from "./pages/AboutEvents";
import Travel from "./pages/Travel";
import TravelVenue from "./pages/TravelVenue";
import TravelFaqs from "./pages/TravelFaqs";
import Program from "./pages/Program";
import Press from "./pages/Press";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/congress-theme" element={<CongressTheme />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/events" element={<AboutEvents />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/venue" element={<TravelVenue />} />
            <Route path="/travel/faqs" element={<TravelFaqs />} />
            <Route path="/program" element={<Program />} />
            <Route path="/press" element={<Press />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
