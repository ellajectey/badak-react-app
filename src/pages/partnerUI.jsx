import React, { useState, useEffect } from "react";
import Homenavbar from "../components/homenavbar";
import Searchbar from "../components/searchbar";
import axios from "axios";

function PartnerUI(props) {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BADAK_API}/partner-requests`);
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  return (
    <>
      <Homenavbar />
      <Searchbar/>
      <div className="bg-gray-200 h-screen w-screen">
        <div className="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-20">
          {requests.map((request) => (
            <div key={request.id} className="relative p-6 rounded-2xl bg-white shadow">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 ">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-gray-600">
                    <i className="fa-solid fa-circle text-gray-500"></i><span>{request.status}</span>
                  </div>
                  <span>{request.email}</span>
                  <hr className="text-gray-200"/>
                </div>
                <div className="text-medium text-gray-900">{request.fullName}</div>
                <div className="text-medium text-gray-900">{request.certificateType}</div>
                <div className="text-medium text-gray-900">{request.university}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PartnerUI;
