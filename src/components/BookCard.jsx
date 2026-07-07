import { useState } from "react";
import { FaHeart } from "react-icons/fa6";

function BookCard({ book, handleLikeList }) {
  const [isLiked, setIsLiked] = useState(false);

  const { id, title, author, image, language, pages } = book;

  const likeHandler = () => {
    handleLikeList(book, isLiked);
    setIsLiked((isLiked) => !isLiked);
  };
  return (
    <div className="bg-[var(--bg-secondary)] p-4 mt-4 rounded-md flex">
      <img src={image} alt={title} className="rounded-sm" />
      <div className="w-full flex flex-col justify-between gap-5 ml-8">
        <h3 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
          {title}
        </h3>
        <p className="text-md md:text-lg font-semibold text-[var(--text-primary)]">
          {author}
        </p>
        <div className="flex align-center gap-4">
          <span className="text-sm text-[var(--text-secondary)]">
            {language}
          </span>
          <span className="text-sm text-[var(--text-secondary)]">
            {pages} pages
          </span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <FaHeart
          className={`text-2xl cursor-pointer transition-all duration-300 ${
            isLiked
              ? "text-[var(--danger-primary)] scale-110"
              : "text-[var(--text-primary)]"
          }`}
        />
      </button>
    </div>
  );
}

export default BookCard;
