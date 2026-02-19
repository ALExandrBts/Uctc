import { AlertTriangle } from "lucide-react";

const ProblemSlide = () => {
  return (
    <section id="problem" className="slide-section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="title-dual-challenges">
            Dual Global Challenges
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <img 
              src="https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Expensive lithium-ion battery technology" 
              className="rounded-lg w-full h-48 object-cover mb-6"
              data-testid="img-lithium-batteries"
            />
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-destructive text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-foreground" data-testid="title-energy-costs">
                High Energy Storage Costs
              </h3>
            </div>
            <p className="text-muted-foreground text-lg" data-testid="text-energy-costs">
              Energy storage costs $150–$250/kWh, slowing renewable energy adoption
            </p>
          </div>
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <img 
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
              alt="Industrial waste pollution and environmental damage" 
              className="rounded-lg w-full h-48 object-cover mb-6"
              data-testid="img-waste-pollution"
            />
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-destructive text-2xl mr-3" />
              <h3 className="text-xl font-semibold text-foreground" data-testid="title-waste-pollution">
                Massive Waste Pollution
              </h3>
            </div>
            <p className="text-muted-foreground text-lg" data-testid="text-waste-pollution">
              177.3M tons of red mud and microsilica pollute yearly, with only 2–5% recycled
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSlide;
