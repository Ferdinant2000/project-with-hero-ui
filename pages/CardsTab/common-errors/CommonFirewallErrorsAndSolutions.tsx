"use client";

import { useState } from "react";

import ErrorsCards from "./error-cards/Cards";
import ErrorsContainer from "./errors-container/Container";
import firewallDataArray from "./errors-container/Data-Container"; // для отладки

export default function CommonFirewallErrorsAndSolutions() {
  // ✅ selectedId должен быть строкой, т.к. id в данных — строки
  const [selectedId, setSelectedId] = useState<string>("1"); // или '1', '2', ..., '6'

  console.log("selectedId =", selectedId);
  console.log(
    "data found =",
    firewallDataArray.find((item) => item.id === selectedId),
  ); // сравнение строк

  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Common Firewall Errors & Solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about the most common firewall configuration errors, their
          consequences, and how to prevent or fix them.
        </p>
      </div>

      <ErrorsCards selectedId={selectedId} onSelect={setSelectedId} />
      <ErrorsContainer selectedId={selectedId} />
    </>
  );
}
