import CostChart from "@/components/charts/cost-chart";

const CompetitiveSlide = () => {
  return (
    <section className="slide-section bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="title-competitive-advantage">
            Why UCTS Stands Out
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="title-comparison-table">
              Comparison Table
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left" data-testid="table-competitive-comparison">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-3 px-4 font-semibold text-foreground">Technology</th>
                    <th className="py-3 px-4 font-semibold text-foreground">Cost ($/kWh)</th>
                    <th className="py-3 px-4 font-semibold text-foreground">Eco-Friendly</th>
                    <th className="py-3 px-4 font-semibold text-foreground">Scalability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Lithium-Ion</td>
                    <td className="py-3 px-4 text-muted-foreground">150–250</td>
                    <td className="py-3 px-4 text-destructive">Low</td>
                    <td className="py-3 px-4 text-muted-foreground">Medium</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Sand Batteries</td>
                    <td className="py-3 px-4 text-muted-foreground">10–20</td>
                    <td className="py-3 px-4 text-primary">High</td>
                    <td className="py-3 px-4 text-destructive">Low</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4 text-muted-foreground">Standard Ceramics</td>
                    <td className="py-3 px-4 text-muted-foreground">50–100</td>
                    <td className="py-3 px-4 text-muted-foreground">Medium</td>
                    <td className="py-3 px-4 text-primary">High</td>
                  </tr>
                  <tr className="bg-primary/10">
                    <td className="py-3 px-4 font-bold text-primary">UCTS</td>
                    <td className="py-3 px-4 font-bold text-primary">13.6</td>
                    <td className="py-3 px-4 font-bold text-primary">High</td>
                    <td className="py-3 px-4 font-bold text-primary">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold text-primary mb-2" data-testid="title-our-edge">
                Our Edge
              </h4>
              <p className="text-muted-foreground" data-testid="text-our-edge">
                Lowest cost, waste-based, scalable solution
              </p>
            </div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="title-cost-comparison">
              Cost Comparison ($/kWh)
            </h3>
            <div className="h-80">
              <CostChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveSlide;
