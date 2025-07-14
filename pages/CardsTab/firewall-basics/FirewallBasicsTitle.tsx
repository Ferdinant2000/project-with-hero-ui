import SliderWithContent from "@/pages/CardsTab/firewall-basics/firewall-slider/SliderWithContent";
export default function App() {
  return (
    <>
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-primary-500"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          </svg>
        </div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Understanding Firewalls
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A firewall is a network security device that monitors and controls
          incoming and outgoing network traffic based on predetermined security
          rules. Think of it as a security guard for your network.
        </p>
      </div>
      <SliderWithContent />
    </>
  );
}
