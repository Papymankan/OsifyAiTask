"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

function NavBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-black shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faGlobeAmericas}
                color="black dark:white"
                size={"2x"}
              />
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-300">
              World Explorer
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant={"ghost"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <FontAwesomeIcon icon={faMoon} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
