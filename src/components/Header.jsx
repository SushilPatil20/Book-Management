import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

const Header = () => {
  const data = useContext(userContext);
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
        <Link to="/demo">
          <li className="text-xl text-blue-600 hover:underline">Demo</li>
        </Link>
        <li>{data}</li>
      </ul>
    </header>
  );
};

export default Header;
