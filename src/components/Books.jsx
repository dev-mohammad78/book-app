import { useState } from "react";
import { books } from "../constant/mockData";
import BookCard from "./BookCard";
import SideCard from "./SideCard";

function Books() {
  const [liked, setLiked] = useState([]);
  const handleLikeList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((item) => item.id !== book.id);
      setLiked(newLikedList);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <div className="flex flex-col md:flex-row align-center">
      <div className="flex-[2.6_1_0%] min-h-screen">
        {books.map((book) => (
          <BookCard key={book.id} book={book} handleLikeList={handleLikeList} />
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
  );
}

export default Books;
