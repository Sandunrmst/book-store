import CartIndicater from "../../components/cart";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function BookDetailsPage() {
  const navigate = useNavigate();

  const handleCartNavigation = () => {
    navigate("/");
  };
  return (
    <>
      <div className="bg-cyan-700 py-4">
        <h1 className="text-4xl font-bold text-gray-100 text-center">
          Book Details
        </h1>
      </div>
      <div className="max-w-6xl mx-auto p-4 ">
        <div className="flex w-full gap-6 justify-between p-4 items-center">
          <FaHome
            onClick={handleCartNavigation}
            className="text-4xl text-cyan-700 cursor-pointer"
          />
          <CartIndicater />
        </div>

        <div className="w-full flex mt-16">
          <div className="w-[30%]">
            <img src="" alt="" className="object-cover w-full" />
          </div>
          <div className="w-[50%]">
            <h2>
              <span className="font-bold">Title:</span> Title
            </h2>
            <h3>
              <span className="font-bold">Subtitle:</span> Title
            </h3>
            <p>
              <span className="font-bold">ISBN:</span> Title
            </p>
            <p>
              <span className="font-bold">Price:</span> Title
            </p>
            <p>
              <span className="font-bold">Author:</span> Title
            </p>
            <p>
              <span className="font-bold">Year:</span> Title
            </p>
            <p>
              <span className="font-bold">Description:</span> Title
            </p>
          </div>
          <div className="w-[30%] flex flex-col items-end">
            <input
              className="border-2 border-cyan-700 rounded-md w-14 text-slate-950"
              type="number"
              name="cartcounter"
              min="1"
            />
            <button className="p-2 mt-2 bg-cyan-700 rounded-md text-white hover:bg-cyan-600 transition-all duration-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetailsPage;
