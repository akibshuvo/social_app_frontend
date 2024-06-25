import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";

import Registations from "./pages/registations";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registations />} ></Route>
          
      </Route>
    )
  );
 

  return (
    <RouterProvider router={router}/>
  )
}

export default App
