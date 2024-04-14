import React , {useState }from "react";
import Sidebar from "./sidebar";

function Userdetails() {

  const [editing, setEdit] = useState(false);
  const [signedInUser, setSignedInUser] = useState(sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {});
  const [signedInUserCopy, setSignedInUserCopy] = useState(sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : {});
  
  async function updateUser(value, key){
    let user = {...signedInUserCopy};
    user[key] = value;
    setSignedInUserCopy(user);
  
}


  async function saveChanges(){
    let body = {...signedInUserCopy};
    delete body.accessToken;
    console.log(body);

    let postBody ={
      "formerEmail": signedInUser.email,
      "update": body
    }
    console.log(postBody);

    try {

      let accessToken = sessionStorage.getItem('token');
      if (!accessToken) {
        console.log('token does not exist');
        return;
      }


      const response = await fetch(`${process.env.REACT_APP_BADAK_API}/user`,{
        method: "PATCH",
        body: JSON.stringify(postBody),
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer " + accessToken,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to update user information');
      }
  
    } catch(error){
      console.log(error);
      
    }
    setEdit(false);
  }

  return (

    <div className="flex relative flex-direction:row justify-between px-8 py-8 bg-white rounded-lg mx-10 mt-6 w-70">
      <div> 
        <div className="flex h-20 w-20  mx-8 justify-center overflow-hidden rounded-full border border-gray-200 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-20 w-20 p-5 text-white justify-center bg-gray-500 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <br />
          <br />
        </div>
        <br />

        <div className="py-2 text-center">
          <h3 className="px-4">{signedInUser.firstName}</h3>
          <p className="text-sm text-gray-600 px-4">{signedInUser.lastName}</p>
        </div>
      </div>

      <div className="inline-block border border-gray-400 p-8 px-8 rounded-lg">
        <div className="flex inline-block justify-between tems-center">
          <h2 className="text-left px-8">Student's Information</h2>
          <div>
          <button onClick={() => setEdit(!editing)} >
            {editing ? (<button className="border border-red-400 p-2 rounded-lg text-red-400"><i className="fa-solid fa-xmark text-red-400"></i> Cancel</button>)
            : (<button className="border bg-blue-400 p-2 rounded-lg text-white"> <i className="fa-solid fa-pencil"></i> Edit</button>)}
          </button>

          {editing && <button onClick={() => saveChanges()} className="border bg-blue-400 p-2 rounded-lg ml-2 text-white">
            <i className="fa-solid fa-check"></i> Save
            
          </button>}
          </div>
          
        </div>
        <br />

        <div className="inline-block">
          <div className="text-left px-8">
            <label className="text-sm text-gray-400">First Name </label>
            {
              editing ?
              <input className="px-4 focus:outline-gray-200 rounded" placeholder="First Name" value={signedInUserCopy.firstName} onChange={(e) => updateUser(e.target.value, 'firstName')} type="text" />
              :
              <p>{signedInUser.firstName}</p>
            }
          </div>

          <div className="text-left px-8">
            <label className="text-sm text-gray-400">Last Name </label>
            {
              editing ?
              <input className="px-4 focus:outline-gray-200 rounded" placeholder="Last Name" value={signedInUserCopy.lastName} onChange={(e) => updateUser(e.target.value, 'lastName')} type="text" />
              :
            <p>{signedInUser.lastName}</p>
          }
          </div>
        </div>
        

        <div className="inline-block ">
          <div className="text-left px-8">
            <label className="text-sm text-gray-400"> Email </label>
            {
              editing ?
              <input className="px-4 focus:outline-gray-200 rounded" placeholder="user@example.com" value={signedInUserCopy.email} onChange={(e) => updateUser(e.target.value, 'email')} type="email" />
              :
            <p>{signedInUser.email}</p>
          }
          </div>

          <div className="text-left px-8">
            <label className="text-sm text-gray-400">Phone Number </label>
            <p>Student's phone number</p>
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
      </div>
    </div>
    
  );
}

export default Userdetails;
