import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

function SignUp() {
  const [values, setValues] = useState({
    userName: "",
    email: "",
    pass: "",
  });
  //   console.log(values);
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
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // signed up
        const user = userCredential.user;
        navigate("/signin");
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err.message);
      });
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-pink-300 to-purple-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full space-y-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Sign Up
        </h2>

        <div className="space-y-2">
          <label htmlFor="userName" className="block text-gray-600 font-medium">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            id="userName"
            name="userName"
            value={values.userName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>

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
          Sign Up
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/signin" className="text-blue-500 hover:underline ml-1">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
