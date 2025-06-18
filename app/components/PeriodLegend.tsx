"use client";

import { useState } from "react";
import clsx from "clsx";

const periods = [
  { label: "Aujourd’hui", value: "today" },
  { label: "Cette semaine", value: "week" },
  { label: "Ce mois-ci", value: "month" },
];

interface PeriodLegendProps {
  onChange?: (value: string) => void;
  defaultPeriod?: string;
}

export default function PeriodLegend({
  onChange,
  defaultPeriod = "today",
}: PeriodLegendProps) {
  const [selected, setSelected] = useState(defaultPeriod);

  const handleClick = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex space-x-2">
      {periods.map((period) => (
        <button
          key={period.value}
          onClick={() => handleClick(period.value)}
          className={clsx(
            "px-4 py-2 text-sm rounded-md border transition",
            selected === period.value
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          )}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}
