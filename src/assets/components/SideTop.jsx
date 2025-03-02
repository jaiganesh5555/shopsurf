import React from "react";
export const SideTop = () => {
  return (
    <div className="flex items-center p-4 text-white-800">
      <img className="w-12 h-12 rounded-full" src="./public/shop.jpg" alt="Profile" />
      <div className="ml-4 text-white-800">
        <p className="font-semibold text-white-800 dark:text-white">Ganesh</p>
        <div className="flex items-center space-x-2 hover:text-blue-700">
          <a
            href="#"
            className="text-white-500 underline "
          >
            Visit here
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};