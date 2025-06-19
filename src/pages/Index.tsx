
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Events Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two exclusive investor dinners across Nigeria's business capitals. 
              Choose your preferred location or attend both for maximum networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <EventCard
              title="Gvest Dinner Lagos"
              date="Sunday, 29th June 2025"
              time="4:00 PM Prompt"
              location="Lagos"
              venue="The Wheatbaker Hotel"
              image="/lovable-uploads/67243d70-13f1-4159-af76-c32c13965ad7.png"
              isPrimary={true}
            />
            
            <EventCard
              title="Gvest Dinner Abuja"
              date="Sunday, 20th July 2025"
              time="4:00 PM Prompt"
              location="Abuja"
              venue="Premium Venue"
              image="/lovable-uploads/5cde1083-c8e7-4461-9cbb-51f93eba424e.png"
            />
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto card-gradient">
              <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
                Don't Miss Out!
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Limited seats available. Book today to secure your place at Nigeria's most exclusive investor networking events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex-1 max-w-xs">
                  <div className="text-primary font-bold text-2xl">Lagos</div>
                  <div className="text-foreground">June 29th • The Wheatbaker Hotel</div>
                </div>
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex-1 max-w-xs">
                  <div className="text-primary font-bold text-2xl">Abuja</div>
                  <div className="text-foreground">July 20th • Premium Venue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border/50 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 mr-3 overflow-hidden rounded-lg">
              <img 
                src="https://files.selar.co/product-images/2023/products/drsakintayo/gvest-investment-installm-selar.co-6506d3c7be071.png"
                alt="Gvest Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-playfair text-2xl font-bold text-foreground">GVEST</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Connecting investors, building the future.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span>© 2025 Gvest Global</span>
            <span>•</span>
            <span>www.gvestglobal.com</span>
            <span>•</span>
            <span>+234 809 999 0864</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
