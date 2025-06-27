
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GRIP by Aegis Whistle
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              India's First Empathetic AI for Workplace Justice, powered by Aegis AI, made in America with 🫶🏽
            </p>
            <div className="text-sm text-gray-500 space-y-1">
              <p>Anchored by Open Efficiency, A Washington DC Not For Profit for Whistleblowers</p>
              <p>Built by Whistleblowers, for Whistleblowers</p>
              <p>Mission spread by ACER Foundation, Chennai</p>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Ethics Whitepaper</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Aegis Whistle LLC. Made in America with 🫶🏽 for India's workplace justice.</p>
        </div>
      </div>
    </footer>
  );
};
