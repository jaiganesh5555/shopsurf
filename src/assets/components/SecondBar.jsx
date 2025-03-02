import React from "react";
export const SecondBar = () => {
    return(
        <div className="flex justify-between mt-3">
            <div className="text-xl  ml-4 font-bold">
                <p>Overview</p>
            </div>
            <div>

            </div>
            <div className="flex shadow-md mr-2 p-1">
                <p>This Month</p>
                <svg className="w-4 h-7 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>

            </div>
        </div>
    )
}