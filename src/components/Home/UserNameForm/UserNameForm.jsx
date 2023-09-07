import { useRef, useState } from "react";
import "./UserNameForm.css";

const UserNameForm = ({ onStart }) => {
  const [userNameValue, setUserNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const inputClicked = useRef(false);

  function handleChange(e) {
    const nameValue = e.target.value;
    if (!inputClicked.current) inputClicked.current = true;
    if (!nameValue) setNameError("There is no name!");
    else if (/[^a-z ]/i.test(nameValue))
      setNameError("Only letters and spaces allowed");
    else if (!/^[a-z]{2,} ?$/i.test(nameValue))
      setNameError("Name must have at least two characters");
    else setNameError("");
    setUserNameValue(nameValue);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!nameError && inputClicked.current) onStart(userNameValue);
  }

  return (
    <form onSubmit={handleSubmit} className="user_form">
      <div className="user_name_cont">
        <input
          type="text"
          placeholder="Your name..."
          value={userNameValue}
          onChange={handleChange}
          className="user_name_input"
        />
        <button type="submit" className="start_btn">
          Start
        </button>
      </div>
      {Boolean(nameError) && <p className="u_name_error">{nameError}</p>}
    </form>
  );
};

export default UserNameForm;
