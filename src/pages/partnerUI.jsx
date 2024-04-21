import React, { useState, useEffect } from "react";
import Homenavbar from "../components/homenavbar";
import Searchbar from "../components/searchbar";
import axios from "axios";

function PartnerUI(props) {
  const [requests, setRequests] = useState([]);
  const [requestCopy,setRequestCopy] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BADAK_API}/partner-requests`);
        setRequests(response.data);
        setRequestCopy(response.data);
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchRequests();
  }, []);

  function updateSearchInput(newInput){
    let fullList = [...requestCopy];
    let newList = [];
    fullList.forEach(request => {
      let fullname = request.fullName?
      request.fullName.toLowerCase():'-';
      let certType = request.certificateType.toLowerCase();
      let uni =request.university ?
      request.university.toLowerCase():'-';
      let stat = request.status ?
      request.status.toLowerCase() :'-';

      if(
        fullname.includes(newInput.toLowerCase())||
        certType.includes(newInput.toLowerCase())||
        uni.includes(newInput.toLowerCase())||
        stat.includes(newInput.toLowerCase())
        
      ){
        newList.push(request);
      }
    });
    newInput.length? setRequests(newList) : setRequests([...fullList])
  }

  function getStatusColor(status) {
    if (status === "verified") {
      return "green-400";
    } else if (status === "denied") {
      return "red-400";
    } else if (status === "not verified") {
      return "orange-400";
    } else {
      return "gray-400"; // default color
    }
  }
  return (
    <>
      <Homenavbar />
      <Searchbar updateSearchInput={updateSearchInput}/>
      <div className="bg-gray-200 h-screen w-screen">
        <div className="grid gap-4 lg:gap-8 md:grid-cols-3 p-8 pt-20">
          {requests.map((request) => (
            <div key={request.id} className="relative p-6 rounded-2xl bg-white shadow">
              <div className="space-y-2">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 ">
                  <div className={`flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-${getStatusColor(request.status)}`}>
                    <i className="fa-solid fa-circle text-gray-500"></i><span>{request.status}</span>
                  </div>
                </div>
                <span className="text-gray-600 text-sm">{request.email}</span>
                <div className="text-medium text-gray-900">{request.fullName}</div>
                <div className="text-medium text-gray-900">{request.certificateType}</div>
                <div className="text-medium text-black">{request.university}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PartnerUI;
