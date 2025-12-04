import React, { useContext } from "react";
import Logo from '../assets/Logo1.png';
import { AuthContext } from "../auth/AuthProvider";
import { FaLeaf, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((err) => console.error(err));
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "hover:text-white "
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/plants"
          className={({ isActive }) =>
            isActive
             ? "text-white font-semibold"
              : "hover:text-white "
          }
        >
          Plants
        </NavLink>
      </li>

      {
        user && <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold"
              : "hover:text-white "
            }
          >
            My Profile
          </NavLink>
        </li>
      }
      <li>
        <NavLink
          to="/support"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "hover:text-white "
          }
        >
          Support
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "hover:text-white "
          }
        >
          Contact
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold"
              : "hover:text-white "
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-linear-to-r to-[#0f0000] via-[#3e0001] from-[#0f0000]  shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <FaLeaf className="text-green-600 text-2xl" /> */}
          <Link
            to="/"
            className="w-[100px]"
          >
            <img src={Logo} alt="" className="rounded-full" />
          </Link>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 items-center text-gray-300 font-bold">
          {navLinks}
        </ul>

        {/* User Section */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="relative group">
              {/* Avatar */}
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-13 h-13  rounded-full border-2 border-green-500 cursor-pointer"
                />
              ) : (
                <FaUserCircle className="text-4xl text-green-600 cursor-pointer" />
              )}

              {/* Dropdown */}
              <div className="absolute duration-700 right-11 -top-1 hidden group-hover:block bg-white shadow-lg rounded-md mt-2 w-40 text-center">
                <p className="text-green-500 font-bold pt-2">
                  {user.displayName || "User"}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full py-2 text-red-500 font-medium hover:bg-green-50 rounded-b-md"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="px-4 py-2 text-green-700 border border-green-600 rounded-md hover:bg-green-100 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-linear-to-r from-green-500 to-orange-700 text-white rounded-md hover:bg-green-700  transition-all duration-1000 ease-in-out
             hover:from-orange-700 hover:to-green-500 hover:scale-102"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center border-t py-2 bg-white">
        <ul className="flex gap-6">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
