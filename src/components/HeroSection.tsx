import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToEvents = () => {
    const eventsSection = document.querySelector('#events-section');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with enhanced overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-60 right-10 w-5 h-5 bg-primary rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full opacity-40 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full opacity-25 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">


        {/* Main heading with staggered animation */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground inline-block">GVEST</span>
            <br />
            <span className="text-primary inline-block relative">
              DINNER
              <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-primary animate-pulse" />
            </span>
            <br />
            <span className="text-sm md:text-lg font-inter font-light tracking-widest uppercase">
              with INVESTORS
            </span>
          </h1>
        </div>

        {/* Enhanced subtitle with better typography */}
        <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-delay' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            Join Nigeria's most <span className="text-primary font-semibold">exclusive investor networking dinner</span> in Akwa Ibom State. 
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect with top investors and discover premium investment opportunities in Nigeria's emerging market.
          </p>
        </div>

        {/* Enhanced CTA Button with better UX */}
        <div className={`flex justify-center items-center mb-8 transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in-delay-2' : 'opacity-0'}`}>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="btn-premium text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full golden-glow hover-lift group"
          >
            <span className="flex items-center gap-2">
              Book Akwa Ibom Event
              <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </span>
          </Button>
        </div>

        {/* Quick Info with enhanced design */}
        <div className={`mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'animate-fade-in-delay-3' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 p-4 rounded-lg hover:bg-card/30">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">October 22nd, 2025</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 p-4 rounded-lg hover:bg-card/30">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-medium">6:00 PM Prompt</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 p-4 rounded-lg hover:bg-card/30">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium">Uyo, Akwa Ibom</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'animate-fade-in-delay-3' : 'opacity-0'}`}>
          <button 
            onClick={scrollToEvents}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 group"
            aria-label="Scroll to events section"
          >
            <span className="text-sm font-medium uppercase tracking-wider">Discover Events</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary" />
          </button>
        </div>
      </div>

      {/* Floating elements for premium feel */}
      <div className="absolute bottom-10 left-10 hidden lg:block opacity-20">
        <div className="w-32 h-32 border border-primary/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>
      <div className="absolute top-10 right-10 hidden lg:block opacity-20">
        <div className="w-24 h-24 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
