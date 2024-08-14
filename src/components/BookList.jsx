import Book from "./Book";
import { Books } from "../utils/bookData";
import { useState } from "react";

const BookList = () => {
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
      <ul className="grid grid-cols-1 md:grid-cols-3 space-4 px-6">
        {filteredBooks.length !== 0 ? (
          filteredBooks.map((book) => <Book key={book.id} book={book} />)
        ) : (
          <h2 className="text-center text-2xl text-gray-700">
            Search not found..!!
          </h2>
        )}
      </ul>
    </>
  );
};

export default BookList;
