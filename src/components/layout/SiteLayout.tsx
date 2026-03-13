import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/layout/SiteHeader";

const SiteLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="relative z-10 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
