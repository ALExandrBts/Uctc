import { Leaf } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="text-primary text-xl" />
            <span className="font-bold text-xl text-foreground">UCTS</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('overview')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-overview"
            >
              Overview
            </button>
            <button 
              onClick={() => scrollToSection('problem')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-problem"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('solution')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-solution"
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('market')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-market"
            >
              Market
            </button>
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="nav-team"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
