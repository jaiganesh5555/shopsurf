import React from "react";

export const Table = ({
    OrderId,
    Status,
    Transactionid,
    RefundDate,
    OrderAmount
}) => {
    return (
        <div className="grid grid-cols-12 gap-2 p-4">
            <div className="col-span-3  font-bold text-blue-500">{OrderId}</div>
            <div className="col-span-2 text-md ">{Status}</div>
            <div className="col-span-3 text-md ml-2">{Transactionid}</div>
            <div className="col-span-2 text-md">{RefundDate}</div>
            <div className="col-span-2 text-md">{OrderAmount}</div>
        </div>
    );
};
