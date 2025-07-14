type Props = {
  index: number;
};

const data = [
  {
    emoji: "🔍",
    title: "Packet Filtering Firewall",
    description:
      "Examines packets at the network layer and filters based on IP addresses, ports, and protocols.",
    advantages1: "Fast performance",
    advantages2: "Low resource usage",
    advantages3: "Simple configuration",
    disadvantages1: "Limited security",
    disadvantages2: "No application awareness",
    disadvantages3: "Vulnerable to IP spoofing",
    step: "1",
  },
  {
    emoji: "🔄",
    title: "Stateful Inspection Firewall",
    description:
      "Tracks the state of network connections and makes decisions based on the context of the traffic.",
    advantages1: "Better security",
    advantages2: "Connection tracking",
    advantages3: "More intelligent filtering",
    disadvantages1: "Higher resource usage",
    disadvantages2: "More complex configuration",
    disadvantages3: "Slower than packet filtering",
    step: "2",
  },
  {
    emoji: "🔬",
    title: "Application Layer Firewall",
    description:
      "Analyzes traffic at the application layer and can understand application protocols.",
    advantages1: "Deep packet inspection",
    advantages2: "Application awareness",
    advantages3: "Advanced threat detection",
    disadvantages1: "High resource usage",
    disadvantages2: "Complex configuration",
    disadvantages3: "Potential performance impact",
    step: "3",
  },
  {
    emoji: "🚀",
    title: "Next-Generation Firewall",
    description:
      "Combines traditional firewall capabilities with advanced features like intrusion prevention and application control.",
    advantages1: "Comprehensive protection",
    advantages2: "Advanced features",
    advantages3: "User and application awareness",
    disadvantages1: "Expensive",
    disadvantages2: "Complex management",
    disadvantages3: "Requires expertise",
    step: "4",
  },
];

export default function PacketFilteringFirewall({ index }: Props) {
  const item = data[index];

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-8 slide-in">
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">{item.emoji}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-success-600 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  Advantages
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0"
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {item.advantages1}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0"
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {item.advantages2}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-success-500 mr-2 mt-0.5 flex-shrink-0"
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {item.advantages3}
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-danger-600 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                  Disadvantages
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-danger-500 mr-2 mt-0.5 flex-shrink-0"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {item.disadvantages1}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-danger-500 mr-2 mt-0.5 flex-shrink-0"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {item.disadvantages2}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-danger-500 mr-2 mt-0.5 flex-shrink-0"
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                    <span className="text-sm text-gray-700">
                      {item.disadvantages3}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
            <h4 className="font-semibold text-gray-800 mb-4">How it Works</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <span className="text-sm text-gray-700">
                  Traffic arrives at firewall
                </span>
              </div>
              <svg
                className="w-6 h-6 text-primary-500 mx-auto"
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <span className="text-sm text-gray-700">
                  Firewall analyzes traffic
                </span>
              </div>
              <svg
                className="w-6 h-6 text-primary-500 mx-auto"
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
                <span className="text-sm text-gray-700">
                  Decision made based on rules
                </span>
              </div>
              <svg
                className="w-6 h-6 text-primary-500 mx-auto"
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  4
                </div>
                <span className="text-sm text-gray-700">
                  Traffic allowed or blocked
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-gray-500">
          Step {item.step} of 4
        </div>
      </div>
    </>
  );
}
