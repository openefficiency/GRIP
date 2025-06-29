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
              <p>Anchored by Open Efficiency, A Washington DC Not For Profit for Whistleblowers</p>
              <p>Built by Whistleblowers, for Whistleblowers</p>
              <p>Mission spread by ACER Foundation, Chennai - Pradeep Alexander <a href="tel:+918072822289" className="text-blue-400 hover:text-blue-300 underline">+91 80 728 222 89</a></p>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://AegisWhistle.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">About</a></li>
              <li><a href="tel:+918072822289" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 <a 
            href="https://AegisWhistle.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Aegis AI
          </a> LLC. Made in America with 🫶🏽 for India's workplace justice.</p>
        </div>
      </div>
    </footer>
  );
};