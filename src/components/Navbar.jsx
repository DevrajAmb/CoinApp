import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav
      className={
        theme
          ? "bg-gray-900 py-4 md:px-16 px-8 shadow-lg border-b border-gray-800 flex items-center justify-between"
          : "bg-gray-200 py-4 md:px-16 px-8 shadow-lg flex items-center justify-between"
      }
    >
      <Link to={"/"}>
        <h1
          className={
            theme
              ? "text-white font-black text-xl"
              : "text-black font-black text-xl"
          }
        >
          Crypto<span className="text-red-400">DCX</span>
        </h1>
      </Link>

      <div>
        {user ? (
          <>
            <Link to={"/cart"}>
              <button className="bg-green-600 py-1 text-white px-4 text-sm font-bold mx-2 rounded-lg">
                Cart ({cartItems.length})
              </button>
            </Link>
            <button className="bg-red-600 py-1 text-white px-4 text-sm font-bold mx-2 rounded-lg">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="bg-blue-600 py-1.5 text-white px-4 text-sm font-bold mx-2 rounded-lg hover:bg-blue-800 "
            >
              Sign In
            </Link>
            <Link
              to={"/register"}
              className="bg-blue-600 py-1.5 text-white px-4 text-sm font-bold mx-2 rounded-lg hover:bg-blue-800 "
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
