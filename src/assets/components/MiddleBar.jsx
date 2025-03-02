import React from "react";
export function MiddleBar() {
    return(
        <div>

            <p className="text-lg m-4">Transactions | This Month</p>
            <div  className="flex ml-4">
                <button className="bg-gray-300 mr-4 p-2 rounded-full">payouts(22)</button>
                <button className="bg-blue-600 p-2 rounded-full">Refunds(6)</button>
            </div>
        </div>
        
    )
}