import { MessageSquare, Search, FileText } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "AI with a Heart (Not Just Code)",
      description: "Aegis doesn't just 'process' grievances – it understands frustration in 8 Indian languages, detects burnout in voice tones, and escalates with human-like discretion.",
      highlight: "NLP trained on Indian workplace dialogues (not Western datasets)"
    },
    {
      icon: Search,
      title: "Empathetic Intelligence",
      description: "No voice recording, no deeptech hype – just encrypted, audit-ready transcripts that understand context and emotion.",
      highlight: "Combines confidential whistleblowing with proactive employee care"
    },
    {
      icon: FileText,
      title: "Predictive Analytics",
      description: "Spot department-level risks before they become lawsuits. Turn silence into actionable insights for better workplace culture.",
      highlight: "30% faster resolution vs. manual systems"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why{" "}
            </span>
            <a 
              href="https://AegisWhistle.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block relative group"
            >
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent hover:from-emerald-400 hover:via-teal-400 hover:to-cyan-400 transition-all duration-300 transform group-hover:scale-105 group-hover:drop-shadow-lg">
                Aegis AI
              </span>
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>
              {/* Underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike clunky 'compliance tools', GRIP boosts engagement – employees trust our AI because it demonstrates genuine empathy
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-3 rounded-lg">
                <p className="text-sm font-medium text-orange-600">{feature.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};