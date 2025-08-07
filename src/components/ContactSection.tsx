import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Calendar, Users } from 'lucide-react';

const ContactSection = () => {
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
    <section ref={sectionRef} className="py-20 earth-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-forest-light" />
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gold-warm" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-sky-light" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <Badge variant="outline" className="mb-4 text-white border-white/50 bg-white/10">
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Conservation Movement
            </h2>
            <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Be part of the global effort to protect our planet's most precious ecosystems. 
              Connect with fellow rangers and conservation heroes from around the world.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className={`bg-white/95 backdrop-blur shadow-floating border-white/50 transition-smooth hover:scale-105 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full forest-gradient flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-forest-deep">Contact Information</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-forest-primary mr-3" />
                    <a 
                      href="mailto:info@plan-aeventos.com" 
                      className="text-forest-primary hover:text-forest-deep transition-smooth"
                    >
                      info@plan-aeventos.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-forest-primary mr-3" />
                    <span className="text-forest-primary">Puerto Iguazú, Argentina</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-forest-primary mr-3" />
                    <span className="text-forest-primary">April 19-23, 2027</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className={`bg-white/95 backdrop-blur shadow-floating border-white/50 transition-smooth hover:scale-105 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full sunset-gradient flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-forest-deep">Event Partners</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-forest-deep">International Ranger Federation</h4>
                    <p className="text-forest-primary text-sm">Global organization connecting rangers worldwide</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-deep">SINIGARA</h4>
                    <p className="text-forest-primary text-sm">Argentine National Parks Rangers Union</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-deep">plan.A</h4>
                    <p className="text-forest-primary text-sm">Event planning and coordination</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className={`bg-white/95 backdrop-blur shadow-floating border-white/50 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-forest-deep mb-6">
                Ready to Make a Difference?
              </h3>
              <p className="text-forest-primary mb-8 max-w-2xl mx-auto">
                Mark your calendars and prepare to be part of something extraordinary. 
                Together, we can protect the world's most precious natural heritage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="forest-gradient text-white shadow-forest hover:scale-105 transition-bounce px-8 py-4"
                  onClick={() => window.location.href = 'mailto:info@plan-aeventos.com?subject=IRF World Ranger Congress 2027 Interest'}
                >
                  Register Interest
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-forest-primary text-forest-primary hover:bg-forest-mist transition-smooth px-8 py-4"
                >
                  Download Poster
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating wildlife silhouettes */}
      <div className="absolute bottom-10 right-10 opacity-30">
        <div className="w-16 h-16 text-white/50 text-4xl float-gentle">🦎</div>
      </div>
      <div className="absolute top-20 left-20 opacity-20">
        <div className="w-12 h-12 text-white/50 text-3xl float-gentle" style={{ animationDelay: '2s' }}>🐒</div>
      </div>
    </section>
  );
};

export default ContactSection;