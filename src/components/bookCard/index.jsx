import { Link } from "react-router-dom";

function BookCard({ bookItem }) {
  return (
    <Link to={`/product-details/${bookItem?.isbn13}`}>
      <div className="w-full flex justify-evenly  border-2 rounded-md border-cyan-700 p-2 shadow-md gap-2">
        <div className="flex-1">
          <img
            src={bookItem?.image}
            alt={bookItem?.title}
            className="object-cover w-full"
          />
        </div>
        <div className="flex-1">
          <h2>
            <span className="font-bold">Title:</span> {bookItem?.title}
          </h2>
          <h3>
            <span className="font-bold">Subtitle:</span>
            {bookItem?.subtitle}
          </h3>
          <p>
            <span className="font-bold">ISBN:</span> {bookItem?.isbn13}
          </p>
          <p>
            <span className="font-bold">Price:</span> {bookItem?.price}
          </p>
        </div>
        <div className="flex flex-col items-end">
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
    </Link>
  );
}

export default BookCard;
