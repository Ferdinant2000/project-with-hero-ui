export default function App() {
  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-medium text-gray-600">
              Minimal Security
            </span>
            <span className="text-sm font-medium text-gray-600">
              Maximum Security
            </span>
          </div>
          <div className="relative mb-8">
            <input
              className="w-full h-3 bg-gradient-to-r from-danger-500 via-orange-500 via-yellow-500 via-success-500 to-primary-500 rounded-lg appearance-none cursor-pointer slider-track"
              max="5"
              min="1"
              style={{
                background:
                  "linear-gradient(to right, rgb(239, 68, 68) 0%, rgb(249, 115, 22) 25%, rgb(234, 179, 8) 50%, rgb(34, 197, 94) 75%, rgb(59, 130, 246) 100%)",
              }}
              type="range"
              value="1"
            />

            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-white rounded-lg shadow-lg px-4 py-2 border-2 border-zinc-200">
                <span className="font-bold text-gray-800">Level 1</span>
              </div>
            </div>
          </div>
          <div className="text-center p-6 rounded-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="text-danger-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Minimal Security
            </h3>
            <p className="text-gray-600 mb-4">
              Basic packet filtering with minimal rules
            </p>
            <div className="light grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-success-50 p-4 rounded-lg">
                <h4 className="font-semibold text-success-700 mb-2">
                  Security Level
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Protection</span>
                  <span className="font-bold text-success-700">Very Low</span>
                </div>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">
                  Performance Impact
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Speed</span>
                  <span className="font-bold text-blue-700">Excellent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
