import { Button } from "@/components/ui/button";

export const PilotProgram = () => {
  const perks = [
    {
      title: "Early Adopter Badge",
      description: "Public recognition as 'Ethical Workplace Pioneer'",
      icon: "🏆"
    },
    {
      title: "Future Credit",
      description: "Pilot clients get additional voice minutes after full pack launch",
      icon: "💳"
    },
    {
      title: "Priority Feature Voting",
      description: "Co-design Phase 2 features (blockchain audit trails, rewards system, global compliance)",
      icon: "🗳️"
    },
    {
      title: "15-Day Discounted Startup Pack Trial",
      description: "Try our discounted startup pack for 15 days before sign-up",
      icon: "⏰"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          {/* Improved heading layout */}
          <div className="inline-flex items-center px-4 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full text-sm md:text-base font-medium mb-6 max-w-5xl">
            🎯 Pilot Rewards: Affordable Small Business Pack Trial for MidMarket and Enterprise + Priority Feature Voting
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be among the first 100 companies to shape the future of workplace justice with exclusive benefits
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {perks.map((perk, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{perk.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{perk.title}</h3>
                  <p className="text-gray-600">{perk.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Revolution?</h3>
          <p className="text-xl mb-8 opacity-90">
            Limited spots available. Join now and help us build India's most empathetic workplace AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://AegisWhistle.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Apply for Aegis AI Pilot Waitlist
              </Button>
            </a>
            <a href="tel:+918072822289">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </a>
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            🔥 Only 47 spots remaining out of 100
          </p>
        </div>
      </div>
    </section>
  );
};