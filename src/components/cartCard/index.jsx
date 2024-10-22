import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../store/slices/cartslice";
import { useState } from "react";

function CartCard({ cartItem }) {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const dispatch = useDispatch();

  const handleQuantity = (e) => {
    setQuantity(Number(e.target.value));
  };

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.isbn13));
  }

  function handleUpdate() {
    dispatch(updateQuantity({ isbn13: cartItem.isbn13, quantity }));
  }
  return (
    <div className="w-full flex justify-evenly  border-2 rounded-md border-cyan-700 p-2 shadow-md gap-2">
      <div className="flex-1">
        <img
          src={cartItem?.image}
          alt={cartItem?.title}
          className="object-cover w-full"
        />
      </div>
      <div className="flex-1 pt-4">
        <h2>
          <span className="font-bold">Title:</span>
          {cartItem?.title}
        </h2>
        <h3>
          <span className="font-bold">Subtitle:</span>
          {cartItem?.subtitle}
        </h3>
        <p>
          <span className="font-bold">ISBN:</span>
          {cartItem?.isbn13}
        </p>
        <p>
          <span className="font-bold">Price:</span>
          {cartItem?.price}
        </p>
      </div>
      <div className="flex flex-col items-end pt-4">
        <input
          className="border-2 border-cyan-700 rounded-md w-14 text-slate-950"
          type="number"
          name="cartcounter"
          min="1"
          value={quantity}
          onChange={handleQuantity}
        />
        <button
          onClick={handleUpdate}
          className="p-2 w-[80px] mt-2 bg-cyan-700 rounded-md text-white hover:bg-cyan-600 transition-all duration-100"
        >
          Update
        </button>
        <button
          onClick={handleRemoveFromCart}
          className="p-2 w-[80px] mt-2 bg-cyan-700 rounded-md text-white hover:bg-cyan-600 transition-all duration-100"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartCard;
