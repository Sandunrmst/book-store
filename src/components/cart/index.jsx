import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function CartIndicater() {
  const navigate = useNavigate();

  const handleCartNavigation = () => {
    navigate("/cart");
  };

  const [total, setTotal] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, current) => {
        const removeDollar = parseFloat(current.price.replace("$", ""));
        return acc + removeDollar;
      }, 0)
    );
  }, [cart]);

  return (
    <div
      onClick={handleCartNavigation}
      className="w-full max-w-[150px] flex items-center flex-col flex-shrink border-2 px-1 py-4  rounded-[100px] border-cyan-700 cursor-pointer"
    >
      <h2 className="text-2xl font-bold text-cyan-700">Cart</h2>
      <p className="font-semibold">{cart.length} Items</p>
      <p>$ {total.toFixed(2)}</p>
    </div>
  );
}
export default CartIndicater;
