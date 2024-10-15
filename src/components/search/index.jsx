import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="w-full max-w-[300px] h-14 flex flex-shrink items-center gap-2 border-2 border-cyan-700 rounded-full p-2 pl-4">
      <FaSearch className="text-cyan-700 cursor-pointer" />
      <form>
        <input
          className="outline-none border-none"
          placeholder="Search"
          type="text"
          name="search"
        />
      </form>
    </div>
  );
}
export default Search;
