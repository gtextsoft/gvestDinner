import { Card } from "@/components/ui/card";
import { Users, Target, TrendingUp, Award, Shield, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Exclusive Network",
      description: "Connect with Nigeria's top investors, entrepreneurs, and industry leaders in an intimate setting."
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Purpose-driven conversations that lead to meaningful business relationships and opportunities."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Access to funding, partnerships, and strategic insights that accelerate business growth."
    },
    {
      icon: Award,
      title: "Premium Experience",
      description: "Carefully curated events with exceptional dining and a sophisticated atmosphere."
    }
  ];

  const stats = [
    { number: "500+", label: "Investors Connected" },
    { number: "₦50B+", label: "Deals Facilitated" },
    { number: "100+", label: "Successful Partnerships" },
    { number: "50+", label: "Portfolio Companies" }
  ];

  return (
    <section id="about-section" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            About GVEST
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Nigeria's Premier
            <span className="text-primary block">Investment Network</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            GVEST brings together the most influential minds in Nigeria's investment ecosystem, 
            creating opportunities that shape the future of business across the continent.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 card-gradient border-border/50 hover-lift max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
            <blockquote className="font-playfair text-2xl md:text-3xl text-foreground mb-6 leading-relaxed">
              "We believe that the most transformative business relationships are built over meaningful conversations 
              and shared experiences."
            </blockquote>
            <div className="text-primary font-semibold">
              — GVEST Leadership Team
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="p-6 card-gradient border-border/50 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-card/50 rounded-3xl p-8 md:p-12 border border-border/50">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
              Impact by Numbers
            </h3>
            <p className="text-muted-foreground">
              The measurable results of building Nigeria's strongest investment network
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-4">
              What Makes GVEST Different
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlike typical networking events, GVEST dinners are carefully designed for meaningful engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-background/30 hover:bg-background/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Curated Guest List</h4>
              <p className="text-sm text-muted-foreground">
                Every attendee is personally vetted to ensure meaningful connections
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-background/30 hover:bg-background/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Structured Networking</h4>
              <p className="text-sm text-muted-foreground">
                Thoughtfully designed format that facilitates genuine business conversations
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-background/30 hover:bg-background/50 transition-colors duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Premium Venues</h4>
              <p className="text-sm text-muted-foreground">
                Exceptional locations that reflect the caliber of our network
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 