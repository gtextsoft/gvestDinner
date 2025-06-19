import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";

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
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className={`overflow-hidden card-gradient border-border/50 ${isPrimary ? 'ring-2 ring-primary/50' : ''} hover:ring-2 hover:ring-primary/30 transition-all duration-300`}>
      {/* Event Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} Event`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        
        {isPrimary && (
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
            Next Event
          </div>
        )}
      </div>

      {/* Event Details */}
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h3 className="font-playfair text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-muted-foreground">Exclusive Investor Networking Dinner</p>
        </div>

        {/* Event Info */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-foreground">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <Clock className="w-5 h-5 text-primary" />
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex items-center gap-3 text-foreground">
            <MapPin className="w-5 h-5 text-primary" />
            <div>
              <span className="font-medium block">{venue}</span>
              <span className="text-muted-foreground text-sm">{location}</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className={`w-full ${isPrimary ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'} font-semibold`}
          size="lg"
          onClick={scrollToForm}
        >
          Register Now
        </Button>
      </div>
    </Card>
  );
};

export default EventCard;
