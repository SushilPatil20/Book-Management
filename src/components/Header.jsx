import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-center border-b border-gray-600 py-8">
      <ul className="flex space-x-8">
        <Link to="/">
          <li className="text-xl text-blue-600 hover:underline">Home</li>
        </Link>
        <Link to="/about">
          <li className="text-xl text-blue-600 hover:underline">About</li>
        </Link>
        <Link to="/contact">
          <li className="text-xl text-blue-600 hover:underline">Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
