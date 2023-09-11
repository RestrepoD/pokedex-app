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
      <header className="header">
        <img
          src="https://res.cloudinary.com/dniyckep8/image/upload/v1694196622/sub_bozprx.svg"
          alt=""
          className="upper_bkg"
        />
        <div className="over">
          <h1 className="title_img">
            <img
              src="https://res.cloudinary.com/dniyckep8/image/upload/v1694196622/pokedex_f5utzj.svg"
              alt=""
            />
          </h1>
          <button onClick={logOut}>Log out</button>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
