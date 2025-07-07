export default function App() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-8 slide-in">
                <div className="text-center mb-6">
                    <div className="text-4xl mb-4">
                        🔍</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Packet Filtering Firewall</h3>
                    <p className="text-gray-600">
                        Examines packets at the network layer and filters based on IP addresses, ports, and protocols.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-success-600 mb-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 mr-2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                                        </path>
                                        <path d="m9 11 3 3L22 4">
                                        </path>
                                    </svg>
                                    Advantages</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                                            </path>
                                            <path d="m9 11 3 3L22 4">
                                            </path>
                                        </svg>
                                        <span className="text-sm text-gray-700">
                                            Fast performance</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                                            </path>
                                            <path d="m9 11 3 3L22 4">
                                            </path>
                                        </svg>
                                        <span className="text-sm text-gray-700">
                                            Low resource usage</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14">
                                            </path>
                                            <path d="m9 11 3 3L22 4">
                                            </path>
                                        </svg>
                                        <span className="text-sm text-gray-700">
                                            Simple configuration</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-danger-600 mb-3 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5 mr-2">
                                        <circle cx="12" cy="12" r="10">
                                        </circle>
                                        <path d="m15 9-6 6">
                                        </path>
                                        <path d="m9 9 6 6">
                                        </path>
                                    </svg>
                                    Disadvantages</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-danger-500 mr-2 mt-0.5 flex-shrink-0">
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                            <path d="m15 9-6 6">
                                            </path>
                                            <path d="m9 9 6 6">
                                            </path>
                                        </svg>
                                        <span className="text-sm text-gray-700">
                                            Limited security</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-danger-500 mr-2 mt-0.5 flex-shrink-0">
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                            <path d="m15 9-6 6">
                                            </path>
                                            <path d="m9 9 6 6">
                                            </path>
                                        </svg>
                                        <span className="text-sm text-gray-700">
                                            No application awareness</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4 text-danger-500 mr-2 mt-0.5 flex-shrink-0">
                                            <circle cx="12" cy="12" r="10">
                                            </circle>
                                            <path d="m15 9-6 6">
                                            </path>
                                            <path d="m9 9 6 6">
                                            </path>
                                        </svg>
                                        <span className="text-sm text-gray-700">
                                            Vulnerable to IP spoofing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-800 mb-4">
                            How it Works</h4>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    1</div>
                                <span className="text-sm text-gray-700">
                                    Traffic arrives at firewall</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-primary-500 mx-auto">
                                <path d="M5 12h14">
                                </path>
                                <path d="m12 5 7 7-7 7">
                                </path>
                            </svg>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    2</div>
                                <span className="text-sm text-gray-700">Firewall analyzes traffic</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-primary-500 mx-auto">
                                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                            </svg>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                                <span className="text-sm text-gray-700">Decision made based on rules</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6 text-primary-500 mx-auto">
                                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                            </svg>
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    4</div>
                                <span className="text-sm text-gray-700">
                                    Traffic allowed or blocked</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6 text-sm text-gray-500">
                    Step 1 of 4</div>
            </div>
        </>

    )
}