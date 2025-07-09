'use client';

export default function FirewallIssuesGrid() {
    return (
        <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* 1 */}
            <div className="p-6 rounded-lg cursor-pointer transition-all duration-300 bg-primary-500 text-white shadow-lg transform scale-105">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 rounded-full text-xs font-medium bg-white text-primary-500">HIGH</div>
                </div>
                <h3 className="font-semibold mb-2">Misconfigured Firewall Rules</h3>
                <p className="text-sm text-blue-100">Incorrectly configured rules that either block legitimate traffic or allow malicious traffic.</p>
                <div className="mt-3 text-xs opacity-75">Configuration</div>
            </div>
            {/* 2 */}
            <div className="p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <circle cx="12" cy="12" r="10" />
                            <path d="m15 9-6 6" />
                            <path d="m9 9 6 6" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 rounded-full text-xs font-medium text-red-500 bg-red-50">CRITICAL</div>
                </div>
                <h3 className="font-semibold mb-2">Default Deny Without Exceptions</h3>
                <p className="text-sm text-gray-600">Blocking all traffic without proper exceptions for essential services.</p>
                <div className="mt-3 text-xs opacity-75">Configuration</div>
            </div>
            {/* 3 */}
            <div className="p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <rect x="16" y="16" width="6" height="6" rx="1" />
                            <rect x="2" y="16" width="6" height="6" rx="1" />
                            <rect x="9" y="2" width="6" height="6" rx="1" />
                            <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
                            <path d="M12 12V8" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 rounded-full text-xs font-medium text-yellow-500 bg-yellow-50">MEDIUM</div>
                </div>
                <h3 className="font-semibold mb-2">Vulnerable to Port Scanning</h3>
                <p className="text-sm text-gray-600">Firewall allows port scanning activities without detection or prevention.</p>
                <div className="mt-3 text-xs opacity-75">Security</div>
            </div>
            {/* 4 */}
            <div className="p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                            <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                            <line x1="6" x2="6.01" y1="6" y2="6" />
                            <line x1="6" x2="6.01" y1="18" y2="18" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 rounded-full text-xs font-medium text-yellow-500 bg-yellow-50">MEDIUM</div>
                </div>
                <h3 className="font-semibold mb-2">Insufficient Logging</h3>
                <p className="text-sm text-gray-600">Firewall events are not properly logged, making troubleshooting and security analysis difficult.</p>
                <div className="mt-3 text-xs opacity-75">Monitoring</div>
            </div>
            {/* 5 */}
            <div className="p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 rounded-full text-xs font-medium text-orange-500 bg-orange-50">HIGH</div>
                </div>
                <h3 className="font-semibold mb-2">Outdated Firewall Rules</h3>
                <p className="text-sm text-gray-600">Firewall rules that are no longer relevant or have become security risks.</p>
                <div className="mt-3 text-xs opacity-75">Maintenance</div>
            </div>
            {/* 6 */}
            <div className="p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                    </div>
                    <div className="px-2 py-1 rounded-full text-xs font-medium text-red-500 bg-red-50">CRITICAL</div>
                </div>
                <h3 className="font-semibold mb-2">No Configuration Backup</h3>
                <p className="text-sm text-gray-600">Firewall configuration is not backed up, risking complete loss of settings.</p>
                <div className="mt-3 text-xs opacity-75">Backup</div>
            </div>
        </div>
    );
}
