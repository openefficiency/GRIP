
export const EmployeeBenefits = () => {
  const benefits = [
    {
      icon: "✊",
      title: "Speak Freely",
      description: "Express your concerns without fear of retaliation"
    },
    {
      icon: "🤖",
      title: "AI That Cares",
      description: "Aegis learns your issues to prevent future problems"
    },
    {
      icon: "🔒",
      title: "No Retaliation",
      description: "Full anonymity (even from HR until you consent)"
    },
    {
      icon: "🌐",
      title: "Multilingual Support",
      description: "Communicate in 8 Indian languages comfortably"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Voice, Safe & Powerful
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Every employee deserves to be heard. GRIP ensures your voice reaches the right people at the right time.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{benefit.title}</h3>
              <p className="text-center opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl inline-block">
            <p className="text-lg mb-4">Ready to start a conversation?</p>
            <p className="text-sm opacity-90 mb-4">Scan to access demo portal - no login needed</p>
            <div className="w-32 h-32 bg-white/30 rounded-xl mx-auto flex items-center justify-center">
              <span className="text-xs">QR Code</span>
            </div>
            <p className="text-sm mt-2 opacity-75">backfeed.xyz</p>
          </div>
        </div>
      </div>
    </section>
  );
};
