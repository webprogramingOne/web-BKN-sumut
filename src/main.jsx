import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login.jsx";
import Upload from "./components/Upload.jsx";
import Managemen from "./components/Managemen.jsx";
import FromDb from "./components/test.get-firebase.jsx";
import Coba from "./components/coba.jsx";
import Animasi from "./components/Animasi.jsx";

const router = createBrowserRouter([
  {
    path: "/masuk",
    element: <Login />,
  },
  {
    path: "/animasi",
    element: <Animasi />,
  },
  {
    path: "/test",
    element: <FromDb />,
  },
  {
    path: "/coba",
    element: <Coba />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/upload",
    element: <Upload />,
  },
  {
    path: "/managemen",
    element: <Managemen />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
