import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobeAmericas,
  faUsers,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function CountryBox() {
  return (
    <Link className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden card-hover cursor-pointer" href={'#'}>
      <div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
        <div className="w-24 h-16 bg-white rounded flex items-center justify-center shadow-lg">
          <span className="text-2xl">🇺🇸</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 dark:text-white">
          United States
        </h3>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUsers} size="sm"/>
            <span className="ml-2  line-clamp-1">Population: 331M</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faGlobeAmericas} size="sm"/>
            <span className="ml-2 line-clamp-1">Region: Americas</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLandmark} size="sm"/>
            <span className="ml-2 line-clamp-1">Capital: Washington, D.C.</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CountryBox;
