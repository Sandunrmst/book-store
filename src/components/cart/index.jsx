function CartIndicater() {
  return (
    <div className="w-full max-w-[150px] flex items-center flex-col flex-shrink border-2 px-1 py-4  rounded-[100px] border-cyan-700 cursor-pointer">
      <h2 className="text-2xl font-bold text-cyan-700">Cart</h2>
      <p className="font-semibold">2 Items</p>
      <p>$ 65</p>
    </div>
  );
}
export default CartIndicater;
