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
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text content */}
              <div className="text-left">
                <h3 className="text-3xl font-bold mb-4 text-blue-400">
                  Ready to start a conversation with Aegis AI?
                </h3>
                <p className="text-lg mb-4 text-gray-300">
                  Scan to access demo portal - no login needed
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📱</span>
                  </div>
                  <span className="text-blue-300">Scan with your phone camera</span>
                  <span className="text-gray-400">or</span>
                  <a 
                    href="https://backfeed.xyz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    visit BackFeed.xyz →
                  </a>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-green-400 text-sm">Live Demo Available</span>
                  </div>
                  <p className="text-gray-400 text-sm">No registration required</p>
                </div>
              </div>
              
              {/* Right side - QR Code */}
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-2xl">
                  <img 
                    src="/image.png" 
                    alt="QR Code for BackFeed.xyz" 
                    className="w-48 h-48 object-contain"
                  />
                  <div className="text-center mt-4">
                    <p className="text-lg font-bold text-gray-800">BackFeed.xyz</p>
                    <p className="text-sm text-gray-600">Demo Portal Access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};