// errors-cards/Cards.tsx
import { cardsData } from "./CardsStyle";

interface ErrorsCardsProps {
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function ErrorsCards({
  selectedId,
  onSelect,
}: ErrorsCardsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      {cardsData.map((card) => {
        const isActive = card.id === selectedId;

        return (
          <div
            key={card.id}
            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform
              ${isActive ? "bg-primary-500 text-white scale-105" : "bg-white hover:bg-gray-50"}
            `}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(card.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onSelect(card.id);
              }
            }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={isActive ? "text-white" : "text-primary-500"}>
                {card.icon}
              </div>
              <div
                className={`
                px-2 py-1 rounded-full text-xs font-medium
                ${isActive ? "bg-white text-primary-500" : card.severityClass}
              `}
              >
                {card.severity}
              </div>
            </div>
            <h3
              className={`font-semibold mb-2 ${isActive ? "text-white" : "text-gray-800"}`}
            >
              {card.title}
            </h3>
            <p
              className={`text-sm ${isActive ? "text-blue-100" : "text-gray-600"}`}
            >
              {card.description}
            </p>
            <div
              className={`mt-3 text-xs opacity-75 ${isActive ? "text-white" : "text-gray-500"}`}
            >
              {card.category}
            </div>
          </div>
        );
      })}
    </div>
  );
}
