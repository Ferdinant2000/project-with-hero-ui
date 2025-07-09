const securityLevels = [
    {
        level: 1,
        title: "Minimal Security",
        description: "Basic packet filtering with minimal rules",
        protection: "Very Low",
        performance: "Excellent",
        icon: (
            <div className="text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                </svg>
            </div>
        )
    },
    {
        level: 2,
        title: "Low Security",
        description: "Standard firewall with basic rules",
        protection: "Low",
        performance: "Very Good",
        icon: (
            <div className="text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
            </div>
        )
    },
    {
        level: 3,
        title: "Medium Security",
        description: "Stateful inspection with moderate rules",
        protection: "Medium",
        performance: "Good",
        icon: (
            <div className="text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            </div>
        )
    },
    {
        level: 4,
        title: "High Security",
        description: "Advanced firewall with strict rules",
        protection: "High",
        performance: "Moderate",
        icon: (
            <div className="text-success-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
            </div>
        )
    },
    {
        level: 5,
        title: "Maximum Security",
        description: "Enterprise-grade security with zero-trust",
        protection: "Maximum",
        performance: "Lower",
        icon: (
            <div className="text-primary-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6"
                ><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <path d="m9 11 3 3L22 4"></path>
                </svg>
            </div>
        )
    }
];

export default securityLevels;
