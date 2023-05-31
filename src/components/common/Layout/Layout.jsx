import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../../context/UserNameContext";
import "./Layout.css";

const Layout = () => {
  const { removeUserName } = useContext(UserNameContext);
  const navigate = useNavigate();

  function logOut() {
    removeUserName();
    navigate("/");
  }

  return (
    <div>
      <header className="header_cont">
        <h1>Pokedex</h1>
        <button onClick={logOut}>Log out</button>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
