import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserNameContext } from "../../context/UserNameContext";
import UserNameForm from "../../components/Home/UserNameForm/UserNameForm";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { saveUserName } = useContext(UserNameContext);
  const from = location.state?.from ?? "/pokedex";

  const handleSendName = (userNameValue) => {
    saveUserName(userNameValue);
    navigate(from);
  };

  return (
    <section>
      <div className="logo_cont">
        <img src="../../../public/pokedex.svg" alt="Pokedex" />
      </div>
      <h1 className="home_title">Hello, trainer!</h1>
      <p className="home_desc">Introduce your name to start</p>
      <div className="home_form_cont">
        <UserNameForm onStart={handleSendName} />
      </div>
      <img src="../../../public/sub.svg" alt="sub" className="sub" />
    </section>
  );
};

export default Home;
