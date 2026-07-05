import { books } from "../src/constant/mockData";
function App() {
  return (
    <>
      <h1 className="text-2xl">Book app</h1>
      {books.map((book) => (
        <p key={book.id}>{book.title}</p>
      ))}
    </>
  );
}

export default App;
