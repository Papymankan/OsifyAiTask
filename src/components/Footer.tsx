import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                color="black dark:white"
                size={"2x"}
              />
            </div>
            <span className="text-gray-700 font-medium">World Explorer</span>
          </div>
          <div className="text-gray-500 text-sm">
            &copy; 2026 World Explorer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
