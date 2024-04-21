import React, {useState} from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [signedInUser, setSignedInUser] = useState(sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {});
   
  return (
    <div>
      <nav className="flex w-auto ">
        {/* Navbar */}

        <div className="flex justify-between h-16 bg-white border-b border-gray-200 w-full ">
          <div className="flex items-center justify-between px-4">
            <h3 className="px-8 ">Demandez Une Verification</h3>
            <div className="flex w-full border rounded-lg  -center">
              <i className="fa-solid fa-magnifying-glass w-20 text-blue-600 px-4 py-4 text-center"></i>
              <input
                className="mx-4 w-full border-none rounded-md px-4 py-2 focus:outline-none"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <Link
           to="/profile">
          <div className="flex items-center pr-4">
            <i className="fas fa-user-circle text-blue-600 px-4 text-center text-2xl"></i>
            <div className="justify-center py-4">
              <h4>{signedInUser.firstName}</h4>
              <p className="text-sm">{signedInUser.lastName}</p>
            </div>
            <i className="fa-solid fa-caret-down w-20 text-blue-600 px-4 text-center text-2xl pt-15"></i>
          </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
