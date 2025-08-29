import { CheckCircle } from "lucide-react";
import uctsFacilityImg from '../../assets/ucts-facility.png';

const OverviewSlide = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="slide-section gradient-bg hero-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 fade-in-up" data-testid="title-main">
                Upcycled Ceramic Thermal Storage (UCTS)
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 fade-in-up" data-testid="subtitle-main">
                Turning Waste into Affordable Energy Storage
              </p>
              <div className="space-y-4 text-lg text-white fade-in-up">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                  <p data-testid="benefit-cost">UCTS converts red mud and microsilica into ceramic for energy storage at $13.6/kWh—10x cheaper than lithium-ion batteries</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                  <p data-testid="benefit-environmental">Solves high energy storage costs and 177.3M tons of waste pollution annually</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-400 mt-1 w-5 h-5 flex-shrink-0" />
                  <p data-testid="benefit-funding">Seeking $500,000 for Phase 1 to develop materials and prototype</p>
                </div>
              </div>
              <button 
                onClick={scrollToContact}
                className="inline-block bg-white hover:bg-white/90 text-gray-900 font-semibold px-8 py-4 rounded-lg mt-8 transition-colors shadow-lg"
                data-testid="button-learn-more"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:pl-8">
            <img 
              src={uctsFacilityImg} 
              alt="UCTS thermal storage facility with renewable energy infrastructure" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSlide;
