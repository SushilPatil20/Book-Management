import React from "react";

const Book = ({ book }) => {
  return (
    <>
      <li
        className=" hover:scale-105 duration-200 min-w-fit m-4 bg-white rounded-lg shadow-md
       shadow-gray-700 overflow-hidden mb-4"
      >
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{book.title}</h2>
          <p className="text-gray-700 text-base mb-4">{book.description}</p>
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full mr-4"
              src={book.coverImage}
              alt={book.title}
            />
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{book.author}</p>
              <p className="text-gray-600">{book.publishedDate}</p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default Book;
