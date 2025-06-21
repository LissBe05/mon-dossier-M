"use client";

import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "95%", label: "Patients Satisfaits" },
    { value: "50K+", label: "Dossiers Gérés" },
    { value: "1.5K+", label: "Professionnels Connectés" },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Nos chiffres parlent pour nous
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                {stat.value}
              </div>
              <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
