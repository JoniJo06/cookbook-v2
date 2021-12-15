/** @format */

import NavigationDefinition from "./Components/NavigationDefinition";
import "./index.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import axios from "axios";
import { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";

/* *** *** *** *** *** *** *** ***\
|* In kompetenter Zusammenarbeit *|
|*      entstanden mit den       *|
|*     höchstqualifizierten      *|
|*    Programmierern Martin,     *|
|*     Mattteo und Jonas         *|
\*** *** *** *** *** *** *** *** */

function App() {
  const [adminLogin, setAdminLogin] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {}, []);

  const handleLogIn = () => {};
  const handleLogOut = () => {
    setAdminLogin(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const item = e.target;
    // console.log(item.children[1].value)
    await axios
      .get(`http://localhost:4001/admins/${item.children[1].value}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
		try {
			if (item.children[3].value === user.password) {
			setAdminLogin(true);
			item.style.opacity = 0;
			item.style.pointerEvents = 'none';
    } 
		}
      catch {
				alert("username oder passwort falsch");
			}
    
  };
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div id="loginContainer">
        {!adminLogin ? (
          <Button variant="contained" onClick={handleLogIn}>
            Log in
          </Button>
        ) : (
          <Button variant='contained' onClick={handleLogOut}>Log out</Button>
        )}
        {adminLogin && (
          <TextField
            id="standard-read-only-input"
            value=""
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        )}{" "}
        <form style={{ opacity: "1" }} id="logInForm" onSubmit={handleSubmit}>
          <lable>username</lable>
          <input required type="text" />
          <lable>password</lable>
          <input required type="text" />
          <input value="login" type="submit" />
        </form>
      </div>
      <NavigationDefinition />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
