import { Button } from "@/components/ui/button";
import { PilotWaitlistModal } from "@/components/PilotWaitlistModal";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="https://AegisWhistle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              AegisWhistle
            </a>
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