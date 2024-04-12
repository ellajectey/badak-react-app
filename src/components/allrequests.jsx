import React from "react";

function Allrequests() {
  return (
    <div>
      {/* Requests table to show all requests done by the student/user */}

      <div className=" shadow-md mx-10 rounded-lg bg-white p-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
          <thead className="text-xs text-white bg-blue-400 uppercase dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 bg-blue-400 dark:bg-gray-800"
              >
                Certificate Type
              </th>
              <th scope="col" className="px-6 py-3">
                University
              </th>
              <th
                scope="col"
                className="px-6 py-3 bg-blue-400 dark:bg-gray-800"
              >
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Masters Degree 
              </th>
              <td className="px-6 py-4">Bamenda University</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                2023-09-12
              </td>
              <td className="px-6 py-4">
                <i className="fa-solid fa-circle text-green-300 "></i> Verified
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Baccalaureate 
              </th>
              <td className="px-6 py-4">Universite de Montagnes</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                2024-01-01
              </td>
              <td className="px-6 py-4">
                <i className="fa-solid fa-circle text-red-500"></i> Denied
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
              >
                Diploma 
              </th>
              <td className="px-6 py-4">Dschang University</td>
              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                2024-03-13
              </td>
              <td className="px-6 py-4">
                <i className="fa-solid fa-circle text-gray-400"></i> Not verified
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Allrequests;
