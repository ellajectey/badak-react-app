import React from 'react';
import '../index.css';


function Navbar() {
    return (
        <div>
          <nav className="navbar">
                {/* Navbar */}
                <h3>Demandez Une Verification</h3>
                <div className="navbar-search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" className="search" placeholder="Search" />
                </div>
                <div id="user">
                    <i className="fas fa-user-circle" id="user-icon"></i>
                    <div>
                        <h4>Name here</h4>
                        <p>student</p>
                    </div>
                    <i className="fa-solid fa-caret-down" id="caret"></i>
                </div>
            </nav>  
        </div>
    );
}

export default Navbar;