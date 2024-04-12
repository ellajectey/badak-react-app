import React from "react";
import "../index.css";
import img from "../assets/badak-logo.png";
import { Link } from "react-router-dom";
// import {useNavigate} from react-router-Dom;

function Sidebar() {
  // const Navigate = useNavigate()
  // const Logout= () =>{
  //   window.localStorage.removeItem("isLoggedIn")
  //   Navigate('/')
  // }
  return (
    <div>
      <div className="flex h-full bg-gray-100 ">
        {/* <!-- sidebar --> */}
        <div className="hidden md:flex flex-col w-64 bg-white border-blue-500 py-4">
          <div className="flex items-center justify-center h-16 bg-white-900 border-blue-400 ">
            <img className="text-black w-60-30" src={img}></img>
          </div>
          <div className="flex flex-col flex-1 w-auto pb-auto ">
            <nav className="flex-1 px-2 py-4 bg-white-800">
              <br />
              <p>Menus</p>
              <hr />
              <a
                href="#"
                className="flex items-center px-4 py-2 text-black hover:bg-blue-200 text-black text-center"
              >
                <i className="fas fa-th h-6 w-6 mr-2 text-blue-400"></i>
                Tableau de bord
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-black hover:bg-blue-200 text-black"
              >
                <i className="far fa-id-badge h-6 w-6 mr-2 text-blue-400"></i>
                Profil
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-black hover:bg-blue-200 text-black"
              >
                <i className="fas fa-file h-6 w-6 mr-2 text-blue-400"></i>
                Ficher
              </a>
              <br />
              <p>Actions</p>
              <hr />
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-black hover:bg-blue-200 text-black"
              >
                <i class="fas fa-cog h-6 w-6 mr-2 text-blue-400"></i>
                Settings
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-black hover:bg-blue-200 text-black"
              >
                <i class="fas fa-info-circle h-6 w-6 mr-2 text-blue-400"></i>
                Infos
              </a>

              <br />
              <br />
              
              <Link
                to="/login"
                className="flex items-center px-4 py-4 mt-2 text-black hover:bg-blue-200 text-black"
              >
                <i class="fas fa-sign-out-alt h-6 w-6 mr-2 text-blue-400"></i>
                Se deconnecter
              </Link>
              <br />
              <br />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
