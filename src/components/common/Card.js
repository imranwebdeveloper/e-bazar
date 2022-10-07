import React from "react";

const Card = ({ product }) => {
  const { name, img, price, ratings } = product;
  console.log(product);
  return (
    <article className="border p-3 flex flex-col cursor-pointer hover:shadow hover:border-gray-300">
      <div className="">
        <img src={img} alt="img" className="w-full h-full" />
      </div>
      <p className="my-2 flex-1">{name}</p>
      <div className="flex justify-between">
        <span>
          Price : <strong className="text-orange-500"> {price} tk</strong>
        </span>
        <span>
          Rating : <strong className="text-orange-500"> {ratings}</strong>
        </span>
      </div>
    </article>
  );
};

export default Card;
