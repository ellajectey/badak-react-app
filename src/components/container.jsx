import React from 'react';
import '../index.css'

function Container() {
    return (
        <div>
            <div className="user-container">
                    {/* Container */}
                    <div>
                        <div className="progress-bars">
                            <div className="progress-bar-1">
                                <label htmlFor="file">Etudiante:</label><br />
                                <progress id="file" value="100" max="100"> 100% </progress>
                            </div>
                            <div className="progress-bar-2">
                                <label htmlFor="file">Partenaire:</label><br />
                                <progress id="file" value="0" max="100"> 0% </progress>
                            </div>
                        </div>
                        <div className="image-upload">
                            <br /><br />
                            <label htmlFor="photo">
                                <i className="fas fa-camera" id="camera-icon"></i>
                                <br /><br />
                                importer une image
                            </label>
                            <input type="file" name="photo" id="photo" accept=".jpg,.jpeg,.png" className="img-input" />
                            <br />
                            <br />
                            <hr />
                        </div>
                        <div className="container-bottom">
                            <div className="bottom-left">
                                <label>Nom Complet</label><br />
                                <input type="text" className="fullname" /><br /><br />
                                <label>Email</label><br />
                                <input type="text" className="email" /><br /><br />
                                <h4>Quel est votre Diploma?</h4>
                                <input type="radio" id="baccalaureat" name="Baccalaureat" value="Baccalaureat" />
                                <label htmlFor="baccalaureat">Baccalaureat</label><br />
                                <input type="radio" id="bts" name="Bts" value="BTS" />
                                <label htmlFor="bts">BTS</label><br />
                                <input type="radio" id="licence" name="Licence" value="Licence" />
                                <label htmlFor="licence">Licence</label><br />
                                <input type="radio" id="master" name="Master" value="Master" />
                                <label htmlFor="master">Master</label><br />
                            </div>
                            <div className="upload">
                                <i className="fas fa-cloud-upload-alt" id="cloud"></i>
                                <h4>Selectionez un fischez ou glissez-deposez ici</h4>
                                <p>En format PDF,la taille du fichier doit être maximale de 10 Mo </p>
                                <br />
                                <button className="primary-upload-1">
                                    télécharger
                                    <input type="file" name="pdf" id="file" accept=".pdf" className="file-upload" />
                                </button>
                                <br />
                                <br />
                                <button className="primary-upload-2">Envoyer ma demande</button>
                                <button className="secondary-upload">Annuler</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Container;