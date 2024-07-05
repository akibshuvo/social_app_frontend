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
import RootLayout from "./components/RootLayout";
import Messages from "./pages/messages";
import Friends from "./pages/friend.jsx";
import 'swiper/css';



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route element={<NoLoginUSer/>}>
        <Route path="/" element={<Registations />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        </Route>

      <Route element={<LogedInUser/>}>
      <Route element={<RootLayout/>}>
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/messages" element={<Messages />} ></Route>
        <Route path="/friends" element={<Friends />} ></Route>
        
        </Route>
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
