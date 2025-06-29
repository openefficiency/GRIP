import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            GRIP by{" "}
          </span>
          <a 
            href="https://AegisWhistle.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block relative group"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 bg-clip-text text-transparent hover:from-emerald-300 hover:via-cyan-300 hover:to-teal-400 transition-all duration-300 transform group-hover:scale-105 group-hover:drop-shadow-lg">
              Aegis AI
            </span>
            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
            {/* Underline effect */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 group-hover:w-full transition-all duration-300"></div>
          </a>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in delay-200">
          Grievance Redressal & Improvement Program
        </p>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-800 animate-fade-in delay-300">
          "Where{" "}
          <a 
            href="https://AegisWhistle.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block relative group"
          >
            <span className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-600 bg-clip-text text-transparent hover:from-emerald-400 hover:via-cyan-400 hover:to-teal-500 transition-all duration-300 transform group-hover:scale-105">
              Aegis AI
            </span>
            {/* Subtle glow for secondary mention */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-600 opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10"></div>
          </a>
          {" "}Listens First, Acts Fast – <br />
          Protecting Voices Before They Become Whispers"
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in delay-500">
          India's first empathetic AI for workplace justice, powered by{" "}
          <a 
            href="https://AegisWhistle.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block relative group"
          >
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:from-emerald-500 hover:to-teal-500 transition-all duration-300 font-semibold transform group-hover:scale-105">
              Aegis AI
            </span>
            {/* Minimal glow for body text */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300 -z-10"></div>
          </a>
          , made in America with 🫶🏽
          <br />
          Your 24/7 multilingual HR ally – combining confidential whistleblowing with proactive employee care
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-700">
          <a 
            href="https://AegisWhistle.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Apply for Aegis AI Pilot Waitlist
            </Button>
          </a>
          <a 
            href="https://BackFeed.XYZ" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Watch Aegis AI in Action
            </Button>
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};