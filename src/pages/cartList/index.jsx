import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CartCard from "../../components/cartCard";

function CartListPage() {
  const [total, setTotal] = useState(0);

  const { cart } = useSelector((state) => state);

  const navigate = useNavigate();

  const handleCartNavigation = () => {
    navigate("/");
  };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, current) => {
        const removeDollar = parseFloat(current.price.replace("$", ""));
        return acc + removeDollar;
      }, 0)
    );
  }, [cart]);

  console.log(total.toFixed(2));

  return (
    <>
      <div className="bg-cyan-700 py-4">
        <h1 className="text-4xl font-bold text-gray-100 text-center">Cart</h1>
      </div>
      <div className="max-w-6xl mx-auto p-4 ">
        <div className="flex w-full gap-6 justify-start p-4 items-center">
          <FaHome
            onClick={handleCartNavigation}
            className="text-4xl text-cyan-700 cursor-pointer"
          />
        </div>

        <div className="w-full flex-row mx-auto md:flex pt-10">
          <div className="md:w-[50%] flex flex-col gap-4">
            {cart && cart.length
              ? cart.map((cartItem, index) => (
                  <CartCard key={index} cartItem={cartItem} />
                ))
              : null}
          </div>
          <div className="md:w-[50%] flex justify-center">
            <h1 className="text-2xl font-bold">
              Total:{" "}
              <span className="font-bold text-cyan-700">
                $ {total.toFixed(2)}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartListPage;
