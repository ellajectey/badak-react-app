import React from "react";

function Allrequests() {
  return (
    <div>
     

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Request
                </th>
                <th scope="col" className="px-6 py-3">
                    Institution
                </th>
                <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Masters Degree Verification
                </th>
                <td className="px-6 py-4">
                    Bamenda University
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    2023-09-12
                </td>
                <td className="px-6 py-4">
                <i class="fa-solid fa-circle text-green-300"></i>  Verified
                </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Baccalaureate Verification
                </th>
                <td className="px-6 py-4">
                    Universite de Montagnes
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    2024-01-01
                </td>
                <td className="px-6 py-4">
                <i class="fa-solid fa-circle text-red-500"></i>  Denied
                </td>
                
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    Diploma Verification
                </th>
                <td className="px-6 py-4">
                Dschang University
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                 2024-03-13
                </td>
                <td className="px-6 py-4">
                <i class="fa-solid fa-circle text-gray-400"></i>  Not verified
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

    </div>
  );
}

export default Allrequests;
