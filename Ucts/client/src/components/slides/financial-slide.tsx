import { Rocket, Globe, Check } from "lucide-react";
import RevenueChart from "@/components/charts/revenue-chart";

const FinancialSlide = () => {
  return (
    <section className="slide-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="title-path-profitability">
            Path to Profitability
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="title-revenue-projections">
              Revenue Projections
            </h3>
            <div className="h-80">
              <RevenueChart />
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground" data-testid="title-year-1">Year 1</h3>
                <Rocket className="text-primary text-xl" />
              </div>
              <p className="text-2xl font-bold text-primary mb-2" data-testid="text-year-1-revenue">$1M revenue</p>
              <p className="text-muted-foreground" data-testid="text-year-1-description">
                Pilot sales
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground" data-testid="title-year-3">Year 3</h3>
                <Globe className="text-secondary text-xl" />
              </div>
              <p className="text-2xl font-bold text-secondary mb-2" data-testid="text-year-3-revenue">$15M</p>
              <p className="text-muted-foreground" data-testid="text-year-3-description">
                Global scaling
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4" data-testid="title-revenue-streams">
                Revenue Model
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Check className="text-primary w-4 h-4" />
                  <span className="text-muted-foreground" data-testid="stream-system-sales">
                    UCTS system sales
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-primary w-4 h-4" />
                  <span className="text-muted-foreground" data-testid="stream-licensing">
                    Licensing
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="text-primary w-4 h-4" />
                  <span className="text-muted-foreground" data-testid="stream-partnerships">
                    Waste partnerships
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white">
              <h3 className="font-semibold mb-2" data-testid="title-exit-strategy">Exit</h3>
              <p data-testid="text-exit-strategy">
                Acquisition (Siemens, Tesla) or IPO in 5–7 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialSlide;
