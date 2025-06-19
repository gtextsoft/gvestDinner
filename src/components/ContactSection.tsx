import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Globe, Facebook, Instagram, Video, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

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
    lagos: 'https://us06web.zoom.us/meeting/register/0LzS-45BQyCD7HtEdn9sEg',
    abuja: 'https://us06web.zoom.us/meeting/register/Ja7ujd14SqeMRlb1mYKtfQ'
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
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to join Nigeria's most exclusive investor network? Contact us today to secure your spot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 card-gradient border-border/50">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Reserve Your Seat
            </h3>
            
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
                      className="bg-background/50 border-border text-foreground"
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
                      className="bg-background/50 border-border text-foreground"
                      required
                      maxLength={50}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="invest@gvestglobal.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-background/50 border-border text-foreground"
                    required
                    maxLength={100}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                  <Input 
                    id="phone" 
                    name="phone"
                    type="tel" 
                    placeholder="+234 XXX XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-background/50 border-border text-foreground"
                    required
                    maxLength={20}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-foreground">Which applies to you? *</Label>
                  <select 
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground"
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
                  <Label htmlFor="source" className="text-foreground">How did you hear about us? *</Label>
                  <select 
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={(e) => handleInputChange('source', e.target.value)}
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground"
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
                  <Label htmlFor="availability" className="text-foreground">What is your availability? *</Label>
                  <select 
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={(e) => handleInputChange('availability', e.target.value)}
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground"
                    required
                  >
                    <option value="">Select your preference</option>
                    <option value="physical">Physical</option>
                    <option value="virtual">Virtual</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="event" className="text-foreground">Preferred Event *</Label>
                  <select 
                    id="event"
                    name="event"
                    value={formData.event}
                    onChange={(e) => handleInputChange('event', e.target.value)}
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-md text-foreground"
                    required
                  >
                    <option value="">Select an event</option>
                    <option value="lagos">Lagos - June 29th, 2025</option>
                    <option value="abuja">Abuja - July 20th, 2025</option>
                    <option value="both">Both Events</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell us about your investment interests..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-background/50 border-border text-foreground min-h-[100px]"
                    maxLength={1000}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3"
                  size="lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    'Submit Registration'
                  )}
                </Button>
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
                      {formData.event === 'lagos' && (
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full border-primary/50 text-primary hover:bg-primary/10"
                          onClick={() => window.open(ZOOM_LINKS.lagos, '_blank')}
                        >
                          Register for Lagos Virtual Event
                        </Button>
                      )}
                      {formData.event === 'abuja' && (
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full border-primary/50 text-primary hover:bg-primary/10"
                          onClick={() => window.open(ZOOM_LINKS.abuja, '_blank')}
                        >
                          Register for Abuja Virtual Event
                        </Button>
                      )}
                      {formData.event === 'both' && (
                        <>
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full border-primary/50 text-primary hover:bg-primary/10"
                            onClick={() => window.open(ZOOM_LINKS.lagos, '_blank')}
                          >
                            Register for Lagos Virtual Event
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full border-primary/50 text-primary hover:bg-primary/10"
                            onClick={() => window.open(ZOOM_LINKS.abuja, '_blank')}
                          >
                            Register for Abuja Virtual Event
                          </Button>
                        </>
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
            <Card className="p-6 card-gradient border-border/50">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-foreground font-medium">For Enquiries Call:</p>
                    <p className="text-primary font-bold text-lg">+234 809 999 0864</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-foreground font-medium">Website:</p>
                    <p className="text-primary">www.gvestglobal.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient border-border/50">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                Follow Us
              </h3>
              
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Gvest
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/50 text-primary hover:bg-primary/10"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  @gvestcapitalglobal
                </Button>
              </div>
            </Card>

            <Card className="p-6 card-gradient border-border/50">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                Why Join?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Network with top investors</li>
                <li>• Exclusive business opportunities</li>
                <li>• Premium dining experience</li>
                <li>• Strategic partnerships</li>
                <li>• Industry insights</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
