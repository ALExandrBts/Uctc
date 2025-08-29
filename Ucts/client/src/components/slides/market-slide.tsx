import { Battery, Thermometer, Recycle } from "lucide-react";
import MarketChart from "@/components/charts/market-chart";

const MarketSlide = () => {
  return (
    <section id="market" className="slide-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="title-growth-potential">
            Massive Growth Potential
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground" data-testid="title-energy-storage-market">
                  Energy Storage Market
                </h3>
                <Battery className="text-primary text-xl" />
              </div>
              <p className="text-2xl font-bold text-primary mb-2" data-testid="text-energy-storage-growth">
                $295B → $465B
              </p>
              <p className="text-muted-foreground">2025 to 2030 (CAGR 9.53%)</p>
              <p className="text-sm text-muted-foreground mt-2">Source: Mordor Intelligence</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground" data-testid="title-thermal-storage">
                  Thermal Storage
                </h3>
                <Thermometer className="text-secondary text-xl" />
              </div>
              <p className="text-2xl font-bold text-secondary mb-2" data-testid="text-thermal-storage-growth">
                $8.5B → $14.2B
              </p>
              <p className="text-muted-foreground">2025 to 2030 (CAGR 10.93%)</p>
              <p className="text-sm text-muted-foreground mt-2">Source: ResearchAndMarkets</p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground" data-testid="title-waste-management">
                  Waste Management
                </h3>
                <Recycle className="text-primary text-xl" />
              </div>
              <p className="text-2xl font-bold text-primary mb-2" data-testid="text-waste-management-growth">
                $1.41T → $1.89T
              </p>
              <p className="text-muted-foreground">2024 to 2030 (CAGR 5.3%)</p>
              <p className="text-sm text-muted-foreground mt-2">Source: Grand View Research</p>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white">
              <h3 className="font-semibold mb-2" data-testid="title-target-markets">
                Target Markets
              </h3>
              <p data-testid="text-target-markets">
                USA, China, India—high demand for renewables and waste solutions
              </p>
            </div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="title-market-comparison">
              Market Size Comparison (2030)
            </h3>
            <div className="h-80">
              <MarketChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSlide;
