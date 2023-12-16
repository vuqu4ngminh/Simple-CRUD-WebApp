import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NotFound from "./Pages/NotFound";
import AddUser from "./Pages/AddUser";
import HomeUser from "./Pages/HomeUser";
import UpdateUser from "./Pages/UpdateUser";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <HomeUser />
      },
      {
        path: "add",
        element: <AddUser />
      },
      {
        path: "update/:id",
        element: <UpdateUser />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);
function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
      />
    </div>
  );
}

export default App;