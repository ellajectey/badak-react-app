import React from 'react';

function Sidebar() {
    return (
        <div>
           {/* Sidebar */}
           <aside className="sidebar">
                    <div>
                        {/* Menus */}
                        <img src="assets/badak-logo.png" alt="badak logo" className="img-logo" />
                        <ul>
                            <li>
                                <label>Menus</label>
                                <hr />
                            </li>
                            <li>
                                <i className="fas fa-sliders-h"></i>
                                <h5>Files</h5>
                            </li>
                            <li>
                                <i className="fas fa-file-upload"></i>
                                <h5>Files</h5>
                            </li>
                            <li>
                                <i className="fas fa-file-pdf"></i>
                                <h5>Files</h5>
                            </li>
                            <li>
                                <label>Actions</label>
                                <hr />
                            </li>
                            <li>
                                <i className="fas fa-cog"></i>
                                <h5>Parametres</h5>
                            </li>
                            <li>
                                <i className="fas fa-info-circle"></i>
                                <h5>Infos</h5>
                            </li>
                            <li>
                                <i className="fas fa-sign-out-alt"></i>
                                <h5>Se deconnecter</h5>
                            </li>
                        </ul>
                    </div>
                </aside> 
        </div>
    );
}

export default Sidebar;