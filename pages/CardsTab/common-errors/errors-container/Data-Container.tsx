// errors-container/Data-Container.tsx

const firewallData = [
  {
    id: "1",
    icon: [
      <svg
        key="icon-1"
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
      </svg>,
    ],
    title: "Misconfigured Firewall Rules",
    severity: "HIGHT",
    severityColor: {
      bg: "bg-orange-50",
      text: "text-orange-500",
    },
    description:
      "Incorrectly configured rules that either block legitimate traffic or allow malicious traffic.",
    symptoms: [
      "Legitimate applications cannot connect",
      "Users report connectivity issues",
      "Unexpected traffic patterns",
      "Security alerts for blocked legitimate traffic",
    ],
    consequences: [
      "Service outages",
      "User productivity loss",
      "Security vulnerabilities",
      "Increased support tickets",
    ],
    solutions: [
      "Review and test all firewall rules",
      "Implement rule change management process",
      "Use rule templates and best practices",
      "Regular rule audits and cleanup",
    ],
    codeExample: {
      content: `# Example of misconfigured rule
iptables -A INPUT -p tcp --dport 80 -j DROP  # Blocks all HTTP traffic
# Should be:
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # Allow HTTP traffic`,
    },
  },
  {
    id: "2",
    icon: [
      <svg
        key="icon-2"
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
        <circle cx="12" cy="12" r="10" />
        <path d="M15 9L9 15" />
        <path d="M9 9L15 15" />
      </svg>,
    ],
    title: "Default Deny Without Exceptions",
    severity: "CRITICAL",
    severityColor: {
      bg: "bg-red-50",
      text: "text-red-500",
    },
    description:
      "Blocking all traffic without proper exceptions for essential services.",
    symptoms: [
      "Complete network isolation",
      "No internet connectivity",
      "DNS resolution failures",
      "All services inaccessible",
    ],
    consequences: [
      "Complete service outage",
      "Business operations halted",
      "Emergency access required",
      "Potential data loss",
    ],
    solutions: [
      "Implement proper allow rules before deny",
      "Test connectivity after rule changes",
      "Maintain emergency access procedures",
      "Use whitelist approach with essential services",
    ],
    codeExample: {
      content: `# Problematic default deny
iptables -P INPUT DROP
iptables -P OUTPUT DROP
# Missing allow rules for essential services

# Better approach:
iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # SSH
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # HTTP
iptables -A INPUT -p tcp --dport 443 -j ACCEPT # HTTPS
iptables -P INPUT DROP  # Then deny all`,
    },
  },
  {
    id: "3",
    icon: [
      <svg
        key="icon-3"
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
        <rect height="6" rx="1" width="6" x="16" y="16" />
        <rect height="6" rx="1" width="6" x="2" y="16" />
        <rect height="6" rx="1" width="6" x="9" y="2" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>,
    ],
    title: "Default Deny Without Exceptions",
    severity: "MEDIUM",
    severityColor: {
      bg: "bg-yellow-50",
      text: "text-yellow-500",
    },
    description:
      "Firewall allows port scanning activities without detection or prevention.",
    symptoms: [
      "Multiple connection attempts from same IP",
      "Unusual traffic patterns",
      "Security monitoring alerts",
      "Increased network noise",
    ],
    consequences: [
      "Network reconnaissance by attackers",
      "Service enumeration",
      "Potential attack vector identification",
      "Resource consumption",
    ],
    solutions: [
      "Implement rate limiting",
      "Use intrusion detection systems",
      "Configure connection tracking",
      "Monitor and alert on suspicious patterns",
    ],
    codeExample: {
      content: `# Rate limiting example
iptables -A INPUT -p tcp --dport 22 -m limit --limit 3/min --limit-burst 5 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP

# Connection tracking
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT`,
    },
  },
  {
    id: "4",
    icon: [
      <svg
        key="icon-4"
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
        <rect height="8" rx="2" ry="2" width="20" x="2" y="2" />
        <rect height="8" rx="2" ry="2" width="20" x="2" y="14" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>,
    ],
    title: "Default Deny Without Exceptions",
    severity: "SEVERITY",
    severityColor: {
      bg: "bg-red-50",
      text: "text-red-500",
    },
    description:
      "Blocking all traffic without proper exceptions for essential services.",
    symptoms: [
      "Complete network isolation",
      "No internet connectivity",
      "DNS resolution failures",
      "All services inaccessible",
    ],
    consequences: [
      "Complete service outage",
      "Business operations halted",
      "Emergency access required",
      "Potential data loss",
    ],
    solutions: [
      "Implement proper allow rules before deny",
      "Test connectivity after rule changes",
      "Maintain emergency access procedures",
      "Use whitelist approach with essential services",
    ],
    codeExample: {
      content: `# Problematic default deny
iptables -P INPUT DROP
iptables -P OUTPUT DROP
# Missing allow rules for essential services

# Better approach:
iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # SSH
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # HTTP
iptables -A INPUT -p tcp --dport 443 -j ACCEPT # HTTPS
iptables -P INPUT DROP  # Then deny all`,
    },
  },
  {
    id: "5",
    icon: [
      <svg
        key="icon-5"
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
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>,
    ],
    title: "Default Deny Without Exceptions",
    severity: "SEVERITY",
    severityColor: {
      bg: "bg-red-50",
      text: "text-red-500",
    },
    description:
      "Blocking all traffic without proper exceptions for essential services.",
    symptoms: [
      "Complete network isolation",
      "No internet connectivity",
      "DNS resolution failures",
      "All services inaccessible",
    ],
    consequences: [
      "Complete service outage",
      "Business operations halted",
      "Emergency access required",
      "Potential data loss",
    ],
    solutions: [
      "Implement proper allow rules before deny",
      "Test connectivity after rule changes",
      "Maintain emergency access procedures",
      "Use whitelist approach with essential services",
    ],
    codeExample: {
      content: `# Problematic default deny
iptables -P INPUT DROP
iptables -P OUTPUT DROP
# Missing allow rules for essential services

# Better approach:
iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # SSH
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # HTTP
iptables -A INPUT -p tcp --dport 443 -j ACCEPT # HTTPS
iptables -P INPUT DROP  # Then deny all`,
    },
  },
  {
    id: "6",
    icon: [
      <svg
        key="icon-6"
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
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>,
    ],
    title: "Default Deny Without Exceptions",
    severity: "SEVERITY",
    severityColor: {
      bg: "bg-red-50",
      text: "text-red-500",
    },
    description:
      "Blocking all traffic without proper exceptions for essential services.",
    symptoms: [
      "Complete network isolation",
      "No internet connectivity",
      "DNS resolution failures",
      "All services inaccessible",
    ],
    consequences: [
      "Complete service outage",
      "Business operations halted",
      "Emergency access required",
      "Potential data loss",
    ],
    solutions: [
      "Implement proper allow rules before deny",
      "Test connectivity after rule changes",
      "Maintain emergency access procedures",
      "Use whitelist approach with essential services",
    ],
    codeExample: {
      content: `# Problematic default deny
iptables -P INPUT DROP
iptables -P OUTPUT DROP
# Missing allow rules for essential services

# Better approach:
iptables -A INPUT -p tcp --dport 22 -j ACCEPT  # SSH
iptables -A INPUT -p tcp --dport 80 -j ACCEPT  # HTTP
iptables -A INPUT -p tcp --dport 443 -j ACCEPT # HTTPS
iptables -P INPUT DROP  # Then deny all`,
    },
  },
];

export default firewallData;
