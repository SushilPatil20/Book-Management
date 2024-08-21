import Book from "./Book";
import { Books } from "../utils/bookData";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
const BookList = () => {
  const { loggedInUser, setUserName } = useContext(userContext);

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
      <section className="text-center px-8 md:w-1/2 md:mx-auto md:px-0">
        <input
          type="text"
          className="border border-gray-400 outline-none"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
        <h2 className="text-4xl my-8">Search Books</h2>
        <section className="flex flex-col space-y-4 md:flex-row mb-8 md:space-x-8 md:items-center md:space-y-0">
          <input
            type="text"
            placeholder="Search by Book name"
            className="border border-gray-800 outline-none px-6 py-3 rounded-md w-full"
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
      <ul className="grid grid-cols-1 md:grid-cols-3 space-4 px-4">
        {filteredBooks.length !== 0 ? (
          filteredBooks.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <Book book={book} />
            </Link>
          ))
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
