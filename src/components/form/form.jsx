import { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "../../pages/homePage/homePage";
import "../styles.css";
function Form() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [focused, setFocused] = useState(false);

  const OnSubmitLogin = (e) => {
    e.preventDefault();
    if (username === undefined || password === undefined) {
      //buraya alert gelecek
      alert("username and password not be empty");
      return false;
    }
  };

  return (
    <div>
      <div>
        <input
          name="name"
          placeholder="usename"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      <div>
        <input
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Link to={"homepage"} id="buttonContainer">
        <button
          className={[focused ? "uzun" : "kisa", "btn"].join(" ")}
          type="submit"
          onMouseOver={() => {
            setFocused(true);
          }}
          onMouseOut={() => {
            setFocused(false);
          }}
        >
          Login
        </button>
      </Link>
    </div>
  );
}
export default Form;
