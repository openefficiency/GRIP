import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const AegisAIInteraction = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleTalkToAegis = () => {
    setShowIframe(true);
  };

  const handleCloseIframe = () => {
    setShowIframe(false);
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            Keen to empower{" "}
            <br />
            <span className="text-yellow-300">Your Employees</span>{" "}
            <br />
            with{" "}
            <a 
              href="https://AegisWhistle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block relative group"
            >
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 transition-all duration-300 transform group-hover:scale-105 group-hover:drop-shadow-lg">
                Aegis AI
              </span>
              {/* Enhanced glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300 -z-10"></div>
              {/* Underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </a>
            ?
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
            <Button 
              onClick={handleTalkToAegis}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Talk to{" "}
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block relative group"
              >
                <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 transform group-hover:scale-105 font-bold">
                  Aegis AI
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10"></div>
              </a>
              <span className="hidden sm:inline">{" "}itself to know more about her</span>
            </Button>
            
            <p className="text-sm sm:text-base md:text-lg mt-4 sm:mt-6 opacity-90 leading-relaxed px-2">
              Open Popup to interact with{" "}
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block relative group"
              >
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent hover:from-emerald-300 hover:via-teal-300 hover:to-cyan-300 transition-all duration-300 transform group-hover:scale-105 font-semibold">
                  Aegis
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10"></div>
              </a>
              <span className="block sm:inline">
                <span className="hidden sm:inline">{" "}| </span>
                <span className="sm:hidden"><br /></span>
                Click Start after popup launches
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Iframe Popup */}
      {showIframe && (
        <div className="fixed inset-0 z-[999999999] bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-7xl h-full max-h-[95vh] sm:max-h-[90vh] bg-transparent">
            {/* Close button */}
            <button
              onClick={handleCloseIframe}
              className="absolute -top-8 sm:-top-12 right-0 z-[9999999999] bg-white text-gray-800 hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all duration-200"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* Iframe */}
            <iframe 
              src="https://spaces.napsterai.com/view/N2NlNjVhNGQtMzEyMC00M2Q5LTlkYTItMmYwZjZjY2M5YzhhOmFmN2M3M2Q1LWZiZDQtNDg2Ni04ZmIzLWY3OGM2ODM5MDBjZg==" 
              className="w-full h-full rounded-lg shadow-2xl"
              style={{ aspectRatio: '16/9' }}
              frameBorder="0" 
              allow="microphone; camera; autoplay; clipboard-write; encrypted-media" 
              allowTransparency={true}
              allowFullScreen 
              referrerPolicy="strict-origin-when-cross-origin" 
              title="Napster Spaces Experience"
            />
          </div>
        </div>
      )}
    </>
  );
};