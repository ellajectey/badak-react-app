import React, { useState } from "react";
import "../index.css";
import Navbar from "./navbar";

function Container() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    certificateType: "",
    university: "",
    status: "not verified",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission,\\ eg; submit data to backend
    console.log(formData);
  };

  return (
    <div>
      <Navbar />
      <div className=" flex m-8 bg-white py-8 pl-8 pr-8 overflow-hidden w-auto h-auto ">
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
            <label htmlFor="photo">
              <i className="fas fa-camera text-gray-500 text-center w-24 bg-gray-100 justify-center py-10 rounded-full "></i>
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
            <div className="max-w-md mx-auto">
              <form
                id="myForm"
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="fullName"
                  >
                    Nom Complet
                  </label>
                  <input
                    className="p-2 rounded-lg border border-gray-500 w-80 focus:outline-none"
                    id="fullName"
                    type="text"
                    placeholder="Nom Complet"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    email
                  </label>
                  <input
                    className="p-2 rounded-lg border border-gray-500 w-80 focus:outline-none"
                    id="email"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-8">
                  <h3 className="text-lg font-semibold">
                    Quel est votre Diplôme?
                  </h3>
                  <hr className="mt-2 mb-4" />
                  <div className="pl-16">
                    <input
                      type="radio"
                      id="baccalaureat"
                      name="certificateType"
                      value="Baccalaureat"
                      className="mr-2"
                      checked={formData.certificateType === "Baccalaureat"}
                      onChange={handleChange}
                    />
                    <label htmlFor="baccalaureat"> Baccalaureat</label>
                    <br />
                    <input
                      type="radio"
                      id="bts"
                      name="certificateType"
                      value="BTS"
                      className="mr-2"
                      checked={formData.certificateType === "BTS"}
                      onChange={handleChange}
                    />
                    <label htmlFor="bts"> BTS</label>
                    <br />
                    <input
                      type="radio"
                      id="licence"
                      name="certificateType"
                      value="Licence"
                      className="mr-2"
                      checked={formData.certificateType === "Licence"}
                      onChange={handleChange}
                    />
                    <label htmlFor="licence"> Licence</label>
                    <br />
                    <input
                      type="radio"
                      id="master"
                      name="certificateType"
                      value="Master"
                      className="mr-2"
                      checked={formData.certificateType === "Master"}
                      onChange={handleChange}
                    />
                    <label htmlFor="master"> Master</label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    University
                  </label>
                  <input
                    className="p-2 rounded-lg border border-gray-500 w-80 focus:outline-none"
                    id="university"
                    type="text"
                    placeholder="University"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="status"
                  >
                    statut
                  </label>
                  <select
                    className="p-2 rounded-lg border border-gray-500 w-80 focus:outline-none"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option value="verified">Vérifié</option>
                    <option value="not verified">Non vérifié</option>
                    <option value="denied">Dénié</option>
                  </select>
                </div> */}
              </form>
            </div>
            <div>
              <div className="border-dashed border border-yellow-300 rounded-lg inline-block px-10 py-10 text-center">
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
              </div>
              <br />
              <br />
              <br />
              {/* submit request */}
              <div className="flex inline-flex justify-center text-sm">
                <button
                  type="submit"
                  className="bg-blue-500 text-white rounded-lg border-none px-4 py-4 m-2"
                  form="myForm"
                >
                  Envoyer ma demande
                </button>
                <button
                  type="reset"
                  className="bg-white border border-red-300 rounded-lg px-4 py-4 m-2"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
