'use client';
import { useState } from 'react';

export default function FirewallRules() {
    const [showTraffic, setShowTraffic] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Active Firewall Rules</h3>
                <button
                    onClick={() => setShowTraffic(!showTraffic)}
                    className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                >
                    {showTraffic ? 'Hide Traffic Flow' : 'Show Traffic Flow'}
                </button>
            </div>

            {showTraffic && (
                <div className="light grid lg:grid-cols-2 gap-8">
                    <div className="bg-success-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-success-700 mb-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="w-5 h-5 mr-2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                            Allowed Traffic
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Whitelisted applications only</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Authenticated users only</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-danger-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-danger-700 mb-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="w-5 h-5 mr-2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m15 9-6 6" />
                                <path d="m9 9 6 6" />
                            </svg>
                            Blocked Traffic
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-danger-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">All traffic by default</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-danger-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Unapproved applications</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-danger-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">Unknown sources</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
