import { useParams } from "react-router-dom";
import { Books } from "../utils/bookData";

const BookDetails = () => {
  const id = useParams().id;
  const book = Books.filter((book) => book.id == id)[0];
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-auto mt-6">
      <img
        className="w-full h-64 object-cover"
        src={book.coverImage}
        alt="Book Title cover"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base mb-2">{book.author}</p>
        <p className="text-gray-600 text-sm mb-4">
          Published: {book.publishedDate}
        </p>
        <p className="text-gray-700 text-sm">{book.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
