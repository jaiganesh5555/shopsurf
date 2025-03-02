import React from "react";

export const SideBottom = () => {
    return (
        <div className="flex items-center p-4 pt-20 bg-blue-500 width-full">
            <div className="bg-blue-300 p-4 rounded-lg flex items-center">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-white bg-blue-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" 
                    />
                </svg>
                <div className="ml-4 pr-7">
                    <p className="text-sm font-medium text-white-700">Available  credits</p>
                    <p className="text-lg font-bold text-white-800">$500</p>
                </div>
            </div>
        </div>
    );
};
