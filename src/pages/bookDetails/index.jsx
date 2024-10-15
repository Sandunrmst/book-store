import { useEffect, useState } from "react";
import CartIndicater from "../../components/cart";
import { FaHome } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function BookDetailsPage() {
  const navigate = useNavigate();

  const handleCartNavigation = () => {
    navigate("/");
  };

  const bookISBN = useParams();

  const [bookDetails, setBookDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchBookDetails() {
    setLoading(true);
    const data = await fetch(
      `https://api.itbook.store/1.0/books/${bookISBN.id}`
    );
    const bookDetails = await data.json();

    if (bookDetails) {
      setLoading(false);
      setBookDetails(bookDetails);
    }
  }

  useEffect(() => {
    fetchBookDetails();
  }, []);

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
            <img
              src={bookDetails?.image}
              alt={bookDetails?.title}
              className="object-cover w-full"
            />
          </div>
          <div className="w-[50%] pt-10">
            <h2>
              <span className="font-bold">Title:</span> {bookDetails?.title}
            </h2>
            <h3>
              <span className="font-bold">Subtitle:</span>{" "}
              {bookDetails?.subtitle}
            </h3>
            <p>
              <span className="font-bold">ISBN:</span> {bookDetails?.isbn13}
            </p>
            <p>
              <span className="font-bold">Price:</span> {bookDetails?.price}
            </p>
            <p>
              <span className="font-bold">Author:</span> {bookDetails?.authors}
            </p>
            <p>
              <span className="font-bold">Year:</span> {bookDetails?.year}
            </p>
            <p>
              <span className="font-bold">Description:</span>{" "}
              {bookDetails?.desc}
            </p>
          </div>
          <div className="w-[30%] flex flex-col items-end pt-10">
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
