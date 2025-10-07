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
              Join us for an exclusive investor dinner in Akwa Ibom State. 
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
              Network with top investors and discover premium investment opportunities.
            </p>
          </div>

          {/* Event Cards */}
          <div className="flex justify-center mb-20">
            <div className="w-full max-w-lg">
              <EventCard
                title="Akwa Ibom Investors Dinner"
                date="Wednesday, 22nd October 2025"
                time="6:00 PM Prompt"
                location="Uyo"
                venue="Akwa Ibom State"
                image="/flyer/akwaibom.jpg"
                isPrimary={true}
              />
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto card-gradient hover-lift">
              <div className="mb-8">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Don't Miss Out!
                </h3>
                <p className="text-xl text-muted-foreground mb-2">
                  Limited seats available for this exclusive networking experience.
                </p>
                <p className="text-lg text-muted-foreground">
                  Book today to secure your place at Nigeria's most prestigious investor dinner.
                </p>
              </div>
              
              {/* Event Summary Card */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <div className="bg-primary/10 border border-primary/30 rounded-2xl p-6 hover:bg-primary/15 transition-all duration-300 hover-lift">
                    <div className="text-primary font-bold text-3xl mb-2 text-center">Uyo</div>
                    <div className="text-foreground font-semibold mb-1 text-center">October 22nd, 2025</div>
                    <div className="text-muted-foreground text-sm mb-3 text-center">Akwa Ibom State</div>
                    <div className="flex items-center justify-center gap-2 text-sm text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span>6:00 PM Prompt</span>
                    </div>
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
