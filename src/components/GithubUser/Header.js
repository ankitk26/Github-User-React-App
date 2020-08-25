import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="w-full md:px-5 py-3 bg-blue-500 text-white md:text-2xl text-lg">
      <Link to="/" className="flex items-center justify-center px-10 md:mt-0">
        <i className="fab fa-github mr-4"></i>
        <h1>Github User</h1>
      </Link>
    </nav>
  );
}

export default Header;
