import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Registations from "./pages/registations";
import Login from "./pages/loging/Login";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registations />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
          
      </Route>
    )
  );
 

  return (
    <RouterProvider router={router}/>
  )
}

export default App
