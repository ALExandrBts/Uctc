import { Flame, Box, Zap, FlaskConical, Thermometer, Shield } from "lucide-react";
import uctsInternalImg from '../../assets/ucts-internal.png';

const TechnologySlide = () => {
  return (
    <section className="slide-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="title-how-ucts-works">
            How UCTS Works
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <img 
              src={uctsInternalImg} 
              alt="UCTS system internal structure with hexagonal ceramic blocks" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-ceramic-bricks"
            />
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Flame className="text-destructive text-2xl mb-2 mx-auto" />
                <p className="font-semibold" data-testid="text-temperature">1000°C</p>
                <p className="text-sm text-muted-foreground">Heat Resistant</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Box className="text-primary text-2xl mb-2 mx-auto" />
                <p className="font-semibold" data-testid="text-design">Hexagonal</p>
                <p className="text-sm text-muted-foreground">Brick Design</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <Zap className="text-secondary text-2xl mb-2 mx-auto" />
                <p className="font-semibold" data-testid="text-heaters">Resistive</p>
                <p className="text-sm text-muted-foreground">Heaters</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="title-urc1-material">
                URC-1 Ceramic Material
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FlaskConical className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold" data-testid="title-composition">Composition</h4>
                    <p className="text-muted-foreground" data-testid="text-composition">
                      Red mud + microsilica + binders
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Thermometer className="text-destructive mt-1" />
                  <div>
                    <h4 className="font-semibold" data-testid="title-temperature-resistance">
                      Temperature Resistance
                    </h4>
                    <p className="text-muted-foreground" data-testid="text-temperature-resistance">
                      Heat-resistant to 1000°C
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold" data-testid="title-durability">Durability</h4>
                    <p className="text-muted-foreground" data-testid="text-durability">
                      Long-lasting performance with minimal degradation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="title-system-design">
                System Design
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Box className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold" data-testid="title-hexagonal-core">Hexagonal brick core</h4>
                    <p className="text-muted-foreground" data-testid="text-hexagonal-core">
                      Optimized brick arrangement for maximum heat retention
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold" data-testid="title-low-cost-charging">Low-cost resistive heaters</h4>
                    <p className="text-muted-foreground" data-testid="text-low-cost-charging">
                      Charged via low-cost resistive heaters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySlide;
