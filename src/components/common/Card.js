import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContextProvider";
import { setDataToLocalStore } from "../../utilities/localStorage";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);
  const { id, name, img, price, ratings } = product;
  const handleCart = (product) => {
    const cartQuantity = setDataToLocalStore(product);
    setCart(cartQuantity);
  };

  return (
    <article className="border p-3 flex flex-col hover:shadow hover:border-gray-300 rounded">
      <div className="">
        <img src={img} alt="img" className="w-full h-full" />
      </div>
      <p className="my-2 flex-1">{name}</p>
      <div className="flex justify-between mb-2">
        <span>
          Price : <strong className="text-orange-500"> {price} tk</strong>
        </span>
        <span>
          Rating : <strong className="text-orange-500"> {ratings}</strong>
        </span>
      </div>
      <div className="flex gap-2 justify-between">
        <button
          className="btn btn-outline btn-sm btn-info"
          onClick={() => navigate(`/product/${id}`)}
        >
          Get Details
        </button>
        <button
          className="btn btn-outline btn-sm btn-success"
          onClick={() => handleCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default Card;
