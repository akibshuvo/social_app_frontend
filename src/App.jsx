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
import LogedInUser from "./components/privateRoutes/LogedInUser";
import NoLoginUSer from "./components/privateRoutes/NoLoginUSer";




function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route element={<NoLoginUSer/>}>
        <Route path="/" element={<Registations />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        </Route>

      <Route element={<LogedInUser/>}>
        <Route path="/home" element={<Home />} ></Route>
      </Route>
          
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
