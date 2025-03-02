import React
 from "react";
 import { RevenueCard } from "./RevenueCard";
 import { BlueRevenueCard } from "./BlueRevenueCard";
 export const Cards = () => {
     return (
        <div className="grid grid-cols-3 gap-4 p-4 ">
      <div >
       <BlueRevenueCard  title="Next Payout" orderCount={100} amount="$93312.20" />
       </div>
        <div>
      <RevenueCard title="Amount paid" orderCount={50} amount="$41200.00" />
      </div>
      <div>
      <RevenueCard title="Amount paid" amount="$41200.00" />
      </div>
      </div>
     )
 }