import { ReactNode } from "react";

export interface CardData {
  id: string;
  icon: ReactNode;
  severity: string;
  severityClass: string;
  title: string;
  description: string;
  category: string;
  containerClass: string;
}

export const cardsData: CardData[] = [
  {
    id: "1",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <path d="M12 9v4" />
        <path d="M12 17h.01" />
      </svg>
    ),
    severity: "HIGH",
    severityClass:
      "px-2 py-1 rounded-full text-xs font-medium text-orange-500 bg-orange-50",
    title: "Misconfigured Firewall Rules",
    description:
      "Incorrectly configured rules that either block legitimate traffic or allow malicious traffic.",
    category: "Configuration",
    containerClass:
      "p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white shadow-md hover:shadow-lg",
  },
  {
    id: "2",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="m15 9-6 6" />
        <path d="m9 9 6 6" />
      </svg>
    ),
    severity: "CRITICAL",
    severityClass:
      "px-2 py-1 rounded-full text-xs font-medium text-red-500 bg-red-50",
    title: "Default Deny Without Exceptions",
    description:
      "Blocking all traffic without proper exceptions for essential services.",
    category: "Configuration",
    containerClass:
      "p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white shadow-md hover:shadow-lg",
  },
  {
    id: "3",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="6" rx="1" width="6" x="16" y="16" />
        <rect height="6" rx="1" width="6" x="2" y="16" />
        <rect height="6" rx="1" width="6" x="9" y="2" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    ),
    severity: "MEDIUM",
    severityClass:
      "px-2 py-1 rounded-full text-xs font-medium text-yellow-500 bg-yellow-50",
    title: "Vulnerable to Port Scanning",
    description:
      "Firewall allows port scanning activities without detection or prevention.",
    category: "Security",
    containerClass:
      "p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white shadow-md hover:shadow-lg",
  },
  {
    id: "4",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="8" rx="2" ry="2" width="20" x="2" y="2" />
        <rect height="8" rx="2" ry="2" width="20" x="2" y="14" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
    severity: "MEDIUM",
    severityClass:
      "px-2 py-1 rounded-full text-xs font-medium text-yellow-500 bg-yellow-50",
    title: "Insufficient Logging",
    description:
      "Firewall events are not properly logged, making troubleshooting and security analysis difficult.",
    category: "Monitoring",
    containerClass:
      "p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white shadow-md hover:shadow-lg",
  },
  {
    id: "5",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    severity: "HIGH",
    severityClass:
      "px-2 py-1 rounded-full text-xs font-medium text-orange-500 bg-orange-50",
    title: "Outdated Firewall Rules",
    description:
      "Firewall rules that are no longer relevant or have become security risks.",
    category: "Maintenance",
    containerClass:
      "p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white shadow-md hover:shadow-lg",
  },
  {
    id: "6",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    severity: "CRITICAL",
    severityClass:
      "px-2 py-1 rounded-full text-xs font-medium text-red-500 bg-red-50",
    title: "No Configuration Backup",
    description:
      "Firewall configuration is not backed up, risking complete loss of settings.",
    category: "Backup",
    containerClass:
      "p-6 rounded-lg cursor-pointer transition-all duration-300 bg-white shadow-md hover:shadow-lg",
  },
];
