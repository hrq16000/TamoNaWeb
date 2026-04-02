import TamonaHeader from "@/components/tamona/TamonaHeader";
import HeroSection from "@/components/tamona/HeroSection";
import CategoriesSection from "@/components/tamona/CategoriesSection";
import FeaturedSection from "@/components/tamona/FeaturedSection";
import CtaSection from "@/components/tamona/CtaSection";
import PlansSection from "@/components/tamona/PlansSection";
import TamonaFooter from "@/components/tamona/TamonaFooter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TamonaHeader />
      <main className="flex-1 pt-16">
        <HeroSection />
        <CategoriesSection />
        <FeaturedSection />
        <CtaSection />
        <PlansSection />
      </main>
      <TamonaFooter />
    </div>
  );
};

export default Index;
