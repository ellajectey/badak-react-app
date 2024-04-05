import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SpPortal from "./pages/spPortal.jsx";




const router = createBrowserRouter([
  { path: "/", element: <SpPortal /> }

]);

function App() {
  return (
   <>
     <RouterProvider router={router}/>
   
   </>
    
  );
}

export default App;
