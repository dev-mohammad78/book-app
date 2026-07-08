import { FaSearch } from "react-icons/fa";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className="mb-6 md:mb-10 flex items-center justify-center">
      <input
        type="text"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-[300px] md:w-full h-10 p-4 mr-3  rounded-md border-2 border-[var(--primary)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]"
      />
      <button
        onClick={searchHandler}
        className="w-10 h-10 border-none rounded-md text-lg bg-[var(--primary)] text-[var(--text-primary)] cursor-pointer flex items-center justify-center"
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBox;
