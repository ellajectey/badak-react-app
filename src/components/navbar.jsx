import React from "react";
import "../index.css";

function Navbar() {
  return (
    <div>
      <nav className="w-auto justify-content:space-between">
        {/* Navbar */}

        <div className="flex justify:between h-16 bg-white border-b border-gray-200 w-full">
          <div className="flex items-center px-4">
            <h3 classNameName="px-8">Demandez Une Verification</h3>
            <div className="flex w-full border rounded-lg">
              <i className="fa-solid fa-magnifying-glass w-20 text-blue-600 px-4 py-4 text-center"></i>
              <input
                className="mx-4 w-full border-none rounded-md px-4 py-2 focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center pr-4">
            <i classNameName="fas fa-user-circle text-blue-600 px-4 text-center text-30"></i>
            <div>
              <h4>Name here</h4>
              <p classNameName="text-sm">student</p>
            </div>
            <i classNameName="fa-solid fa-caret-down w-20 text-blue-600 px-4 text-center pt-15"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
