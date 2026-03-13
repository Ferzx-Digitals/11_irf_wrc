import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-forest-mist to-background p-6">
      <div className="max-w-xl rounded-3xl border border-forest-light/30 bg-card/90 p-10 text-center shadow-forest">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-forest-primary">WRC 2027</p>
        <h1 className="mb-4 text-5xl font-bold text-forest-deep">404</h1>
        <p className="mb-6 text-xl text-forest-primary">This trail does not lead to an existing page.</p>
        <Link to="/" className="font-semibold text-earth-brown underline transition-smooth hover:text-forest-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
