import { DollarSign, Leaf, Expand } from "lucide-react";
import uctsBlockImg from '../../assets/ucts-block.png';

const SolutionSlide = () => {
  return (
    <section id="solution" className="slide-section bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="title-solution">
            UCTS: Cost-Effective and Sustainable
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <img 
              src={uctsBlockImg} 
              alt="URC-1 hexagonal ceramic block for thermal storage" 
              className="rounded-xl shadow-lg w-full h-auto max-w-md mx-auto"
              data-testid="img-urc1-block"
            />
          </div>
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="title-process">
              Solution Process
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-destructive text-destructive-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold" data-testid="step-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Industrial Waste</h4>
                  <p className="text-muted-foreground">Red mud + Microsilica</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-primary text-2xl">↓</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold" data-testid="step-2">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">URC-1 Ceramic</h4>
                  <p className="text-muted-foreground">High heat capacity & durability</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-primary text-2xl">↓</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-secondary text-secondary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold" data-testid="step-3">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Energy Storage</h4>
                  <p className="text-muted-foreground">Grid & industrial applications</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-start space-x-3">
                <DollarSign className="text-primary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2" data-testid="title-ultra-low-cost">
                    Ultra-Low Cost
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-cost-comparison">
                    Cost: $13.6/kWh, eco-friendly, scalable for grid and industrial use
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-start space-x-3">
                <Leaf className="text-primary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2" data-testid="title-eco-friendly">
                    Eco-Friendly
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-eco-friendly">
                    Creates URC-1 ceramic from waste, offering high heat capacity and durability
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-start space-x-3">
                <Expand className="text-primary text-xl mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2" data-testid="title-scalable">
                    Scalable
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-scalable">
                    Scalable for grid and industrial use
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSlide;
