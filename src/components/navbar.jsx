import React from "react";
import "../index.css";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-content:space-between bg-white w-auto text-left px-10 mx-none">
        {/* Navbar */}
        <h3 className="px-8">Demandez Une Verification</h3>
        <div className="w-auto rounded-lg bg-gray-100 ">
          <i class="fa-solid fa-magnifying-glass w-20 text-blue-600 px-4 py-4 text-center"></i>
          <input
            type="text"
            className="border-none bg-gray-100 focus:outline-none"
            placeholder="Search"
          />
        </div>
        <div className=" flex inline-flex px-8 py-8 items-center">
          <i className="fas fa-user-circle  text-blue-600 px-4 text-center text-30"></i>
          <div>
            <h4>Name here</h4>
            <p className="text-sm">student</p>
          </div>
          <i className="fa-solid fa-caret-down w-20 text-blue-600 px-4 text-center pt-15"></i>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
