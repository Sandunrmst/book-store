import { useSelector } from "react-redux";

function CartListPage() {
  const { cart } = useSelector((state) => state);

  console.log(cart);

  return (
    <>
      <div className="bg-cyan-700 py-4">
        <h1 className="text-4xl font-bold text-gray-100 text-center">Cart</h1>
      </div>
    </>
  );
}

export default CartListPage;
