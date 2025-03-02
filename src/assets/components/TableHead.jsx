import React from "react";
export const TableHead = () => {
    return(
        <div className="grid grid-cols-12">
            <div className="col-span-3  font-bold ml-4">OrderId</div>
            <div className="col-span-2 font-bold ml-3">Status</div>
            <div className="col-span-3 font-bold ml-3">Transactionid</div>
            <div className="col-span-2 font-bold">RefundDate</div>
            <div className="col-span-2 font-bold">OrderAmount</div>
        </div>
    )
}