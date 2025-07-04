// import { Tabs, Tab } from "@heroui/react";

export default function App() {
  return (
    <div className="flex flex-wrap justify-center my-[1.5rem] gap-4">
        {/* <Tabs className="light shadow-lg rounded-xl" aria-label="" color="primary" radius="sm" size="lg">
          <Tab key="basics" title="Firewall Basics" />
          <Tab key="slider" title="Interactive Slider" />
          <Tab key="errors" title="Common Errors" />
        </Tabs> */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-16 h-16 text-primary-500">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
            </svg>
          </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Understanding Firewalls</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Think of it as a security guard for your network.</p>
        </div>
    </div>
  );
}