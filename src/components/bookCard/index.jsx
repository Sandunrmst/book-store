function BookCard() {
  return (
    <div className="w-full flex justify-evenly  border-2 rounded-md border-cyan-700 p-2 shadow-md gap-2">
      <div className="flex-1">
        <img src="" alt="" className="object-cover w-full" />
      </div>
      <div className="flex-1">
        <h2>
          <span className="font-bold">Title:</span> Title
        </h2>
        <h3>
          <span className="font-bold">Subtitle:</span>
          Subtitle
        </h3>
        <p>
          <span className="font-bold">ISBN:</span> ISBN
        </p>
        <p>
          <span className="font-bold">Price:</span> Price
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
  );
}

export default BookCard;
