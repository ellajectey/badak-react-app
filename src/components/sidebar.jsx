import React from "react";
import "../index.css";
import img from "../assets/badak-logo.png";
import { Link ,useNavigate} from "react-router-dom";


function Sidebar() {

  const navigate = useNavigate();

  async function signOut(){
    try {

      let thetoken = sessionStorage.getItem('token');
      if (!thetoken) {
        console.log('token does not exist');
        return;
      }

      const response = await fetch(`${process.env.REACT_APP_BADAK_API}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + thetoken,
        },
      });
      let responseData = await response.json();
      console.log(responseData);
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="flex h-full ">
        {/* <!-- sidebar --> */}
        <div className="flex hidden md:flex flex-col w-64 bg-white border border-blue-500 py-4">
          <div className="flex items-center justify-center h-16 bg-white-900 ">
            <img className="text-black w-60-30" src={img}></img>
          </div>
          <div className="flex flex-col flex-1 w-auto pb-auto ">
            <nav className="flex-1 px-2 py-4 bg-white-800">
              <br />
              <p className="pb-2">Menus</p>
              <hr />
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-black hover:bg-blue-200 text-black "
              >
                <i className="fas fa-th h-6 w-6 mr-2 mt-2 text-blue-400"></i>
                Tableau de bord
              </Link>
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-black hover:bg-blue-200 text-black"
              >
                <i className="far fa-id-badge h-6 w-6 mr-2 mt-2 text-blue-400"></i>
                Profil
              </Link>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-black hover:bg-blue-200 text-black"
              >
                <i className="fas fa-file h-6 w-6 mr-2 mt-2 text-blue-400"></i>
                Ficher
              </a>
              <br />
              <p className="pb-2">Actions</p>
              <hr />
              <a
                href="#"
                className="flex items-center px-4 py-2 text-black hover:bg-blue-200 text-black"
              >
                <i className="fas fa-cog flex h-6 w-6 mr-2 mt-2 text-blue-400 "></i>
                Settings
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 text-black hover:bg-blue-200 text-black"
              >
                <i className="fas fa-info-circle h-6 w-6 mr-2  mt-2 text-blue-400"></i>
                Infos
              </a>

              <br />
              <br />
              
              <button
                onClick={() => signOut()}
                className="flex items-center px-4 py-4  text-black hover:bg-blue-200 text-black"
              >
                <i className="fas fa-sign-out-alt h-6 w-6 mr-2 mt-2 text-blue-400"></i>
                Se deconnecter
              </button>
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
