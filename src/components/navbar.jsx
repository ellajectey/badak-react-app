import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [signedInUser, setSignedInUser] = useState(
    sessionStorage.getItem("user")
      ? JSON.parse(sessionStorage.getItem("user"))
      : {}
  );

  return (
    <nav className="flex w-full">
      {/* Navbar */}
      <div className="flex justify-between h-16 bg-white border-b border-gray-200 w-full">
        <div className="flex items-center justify-between px-4 w-full">
          <h3 className="px-8 w-full">Demandez Une Verification</h3>
          <div className="flex w-80 border rounded-lg -center">
            <i className="fa-solid fa-magnifying-glass w-20 text-blue-600 px-4 py-4 text-center"></i>
            <input
              className="mx-4 w-80 border-none rounded-md px-4 py-2 focus:outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex-grow">
        
        <div className="hidden md:flex items-center px-4">
          <Link to="/profile">
            <i className="fas fa-user-circle text-blue-600 px-4 text-center text-2xl"></i>
          </Link>
          <div className="justify-center px-8">
            <h4>{signedInUser.firstName}</h4>
            <p className="text-sm">{signedInUser.lastName}</p>
          </div>
          <i className="fa-solid fa-caret-down w-20 text-blue-600 px-4 text-center text-2xl pt-15"></i>
        </div>
      
        <div className="flex items-center pr-4 md:hidden">
          <Link to="/profile">
            <i className="fas fa-user-circle text-blue-600 px-4 text-center text-2xl"></i>
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
