import React from "react";
import PropTypes from "prop-types";

export const BlueRevenueCard = ({ title, orderCount, amount }) => {
  return (
    <div className="text-white rounded-lg shadow-md overflow-hidden  ">
      <div className="bg-blue-600 hover:bg-blue-500 pt-4 pr-4 pl-4 pb-2">
        <div className="flex items-center mb-2">
          <div className="mr-2">{title}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <div className="flex justify-between pt-2">
          <div className="font-bold text-2xl pb-1">{amount}</div>
          {orderCount && (
            <div className="flex">
              <div className="underline cursor-pointer">{orderCount} orders</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between p-2 bg-blue-400">
        <div>Next Payment Date:</div>
        <div>Today, 4:00 PM</div>
      </div>
    </div>
  );
};

BlueRevenueCard.propTypes = {
  title: PropTypes.string.isRequired,
  orderCount: PropTypes.number,
  amount: PropTypes.string.isRequired,
};
