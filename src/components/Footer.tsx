import { TermsOfServiceModal, PrivacyPolicyModal, SecurityModal } from "@/components/LegalModals";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GRIP by <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:from-blue-300 hover:to-purple-300 transition-all duration-300"
              >
                Aegis AI
              </a>
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              India's First Empathetic AI for Workplace Justice, powered by <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Aegis AI
              </a>, made in America with 🫶🏽
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Anchored by <a 
                href="https://OpenEfficiency.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                Open Efficiency
              </a>, A Washington DC Not For Profit for Whistleblowers</p>
              <p>Built by Whistleblowers, for Whistleblowers</p>
              <p>Mission spread by ACER Foundation, Chennai - Pradeep Alexander <a href="tel:+918072822289" className="text-blue-400 hover:text-blue-300 underline">+91 80 728 222 89</a></p>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://AegisWhistle.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AegisWhistle LLC</a></li>
              <li><a href="tel:+918072822289" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom Section - Matching AegisWhistle.com style */}
        <div className="border-t border-purple-700/50 mt-8 pt-8">
          {/* Copyright and Links Row */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-6">
            {/* Left side - Copyright */}
            <div className="text-gray-300 text-sm">
              © 2025 <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                AegisWhistle LLC
              </a>. All rights reserved.
            </div>
            
            {/* Center - Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <TermsOfServiceModal>
                <button className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                  Terms of Service
                </button>
              </TermsOfServiceModal>
              
              <PrivacyPolicyModal>
                <button className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                  Privacy Policy
                </button>
              </PrivacyPolicyModal>
              
              <SecurityModal>
                <button className="text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                  Security
                </button>
              </SecurityModal>
            </div>
            
            {/* Right side - CTA Button */}
            <div>
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Apply for Aegis AI Pilot Waitlist
              </a>
            </div>
          </div>
          
          {/* Security Notice - Full Width */}
          <div className="bg-purple-800/30 border border-purple-600/30 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-green-400 text-lg">🔒</span>
              <span className="text-green-400 font-semibold">Military-grade Security:</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              All communications are encrypted end-to-end. Your identity remains completely anonymous through Tor networks and zero-knowledge proofs.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};