import React from "react";
import CountryBox from "./CountryBox";

function CountriesGrid() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-6">
        All Countries
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
        <CountryBox />
      </div>
    </section>
  );
}

export default CountriesGrid;
