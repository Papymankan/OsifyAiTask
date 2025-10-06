import React from "react";
import { Input } from "./ui/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { RegionFilter } from "./RegionFilter";

function SearchBox() {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <Input
            type="text"
            id="search"
            className="search-input bg-white  text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full !pl-10 p-3 dark:text-white"
            placeholder="Search for a country..."
          />
        </div>

        <div className="relative w-full md:w-56">
          <RegionFilter />
        </div>
      </div>
    </section>
  );
}

export default SearchBox;
