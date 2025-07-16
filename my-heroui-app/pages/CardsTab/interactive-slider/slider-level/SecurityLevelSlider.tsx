import { useState } from "react";

import securityLevels from "@/data/Data-SecurityLevelSlider";

export default function SecurityLevelSlider() {
  const [level, setLevel] = useState(1);
  const data = securityLevels.find((item) => item.level === level);

  return (
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

        {/* RANGE SLIDER */}
        <div className="relative mb-8">
          <input
            className="w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-success-500 to-primary-500 rounded-lg appearance-none cursor-pointer slider-track"
            max="5"
            min="1"
            type="range"
            value={level}
            onChange={(e) => setLevel(Number(e.target.value))}
          />
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-white rounded-lg shadow-lg px-4 py-2 border-2 border-zinc-200">
              <span className="font-bold text-gray-800">Level {level}</span>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-center p-6 rounded-lg transition-all duration-300">
          <div className="flex justify-center mb-4">{data?.icon}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {data?.title}
          </h3>
          <p className="text-gray-600 mb-4">{data?.description}</p>
          <div className="light grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-success-50 p-4 rounded-lg">
              <h4 className="font-semibold text-success-700 mb-2">
                Security Level
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Protection</span>
                <span className="font-bold text-success-700">
                  {data?.protection}
                </span>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">
                Performance Impact
              </h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Speed</span>
                <span className="font-bold text-blue-700">
                  {data?.performance}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
