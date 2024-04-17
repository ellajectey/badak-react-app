import React from "react";
import Homenavbar from "../components/homenavbar";
import Searchbar from "../components/searchbar";

function PartnerUI(props) {
  return (
    <>
      <Homenavbar />
      <Searchbar/>
      <div class="bg-gray-200 h-screen w-screen">
        <div class="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-20">
          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
              <i className="fa-solid fa-circle text-gray-500"></i><span>Not Verified</span>
              </div>
                <span>Student Id</span>
               <hr className="text-gray-200"/>
              </div>
              <div class="text-medium text-gray-900">First Name + LastName</div>
              <div class="text-medium text-gray-900">Certificate Type</div>
              <div class="text-medium text-gray-900">
                University
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">
              <i className="fa-solid fa-circle text-red-500"></i><span>Denied</span>
              </div>
                <span>Student Id</span>
               <hr className="text-gray-200"/>
              </div>
              <div class="text-medium text-gray-900">First Name + LastName</div>
              <div class="text-medium text-gray-900">Certificate Type</div>
              <div class="text-medium text-gray-900">
                University
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-gray-600">
              <i className="fa-solid fa-circle text-gray-500"></i><span>Not Verified</span>
              </div>
                <span>Student Id</span>
               <hr className="text-gray-200"/>
              </div>
              <div class="text-medium text-gray-900">First Name + LastName</div>
              <div class="text-medium text-gray-900">Certificate Type</div>
              <div class="text-medium text-gray-900">
                University
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
              <i className="fa-solid fa-circle text-green-500"></i><span>Verified</span>
              </div>
                <span>Student Id</span>
               <hr className="text-gray-200"/>
              </div>
              <div class="text-medium text-gray-900">First Name + LastName</div>
              <div class="text-medium text-gray-900">Certificate Type</div>
              <div class="text-medium text-gray-900">
                University
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">
              <i className="fa-solid fa-circle text-red-500"></i><span>Denied</span>
              </div>
                <span>Student Id</span>
               <hr className="text-gray-200"/>
              </div>
              <div class="text-medium text-gray-900">First Name + LastName</div>
              <div class="text-medium text-gray-900">Certificate Type</div>
              <div class="text-medium text-gray-900">
                University
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
              <i className="fa-solid fa-circle text-green-500"></i><span>Verified</span>
              </div>
                <span>Student Id</span>
               <hr className="text-gray-200"/>
              </div>
              <div class="text-medium text-gray-900">First Name + LastName</div>
              <div class="text-medium text-gray-900">Certificate Type</div>
              <div class="text-medium text-gray-900">
                University
              </div>
            </div>
          </div>

          </div>
      </div>
    </>
  );
}

export default PartnerUI;
