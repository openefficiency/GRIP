export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Talk",
      description: "Employees report via Aegis AI voice anonymously in their preferred language",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Flags urgent issues (harassment, payroll) vs. systemic trends (overtime burnout)",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "HR Dashboard",
      description: "Real-time insights + recommended actions (58% complaints about cafeteria? Aegis suggests vendor reviews)",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            How GRIP Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and effective - our three-step process ensures every voice is heard and every issue is addressed
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-y-8 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};