/**
 *
 * BookList Component
 * Book Component
 *
 *
 */
import BookList from "./components/BookList";
import { Books } from "./utils/bookData";

function App() {
  return (
    <>
      <BookList booksData={Books} />
    </>
  );
}

export default App;
