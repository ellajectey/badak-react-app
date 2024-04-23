import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SpPortal from "./pages/spPortal.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/profile.jsx";
import Login from "./pages/login.jsx"
import PartnerUI from "./pages/partnerUI.jsx";





const router = createBrowserRouter([

  { path: "/partner", element: <PartnerUI /> },
  { path: "/portal", element: <SpPortal /> },
  { path: "/", element: <Login /> },
  { path: "/register", element: <Signup /> },
  { path: "/profile", element: <Profile /> }

]);

function App() {
  return (
   <>
     <RouterProvider router={router}/>
   
   </>
    
  );
}

export default App;
