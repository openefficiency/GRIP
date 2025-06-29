import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { LanguageSupport } from "@/components/LanguageSupport";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { EmployeeBenefits } from "@/components/EmployeeBenefits";
import { PilotProgram } from "@/components/PilotProgram";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <Hero />
      <Features />
      <LanguageSupport />
      <HowItWorks />
      <EmployeeBenefits />
      <Pricing />
      <PilotProgram />
      <Footer />
    </div>
  );
};

export default Index;