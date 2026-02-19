import { Handshake, Building, GraduationCap, Leaf } from "lucide-react";

const TeamSlide = () => {
  return (
    <section id="team" className="slide-section bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="title-driving-force">
            Our Driving Force
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border text-center">
              <div className="w-24 h-24 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" data-testid="avatar-aleksandr">
                AS
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="name-aleksandr">
                Aleksandr Snigirev
              </h3>
              <p className="text-primary font-semibold mb-4" data-testid="title-aleksandr">Founder</p>
              <p className="text-muted-foreground" data-testid="bio-aleksandr">
                Materials science and energy expert, sole creator with global vision
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border text-center">
              <div className="w-24 h-24 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" data-testid="avatar-anton">
                AZ
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="name-anton">
                Anton Zubenko
              </h3>
              <p className="text-secondary font-semibold mb-4" data-testid="title-anton">Analyst</p>
              <p className="text-muted-foreground" data-testid="bio-anton">
                Drives financial modeling and market strategy
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="title-strategic-partnerships">
                Collaboration
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Handshake className="text-primary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold" data-testid="title-tech-partners">Tech firms</h4>
                    <p className="text-muted-foreground" data-testid="text-tech-partners">
                      Partnerships with tech firms (Siemens)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building className="text-secondary text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold" data-testid="title-waste-providers">Waste providers</h4>
                    <p className="text-muted-foreground" data-testid="text-waste-providers">
                      Waste providers (Alcoa)
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <GraduationCap className="text-accent-foreground text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold" data-testid="title-research-institutes">Research institutes</h4>
                    <p className="text-muted-foreground" data-testid="text-research-institutes">
                      Research institutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-xl text-white text-center">
              <Leaf className="text-6xl mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2" data-testid="logo-ucts">UCTS</h3>
              <p className="text-lg" data-testid="tagline-ucts">
                Transforming waste into sustainable energy solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSlide;
