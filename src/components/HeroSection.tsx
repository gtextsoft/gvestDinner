
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-60 right-10 w-5 h-5 bg-primary rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-lg">
            <img 
              src="https://files.selar.co/product-images/2023/products/drsakintayo/gvest-investment-installm-selar.co-6506d3c7be071.png"
              alt="Gvest Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="text-foreground">GVEST</span>
          <br />
          <span className="text-primary">DINNER</span>
          <br />
          <span className="text-sm md:text-lg font-inter font-light tracking-widest">
            with INVESTORS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
          Join Nigeria's most exclusive investor networking dinners. 
          Two premium events designed to connect visionaries and fuel innovation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-4 text-lg rounded-full golden-glow animate-glow"
          >
            Book Lagos Event
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full"
          >
            Book Abuja Event
          </Button>
        </div>

        {/* Quick Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            <span>Two Exclusive Events</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span>4:00 PM Prompt</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Lagos & Abuja</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
