import React from "react";

const OrdersSummary = () => {
  return (
    <div className="bg-white border rounded  p-6 shadow-md">
      <h3 className="font-bold text-lg">Order Summary</h3>
      <ul className="my-2">
        <li className="flex justify-between items-center py-2 border-b">
          <span>Total Items</span> <span>20 tk.</span>
        </li>
        <li className="flex justify-between items-center py-2 border-b">
          <span>Total Charges</span> <span>1520 tk.</span>
        </li>
        <li className="flex justify-between items-center py-2 border-b">
          <span>Shipping Charges</span>
          <span>$20 tk.</span>
        </li>
        <li className="flex justify-between items-center py-2 border-b">
          <span>Tax Charges</span> <span>10 tk.</span>
        </li>
        <li className="flex justify-between items-center py-2 mt-2 font-bold">
          <span>Sub Total </span> <span className="font-bold">$10 tk</span>
        </li>
      </ul>
      <button
        type="button"
        className="w-full shadow-lg bg-indigo-600 text-white p-2 rounded-lg mt-1"
      >
        Checkout
      </button>
    </div>
  );
};

export default OrdersSummary;
