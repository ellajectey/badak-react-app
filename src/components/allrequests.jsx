import React, {useState, useEffect} from "react";

function Allrequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const user = JSON.parse(sessionStorage.getItem("user") || "{}");

        if (!token || !user) {
          throw new Error("User is not authenticated");
        }

        const response = await fetch(`${process.env.REACT_APP_BADAK_API}/requests?email=${user.email}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to get user requests");
        }

        const data = await response.json();
        setRequests(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user requests:", error);
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  return (
    <div>
      {/* Requests table to show all requests done by the student/user */}

      <div className="shadow-md mx-10 rounded-lg bg-white p-8">
        <h3>Your Requests</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg">
            <thead className="text-xs text-white bg-blue-400 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 bg-blue-400 dark:bg-gray-800">
                  Certificate Type
                </th>
                <th scope="col" className="px-6 py-3">
                  University
                </th>
                <th scope="col" className="px-6 py-3 bg-blue-400 dark:bg-gray-800">
                  Date
                </th>
                <th scope="col" className="px-8 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request._id} className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    {request.certificateType}
                  </th>
                  <td className="px-6 py-4">{request.university}</td>
                  <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{request.date}</td>
                  <td className="px-6 py-4">
                    {request.status === "verified" ? (
                      <i className="fa-solid fa-circle text-green-300 "></i>
                    ) : request.status === "denied" ? (
                      <i className="fa-solid fa-circle text-red-500"></i>
                    ) : (
                      <i className="fa-solid fa-circle text-gray-400"></i>
                    )}
                    {request.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Allrequests;
