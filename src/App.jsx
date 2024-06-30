import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Registations from "./pages/registations";
import Login from "./pages/loging/Login";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registations />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/home" element={<Home />} ></Route>
          
      </Route>
    )
  );
 

  return (
    <>
    <RouterProvider router={router}/>
    <ToastContainer/>
    </>
  )
}

export default App
