import React, { useState } from "react";
import Tag from "./components/Tag";
import { auth } from "./components/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Home() {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  function logout() {
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
      .catch((err) => {
        setError(true);
      });
  }
  return (
    <div className="w-full h-screen flex flex-col relative background overflow-x-hidden text-center p-14">
      <h1 className="text-purple-500 underline text-5xl">Random Gif</h1>
      {error && <p>An erroe occurred</p>}
      <button onClick={logout}>Logout</button>

      <div className="flex flex-col items-center gap-y-15 m-[30px] ">
        <Tag />
      </div>
    </div>
  );
}

export default Home;
