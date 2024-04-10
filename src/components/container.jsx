import React from "react";
import "../index.css";
import Navbar from "./navbar";

function Container() {

  return (
    <div>
      <Navbar/>
      <div className="m-8 bg-white absolute py-8 pl-8 pr-8 overflow-hidden w-auto min-h-full">
        {/* Container */}
        <div>
          <div className="text-left grid grid-cols-2 gap-x-24 gap-y-0">
            <div className="p-8 text-right">
              <label htmlFor="file">Etudiante:</label>
              <br />
              <progress id="file" value="100" max="100">
                {" "}
                100%{" "}
              </progress>
            </div>
            <div className="p-8 text-left">
              <label htmlFor="file">Partenaire:</label>
              <br />
              <progress id="file" value="0" max="100">
                {" "}
                0%{" "}
              </progress>
            </div>
          </div>
          <div className="text-center text-blue-500 p-20">
            <br />
            <br />
            <label htmlFor="photo">
              <i className="fas fa-camera p-20 rounded-full bg-gray-100 text-gray-500 text-center "></i>
              <br />
              <br />
              importer une image
            </label>
            <input
              type="file"
              name="photo"
              id="photo"
              accept=".jpg,.jpeg,.png"
              className="opacity-0 z-1 absolute"
            />
            <br />
            <br />
            <hr />
          </div>
          <div className="grid grid-cols-2 gap-x-24 ">
            <form>
            <div className="bottom-left">

              <label className="text-sm">Nom Complet</label>
              <br />
              <input
                type="text"
                className="p-2 rounded-lg border border-gray-500 w-80 focus:outline-none"
              />
              <br />
              <br />
              <label className="text-sm">Email</label>
              <br />
              <input
                type="text"
                className="p-2 rounded-lg border border-gray-500 w-80 focus:outline-none"
              />
              <br />
              <br />
              <br />
              <br />
              <h3>Quel est votre Diploma?</h3>
              <br />
              <hr />
              <br />
              <div className="pl-16">
                <input
                  type="radio"
                  id="baccalaureat"
                  name="diplome"
                  value="Baccalaureat"
                />
                <label htmlFor="baccalaureat"> Baccalaureat</label>
                <br />
                <input type="radio" id="bts" name="diplome" value="BTS" />
                <label htmlFor="bts"> BTS</label>
                <br />
                <input
                  type="radio"
                  id="licence"
                  name="diplome"
                  value="Licence"
                />
                <label htmlFor="licence"> Licence</label>
                <br />
                <input type="radio" id="master" name="diplome" value="Master" />
                <label htmlFor="master"> Master</label>
                <br />
              </div>
            </div>
            </form>
            <div className="border-dashed border border-yellow-300 rounded-lg inline-block px-20 py-10 text-center">
              <i className="fas fa-cloud-upload-alt text-40 text-blue-400"></i>
              <h4>Selectionez un fischez ou glissez-deposez ici</h4>
              <p className="text-sm text-blue-900">
                En format PDF,la taille du fichier doit être maximale de 10 Mo{" "}
              </p>
              <br />
              <button className="bg-yellow-500 text-white rounded-lg border-none px-4 py-4">
                télécharger
                {/* file upload button*/}
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
        {/* submit request  button*/}
        <div className="text-right mr-8">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg border-none px-8 py-4 m-4"
          >
            Envoyer ma demande
          </button>
          <button
            type="reset"
            className="bg-white border border-red-300 rounded-lg px-8 py-4 m-4"
          >
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}

export default Container;
