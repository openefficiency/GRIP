import { useEffect } from "react";
import { CheckCircle, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  useEffect(() => {
    // Track successful form submission
    console.log("Thank you page loaded - form submission successful");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Icon */}
        <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
          <CheckCircle className="w-12 h-12 text-green-600" />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Application Submitted!
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Thank you for applying to the{" "}
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
          {" "}Pilot Waitlist
        </p>

        {/* What's Next Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What happens next?</h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Application Review</h3>
                <p className="text-gray-600">Our team will review your application within 2-3 business days.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Personal Outreach</h3>
                <p className="text-gray-600">We'll contact you directly to discuss your specific needs and pilot timeline.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Pilot Onboarding</h3>
                <p className="text-gray-600">If selected, we'll begin your exclusive pilot program setup.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white mb-8">
          <h3 className="text-2xl font-bold mb-4">Questions? We're here to help!</h3>
          <p className="text-lg mb-6 opacity-90">
            Our team is available to answer any questions about the pilot program.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+918072822289">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300"
              >
                📞 Call +91 80 728 222 89
              </Button>
            </a>
            
            <a 
              href="https://BackFeed.XYZ" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full transition-all duration-300 flex items-center gap-2"
              >
                See Aegis AI Demo <ExternalLink className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/">
            <Button 
              variant="outline" 
              size="lg"
              className="flex items-center gap-2 px-8 py-4 text-lg rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Button>
          </a>
          
          <a 
            href="https://AegisWhistle.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full flex items-center gap-2"
            >
              Learn More About Aegis AI <ExternalLink className="w-5 h-5" />
            </Button>
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 mt-8 leading-relaxed">
          🔒 Your information is secure and will only be used for the pilot program. 
          We respect your privacy and won't share your details with third parties.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;