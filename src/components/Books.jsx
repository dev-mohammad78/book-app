import { useState } from "react";

import { books as bookData } from "../constant/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";

function Books() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);
  const [books, setBooks] = useState(bookData);

  const handleLikeList = (book, isLiked) => {
    if (isLiked) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };

  const searchHandler = () => {
    if (search) {
      const filteredBooks = bookData.filter(
        (book) =>
          book.title.toLowerCase().includes(search.toLowerCase().trim()) ||
          book.author.toLowerCase().includes(search.toLowerCase().trim()),
      );
      setBooks(filteredBooks);
      setSearch("");
    } else {
      setBooks(bookData);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className="flex flex-col md:flex-row align-center">
        <div className="flex-[2.6_1_0%] min-h-screen">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              handleLikeList={handleLikeList}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className="flex-[1_1_0] h-fit p-4 bg-[var(--primary)] rounded-md md:ml-5 mt-4">
            <h4 className="text-xl font-bold">Favorites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
