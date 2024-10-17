import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search({ onSearch }) {
  const [searchParam, setSearchParam] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const result = await fetch(
        `https://api.itbook.store/1.0/search/${searchParam}`
      );
      const data = await result.json();
      onSearch(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="w-full max-w-[300px] h-14 flex flex-shrink items-center gap-2 border-2 border-cyan-700 rounded-full p-2 pl-4">
      <FaSearch className="text-cyan-700 cursor-pointer" />
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none"
          placeholder="Search"
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
    </div>
  );
}
export default Search;
