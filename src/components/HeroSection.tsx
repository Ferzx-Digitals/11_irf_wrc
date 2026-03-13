import { useEffect, useState } from 'react';
import forestBackground from '@/assets/forest-background.jpg';
import forestForeground from '@/assets/forest-foreground.png';
import { getHomeContent } from '@/content/home';
import { defaultLocale } from '@/i18n/locales';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [slideIndex, setSlideIndex] = useState(0);
  const content = getHomeContent(defaultLocale);
  const activeSlide = content.heroSlides[slideIndex % content.heroSlides.length];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % content.heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [content.heroSlides.length]);

  return (
    <section className="relative -mt-16 h-screen overflow-hidden parallax-container">
      <div 
        className="parallax-layer absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.22}px) scale(${1.04 + scrollY * 0.00008})`,
          backgroundImage: `url(${forestBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: `${50 + mousePosition.x * 0.02}% ${50 + mousePosition.y * 0.02}%`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      <div 
        className="parallax-layer absolute inset-0 z-[1]"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            hsl(var(--forest-deep) / 0.24) 0%, 
            hsl(var(--sky-blue) / 0.16) 45%, 
            hsl(var(--gold-warm) / 0.12) 82%, 
            transparent 100%)`,
        }}
      />

      <div 
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background: `linear-gradient(${45 + mousePosition.x * 0.1}deg, 
            transparent 20%, 
            hsl(var(--gold-warm) / 0.05) 50%, 
            transparent 80%)`,
        }}
      />

      <div className="absolute inset-0 z-[6] bg-gradient-to-b from-black/18 via-black/12 to-black/28 pointer-events-none" />
      <div className="absolute inset-0 z-[7] pointer-events-none bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.22)_75%)]" />

      <div
        className="parallax-layer pointer-events-none z-[9]"
        style={{
          transform: `translateY(${scrollY * 0.45}px) translateX(${mousePosition.x * 0.02 - 1}px)`,
          backgroundImage: `url(${forestForeground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          opacity: 0.42,
          filter: `hue-rotate(${mousePosition.x * 0.08}deg)`,
        }}
      />

      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        <div className="absolute left-6 top-3 z-30 md:left-10 md:top-3">
          <img
            src="/images/logos/wrc.png"
            alt="WRC logo"
            className="h-32 w-32 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)] md:h-40 md:w-40"
            onError={(event) => {
              event.currentTarget.src = "/placeholder.svg";
            }}
          />
        </div>
        <div className="w-full max-w-5xl px-4 py-8 md:px-8 md:py-10">
        <div 
          className="text-center mb-8 px-4"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="relative">
            <div 
              className="absolute text-6xl md:text-8xl font-bold text-forest-deep opacity-5 select-none"
              style={{
                transform: `translateX(${mousePosition.x * 0.1 - 5}px) translateY(${mousePosition.y * 0.05 - 2.5}px)`,
              }}
            >
              SAVE THE DATE
            </div>
            
            <h1 
              className="text-4xl md:text-7xl font-bold mb-4 relative leading-tight"
              style={{
                background: `linear-gradient(135deg, 
                  hsl(var(--forest-deep)), 
                  hsl(var(--gold-warm)), 
                  hsl(var(--forest-primary)))`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 2px 10px hsl(var(--forest-deep) / 0.28)",
              }}
            >
              {activeSlide.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-forest-primary to-transparent"></div>
              <div className="text-2xl">🌿</div>
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-forest-primary to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div 
          className="text-center px-4"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        >
          <div className="mb-4">
            <div 
              className="text-3xl md:text-5xl font-bold text-earth-brown mb-2"
              style={{
                textShadow: "0 2px 10px hsl(var(--earth-brown) / 0.22)",
                transform: `scale(${1 + mousePosition.y * 0.001})`,
              }}
            >
                {activeSlide.subtitle}
            </div>
          </div>
          <div
            className="text-md md:text-xl text-forest-deep/80 max-w-2xl mx-auto italic"
            style={{
              transform: `translateY(${mousePosition.y * 0.02}px)`,
            }}
          >
            "{activeSlide.description}"
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;