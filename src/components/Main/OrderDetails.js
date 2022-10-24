import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const OrderDetails = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className=" w-full">
      {cart.map(({ id, img, name, category, quantity, price }) => {
        return (
          <div
            key={id}
            className="flex justify-between gap-2 items-center border mb-2 shadow-md bg-white"
          >
            <div className="w-32">
              <img src={img} alt="img" className="image-full" />
            </div>
            <div className="flex-1">
              <p className="font-bold">{name}</p>
              <small>{category}</small>
            </div>

            <div className="flex-1 flex justify-between items-center mr-8">
              <div className="border p-2 rounded">
                <button className="px-2 text-lg font-bold">+</button>
                <span className="px-2">{quantity}</span>
                <button className="px-2 text-lg font-bold">-</button>
              </div>
              <p className="font-bold">{price * quantity} Tk.</p>
              <div>
                <button className="text-rose-700 ">Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderDetails;
