import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-3 space-4 px-6">
        {books.length !== 0 ? (
          books.map((book) => <Book key={book.id} book={book} />)
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
