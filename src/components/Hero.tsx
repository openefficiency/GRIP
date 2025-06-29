import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { PilotWaitlistModal } from "@/components/PilotWaitlistModal";

export const Hero = () => {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 opacity-10"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto text-center relative z-10">
          {/* Pilot Badge - Improved readability */}
          <div className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full text-sm md:text-base font-medium mb-8 animate-fade-in max-w-5xl mx-auto">
            🎯 Pilot Rewards: Affordable Small Business Pack Trial for MidMarket and Enterprise + Priority Feature Voting
          </div>
          
          {/* Main Heading with special Aegis AI button */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              GRIP
            </span>
            <br />
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-2xl md:text-3xl text-gray-500 font-normal">Powered by</span>
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group relative"
              >
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent hover:from-emerald-300 hover:via-cyan-300 hover:to-teal-400 transition-all duration-300 transform group-hover:scale-105 group-hover:drop-shadow-lg">
                  Aegis AI
                </span>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl group-hover:scale-110 transition-all duration-300 shadow-2xl group-hover:shadow-3xl animate-pulse">
                  📣
                </div>
                {/* Enhanced glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 -z-10"></div>
                {/* Underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
          </h1>
          
          {/* Minimal spacing for subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in delay-200 font-light">
            Grievance Redressal & Improvement Program
          </p>
          
          {/* Scroll indicator - closer to content */}
          <div className="animate-bounce mt-8">
            <ArrowDown className="w-5 h-5 text-gray-400 mx-auto" />
          </div>
        </div>
      </section>

      {/* New Separate Section with Different Background */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto text-center">
          {/* New layout as requested */}
          <h2 className="mb-8 animate-fade-in leading-relaxed">
            <div className="text-2xl md:text-3xl font-medium mb-3 flex items-center justify-center gap-2">
              Where{" "}
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group relative"
              >
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent hover:from-emerald-300 hover:via-cyan-300 hover:to-teal-400 transition-all duration-300 transform group-hover:scale-105">
                  Aegis AI
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white text-lg md:text-xl group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl">
                  📣
                </div>
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-300 -z-10"></div>
              </a>
            </div>
            <div className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Listens First | Acts Fast
            </div>
            <div className="text-2xl md:text-3xl font-medium text-gray-300">
              Protecting Voices Before They Become Whispers
            </div>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-4xl mx-auto animate-fade-in delay-300 leading-relaxed">
            India's first empathetic AI for workplace justice, powered by{" "}
            <a 
              href="https://AegisWhistle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 group relative"
            >
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent hover:from-emerald-300 hover:to-teal-300 transition-all duration-300 font-semibold transform group-hover:scale-105">
                Aegis AI
              </span>
              <span className="text-lg">📣</span>
              {/* Minimal glow for body text */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-15 blur-md transition-opacity duration-300 -z-10"></div>
            </a>
            , made in America with 🫶🏽
            <br />
            Your 24/7 multilingual HR ally – combining confidential whistleblowing with proactive employee care
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
            <PilotWaitlistModal>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Apply for Aegis AI Pilot Waitlist
              </Button>
            </PilotWaitlistModal>
            <a 
              href="https://BackFeed.XYZ" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-purple-900 px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                Watch Aegis AI in Action
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};