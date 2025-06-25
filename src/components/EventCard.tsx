import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Users, Star, ArrowRight } from "lucide-react";
import { useState } from "react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  image: string;
  isPrimary?: boolean;
}

const EventCard = ({ title, date, time, location, venue, image, isPrimary = false }: EventCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card 
      className={`overflow-hidden card-gradient border-border/50 hover-lift group transition-all duration-500 ${
        isPrimary ? 'ring-2 ring-primary/50' : ''
      } hover:ring-2 hover:ring-primary/30 hover:shadow-2xl`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Event Image with enhanced effects */}
      <div className="relative h-64 overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted/20 loading-shimmer"></div>
        )}
        <img 
          src={image} 
          alt={`${title} Event`}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110' : 'scale-105'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
        
        {/* Enhanced badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {isPrimary && (
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 animate-fade-in-scale">
              <Star className="w-4 h-4" />
              Next Event
            </div>
          )}
          <div className="bg-card/90 backdrop-blur-sm text-card-foreground px-3 py-1 rounded-full text-sm font-medium">
            <Users className="w-4 h-4 inline mr-1" />
            Limited Seats
          </div>
        </div>

        {/* Floating elements on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 border-2 border-primary/40 rounded-full animate-ping"></div>
            </div>
          </div>
        )}
      </div>

      {/* Event Details with enhanced layout */}
      <div className="p-6 space-y-6">
        <div className="space-y-3">
          <h3 className="font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-base">
            Exclusive Investor Networking Dinner
          </p>
          <div className="flex items-center gap-2 text-sm text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-medium">Premium Experience</span>
          </div>
        </div>

        {/* Event Info with enhanced styling */}
        <div className="space-y-4">
          <div className="flex items-start gap-3 text-foreground p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
            <Calendar className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold block">{date}</span>
              <span className="text-sm text-muted-foreground">Mark your calendar</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3 text-foreground p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
            <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold block">{time}</span>
              <span className="text-sm text-muted-foreground">Punctuality appreciated</span>
            </div>
          </div>
          
          <div className="flex items-start gap-3 text-foreground p-3 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-semibold block">{venue}</span>
              <span className="text-sm text-muted-foreground">{location}, Nigeria</span>
            </div>
          </div>
        </div>

        {/* Enhanced Action Button */}
        <div className="pt-4">
          <Button 
            className={`w-full font-semibold py-6 text-lg rounded-xl transition-all duration-300 ${
              isPrimary 
                ? 'btn-premium text-primary-foreground hover-lift' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-lift'
            } group relative overflow-hidden`}
            size="lg"
            onClick={scrollToForm}
            aria-label={`Register for ${title}`}
          >
            <span className="flex items-center justify-center gap-2 relative z-10">
              Register Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>

        {/* Event highlights */}
        <div className="border-t border-border/30 pt-4">
          <div className="flex flex-wrap gap-2">
            {['Networking', 'Premium Dining', 'Exclusive Access'].map((tag, index) => (
              <span 
                key={tag}
                className={`text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-300 ${
                  isHovered ? 'animate-fade-in-delay' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent"></div>
    </Card>
  );
};

export default EventCard;
