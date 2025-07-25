import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const plans = [
    {
      name: "Small Business",
      price: 20000,
      features: [
        "Core Licensing",
        "250 voice minutes",
        "Basic hosting & AI model",
        "Email support",
        "Indian language support"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Midmarket",
      price: 35000,
      features: [
        "Advanced Licensing",
        "375 voice minutes",
        "Enhanced hosting & AI model",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: 60000,
      features: [
        "Full Enterprise Licensing",
        "1000 voice minutes",
        "Premium hosting & AI model",
        "24/7 dedicated support",
        "Custom AI training",
        "White-label options",
        "Compliance reporting"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Monthly Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your organization. All prices in Indian Rupees (INR) per month.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular ? 'border-purple-500 scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <span className="text-white font-bold text-lg">{plan.name.charAt(0)}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">{plan.name}</h3>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-800 mb-2">₹{plan.price.toLocaleString('en-IN')}</div>
                  <div className="text-gray-600">per month</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a href="tel:+918072822289">
                  <Button 
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Get Started with Our Partner
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Custom Solution Section */}
        <div className="text-center mt-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Need a Custom Solution?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your unique requirements and create a tailored plan that fits your organization perfectly.
          </p>
          <a href="tel:+918072822289">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Talk to Our Partner
            </Button>
          </a>
          <p className="text-gray-500 mt-4 text-lg">
            📞 Call us directly at <a href="tel:+918072822289" className="text-blue-600 hover:text-blue-700 font-semibold">+91 80 728 222 89</a>
          </p>
        </div>
      </div>
    </section>
  );
};