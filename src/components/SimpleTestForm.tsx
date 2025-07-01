export const SimpleTestForm = () => {
  return (
    <section className="py-20 px-4 bg-yellow-50 border-2 border-yellow-200">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            🧪 Simple Test Form
          </h2>
          <p className="text-lg text-gray-600">
            Testing Netlify form submissions with a basic HTML form
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form name="contact" method="POST" netlify>
            <p className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name: 
                <input 
                  type="text" 
                  name="name" 
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </label>
            </p>
            
            <p className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email: 
                <input 
                  type="email" 
                  name="email" 
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </label>
            </p>
            
            <p className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Role: 
                <select 
                  name="role[]" 
                  multiple 
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            
            <p className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message: 
                <textarea 
                  name="message" 
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                ></textarea>
              </label>
            </p>
            
            <p>
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Send Test Form
              </button>
            </p>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            This form uses the basic <code className="bg-gray-100 px-1 rounded">netlify</code> attribute for form detection.
          </p>
        </div>
      </div>
    </section>
  );
};