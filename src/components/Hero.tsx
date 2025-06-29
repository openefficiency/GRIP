import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto text-center relative z-10">
        {/* Pilot Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full text-sm font-medium mb-8 animate-fade-in">
          🎯 Pilot Rewards: Affordable Small Business Pack Trial, even for MidMarket and Enterprises + Priority Feature Voting
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
          GRIP by Aegis AI
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in delay-200">
          Grievance Redressal & Improvement Program
        </p>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-800 animate-fade-in delay-300">
          "Where Aegis AI Listens First, Acts Fast – <br />
          Protecting Voices Before They Become Whispers"
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto animate-fade-in delay-500">
          India's First Empathetic AI for Workplace Justice, powered by Aegis AI, made in America with 🫶🏽
          <br />
          Your 24/7 multilingual HR ally – combining confidential whistleblowing with proactive employee care
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-700">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Apply for Aegis AI Pilot Waitlist
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            Watch Aegis AI in Action
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};