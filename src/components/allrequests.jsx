import React from "react";

function Allrequests() {
  return (
    <div>
      <table
        aria-describedby="info-popup"
        aria-label="open tickets"
        className="border-t w-full min-h-0 h-full flex flex-col"
      >
        <thead className="flex w-full flex-col px-4">
          <tr className="border-b flex">
            <th className="font-semibold text-left py-3 pl-3 pr-1 w-24">
              <input type="checkbox" name="" id="" />
            </th>
            <th className="font-semibold text-left py-3 px-1 w-24 truncate">ID</th>
            <th className="font-semibold text-left py-3 px-1 w-full max-w-xs xl:max-w-lg truncate">
              Subject
            </th>
            <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
              Requester
            </th>
            <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
              Requester updated
            </th>
            <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
              Group
            </th>
            <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
              Assignee
            </th>
          </tr>
        </thead>
        <tbody className="flex w-full flex-col flex-1 min-h-0 overflow-hidden px-4">
          {/* <!-- low --> */}
          <tr className="border-b flex">
            <th className="bg-gray-100 text-left px-3 py-2 flex-1" colspan="7">
              <h2 className="text-sm">
                <span className="font-normal mr-1">Priority</span>
                <span>Low</span>
              </h2>
            </th>
          </tr>
          <tr role="row" className="hover:bg-blue-100 border-b flex cursor-pointer">
            <td
              role="cell"
              headers="select"
              className="py-3 pl-3 pr-1 w-24 flex items-start"
            >
              <input className="mt-1" type="checkbox" />
              <div className="ml-auto relative group">
                <span
                  
                  className="px-2 py-5 text-xs relative pb-2 font-mono rounded-sm bg-red-600 text-white leading-none"
                >
                  O
                </span>
                {/* <!-- dropdown --> */}
                <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                  <article>
                    <header>
                      <div>
                        <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">
                          Open
                        </span>
                        <span className="ml-2 text-gray-700">Incident #12534</span>
                        <span className="ml-1">(Low)</span>
                      </div>
                    </header>
                    <section className="mt-5">
                      <h1 className="text-sm font-semibold mt-3">
                        Quo laudantium error corporis accusamus unde, labore
                        quidem non officiis.
                      </h1>
                      <p className="mt-3">
                        Hi Team,
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error accusantium molestias fugit commodi doloremque.{" "}
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit? ...
                      </p>
                    </section>

                    <footer className="mt-4">
                      <p className="text-gray-600">Latest Comments</p>
                      <hr className="mt-1" />
                      <div className="flex mt-3">
                        <p className="font-semibold">Nico Braun</p>
                        <p className="ml-auto text-gray-700 text-sm">
                          Yesterday 10:33
                        </p>
                      </div>
                      <p className="mt-2">
                        Dolore odio error inventore sint et dolorum asperiores
                        exercitationem, quisquam esse.
                      </p>
                    </footer>
                  </article>
                </span>
                {/* <!-- end dropdown --> */}
              </div>
            </td>
            <td className="py-3 px-1 w-24">#12534</td>
            <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
              <div className="relative group w-full">
                <p className="w-full truncate">
                  Quo laudantium error corporis accusamus unde, labore quidem
                  non officiis.
                </p>
                {/* <!-- dropdown --> */}
                <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                  <article>
                    <header>
                      <div>
                        <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-red-600 text-white">
                          Open
                        </span>
                        <span className="ml-2 text-gray-700">Incident #12534</span>
                        <span className="ml-1">(Low)</span>
                      </div>
                    </header>
                    <section className="mt-5">
                      <h1 className="text-sm font-semibold mt-3">
                        Quo laudantium error corporis accusamus unde, labore
                        quidem non officiis.
                      </h1>
                      <p className="mt-3">
                        Hi Team,
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error accusantium molestias fugit commodi doloremque.{" "}
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit? ...
                      </p>
                    </section>
                    <footer className="mt-4">
                      <p className="text-gray-600">Latest Comments</p>
                      <hr className="mt-1" />
                      <div className="flex mt-3">
                        <p className="font-semibold">Nico Braun</p>
                        <p className="ml-auto text-gray-700 text-sm">
                          Yesterday 10:33
                        </p>
                      </div>
                      <p className="mt-2">
                        Dolore odio error inventore sint et dolorum asperiores
                        exercitationem, quisquam esse.
                      </p>
                    </footer>
                  </article>
                </span>
                {/* <!-- end dropdown --> */}
              </div>
            </td>
            <td className="py-3 px-1 flex-1 truncate">Marla Darsuz</td>
            <td className="py-3 px-1 flex-1 truncate">Tuesday 09:56</td>
            <td className="py-3 px-1 flex-1 truncate">UK Support</td>
            <td className="py-3 px-1 flex-1 truncate">Nico Braun</td>
            <div className="flex mt-3">
              <p className="font-semibold">Nico Braun</p>
              <p className="ml-auto text-gray-700 text-sm">Today 13:30</p>
            </div>
            <p className="mt-2">
              Dolore odio error inventore sint et dolorum asperiores
              exercitationem, quisquam esse tempora aliquam voluptates quibusdam
              quae debitis laboriosam iure ea quos.
            </p>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Allrequests;
