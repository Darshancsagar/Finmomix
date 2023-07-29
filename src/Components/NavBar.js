import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <h2 className="bg-zinc-950 text-5xl text-white p-3 rounded-lg   shadow-red-900 shadow-2xl text-shadow-lg">
        Fincomix
      </h2>
      <nav>
        <ul>
          <li className="bg-zinc-950 p-3 rounded-lg  border-white border-2 shadow-blue-900 shadow-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="bg-zinc-950 p-3 rounded-lg  border-white border-2 shadow-blue-900 shadow-lg">
            <Link to="/about">About</Link>
          </li>
          <li className="bg-zinc-950 p-3 rounded-lg  border-white border-2 shadow-blue-900 shadow-lg">
            <Link to="/services">Services</Link>
          </li>
          <li className="bg-zinc-950 p-3 rounded-lg  border-white border-2 shadow-blue-900 shadow-lg">
            <Link to="/more">More</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
