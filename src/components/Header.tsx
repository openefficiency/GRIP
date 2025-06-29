import { Button } from "@/components/ui/button";
import { PilotWaitlistModal } from "@/components/PilotWaitlistModal";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col">
              <div className="text-2xl font-bold text-gray-800">
                GRIP
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-500 font-normal">Powered by</span>
                <a 
                  href="https://AegisWhistle.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 group relative"
                >
                  <span className="text-sm font-semibold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 transform group-hover:scale-105">
                    Aegis AI
                  </span>
                  <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    📣
                  </div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10"></div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <PilotWaitlistModal>
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300"
              >
                Watch Aegis AI in Action
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};