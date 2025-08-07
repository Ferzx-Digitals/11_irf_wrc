import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-forest-mist relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23166534' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <Badge variant="outline" className="mb-4 text-forest-primary border-forest-primary">
              About the Congress
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-forest-deep mb-6">
              11th IRF World Ranger Congress
            </h2>
            <p className="text-lg text-forest-primary leading-relaxed">
              Join rangers from around the world in the heart of the Atlantic Forest, 
              where the mighty Iguazú Falls create a spectacular backdrop for our gathering.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className={`shadow-earth border-forest-light transition-smooth hover:shadow-floating hover:-translate-y-2 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full forest-gradient flex items-center justify-center text-white text-xl font-bold mr-4">
                    📅
                  </div>
                  <h3 className="text-xl font-semibold text-forest-deep">When & Where</h3>
                </div>
                <div className="space-y-2 text-forest-primary">
                  <p><strong>Dates:</strong> April 19-23, 2027</p>
                  <p><strong>Location:</strong> Puerto Iguazú, Argentina</p>
                  <p><strong>Venue:</strong> Heart of the Atlantic Forest</p>
                </div>
              </CardContent>
            </Card>

            <Card className={`shadow-earth border-forest-light transition-smooth hover:shadow-floating hover:-translate-y-2 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full sunset-gradient flex items-center justify-center text-white text-xl font-bold mr-4">
                    🌿
                  </div>
                  <h3 className="text-xl font-semibold text-forest-deep">Conservation Focus</h3>
                </div>
                <div className="space-y-2 text-forest-primary">
                  <p><strong>Mission:</strong> Wildlife Protection</p>
                  <p><strong>Theme:</strong> Forest Conservation</p>
                  <p><strong>Goal:</strong> Global Ranger Network</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Description */}
          <Card className={`shadow-floating border-forest-light ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-forest-deep mb-6 text-center">
                Why Attend the Congress?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full earth-gradient flex items-center justify-center text-white text-2xl">
                    🤝
                  </div>
                  <h4 className="text-lg font-semibold text-forest-deep">Connect</h4>
                  <p className="text-forest-primary">
                    Network with rangers from around the globe and share experiences
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full forest-gradient flex items-center justify-center text-white text-2xl">
                    📚
                  </div>
                  <h4 className="text-lg font-semibold text-forest-deep">Learn</h4>
                  <p className="text-forest-primary">
                    Discover latest conservation techniques and wildlife protection methods
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full sky-gradient flex items-center justify-center text-white text-2xl">
                    🌍
                  </div>
                  <h4 className="text-lg font-semibold text-forest-deep">Impact</h4>
                  <p className="text-forest-primary">
                    Shape the future of global conservation and environmental protection
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;