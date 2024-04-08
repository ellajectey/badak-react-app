import React from 'react';
import '../index.css';


function Navbar() {
    return (
        <div>
          <nav className="flex justify-between items-center bg-white w-auto text-left px-20">
                {/* Navbar */}
                <h3>Demandez Une Verification</h3>
                <div className="w-30 rounded-lg bg-gray-100 ">
                    <i class="fa-solid fa-magnifying-glass w-20 text-blue-600 px-4 py-4 text-center"></i>
                    <input type="text" className="border-none bg-gray-100 focus:outline-none" placeholder="Search" />
                </div>
                <div className="inline-flex py-4">
                    <i className="fas fa-user-circle h-20 w-20 text-blue-600 px-4 text-center p-15 text-30" ></i>
                    <div>
                        <h4>Name here</h4>
                        <p className="text-sm">student</p>
                    </div>
                    <i className="fa-solid fa-caret-down h-20 w-20 text-blue-600 px-4 text-center pt-15"></i>
                </div>
            </nav>  
        </div>
    );
}

export default Navbar;