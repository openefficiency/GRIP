export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
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
            <p className="text-gray-400 mb-4 max-w-md">
              India's First Empathetic AI for Workplace Justice, powered by <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Aegis AI
              </a>, made in America with 🫶🏽
            </p>
            <div className="text-sm text-gray-500 space-y-1">
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
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://AegisWhistle.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AegisWhistle LLC</a></li>
              <li><a href="tel:+918072822289" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Enhanced Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 space-y-6">
          {/* Copyright and Links */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              &copy; 2025 <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                AegisWhistle LLC
              </a>. All rights reserved.
            </p>
            
            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a 
                href="https://AegisWhistle.com/terms" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="https://AegisWhistle.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="https://AegisWhistle.com/security" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Security
              </a>
              <a 
                href="https://AegisWhistle.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
              >
                Apply for Aegis AI Pilot Waitlist
              </a>
            </div>
          </div>
          
          {/* Security Notice */}
          <div className="bg-gray-800/50 rounded-lg p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-green-400 text-lg">🔒</span>
              <h5 className="text-lg font-semibold text-green-400">Military-grade Security</h5>
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