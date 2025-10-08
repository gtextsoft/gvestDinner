import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp, Clock, Shield, Phone, Globe, Instagram } from "lucide-react";

const InvestmentSection = () => {
  // Investment tiers data from the flyer
  const investmentTiers = [
    { amount: 10000, roi: 10, icon: "💼" },
    { amount: 20000, roi: 12, icon: "🏢" },
    { amount: 30000, roi: 13, icon: "🏘️" },
    { amount: 50000, roi: 15, icon: "🏗️" },
    { amount: 100000, roi: 18, icon: "🏭" },
    { amount: 200000, roi: 19, icon: "🌆" },
    { amount: 500000, roi: 22, icon: "🏙️" },
    { amount: 1000000, roi: 25, icon: "🏛️" },
  ];

  // Returns data for each timeframe
  const returnsData = [
    {
      timeframe: "18 MONTHS (ACCRUED INTEREST)",
      returns: [1000, 2400, 3900, 7500, 18000, 38000, 110000, 250000]
    },
    {
      timeframe: "3RD YEAR (ACCRUED INTEREST)",
      returns: [2000, 4800, 7800, 15000, 36000, 76000, 220000, 500000]
    },
    {
      timeframe: "END OF THE 3RD YEAR (TENURE)",
      returns: [12000, 24800, 37800, 65000, 136000, 276000, 720000, 1500000]
    },
    {
      timeframe: "4.5 YEARS (ACCRUED INTEREST)",
      returns: [3000, 7200, 11700, 22500, 54000, 114000, 330000, 750000]
    },
    {
      timeframe: "6TH YEAR (ACCRUED INTEREST)",
      returns: [4000, 9600, 15600, 30000, 72000, 152000, 440000, 1000000]
    },
    {
      timeframe: "END OF THE 6TH YEAR (TENURE)",
      returns: [14000, 29600, 45600, 80000, 172000, 352000, 940000, 2000000]
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="investment-section" className="py-24 bg-gradient-to-br from-background via-background to-primary/5 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4" />
            GTEXT USA Investment Opportunity
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Maximizing Your
            <span className="text-primary block">Real Estate Investment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join Gvest USA and GTEXT HOMES USA in building wealth through strategic real estate investments. 
            Our proven track record delivers exceptional returns across multiple investment tiers.
          </p>
          
          {/* Investment Tiers Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {investmentTiers.map((tier, index) => (
              <Card key={index} className="p-4 text-center hover-lift border-border/50">
                <div className="text-2xl mb-2">{tier.icon}</div>
                <div className="text-xs font-bold text-foreground mb-1">
                  ${tier.amount.toLocaleString()}
                </div>
                <div className="text-xs text-primary font-semibold">
                  {tier.roi}% ROI
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Flyer Image */}
        <div className="mb-12 text-center">
          <Card className="p-4 md:p-6 card-gradient border-border/50 hover-lift max-w-4xl mx-auto">
            <img 
              src="/flyer/Invest.jpg" 
              alt="GTEXT USA Investment Opportunity Flyer"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </Card>
        </div>

        {/* Main Investment Table */}
        <Card className="p-6 md:p-8 mb-16 card-gradient border-border/50 hover-lift">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left py-4 px-2 font-semibold text-foreground min-w-[200px]">
                    <DollarSign className="w-5 h-5 inline mr-2" />
                    Investment & ROI
                  </th>
                  {investmentTiers.map((tier, index) => (
                    <th key={index} className="text-center py-4 px-2 font-semibold text-foreground min-w-[120px]">
                      <div className="text-sm font-bold">${tier.amount.toLocaleString()}</div>
                      <div className="text-xs text-primary">{tier.roi}%</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {returnsData.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b border-border/20 hover:bg-background/30 transition-colors">
                    <td className="py-4 px-2 font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        {rowIndex === 2 || rowIndex === 5 ? (
                          <Shield className="w-4 h-4 text-primary" />
                        ) : (
                          <Clock className="w-4 h-4 text-muted-foreground" />
                        )}
                        <span className="text-sm">{row.timeframe}</span>
                      </div>
                    </td>
                    {row.returns.map((returnAmount, colIndex) => (
                      <td key={colIndex} className="py-4 px-2 text-center">
                        <div className={`font-semibold ${
                          rowIndex === 2 || rowIndex === 5 ? 'text-primary' : 'text-foreground'
                        }`}>
                          {formatCurrency(returnAmount)}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Key Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center hover-lift border-border/50">
            <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Flexible Tenure</h3>
            <p className="text-sm text-muted-foreground">
              3-6 years investment period with competitive returns
            </p>
          </Card>

          <Card className="p-6 text-center hover-lift border-border/50">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">18 Month Returns</h3>
            <p className="text-sm text-muted-foreground">
              ROI paid 18 months after investing or at tenure end
            </p>
          </Card>

          <Card className="p-6 text-center hover-lift border-border/50">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Terms Apply</h3>
            <p className="text-sm text-muted-foreground">
              All investments subject to terms and conditions
            </p>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="p-8 md:p-12 card-gradient border-border/50 hover-lift max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Contact our investment team today to learn more about GTEXT USA investment opportunities 
              and how you can maximize your real estate investment returns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+234 809 225 5133</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+234 809 999 0864</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Instagram className="w-4 h-4" />
                <span>@gvestglobal</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>www.gvestglobal.com</span>
              </div>
            </div>

            <Button
              onClick={() => window.open('https://www.gvestglobal.com', '_blank')}
              className="btn-premium text-primary-foreground font-semibold px-8 py-3 rounded-full hover-lift"
            >
              Visit Our Website
            </Button>
          </Card>
        </div>

        {/* Partnership Notice */}
        <div className="mt-16 text-center">
          <Card className="p-6 bg-red-500/5 border-red-500/20 hover-lift max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-4 bg-red-500 rounded-t-lg"></div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-foreground">GVEST. USA</h4>
                  <p className="text-sm text-muted-foreground">Investment Partners</p>
                </div>
              </div>
              <div className="text-muted-foreground">×</div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-4 bg-red-500 rounded-t-lg"></div>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-foreground">GTEXT HOMES USA</h4>
                  <p className="text-sm text-muted-foreground">Real Estate Development</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
