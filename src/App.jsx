/**
 *
 * BookList Component
 * Book Component
 */
import { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";

function App() {
  const [userName, setUserName] = useState("Sushil");

  return (
    <>
      <Header />
      <userContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <Outlet />
      </userContext.Provider>
    </>
  );
}
export default App;
