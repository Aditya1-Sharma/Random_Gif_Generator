import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, pass } = values;
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-300 to-purple-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Sign In
        </h2>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="pass" className="block text-gray-600 font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="pass"
            name="pass"
            value={values.pass}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>

        <button className="w-full text-center text-white bg-blue-500 hover:bg-blue-600 rounded-lg py-2 mt-4 transition duration-200">
          Sign In
        </button>

        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?
          <Link to="/signup" className="text-blue-500 hover:underline ml-1">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
