import { books } from "../constant/mockData";
import BookCard from "./BookCard";

function Books() {
  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div>favorites</div>
    </div>
  );
}

export default Books;
