import React from "react";

function Userdetails() {
  return (
    <div className="flex flex-direction:row align-items:center justify-between px-8 py-8 bg-white rounded-lg mx-10 mt-6">
      <div>
        <div className="h-20 w-20 overflow-hidden rounded-full border border-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-20 w-20 p-5 text-white justify-center bg-gray-500 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <br />
          <br />
        </div>
        <br />

        <div className="py-2">
          <h3 className="px-4">Student's Name</h3>
          <p className="text-sm text-gray-600 px-4">students</p>
        </div>
      </div>

      <div className="inline-block border border-gray-400 p-8 px-8 rounded-lg">
        <div className="flex inline-block justify-between align-items:center">
          <h2 className="text-left px-8">Student's Information</h2>
          <button className="border border-blue-400 p-2 rounded-lg">
            <i className="fa-solid fa-pencil"></i> Edit
          </button>
        </div>
        <br />

        <div className="inline-block">
          <div className="text-left px-8">
            <label className="text-sm text-gray-400">First Name </label>
            <p>Student's first Name</p>
          </div>

          <div className="text-left px-8">
            <label className="text-sm text-gray-400">Last Name </label>
            <p>Student's last Name</p>
          </div>
        </div>
        <div className="inline-block">
          <div className="text-left px-8">
            <label className="text-sm text-gray-400">Institution Name </label>
            <p>Student's institution Name</p>
          </div>

          <div className="text-left px-8">
            <label className="text-sm text-gray-400">Degree </label>
            <p>Student's certificate type</p>
          </div>
        </div>

        <div className="inline-block ">
          <div className="text-left px-8">
            <label className="text-sm text-gray-400"> Email </label>
            <p>Student's email</p>
          </div>

          <div className="text-left px-8">
            <label className="text-sm text-gray-400">Phone Number </label>
            <p>Student's phone number</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdetails;
