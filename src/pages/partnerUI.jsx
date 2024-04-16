import React from "react";
import Homenavbar from "../components/homenavbar";

function PartnerUI(props) {
  return (
    <>
      <Homenavbar />
      <label
        class="mx-auto mt-40 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        for="search-bar"
      >
        <input
          id="search-bar"
          placeholder="Find student"
          class="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
        />
        <button class="w-full md:w-auto px-6 py-3 bg-blue-500 text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
          <div class="relative">
            <div class="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
              <svg
                class="opacity-0 animate-spin w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>

            <div class="flex items-center transition-all opacity-1 valid:">
              <span class="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                Search
              </span>
            </div>
          </div>
        </button>
      </label>

      <div class="bg-gray-200 h-screen w-screen">
        <div class="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-20">
          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Revenue</span>
              </div>

              <div class="text-3xl dark:text-gray-100">$192.1k</div>

              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                <span>32k increase</span>

                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>New customers</span>
              </div>

              <div class="text-3xl dark:text-gray-100">1340</div>

              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">
                <span>3% decrease</span>

                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-gray-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>New orders</span>
              </div>

              <div class="text-3xl dark:text-gray-100">3543</div>

              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                <span>7% increase</span>

                <svg
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnerUI;