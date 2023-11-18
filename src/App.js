import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { SignIn } from "./Pages/SignInPage/SignIn";
import { Home } from "./Pages/HomePage/home";

export default function App() {
  const navLinkStyle = {
    position: "top-left",
    textDecoration: "none",
    padding: "6px",
    margin: "3px",
    color: "white",
    background: "blue",
    borderRadius: "5px"
  };

  return (
    <div className="App">
      {/* <NavLink to="/" style={navLinkStyle}>
        back
      </NavLink> */}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}
