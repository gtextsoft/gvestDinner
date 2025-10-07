import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Globe, Facebook, Instagram, Twitter, Video, CheckCircle2, XCircle, AlertCircle, Sparkles, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    event: '',
    message: '',
    category: '',
    source: '',
    availability: ''
  });

  const ZOOM_LINKS = {
    akwaibom: 'https://us06web.zoom.us/meeting/register/GBLMi-tUSVq6WOO1Naon1Q'
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear any previous error when user starts typing
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('subject', `New Registration - ${formData.get('event')} Event`);

    try {
      const response = await fetch('https://formspree.io/f/xkgbrgey', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const showZoomLinks = isSubmitted && formData.availability === 'virtual' && formData.event;

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      event: '',
      message: '',
      category: '',
      source: '',
      availability: ''
    });
  };

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
            
            {!isSubmitted ? (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                action="https://formspree.io/f/xkgbrgey"
                method="POST"
              >
                {submitError && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <div className="flex items-center gap-2 text-destructive">
                      <AlertCircle className="w-5 h-5" />
                      <p className="font-medium">{submitError}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="form-input text-foreground"
                      required
                      maxLength={50}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name *</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="form-input text-foreground"
                      required
                      maxLength={50}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Email *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="invest@gvestglobal.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="form-input text-foreground"
                    required
                    maxLength={100}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="form-input text-foreground"
                    required
                    maxLength={20}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-foreground font-medium">Which applies to you? *</Label>
                  <select 
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="form-input w-full text-foreground"
                    required
                  >
                    <option value="">Select your category</option>
                    <option value="investor">Investor</option>
                    <option value="client">Client</option>
                    <option value="associate">Associate</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="source" className="text-foreground font-medium">How did you hear about us? *</Label>
                  <select 
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={(e) => handleInputChange('source', e.target.value)}
                    className="form-input w-full text-foreground"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="referral">Referral</option>
                    <option value="social_media">Social Media</option>
                    <option value="email">Email</option>
                    <option value="online">Online</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="availability" className="text-foreground font-medium">What is your availability? *</Label>
                  <select 
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value)}
                    className="form-input w-full text-foreground"
                    required
                  >
                    <option value="">Select your preference</option>
                    <option value="physical">Physical</option>
                    <option value="virtual">Virtual</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="event" className="text-foreground font-medium">Preferred Event *</Label>
                  <select 
                    id="event"
                    name="event"
                    value={formData.event}
                    onChange={(e) => handleInputChange('event', e.target.value)}
                    className="form-input w-full text-foreground"
                    required
                  >
                    <option value="">Select an event</option>
                    <option value="akwaibom">Akwa Ibom - October 22nd, 2025</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your investment interests..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="form-input text-foreground min-h-[100px]"
                    maxLength={1000}
                  />
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-premium w-full text-primary-foreground font-semibold py-6 text-lg rounded-xl hover-lift"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Submitting Registration...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Submit Registration
                      </div>
                    )}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center gap-2 text-green-500">
                    <CheckCircle2 className="w-5 h-5" />
                    <p className="font-medium">Thank you for your registration! We'll be in touch soon.</p>
                  </div>
                </div>

                {showZoomLinks && (
                  <div className="space-y-4 p-4 bg-background/30 rounded-lg border border-primary/20">
                    <h4 className="font-playfair text-lg font-semibold text-foreground flex items-center gap-2">
                      <Video className="w-5 h-5 text-primary" />
                      Virtual Event Registration
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Please click the button below to register for your virtual event:
                    </p>
                    <div className="space-y-3">
                      {formData.event === 'akwaibom' && (
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full border-primary/50 text-primary hover:bg-primary/10"
                          onClick={() => window.open(ZOOM_LINKS.akwaibom, '_blank')}
                        >
                          Register for Akwa Ibom Virtual Event
                        </Button>
                      )}
                    </div>
                  </div>
                )}

                <Button
                  type="button"
                  variant="outline"
                  className="w-full border-primary/50 text-primary hover:bg-primary/10"
                  onClick={resetForm}
                >
                  Register Another Person
                </Button>
              </div>
            )}
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
