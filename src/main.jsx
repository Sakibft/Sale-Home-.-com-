import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthContextComponent from "./Context/AuthContextComponent";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextComponent>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthContextComponent>
  </React.StrictMode>
);
