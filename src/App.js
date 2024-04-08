import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SpPortal from "./pages/spPortal.jsx";
import Signup from "./pages/signup.jsx";
import Profile from "./pages/profile.jsx";
import Login from "./pages/login.jsx"




const router = createBrowserRouter([
  { path: "/", element: <SpPortal /> },
  { path: "/login", element: <Login /> },
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
