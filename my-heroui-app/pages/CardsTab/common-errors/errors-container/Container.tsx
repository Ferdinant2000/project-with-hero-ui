"use client";

import React, { useState } from "react";
import firewallDataArray from "@/data/Data-Container";

interface ErrorsContainerProps {
  selectedId?: string;
}

export default function ErrorsContainer({ selectedId }: ErrorsContainerProps) {
  const [showCode, setShowCode] = useState(false);

  if (!selectedId) {
    return (
      <div className="text-center text-red-500 p-4">
        ⚠️ Error: No selected firewall ID provided.
      </div>
    );
  }

  const firewallItem = firewallDataArray.find(
    (item) => item?.id?.toString?.() === selectedId?.toString?.()
  );

  if (!firewallItem) {
    return (
      <div className="text-center text-red-500 p-4">
        ⚠️ Error: No data found for selected firewall issue (id: {selectedId})
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 slide-in">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* ЛЕВАЯ СТОРОНА */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="text-primary-500">{firewallItem.icon}</div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">{firewallItem.title}</h3>
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${firewallItem.severityColor.bg} ${firewallItem.severityColor.text}`}
              >
                {firewallItem.severity}
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{firewallItem.description}</p>

          {/* Симптомы */}
          <div className="mb-6">
            <h4 className="flex font-semibold text-orange-600 mb-3">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
              Common Symptoms
            </h4>
            <ul className="space-y-2">
              {firewallItem.symptoms.map((symptom, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-2" />
                  <span className="text-sm text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Последствия */}
          <div className="mb-6">
            <h4 className="flex font-semibold text-red-600 mb-3">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
              </span>
              Potential Consequences
            </h4>
            <ul className="space-y-2">
              {firewallItem.consequences.map((consequence, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2" />
                  <span className="text-sm text-gray-700">{consequence}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ПРАВАЯ СТОРОНА */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h4 className="flex font-semibold text-green-600">
              <span className="mr-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
              </span>
              Solutions
            </h4>
            <button
              className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-400 transition"
              onClick={() => setShowCode((prev) => !prev)}
            >
              {showCode ? "Hide Code Example" : "Show Code Example"}
            </button>
          </div>

          <ul className="space-y-3 mb-6">
            {firewallItem.solutions.map((solution, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-4 h-4 text-success-500 mr-2 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                <span className="text-sm text-gray-700">{solution}</span>
              </li>
            ))}
          </ul>

          {/* Code Example */}
          {showCode && (
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 text-sm font-medium">Code Example</span>
                <span className="text-gray-500 text-xs">iptables</span>
              </div>
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>{firewallItem.codeExample.content}</code>
              </pre>
            </div>
          )}

          {/* Советы */}
          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">Prevention Tips</h5>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Always test rules in a staging environment first</li>
              <li>• Document all configuration changes</li>
              <li>• Implement change management procedures</li>
              <li>• Regular security audits and reviews</li>
              <li>• Keep firewall software updated</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
