import React from 'react';
import "../index.css";
import img from "../assets/badak-logo.png"

function Sidebar() {
    return (
        <div>
           {/* Sidebar */}
           <aside className="flex min-h-screen shadow bg-white border-2 border-blue-600 pt-20 pb-10 overflow-x-hidden">
                    <div>
                        {/* Menus */}
                        <img src={img} alt="badak logo" className="w-60 h-60 text-center" />
                        <ul className='w-auto p-10'>
                            <li>
                                <label>Menus</label>
                                <hr />
                            </li>
                            <li className='list-none flex items-center p-8 hover:list-none hover:flex hover:items-center hover:p-1 hover:bg-blue-300 hover:rounded-md'>
                                <i className="fas fa-sliders-h  w-20 text-blue-600 px-4 text-center"></i>
                                <h5>Dashboard</h5>
                            </li>
                            <li className='list-none flex items-center p-8 hover:list-none hover:flex hover:items-center hover:p-1 hover:bg-blue-300 hover:rounded-md'>
                                <i className="fas fa-file-upload  w-20 text-blue-600 px-4 text-center"></i>
                                <h5>Profile</h5>
                            </li>
                            <li className='list-none flex items-center p-8 hover:list-none hover:flex hover:items-center hover:p-1 hover:bg-blue-300 hover:rounded-md'>
                                <i className="fas fa-file-pdf  w-20 text-blue-600 px-4 text-center"></i>
                                <h5>Files</h5>
                            </li>
                            <li>
                                <label>Actions</label>
                                <hr />
                            </li>
                            <li className='list-none flex items-center p-8 hover:list-none hover:flex hover:items-center hover:p-1 hover:bg-blue-300 hover:rounded-md'>
                                <i className="fas fa-cog  w-20 text-blue-600 px-4 text-center"></i>
                                <h5>Parametres</h5>
                            </li>
                            <li className='list-none flex items-center p-8 hover:list-none hover:flex hover:items-center hover:p-1 hover:bg-blue-300 hover:rounded-md'>
                                <i className="fas fa-info-circle  w-20 text-blue-600 px-4 text-center"></i>
                                <h5>Infos</h5>
                            </li>
                            <li className='list-none flex items-center p-8 mt-40 hover:list-none hover:flex hover:items-center hover:p-1 hover:bg-blue-300 hover:rounded-md'>
                                <i className="fas fa-sign-out-alt  w-20 text-blue-600 px-4 text-center "></i>
                                <h5>Se deconnecter</h5>
                            </li>
                        </ul>
                    </div>
                </aside> 
        </div>
    );
}

export default Sidebar;