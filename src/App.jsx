/**
 *
 * BookList Component
 * Book Component
 */
import { useState } from "react";
import BookList from "./components/BookList";
import { Books } from "./utils/bookData";

function App() {
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(Books);

  function handleSearch() {
    const filterBooks = Books.filter((book) =>
      book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setFilteredBooks([...filterBooks]);
  }

  return (
    <>
      <section className="text-center w-1/2 mx-auto">
        <h2 className="text-4xl my-8">Search Books</h2>
        <section className="flex space-x-8 mb-8">
          <input
            type="text"
            placeholder="Search by Book name"
            className="border border-gray-800 outline-none px-6 py-3 rounded-md flex-1"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 px-4 py-2 text-xl text-white rounded-md"
          >
            Search
          </button>
        </section>
      </section>
      <BookList books={filteredBooks} />
    </>
  );
}

export default App;
