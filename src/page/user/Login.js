import React from "react";
import { Link } from "react-router-dom";
import Section from "../../components/common/Section";

const Login = () => {
  return (
    <Section>
      <div className="min-h-screen flex items-center justify-center ">
        <form className="shadow bg-white p-8 min-w-[600px] rounded">
          <h1 className="text-center text-4xl"> Welcome to E-Bazar.com</h1>
          <p className="text-center">
            New member?
            <Link to="/user/register" className="text-blue-700 mx-1">
              Register
            </Link>
            here.
          </p>
          <div className="py-2">
            <div>
              <label htmlFor="email ">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your mail"
                required
                className="w-full p-2 outline-none border rounded-sm mt-1"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password"> Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your password"
                required
                max="18"
                min="6"
                className="w-full p-2 outline-none border rounded-sm mt-1"
              />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="w-56 text-white bg-orange-400 py-2 rounded "
            >
              Login
            </button>
          </div>
          <p className="text-center mt-2">Or Login With</p>
          <div className="flex justify-between py-2 gap-4">
            <button className="flex-1 bg-orange-700 text-white py-2 rounded">
              Google
            </button>
            <button className="flex-1 bg-blue-800 text-white py-2 rounded">
              Facebook
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Login;
