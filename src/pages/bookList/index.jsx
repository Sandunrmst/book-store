import { useEffect, useState } from "react";
import BookCard from "../../components/bookCard";
import Search from "../../components/search";
import CartIndicater from "../../components/cart";

function BookListPage() {
  const [bookList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  async function fetchBookList() {
    setLoading(true);
    const list = await fetch("https://api.itbook.store/1.0/new");
    const bookList = await list.json();

    if (bookList) {
      setLoading(false);
      setBookList(bookList.books);
    }
  }

  useEffect(() => {
    fetchBookList();
  }, []);

  const handleSearchResult = (results) => {
    setSearchResult(results);
  };

  console.log(searchResult.books);

  if (loading)
    return (
      <>
        <div className="bg-cyan-700 py-4">
          <h1 className="text-4xl font-bold text-gray-100 text-center">
            Book Store
          </h1>
        </div>
        <div className="text-2xl font-semibold text-center mt-10">
          Loading...
        </div>
        ;
      </>
    );

  return (
    <>
      <div className="bg-cyan-700 py-4">
        <h1 className="text-4xl font-bold text-gray-100 text-center">
          Book Store
        </h1>
      </div>
      <div className="max-w-6xl mx-auto p-4 ">
        <div className="flex w-full gap-6 justify-end p-4 items-center">
          <Search onSearch={handleSearchResult} />
          <CartIndicater />
        </div>
        <h2 className="text-2xl font-bold text-cyan-700 mb-5">New Books</h2>
        <div className="min-h-[80vh] grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 max-w-6xl mx-auto gap-y-10 gap-x-12">
          {bookList && bookList.length
            ? bookList.map((bookItem, index) => (
                <BookCard key={index} bookItem={bookItem} />
              ))
            : null}
        </div>
      </div>
    </>
  );
}

export default BookListPage;
