import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { auth } from "./components/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/");
      } else {
        setUser(null);
        navigate("/signup");
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        {user && <Route path="/" element={<Home />} />}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
