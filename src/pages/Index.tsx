import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventCard from "@/components/EventCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Events Section */}
      <section id="events-section" className="py-24 bg-background relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Limited Seats Available
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in-delay">
              Two exclusive investor dinners across Nigeria's business capitals. 
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
              Choose your preferred location or attend both for maximum networking opportunities.
            </p>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            <EventCard
              title="Gvest Dinner Lagos"
              date="Friday, 18th July 2025"
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

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto card-gradient hover-lift">
              <div className="mb-8">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Don't Miss Out!
                </h3>
                <p className="text-xl text-muted-foreground mb-2">
                  Limited seats available for these exclusive networking experiences.
                </p>
                <p className="text-lg text-muted-foreground">
                  Book today to secure your place at Nigeria's most prestigious investor events.
                </p>
              </div>
              
              {/* Event Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 hover:bg-primary/15 transition-all duration-300 hover-lift">
                  <div className="text-primary font-bold text-3xl mb-2">Lagos</div>
                  <div className="text-foreground font-semibold mb-1">July 18th, 2025</div>
                  <div className="text-muted-foreground text-sm mb-3">The Wheatbaker Hotel</div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>4:00 PM Prompt</span>
                  </div>
                </div>
                
                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 hover:bg-primary/15 transition-all duration-300 hover-lift">
                  <div className="text-primary font-bold text-3xl mb-2">Abuja</div>
                  <div className="text-foreground font-semibold mb-1">July 20th, 2025</div>
                  <div className="text-muted-foreground text-sm mb-3">Premium Venue</div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>4:00 PM Prompt</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact-section');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn-premium text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full hover-lift mx-auto"
                >
                  Reserve Your Seat Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
