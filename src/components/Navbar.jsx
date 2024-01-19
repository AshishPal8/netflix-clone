import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between items-center z-[100] p-4 w-full absolute">
      <Link to="/">
        <img className="w-36 cursor-pointer" src={logo} alt="" />
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white font-semibold px-6 py-2 cursor-pointer">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="text-white font-semibold px-6 py-2 bg-red-600 rounded cursor-pointer"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white font-semibold px-6 py-2 cursor-pointer">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="text-white font-semibold px-6 py-2 bg-red-600 rounded cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
