export const LanguageSupport = () => {
  const languages = [
    {
      name: "English",
      nativeName: "English",
      script: "Your voice matters. Speak up safely.",
      flag: "🇺🇸",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Hindi",
      nativeName: "हिन्दी",
      script: "आपकी आवाज़ महत्वपूर्ण है। सुरक्षित रूप से बोलें।",
      flag: "🇮🇳",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Tamil",
      nativeName: "தமிழ்",
      script: "உங்கள் குரல் முக்கியம். பாதுகாப்பாக பேசுங்கள்.",
      flag: "🏛️",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Malayalam", 
      nativeName: "മലയാളം",
      script: "നിങ്ങളുടെ ശബ്ദം പ്രധാനമാണ്. സുരക്ഷിതമായി സംസാരിക്കുക.",
      flag: "🌴",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Kannada",
      nativeName: "ಕನ್ನಡ",
      script: "ನಿಮ್ಮ ಧ್ವನಿ ಮುಖ್ಯವಾಗಿದೆ. ಸುರಕ್ಷಿತವಾಗಿ ಮಾತನಾಡಿ.",
      flag: "🏺",
      color: "from-yellow-500 to-amber-500"
    },
    {
      name: "Telugu",
      nativeName: "తెలుగు", 
      script: "మీ గొంతు ముఖ్యమైనది. సురక్షితంగా మాట్లాడండి.",
      flag: "🎭",
      color: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 text-6xl">हिन्दी</div>
        <div className="absolute top-40 right-20 text-6xl">தமிழ்</div>
        <div className="absolute bottom-60 left-20 text-6xl">മലയാളം</div>
        <div className="absolute bottom-40 right-10 text-6xl">ಕನ್ನಡ</div>
        <div className="absolute bottom-20 left-1/2 text-6xl">తెలుగు</div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full text-sm font-medium mb-6">
            🌏 Multilingual AI Support
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Speak Your Language
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <a 
              href="https://AegisWhistle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block relative group"
            >
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 transform group-hover:scale-105 font-semibold">
                Aegis AI
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-300 -z-10"></div>
            </a>
            {" "}understands and responds in your native language with cultural sensitivity and emotional intelligence
          </p>
        </div>

        {/* Language Cards Grid - Updated for 6 languages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {languages.map((language, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${language.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Flag/Icon */}
              <div className="text-4xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                {language.flag}
              </div>
              
              {/* Language Name */}
              <h3 className="text-xl font-bold text-center mb-2 text-gray-800 group-hover:text-gray-900 transition-colors">
                {language.name}
              </h3>
              
              {/* Native Script */}
              <div className="text-center mb-4">
                <p className={`text-2xl font-bold bg-gradient-to-r ${language.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
                  {language.nativeName}
                </p>
              </div>
              
              {/* Sample Text */}
              <div className="text-center">
                <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  "{language.script}"
                </p>
              </div>
              
              {/* Hover effect border */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${language.color.replace('from-', 'border-').replace('to-', '')} opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Cultural Intelligence</h3>
              <p className="text-gray-600 leading-relaxed">
                Understands cultural nuances, workplace hierarchies, and regional communication styles across India
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Contextual Understanding</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognizes emotional undertones, workplace terminology, and industry-specific language patterns
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Real-time Translation</h3>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly translates between languages while preserving meaning, tone, and cultural context
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Communicate in Your Language?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Experience the power of truly multilingual AI that understands not just your words, but your culture
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://BackFeed.XYZ" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Try Demo in Your Language
                </button>
              </a>
              <a href="tel:+918072822289">
                <button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg rounded-full transition-all duration-300">
                  Schedule Multilingual Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};