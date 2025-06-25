import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero-section' },
    { name: 'Events', id: 'events-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Contact', id: 'contact-section' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer hover-lift"
            onClick={() => scrollToSection('hero-section')}
          >
            <div className="w-12 h-12 overflow-hidden rounded-lg">
              <img 
                src="https://files.selar.co/product-images/2023/products/drsakintayo/gvest-investment-installm-selar.co-6506d3c7be071.png"
                alt="Gvest Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair text-2xl font-bold text-foreground">GVEST</h1>
              <p className="text-xs text-muted-foreground -mt-1">Investment Network</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+234 809 999 0864</span>
            </div>
            <Button
              onClick={() => scrollToSection('contact-section')}
              className="btn-premium text-primary-foreground font-semibold px-6 py-2 rounded-full hover-lift"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in-scale">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Phone className="w-4 h-4" />
                    <span>+234 809 999 0864</span>
                  </div>
                  <Button
                    onClick={() => scrollToSection('contact-section')}
                    className="btn-premium w-full text-primary-foreground font-semibold py-3 rounded-full"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 