import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Globe, Facebook, Instagram, Twitter, Sparkles, Shield, Clock } from "lucide-react";

const ContactSection = () => {

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Secure Your Spot
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in-delay">
            Ready to join Nigeria's most exclusive investor network? 
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
            Contact us today to secure your spot at these premium networking events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 card-gradient border-border/50 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground">
                Reserve Your Seat
              </h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-muted-foreground text-center mb-8">
                Click the button below to register for exclusive access to Nigeria's premier investor networking dinners.
              </p>
              
              <a 
                href="https://app.mailingboss.com/lists/68f106fb034fd/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                <div className="flex items-center justify-center gap-3">
                  <Shield className="w-6 h-6" />
                  <span className="text-lg">Register Now</span>
                </div>
              </a>
              
              <p className="text-sm text-muted-foreground text-center mt-4">
                You'll be redirected to our secure registration page
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 card-gradient border-border/50 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  Contact Information
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold mb-1">For Enquiries Call:</p>
                    <p className="text-primary font-bold text-lg">+234 701 408 7669</p>
                    <p className="text-sm text-muted-foreground">Available 9AM - 6PM WAT</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold mb-1">Website:</p>
                    <p className="text-primary font-bold">www.gvestglobal.com</p>
                    <p className="text-sm text-muted-foreground">Learn more about us</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient border-border/50 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  Follow Us
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover-lift justify-start"
                >
                  <Facebook className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Gvest</div>
                    <div className="text-sm text-muted-foreground">Facebook Page</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover-lift justify-start"
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">@gvestcooperative</div>
                    <div className="text-sm text-muted-foreground">Instagram Handle</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover-lift justify-start"
                >
                  <Twitter className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">@gvestglobal</div>
                    <div className="text-sm text-muted-foreground">Twitter Handle</div>
                  </div>
                </Button>
              </div>
            </Card>

            <Card className="p-6 card-gradient border-border/50 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  Why Join?
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  'Network with top investors',
                  'Exclusive business opportunities', 
                  'Premium dining experience',
                  'Strategic partnerships',
                  'Industry insights'
                ].map((benefit, index) => (
                  <li key={benefit} className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Added urgency indicator */}
            <Card className="p-6 card-gradient border-primary/30 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  Limited Time
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-red-400 font-semibold">Early Bird Registration</p>
                <p className="text-sm text-muted-foreground">
                  Secure your spot now - seats are filling up fast for both exclusive events.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
