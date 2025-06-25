import { Button } from "@/components/ui/button";
import { Phone, Globe, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Events', id: 'events-section' },
    { name: 'Contact', id: 'contact-section' },
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 overflow-hidden rounded-lg">
                <img 
                  src="https://files.selar.co/product-images/2023/products/drsakintayo/gvest-investment-installm-selar.co-6506d3c7be071.png"
                  alt="Gvest Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-playfair text-3xl font-bold text-foreground">GVEST</h3>
                <p className="text-muted-foreground text-sm">Investment Network</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Nigeria's premier investment network, connecting visionaries and building the future 
              through exclusive networking experiences and strategic partnerships.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>+234 809 999 0864</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
                <span>www.gvestglobal.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>hello@gvestglobal.com</span>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Lagos & Abuja, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Events & Services */}
          <div>
            <h4 className="font-playfair text-lg font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Investment Networking</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Business Partnerships</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Strategic Connections</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Exclusive Events</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-12 border-t border-border/30">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-playfair text-xl font-bold text-foreground mb-2">Stay Connected</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Get updates on upcoming events and investment opportunities
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="form-input flex-1 text-foreground text-sm"
              />
              <Button
                className="btn-premium text-primary-foreground font-semibold px-6 py-2 rounded-lg hover-lift"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-12 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 hover-lift"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-primary/30 text-muted-foreground hover:text-primary hover:bg-primary/10 hover-lift flex items-center gap-2"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30 bg-background/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <span>© 2025 GVEST Global. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button className="hover:text-primary transition-colors">Privacy Policy</button>
              <button className="hover:text-primary transition-colors">Terms of Service</button>
              <button className="hover:text-primary transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 