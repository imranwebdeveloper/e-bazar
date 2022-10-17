import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getData } from "../../utilities/localStorage";

const OrderDetails = () => {
  const products = useLoaderData();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const totalCartDetails = [];
    const carts = getData();
    for (const id in carts) {
      const cartDetails = products.find((item) => {
        return item.id === id;
      });
      cartDetails.quantity = carts[id];
      totalCartDetails.push(cartDetails);
    }
    setOrders(totalCartDetails);
  }, [products]);
  console.log(orders);
  return (
    <div className="overflow-x-auto w-full bg-white">
      <table className="table w-full ">
        <tbody>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-3@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <span className="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
