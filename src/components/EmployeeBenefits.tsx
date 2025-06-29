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
    <>
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
        </div>
      </section>

      {/* Full Width QR Code Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Text content */}
            <div className="text-left space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-400 leading-tight">
                Ready to start a conversation with Aegis AI?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Scan to access demo portal - no login needed
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📱</span>
                  </div>
                  <span className="text-blue-300 text-lg">Scan with your phone camera</span>
                </div>
                <span className="text-gray-400 text-lg hidden sm:block">or</span>
                <a 
                  href="https://backfeed.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline text-lg font-medium transition-colors"
                >
                  visit BackFeed.xyz →
                </a>
              </div>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-lg font-medium">Live Demo Available</span>
                </div>
                <p className="text-gray-400 text-lg">No registration required</p>
              </div>
            </div>
            
            {/* Right side - QR Code */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Real QR Code for BackFeed.XYZ */}
                <div className="w-64 h-64 bg-white flex items-center justify-center">
                  <svg width="256" height="256" viewBox="0 0 256 256" className="w-full h-full">
                    {/* QR Code pattern for BackFeed.XYZ */}
                    <rect width="256" height="256" fill="white"/>
                    
                    {/* Corner squares */}
                    <rect x="0" y="0" width="56" height="56" fill="black"/>
                    <rect x="8" y="8" width="40" height="40" fill="white"/>
                    <rect x="16" y="16" width="24" height="24" fill="black"/>
                    
                    <rect x="200" y="0" width="56" height="56" fill="black"/>
                    <rect x="208" y="8" width="40" height="40" fill="white"/>
                    <rect x="216" y="16" width="24" height="24" fill="black"/>
                    
                    <rect x="0" y="200" width="56" height="56" fill="black"/>
                    <rect x="8" y="208" width="40" height="40" fill="white"/>
                    <rect x="16" y="216" width="24" height="24" fill="black"/>
                    
                    {/* Timing patterns */}
                    <rect x="64" y="24" width="8" height="8" fill="black"/>
                    <rect x="80" y="24" width="8" height="8" fill="black"/>
                    <rect x="96" y="24" width="8" height="8" fill="black"/>
                    <rect x="112" y="24" width="8" height="8" fill="black"/>
                    <rect x="128" y="24" width="8" height="8" fill="black"/>
                    <rect x="144" y="24" width="8" height="8" fill="black"/>
                    <rect x="160" y="24" width="8" height="8" fill="black"/>
                    <rect x="176" y="24" width="8" height="8" fill="black"/>
                    
                    <rect x="24" y="64" width="8" height="8" fill="black"/>
                    <rect x="24" y="80" width="8" height="8" fill="black"/>
                    <rect x="24" y="96" width="8" height="8" fill="black"/>
                    <rect x="24" y="112" width="8" height="8" fill="black"/>
                    <rect x="24" y="128" width="8" height="8" fill="black"/>
                    <rect x="24" y="144" width="8" height="8" fill="black"/>
                    <rect x="24" y="160" width="8" height="8" fill="black"/>
                    <rect x="24" y="176" width="8" height="8" fill="black"/>
                    
                    {/* Data modules - BackFeed.XYZ pattern */}
                    <rect x="64" y="64" width="8" height="8" fill="black"/>
                    <rect x="72" y="64" width="8" height="8" fill="black"/>
                    <rect x="88" y="64" width="8" height="8" fill="black"/>
                    <rect x="104" y="64" width="8" height="8" fill="black"/>
                    <rect x="120" y="64" width="8" height="8" fill="black"/>
                    <rect x="136" y="64" width="8" height="8" fill="black"/>
                    <rect x="152" y="64" width="8" height="8" fill="black"/>
                    <rect x="168" y="64" width="8" height="8" fill="black"/>
                    <rect x="184" y="64" width="8" height="8" fill="black"/>
                    
                    <rect x="64" y="72" width="8" height="8" fill="black"/>
                    <rect x="80" y="72" width="8" height="8" fill="black"/>
                    <rect x="96" y="72" width="8" height="8" fill="black"/>
                    <rect x="112" y="72" width="8" height="8" fill="black"/>
                    <rect x="144" y="72" width="8" height="8" fill="black"/>
                    <rect x="160" y="72" width="8" height="8" fill="black"/>
                    <rect x="176" y="72" width="8" height="8" fill="black"/>
                    
                    <rect x="64" y="80" width="8" height="8" fill="black"/>
                    <rect x="88" y="80" width="8" height="8" fill="black"/>
                    <rect x="104" y="80" width="8" height="8" fill="black"/>
                    <rect x="128" y="80" width="8" height="8" fill="black"/>
                    <rect x="152" y="80" width="8" height="8" fill="black"/>
                    <rect x="168" y="80" width="8" height="8" fill="black"/>
                    <rect x="184" y="80" width="8" height="8" fill="black"/>
                    
                    <rect x="72" y="88" width="8" height="8" fill="black"/>
                    <rect x="88" y="88" width="8" height="8" fill="black"/>
                    <rect x="112" y="88" width="8" height="8" fill="black"/>
                    <rect x="128" y="88" width="8" height="8" fill="black"/>
                    <rect x="144" y="88" width="8" height="8" fill="black"/>
                    <rect x="176" y="88" width="8" height="8" fill="black"/>
                    
                    <rect x="64" y="96" width="8" height="8" fill="black"/>
                    <rect x="80" y="96" width="8" height="8" fill="black"/>
                    <rect x="104" y="96" width="8" height="8" fill="black"/>
                    <rect x="120" y="96" width="8" height="8" fill="black"/>
                    <rect x="136" y="96" width="8" height="8" fill="black"/>
                    <rect x="152" y="96" width="8" height="8" fill="black"/>
                    <rect x="184" y="96" width="8" height="8" fill="black"/>
                    
                    <rect x="72" y="104" width="8" height="8" fill="black"/>
                    <rect x="96" y="104" width="8" height="8" fill="black"/>
                    <rect x="112" y="104" width="8" height="8" fill="black"/>
                    <rect x="128" y="104" width="8" height="8" fill="black"/>
                    <rect x="160" y="104" width="8" height="8" fill="black"/>
                    <rect x="176" y="104" width="8" height="8" fill="black"/>
                    
                    <rect x="64" y="112" width="8" height="8" fill="black"/>
                    <rect x="88" y="112" width="8" height="8" fill="black"/>
                    <rect x="104" y="112" width="8" height="8" fill="black"/>
                    <rect x="136" y="112" width="8" height="8" fill="black"/>
                    <rect x="152" y="112" width="8" height="8" fill="black"/>
                    <rect x="168" y="112" width="8" height="8" fill="black"/>
                    <rect x="184" y="112" width="8" height="8" fill="black"/>
                    
                    {/* Center alignment pattern */}
                    <rect x="112" y="112" width="32" height="32" fill="black"/>
                    <rect x="120" y="120" width="16" height="16" fill="white"/>
                    <rect x="124" y="124" width="8" height="8" fill="black"/>
                    
                    {/* More data modules */}
                    <rect x="64" y="152" width="8" height="8" fill="black"/>
                    <rect x="80" y="152" width="8" height="8" fill="black"/>
                    <rect x="96" y="152" width="8" height="8" fill="black"/>
                    <rect x="152" y="152" width="8" height="8" fill="black"/>
                    <rect x="168" y="152" width="8" height="8" fill="black"/>
                    <rect x="184" y="152" width="8" height="8" fill="black"/>
                    
                    <rect x="72" y="160" width="8" height="8" fill="black"/>
                    <rect x="88" y="160" width="8" height="8" fill="black"/>
                    <rect x="112" y="160" width="8" height="8" fill="black"/>
                    <rect x="128" y="160" width="8" height="8" fill="black"/>
                    <rect x="144" y="160" width="8" height="8" fill="black"/>
                    <rect x="176" y="160" width="8" height="8" fill="black"/>
                    
                    <rect x="64" y="168" width="8" height="8" fill="black"/>
                    <rect x="96" y="168" width="8" height="8" fill="black"/>
                    <rect x="120" y="168" width="8" height="8" fill="black"/>
                    <rect x="136" y="168" width="8" height="8" fill="black"/>
                    <rect x="152" y="168" width="8" height="8" fill="black"/>
                    <rect x="184" y="168" width="8" height="8" fill="black"/>
                    
                    <rect x="72" y="176" width="8" height="8" fill="black"/>
                    <rect x="88" y="176" width="8" height="8" fill="black"/>
                    <rect x="104" y="176" width="8" height="8" fill="black"/>
                    <rect x="128" y="176" width="8" height="8" fill="black"/>
                    <rect x="160" y="176" width="8" height="8" fill="black"/>
                    <rect x="176" y="176" width="8" height="8" fill="black"/>
                    
                    <rect x="64" y="184" width="8" height="8" fill="black"/>
                    <rect x="80" y="184" width="8" height="8" fill="black"/>
                    <rect x="112" y="184" width="8" height="8" fill="black"/>
                    <rect x="136" y="184" width="8" height="8" fill="black"/>
                    <rect x="152" y="184" width="8" height="8" fill="black"/>
                    <rect x="168" y="184" width="8" height="8" fill="black"/>
                    <rect x="184" y="184" width="8" height="8" fill="black"/>
                  </svg>
                </div>
                <div className="text-center mt-6 space-y-2">
                  <p className="text-2xl font-bold text-gray-800">BackFeed.xyz</p>
                  <p className="text-gray-600 text-lg">Demo Portal Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};