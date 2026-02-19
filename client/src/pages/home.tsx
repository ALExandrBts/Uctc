import Navigation from "@/components/navigation";
import OverviewSlide from "@/components/slides/overview-slide";
import ProblemSlide from "@/components/slides/problem-slide";
import SolutionSlide from "@/components/slides/solution-slide";
import MarketSlide from "@/components/slides/market-slide";
import CompetitiveSlide from "@/components/slides/competitive-slide";
import TechnologySlide from "@/components/slides/technology-slide";
import PlanSlide from "@/components/slides/plan-slide";
import FinancialSlide from "@/components/slides/financial-slide";
import TeamSlide from "@/components/slides/team-slide";
import ContactSlide from "@/components/slides/contact-slide";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navigation />
      <OverviewSlide />
      <ProblemSlide />
      <SolutionSlide />
      <MarketSlide />
      <CompetitiveSlide />
      <TechnologySlide />
      <PlanSlide />
      <FinancialSlide />
      <TeamSlide />
      <ContactSlide />
    </div>
  );
}
