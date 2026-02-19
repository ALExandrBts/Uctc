import { CheckCircle } from "lucide-react";
import BudgetChart from "@/components/charts/budget-chart";

const PlanSlide = () => {
  return (
    <section className="slide-section bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="title-phase1-roadmap">
            Phase 1 Roadmap
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="title-budget-breakdown">
              Budget Breakdown ($500,000)
            </h3>
            <div className="h-80 mb-6">
              <BudgetChart />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                <span className="font-semibold" data-testid="text-rd-equipment">R&D/Equipment</span>
                <span className="text-primary font-bold" data-testid="amount-rd-equipment">$150,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary/10 rounded-lg">
                <span className="font-semibold" data-testid="text-personnel">Personnel</span>
                <span className="text-secondary font-bold" data-testid="amount-personnel">$200,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-accent rounded-lg">
                <span className="font-semibold" data-testid="text-testing-services">Testing/Services</span>
                <span className="font-bold" data-testid="amount-testing-services">$100,000</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="font-semibold" data-testid="text-marketing-legal">Marketing/Legal</span>
                <span className="font-bold" data-testid="amount-marketing-legal">$50,000</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="title-timeline">
                Timeline (12-18 months)
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" data-testid="phase-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold" data-testid="title-months-1-6">Months 1-6</h4>
                    <p className="text-muted-foreground" data-testid="text-months-1-6">
                      Material development and optimization
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" data-testid="phase-2">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold" data-testid="title-months-7-12">Months 7-12</h4>
                    <p className="text-muted-foreground" data-testid="text-months-7-12">
                      Lab testing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-accent-foreground text-accent w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" data-testid="phase-3">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold" data-testid="title-months-13-18">Months 13-18</h4>
                    <p className="text-muted-foreground" data-testid="text-months-13-18">
                      Prototype
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl text-white">
              <h3 className="font-semibold mb-4" data-testid="title-key-milestones">Milestones</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span data-testid="milestone-prototype">Prototype by Month 18</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span data-testid="milestone-field-tests">Field tests by Month 24</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSlide;
