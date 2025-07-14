import { useState } from "react";

import PacketFilteringFirewall from "@/pages/CardsTab/firewall-basics/firewall-slider/Data-UnderstandingFirewalls";

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = 4;

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <>
      <div className="flex items-center justify-center mb-8">
        {/* Левая стрелка */}
        <button
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          onClick={prev}
        >
          <svg
            className="w-6 h-6 text-primary-500"
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
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Точки */}
        <div className="mx-8 flex space-x-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-primary-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        {/* Правая стрелка */}
        <button
          className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
          onClick={next}
        >
          <svg
            className="w-6 h-6 text-primary-500"
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      <PacketFilteringFirewall index={current} />
    </>
  );
}
